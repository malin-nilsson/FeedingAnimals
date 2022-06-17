import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AnimalContext } from '../../contexts/AnimalContext';
import { IAnimal } from '../../models/IAnimal';
import { getHoursSinceFed, getLocalStorage } from '../../utils/Utils';
import HungryIcon from '../HungryIcon';
import NotHungryIcon from '../NotHungryIcon';
import { StyledButton } from '../styledComponents/Buttons/StyledButtons';
import { SmallHeading } from '../styledComponents/Headings/StyledHeadings';
import { StyledLoader } from '../styledComponents/Loader/StyledLoader';
import { StyledParagraph } from '../styledComponents/Text/StyledParagraphs';
import { SingleImageWrapper, SinglePageWrapperLg, SinglePageWrapperSm } from '../styledComponents/Wrappers/StyledWrappers';

window.scrollTo(0, 0)

export default function Animal() {
    let animals = useContext(AnimalContext);
    const [specificAnimal, setSpecificAnimal] = useState<IAnimal>(
        {
            id: 0,
            imageUrl: "",
            isFed: false,
            lastFed: "",
            latinName: "",
            longDescription: "",
            medicine: "",
            name: "",
            shortDescription: "",
            yearOfBirth: 0,
        }
    );
    const [disabled, setDisabled] = useState(false);
    const params = useParams();
    const year = new Date().getFullYear();
    const date = new Date(specificAnimal.lastFed).toLocaleDateString() + " kl. " + new Date(specificAnimal.lastFed).toLocaleTimeString();

    /* Set background image for animals 
    that are missing an image */
    const checkBgImage = (animal: IAnimal) => {
        if (animal.id === 1) {
            return "/assets/cat.jpg";
        } else if (animal.id === 2) {
            return "/assets/dog.jpg";
        } else {
            return animal.imageUrl;
        }
    }

    // Loader
    const loaderHTML = (
        <>
            <StyledLoader>
            </StyledLoader>
            <StyledParagraph
                queryPadding="8px"
                queryAlign="center"
                fontSize="1.6rem">
                Loading...
            </StyledParagraph>
        </>
    )

    useEffect(() => {
        // If user lands on animal page directly from landing page
        if (animals.animals.length > 0) {
            for (let i = 0; i < animals.animals.length; i++) {
                if (animals.animals[i].id.toString() === params.id) {
                    setSpecificAnimal(animals.animals[i]);
                }
            }
            /* If user lands on animal/:id directly,
            without coming from landing page */
        } else {
            const animalStorage: IAnimal[] = getLocalStorage();
            for (let i = 0; i < animalStorage.length; i++) {
                if (animalStorage[i].id.toString() === params.id) {
                    setSpecificAnimal(animalStorage[i]);
                }
            }
        };
    });

    useEffect(() => {
        // If animal has been set, disable feed button
        if (specificAnimal.isFed === true) {
            setDisabled(true);
        }

        /* If it's been more than 3 hours since animal 
        was fed, make it possible to feed animal again */
        let hoursSinceFed = getHoursSinceFed(specificAnimal);

        if (hoursSinceFed >= 3) {
            setDisabled(false)
            animals.feedAnimal(specificAnimal)
        }
    }, [specificAnimal.isFed])

    // Feed animal and disable feed button
    const feedAnimal = (a: IAnimal) => {
        animals.feedAnimal(a)
        setDisabled(true);
    };

    return (
        <>
            <StyledParagraph
                padding="10px 0px"
                queryPadding="20px 0px"
                queryJustify="center"
                queryAlign="center">
                <Link to="/">Tillbaka till alla djur</Link>
            </StyledParagraph>

            {animals.loader ? loaderHTML :
                <SinglePageWrapperLg>
                    <SingleImageWrapper>
                        <img
                            src={checkBgImage(specificAnimal)}
                            alt={specificAnimal.name} />
                    </SingleImageWrapper>

                    <SinglePageWrapperSm>
                        <SmallHeading
                            fontSize="1.8rem">{specificAnimal.name}
                        </SmallHeading>

                        {specificAnimal.isFed ?
                            <StyledParagraph
                                queryDirection="row"
                                justify="center"
                                queryJustify="flex-start"
                                padding="0px"
                                fontSize="1.1rem"
                                align="center">
                                Just nu är {specificAnimal.name} mätt
                                <NotHungryIcon />
                            </StyledParagraph> :

                            <StyledParagraph
                                queryDirection="row"
                                padding="0px"
                                justify="center"
                                queryJustify="flex-start"
                                fontSize="1.1rem"
                                align="center">
                                Just nu är {specificAnimal.name} hungrig
                                <HungryIcon />
                            </StyledParagraph>
                        }

                        {specificAnimal.isFed && (
                            <>
                                <StyledParagraph
                                    padding="0px"
                                    fontSize="1.1rem"
                                    align="center"
                                    queryAlign="left">
                                    {specificAnimal.name} åt senast: {date}
                                </StyledParagraph>
                                <StyledParagraph
                                    padding="0px"
                                    fontSize="1.1rem"
                                    align="center"
                                    queryAlign="left">
                                    {specificAnimal.isFed && ("Djuren kan matas var tredje timme.")}
                                </StyledParagraph>
                            </>
                        )
                        }
                        < StyledButton
                            onClick={(() => { feedAnimal(specificAnimal) })}
                            disabled={disabled}>
                            {specificAnimal.isFed ? specificAnimal.name + " har ätit" : "Mata " + specificAnimal.name}</StyledButton>
                        <SmallHeading
                            fontSize="1.2rem"
                            padding="10px 0px 0px">
                            Mer om {specificAnimal.name}
                        </SmallHeading>
                        <StyledParagraph
                            align="left"
                            padding="0px"
                            queryDirection="column"
                            queryAlign="left">
                            <span>Ålder: {year - specificAnimal.yearOfBirth} år</span>
                            <span>Mediciner: {specificAnimal.medicine} </span>
                            <span>Latinskt namn: {specificAnimal.latinName}</span>
                        </StyledParagraph>
                        <StyledParagraph
                            align="left"
                            padding="0px">
                            {specificAnimal.longDescription}
                        </StyledParagraph>
                    </SinglePageWrapperSm>
                </SinglePageWrapperLg>}
        </>
    )
}


