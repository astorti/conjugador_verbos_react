import React from "react";
import { Main, Menu, Title, MenuList } from "./styled";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();

    const handleAccessVerbsPage = () => {
        navigate('/verbs')
    }

    const handleAccessConsultPage = () => {
        navigate('/home')
    }

    const handleAccessCreateVerbPage = () => {
        navigate('/new')
    }

    const handleAccessLanguagesPage = () => {
        navigate('/languages')
    }

    const handleAccessWelcomePage = () => {
        navigate('/')
    }

    return (
        <Main>
            <Title onClick={handleAccessWelcomePage}>Conjugador de Verbos React</Title>
            <Menu>
                <MenuList onClick={handleAccessCreateVerbPage}>Cadastrar</MenuList>
                <MenuList onClick={handleAccessLanguagesPage}>Idiomas</MenuList>
                <MenuList onClick={handleAccessVerbsPage}>Verbos</MenuList>
                <MenuList onClick={handleAccessConsultPage}>Consultar</MenuList>
            </Menu>
        </Main>
    )
}

export default Header;