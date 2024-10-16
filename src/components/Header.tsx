import { Container } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router'; // Importando useRouter

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
    display: inline-block;
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
    text-align: center;

    &:hover {
        color: black;
        background-color: rgba(131, 130, 130, 0.2);
        filter: brightness(0.3);
        border: 1px solid #4b484845;
    }
`;

const StyledNav = styled.nav`
    padding: 3px 3px 3px;
    border: 1px solid gray;
    border-radius: 20px / 70px;
`;

const Div = styled.div`
    display: flex;
    position: absolute;
    top: 15%;
    right: 10px;
`;

const StyledIcon = styled.a`
    transition: transform 200ms ease-in-out;
    margin-right: 5px;
    &:hover {
        transform: scale(1.1); /* Efeito de escala no hover */
    }
`;

const Header = () => {
    const router = useRouter(); // Usando o useRouter

    const handleNavigation = (path: string) => {
        router.push(path); // Navegando para a rota desejada
    };

    return (
        <StyledHeader>
            <Image  
                src="/images/tesoura-pentes-icon.webp"  
                alt="Developer"
                width={100}
                height={60}
                style={{ position: 'absolute', top: 0 }}
            />
            <Container maxWidth='sm'>
                <StyledNav>
                    <StyledButton onClick={() => handleNavigation('/')}>
                        Home
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigation('/gallery')}>
                        Gallery
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigation('/team')}>
                        Team
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigation('/services')}>
                        Services
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigation('/news')}>
                        News
                    </StyledButton>
                    <StyledButton onClick={() => handleNavigation('/career')}>
                        Career
                    </StyledButton>
                </StyledNav>
            </Container>
            <Div>
                <StyledIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image  
                        src="/images/facebook.svg"  
                        alt="Facebook"
                        width={40}
                        height={40}
                    />
                </StyledIcon>
                <StyledIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Image  
                        src="/images/instagram-fill.svg"  
                        alt="Instagram"
                        width={40}
                        height={40}
                    />
                </StyledIcon>
            </Div>
        </StyledHeader>
    );
};

export default Header;
