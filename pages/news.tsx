import { Container, Typography } from "@mui/material"
import styled from "styled-components"

const StyledBox = styled.div`
    width: 100%;
    background-color: #333030d5;
    margin-top: 20px;
    padding: 30px;
`

const News = () => {
    return (
        <>
            <Container
                maxWidth='sm'
                sx={{
                    color: 'white',
                    padding: 10,
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                >
                    News
                </Typography>

                <StyledBox>
                    <Typography
                        variant="h6"
                        sx={{marginBottom: 3}}
                    >
                        Hard Barber Shop celebra 6 anos com evento exclusivo para clientes
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        - No último mês, a Hard Barber Shop completou 6 anos de sucesso no mercado. Para comemorar essa data especial, realizamos um evento exclusivo para nossos clientes, com brindes, cortes gratuitos e uma experiência premium completa. O evento contou com a presença de barbeiros renomados, oferecendo as últimas tendências de cortes de cabelo e barba. Os clientes também puderam desfrutar de uma degustação de drinks e um ambiente acolhedor. Agradecemos a todos que nos acompanham desde o início e continuam confiando em nosso trabalho. Que venham muitos outros anos de sucesso!


                    </Typography>
                </StyledBox>
                <StyledBox>
                    <Typography
                        variant="h6"
                        sx={{marginBottom: 3}}
                    >
                        Novidade na Hard Barber Shop: Barboterapia com produtos naturais
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        - Estamos sempre buscando inovar para oferecer o melhor aos nossos clientes. A Hard Barber Shop agora oferece a Barboterapia com produtos 100% naturais, proporcionando uma experiência ainda mais relaxante e saudável para sua pele. Esse novo serviço combina o tradicional cuidado da barba com óleos essenciais e produtos orgânicos que hidratam e rejuvenescem a pele, trazendo uma sensação de bem-estar e relaxamento. Venha conhecer essa novidade e cuidar da sua barba com os melhores produtos do mercado.
                    </Typography>
                </StyledBox>
            </Container>
        </>
    )
}


export default News