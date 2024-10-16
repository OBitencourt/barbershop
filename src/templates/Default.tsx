import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '@mui/material';

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Header />
            </div>
            <Container
                maxWidth='lg'
            >
                {children}

            </Container>
            <Footer />
        </>
    )
}

export default Default
