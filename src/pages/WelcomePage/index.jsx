import React from "react";
import { Container, Text, MainText, Button } from "./styled";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {

    const navigate = useNavigate()

    const start = () => {
        navigate('/home')
    }
    return (
        <Container>
            <Text>BEM VINDO AO</Text>
            <MainText>CONJUGADOR DE VERBOS</MainText>
            <Text>BONS ESTUDOS</Text>
            <Button onClick={() => start()}>INICIAR</Button>
        </Container>
    )
}

export { WelcomePage}