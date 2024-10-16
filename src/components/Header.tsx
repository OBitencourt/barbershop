import { Container } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 60px;
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 10px gray;
    position: relative;
    display: flex;
    align-items: center;
`;

const StyledButton = styled.button`
    width: 88px;
    margin-right: 2px;
    padding: 7px;
    color: #494747c5;
    cursor: pointer;
    border: none;
    font-size: 17px;
    border-radius: 20px / 70px;
    transition: all 500ms ease-in-out;
    background-color: rgba(131, 130, 130, 0.2);
    border: 1px solid transparent;

    &:hover {
        color: black;
        background-color: rgba(131, 130, 130, 0.2);
        filter: brightness(0.3);
        border: 1px solid #4b484845;
    }
`

const StyledNav = styled.nav`
    padding: 3px 3px 3px;
    border: 1px solid gray;
    border-radius: 20px / 70px;
`


const Header = () => {
    return (
        <StyledHeader>

            <Image  
                src="/images/tesoura-pentes-icon.webp"  // Corrigido caminho
                alt="Developer"
                width={100}
                height={60}
                style={{ position: 'absolute', top: 0}}
            />
            <Container
                maxWidth='sm'
                sx={{}}
            >
                <StyledNav>

                    <StyledButton style={{marginLeft: '4px'}}>
                        Home
                    </StyledButton>
                    <StyledButton>
                        Gallery
                    </StyledButton>
                    <StyledButton>
                        Team
                    </StyledButton>
                    <StyledButton>
                        Services
                    </StyledButton>
                    <StyledButton>
                        News
                    </StyledButton>
                    <StyledButton>
                        Career
                    </StyledButton>
                </StyledNav>
            </Container>

            
        </StyledHeader>
    );
}

export default Header;
