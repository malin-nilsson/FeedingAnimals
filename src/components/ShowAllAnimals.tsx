import React from 'react'
import { IAnimal } from '../models/IAnimal';
import { GridImageWrapper, LandingPageWrapperSm, TextWrapper } from './styled-components/Wrappers/StyledWrappers';
import { SmallHeading } from './styled-components/Headings/StyledHeadings';
import { Link } from 'react-router-dom';
import { StyledParagraph } from './styled-components/Paragraphs/StyledParagraphs';

interface IAllAnimals {
    animals: IAnimal[];
}

export default function ShowAllAnimals(props: IAllAnimals) {

    const checkBgImage = (animal: IAnimal) => {
        if (animal.id === 1) {
            return "/assets/cat.jpg";
        } else if (animal.id === 2) {
            return "/assets/dog.jpg";
        } else {
            return animal.imageUrl;
        }
    }

    return (
        <>
            {props.animals.map((animal) => {
                return (<Link to={"/animal/" + animal.id} key={animal.id}
                    className="card">
                    <LandingPageWrapperSm>
                        <GridImageWrapper
                            backgroundimg={checkBgImage(animal)}
                            backgroundpos={animal.id === 12 ? "center" : "top"}>
                        </GridImageWrapper>
                        <TextWrapper>
                            {animal.isFed ? <StyledParagraph align="left" direction="row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20px">
                                    <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8H256.3zM199.3 129.1C181.5 124.4 163.2 134.9 158.4 152.7L154.1 168.8L137.1 164.5C120.2 159.7 101.9 170.3 97.14 188.1C92.38 205.8 102.9 224.1 120.7 228.9L185.8 246.3C194.4 248.6 203.1 243.6 205.4 235L222.9 169.1C227.6 152.2 217.1 133.9 199.3 129.1H199.3zM353.6 152.7C348.8 134.9 330.5 124.4 312.7 129.1C294.9 133.9 284.4 152.2 289.1 169.1L306.6 235C308.9 243.6 317.6 248.6 326.2 246.3L391.3 228.9C409.1 224.1 419.6 205.8 414.9 188.1C410.1 170.3 391.8 159.7 374 164.5L357.9 168.8L353.6 152.7z" />
                                </svg> Jag är mätt!</StyledParagraph> :
                                <StyledParagraph align="left" direction="row">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="20px">
                                        <path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z" /></svg> Jag är hungrig!</StyledParagraph>}
                            <SmallHeading fontsize="1.5rem" padding="10px 0px">{animal.name}</SmallHeading>
                            <StyledParagraph fontsize="0.9rem">{animal.shortDescription}</StyledParagraph>
                        </TextWrapper>
                    </LandingPageWrapperSm>
                </Link>
                )
            })}
        </>
    )
}
