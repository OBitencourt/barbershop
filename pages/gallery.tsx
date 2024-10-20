import { Container, Typography } from "@mui/material"
import styled from "styled-components"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from "next/image";

const StyledSection = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 45px;
    display: flex;
    align-items: center;
`

const StyledCarousel = styled(Carousel)`
    border-radius: 15px;

    @media (max-width: 375px) {
        display: flex;
        margin-left: 15px;
        padding: 10px;
        & .image {
            border-radius: 15px;  /* Borda arredondada nas imagens */
        }
    }
    @media (min-width: 375px) and (max-width: 461px) {
        display: flex;
        margin-left: 50px;
        padding: 10px;
        & .image {
            border-radius: 15px;  /* Borda arredondada nas imagens */
        }
    }
`

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Gallery = () => {
    return (
        <>
            <StyledSection>
                <Container maxWidth='md' >   
                    <Typography 
                        color="white"
                        variant="h4"
                        component="h2"
                        textAlign='center'
                        sx={{marginBottom: 3}}
                    >
                        Veja alguns de nossos trabalhos!
                    </Typography>
                    <StyledCarousel 
                        autoPlaySpeed={1500}
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        draggable={true}
                        autoPlay={true}
                        rewind={true}
                        rewindWithAnimation={true}
                    >
                        <Image  
                            src="/images/barber-shop-1.png"  
                            alt="Barber Shop 1"
                            width={300}
                            height={300}
                            className="image"  // Classe adicionada
                        />
                        <Image  
                            src="/images/barber-shop-2.png"  
                            alt="Barber Shop 2"
                            width={300}
                            height={300}
                            className="image"  // Classe adicionada
                        />
                        <Image  
                            src="/images/barber-shop-3.png"  
                            alt="Barber Shop 3"
                            width={300}
                            height={300}
                            className="image"  // Classe adicionada
                        />
                        <Image  
                            src="/images/barber-shop-4.png"  
                            alt="Barber Shop 4"
                            width={300}
                            height={300}
                            className="image"  // Classe adicionada
                        />
                        <Image  
                            src="/images/barber-shop-5.png"  
                            alt="Barber Shop 5"
                            width={300}
                            height={300}
                            className="image"  // Classe adicionada
                        />
                    </StyledCarousel>
                </Container>
            </StyledSection>
        </>
    )
}

export default Gallery
