import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AnimalContext } from '../../contexts/AnimalContext';
import { IAnimal } from '../../models/IAnimal';
import HungryIcon from '../HungryIcon';
import NotHungryIcon from '../NotHungryIcon';
import { StyledButton } from '../styled-components/Buttons/StyledButtons';
import { SmallHeading } from '../styled-components/Headings/StyledHeadings';
import { StyledLoader } from '../styled-components/Loader/StyledLoader';
import { StyledParagraph } from '../styled-components/Paragraphs/StyledParagraphs';
import { SingleImageWrapper, SinglePageWrapperLg, SinglePageWrapperSm } from '../styled-components/Wrappers/StyledWrappers';

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
    let params = useParams();

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

    const loaderHTML = (
        <>
            <StyledLoader>
            </StyledLoader>
            <StyledParagraph
                querypadding="8px"
                queryalign="center"
                fontsize="1.6rem">
                Loading...
            </StyledParagraph>
        </>
    )

    const date = new Date(specificAnimal.lastFed).toLocaleDateString() + " kl. " + new Date(specificAnimal.lastFed).toLocaleTimeString();

    useEffect(() => {
        // If user lands on animal page directly from landing page
        if (animals.animals.length > 0) {
            for (let i = 0; i < animals.animals.length; i++) {
                if (animals.animals[i].id.toString() === params.id) {
                    setSpecificAnimal(animals.animals[i]);
                }
            }
            /* If user lands on /animal/:id directly,
            without coming from landing page */
        } else {
            const animalStorage = JSON.parse(localStorage.getItem("Animals") || "[]");
            for (let i = 0; i < animalStorage.length; i++) {
                if (animalStorage[i].id.toString() === params.id) {
                    setSpecificAnimal(animalStorage[i]);
                }
            }
        };
    }, []);

    useEffect(() => {
        // If animal has been set, disable feed button
        if (specificAnimal.isFed === true) {
            setDisabled(true);
        }

        /* If there's been more than 4 hours since animal 
        was fed, enable button and toggle isFed */
        let hoursSinceFed = Math.floor((new Date().getTime() - new Date(specificAnimal.lastFed).getTime()) / (1000 * 60 * 60));
        if (hoursSinceFed >= 1) {
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
                querypadding="20px 0px"
                queryjustify="center"
                queryalign="center">
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
                            fontsize="1.8rem">{specificAnimal.name}
                        </SmallHeading>

                        {specificAnimal.isFed ?
                            <StyledParagraph
                                querydirection="row"
                                justify="center"
                                queryjustify="flex-start"
                                padding="0px" fontsize="1.1rem"
                                align="center">
                                Just nu är {specificAnimal.name} mätt
                                <NotHungryIcon />
                            </StyledParagraph> :

                            <StyledParagraph
                                querydirection="row"
                                padding="0px" justify="center"
                                queryjustify="flex-start"
                                fontsize="1.1rem"
                                align="center">
                                Just nu är {specificAnimal.name} hungrig
                                <HungryIcon />
                            </StyledParagraph>
                        }

                        <StyledParagraph
                            padding="0px"
                            fontsize="1.1rem"
                            align="center"
                            queryalign="left">
                            {specificAnimal.isFed && specificAnimal.name + " åt senast: " + date}
                        </StyledParagraph>
                        <StyledButton
                            onClick={(() => { feedAnimal(specificAnimal) })}
                            disabled={disabled}>
                            {specificAnimal.isFed ? specificAnimal.name + " har ätit" : "Mata " + specificAnimal.name}</StyledButton>
                        <SmallHeading
                            fontsize="1.2rem"
                            padding="10px 0px 0px">
                            Mer om {specificAnimal.name}
                        </SmallHeading>
                        <StyledParagraph
                            align="left"
                            padding="0px"
                            querydirection="column"
                            queryalign="left">
                            <span>Född: {specificAnimal.yearOfBirth}</span>
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


