import { Container, Grid, Typography } from "@mui/material"
import Image from "next/image"
import styled from 'styled-components'

const StyledSection = styled.section`
    background-color: white;
    width: 100%;
    padding: 20px;

`
const StyledButton = styled.button`
    width: 45%;
    background-color: transparent;
    color: #171515;
    border: 2px solid #171515;
    padding: 15px;
    margin: 50px 5px;
    cursor: pointer;
    border-radius: 7px / 20px;
    transition: all 300ms ease;
    font-size: 15px;

    &:hover {
        background-color: #171515;
        color: white;
    }

    @media (max-width: 1063px) {
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
    }
`

const ResponsiveImage = styled(Image)`
    
    @media (max-width: 414px) {
        width: 300px;
        height: 300px;
        border: none;
    }
    @media (min-width: 415px) and (max-width: 1063px) {
        width: 350px;
        height: 350px;
        border: none;
        
    }
`

const Index = () => {
    return (
        <>
            <Container maxWidth='md' sx={{textAlign: 'center', color: 'white', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: 5}}>
                <Image  
                    src="/images/big-barber-logo.png"  // Corrigido caminho
                    alt="Developer"
                    width={350}
                    height={350}
                    style={{marginTop: '40px'}}
                />
                <Typography
                    fontSize={35}
                    variant="h1"
                    sx={{marginTop: 4}}
                >
                    Tradition, honor, and style in every detail.
                </Typography>
            </Container>

            <StyledSection
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Container maxWidth='lg'>

                    <Grid container spacing={4} >
                        <Grid 
                            item 
                            md={6} 
                            sm={4}
                            sx={{
                                width: '100%',
                                '@media (max-width: 160px)': {  // Para telas pequenas (mobile)
                                    width: '100%'
                                },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                                
                            }}
                        >
                            <ResponsiveImage  
                                src="/images/barber-photo-home.png"  // Corrigido caminho
                                alt="Developer"
                                width={500}
                                height={500}
                                style={{borderRadius: '10px', border: '2px solid black'}}
                            />
                        </Grid>
                        <Grid 
                            item 
                            md={6} 
                            sm={8} 
                            sx={{
                                width: '50%',
                                '@media (max-width: 1063px)': {  // Para telas pequenas (mobile)
                                    width: '100%'
                                },
                            }}
                        
                        >
                            <Typography
                                component='h2'
                                variant="h3"
                                fontSize={35}
                                sx={{

                                    '@media (max-width: 1063px)': {  // Para telas pequenas (mobile)
                                        fontSize: '30px',
                                    },
                                }}
                            >
                                Hard Barber Shop - Gentlemens Lounge
                            </Typography>
                            <Typography
                                component='p'
                                variant="body1"
                                sx={{
                                    marginTop: 3
                                    
                                }}
                            >
                                Abrimos as portas em março de 2018, com a missão de redefinir o conceito de barbearia moderna. Oferecendo serviços de corte de cabelo e barba premium, a barbearia rapidamente se destacou pelo compromisso com a <strong>excelência</strong>. Hoje, contamos com uma equipe de <strong>7 mestres barbeiros</strong>, especializados nas técnicas mais <strong>inovadoras</strong> e nas últimas tendências do estilo masculino.
                            </Typography>
                            <Typography
                                component='p'
                                variant="body1"
                                sx={{marginTop: 3}}
                            >
                                Funcionamos <strong>somente com agendamento</strong>, oferecendo flexibilidade e comodidade através do nosso sistema de reservas online pela <strong>APP Fresha</strong>, onde os clientes podem marcar seus horários facilmente e garantir um serviço de alta qualidade, sem filas ou esperas.


                            </Typography>

                            <StyledButton>
                                Reserve Online
                            </StyledButton>
                            <StyledButton>
                                Instale o App
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSection>
        </>
    )
}

export default Index