
import { Container, TextField, Typography } from "@mui/material"
import styled from "styled-components"

const StyledBox = styled.div`
    width: 100%;
    background-color: #ffffff;
    margin-top: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: .75em;
    
`

const StyledButton = styled.button`
    width: 45%;
    background-color: transparent;
    color: #171515;
    border: 2px solid #171515;
    padding: 15px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 7px / 20px;
    transition: all 300ms ease;
    font-size: 15px;

    &:hover {
        background-color: #171515;
        color: white;
    }
`

const Career = () => {
    return (
        <>
            <Container
                maxWidth='md'
                sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 10,

                    '@media (max-width: 489px)': {  // Para telas pequenas (mobile)
                        padding: 2,
                        marginBottom: 10,
                        marginTop: 10
                    },
                }}
            >
                <StyledBox
                >
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{marginBottom: 3}}
                    >
                        Quer fazer parte de nossa equipe?
                    </Typography>
                    <TextField 
                        variant='standard'
                        label='Nome'
                        name='name'
                        sx={{
                            margin: 3
                        }}
                    />
                    <TextField 
                        variant='standard'
                        label='E-mail'
                        name='email'
                        sx={{
                            margin: 3
                        }}
                    />
                    <TextField 
                        variant='standard'
                        label='Telefone'
                        name='name'
                        sx={{
                            margin: 3
                        }}
                    />
                    <TextField 
                        variant='standard'
                        label='Instagram'
                        name='name'
                        sx={{
                            margin: 3,
                            marginBottom: 7
                        }}
                    />
                    <StyledButton>
                        Candidate-se
                    </StyledButton>
                </StyledBox>
            </Container>
        </>
    )
}

export default Career