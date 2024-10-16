
import styled from 'styled-components'
import { Container, Grid, Typography } from '@mui/material'

const StyledFooter = styled.footer`
    padding: 10px;
    color: white;
`

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <Container maxWidth='md'>
                    <Grid container spacing={3} sx={{marginTop: 3}}>
                        <Grid item md={4} sx={{textAlign: 'center', borderRight: '1px solid white', padding: '10px'}}>
                            <Typography variant='h6' fontSize={18} sx={{marginBottom: 1}}>
                                Localização
                            </Typography>
                            <Typography>
                                Rua das Flores, 128
                                4000-123 Porto, Portugal
                            </Typography>
                        </Grid>
                        <Grid item md={4} sx={{textAlign: 'center' , borderRight: '1px solid white', padding: '20px'}}>
                            <Typography variant='h6' fontSize={18} sx={{marginBottom: 1}}>
                                Horários
                            </Typography>
                            <Typography>
                            Segunda a Sexta
                            10:30 - 13:30 | 15:00 - 18:00
                            Sábado
                            9:00 - 12:00 | 14:00 - 17:00
                            Domingo
                            Encerrado
                            </Typography>
                        </Grid>
                        <Grid item md={4} sx={{textAlign: 'center', padding: '0px'}}>
                            <Typography variant='h6' fontSize={18} sx={{marginBottom: 1}}>
                                Contate-nos
                            </Typography>
                            <Typography>
                                <div>E-mail:</div> barbershop.exemplo@gmail.com
                                <div>Telefone:</div> +351 92 123 45 67
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </StyledFooter>
        </>
    )
}

export default Footer