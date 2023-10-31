import React from "react";
import { Main, Menu, Title, MenuList } from "./styled";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    const handleAccessVerbsPage = () => {
        navigate('/verbs')
    }

    const handleAccessConsultPage = () => {
        navigate('/')
    }

    return (
        <Main>
            <Title>Conjugador de Verbos React</Title>
            <Menu>
                <MenuList>Cadastrar</MenuList>
                <MenuList>Idiomas</MenuList>
                <MenuList onClick={handleAccessVerbsPage}>Verbos</MenuList>
                <MenuList onClick={handleAccessConsultPage}>Consultar</MenuList>
            </Menu>
        </Main>
    )
}

export default Header;