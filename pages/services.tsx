import { Container, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

const StyledBox = styled.div`
    width: 80%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    

    &:hover > div {
        filter: blur(3px); /* Aplica blur a todas as imagens */
        transform: scale(1); /* Reseta o scale */
    }

    & > div:hover {
        filter: none; /* Remove o blur da imagem que está sendo hover */
        transform: scale(1.1); /* Aumenta a escala da imagem que está com hover */
        z-index: 2;
    }

    & > .box:first-of-type img {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    & > .box:last-of-type img {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`;

const StyledImageWrapper = styled.div`
    transition: transform 0.5s ease, filter 0.5s ease;
    z-index: 0;

`;

const StyledButton = styled.button`
    width: 45%;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 15px;
    margin: 50px 5px;
    cursor: pointer;
    border-radius: 7px / 20px;
    transition: all 300ms ease;
    font-size: 15px;

    &:hover {
        background-color: white;
        color: #171515;
    }
`

const Services = () => {
    return (
        <Container
            maxWidth='md'
            sx={{paddingBottom: 10  ,paddingTop: 10, color: 'white', display: 'flex', justifyContent:'center', flexDirection: 'column', alignItems: 'center'}}
        >
            <Typography variant="h3" >
                Nossos serviços
            </Typography>
            <Typography>
                Na Hard Barber Shop, oferecemos uma experiência de cuidado masculino que vai além do simples ato de cortar o cabelo ou aparar a barba. Nossa equipe de 7 barbeiros altamente qualificados é dedicada a proporcionar serviços que unem tradição, estilo e técnicas modernas, sempre focados em oferecer a máxima qualidade e satisfação para nossos clientes.
            </Typography>
            <StyledBox>
                <StyledImageWrapper className="box">
                    <Image
                        src="/images/hairwash.png"
                        alt="Hair Wash"
                        width={155}
                        height={300}
                    />
                    <Typography align="center">
                        Lavagem
                    </Typography>
                </StyledImageWrapper>
                <StyledImageWrapper className="box">
                    <Image
                        src="/images/beard.webp"
                        alt="Beard"
                        width={155}
                        height={300}
                    />
                    <Typography align="center">
                        Barba
                    </Typography>
                </StyledImageWrapper>
                <StyledImageWrapper className="box">
                    <Image
                        src="/images/haircut.jpg"
                        alt="Haircut"
                        width={200}
                        height={300}
                    />
                    <Typography align="center">
                        Corte de Cabelo
                    </Typography>
                </StyledImageWrapper>

                <StyledImageWrapper className="box">
                    <Image
                        src="/images/barboterapia.png"
                        alt="Barboterapia"
                        width={155}
                        height={300}
                    />
                    <Typography align="center">
                        Barboterapia
                    </Typography>
                </StyledImageWrapper>
            </StyledBox>
            <StyledButton>
                Reserve agora
            </StyledButton>
        </Container>
    );
};

export default Services;
