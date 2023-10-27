import React from "react";
import { Main, Menu, Title, MenuList } from "./styled";

const Header = () => {
    return (
        <Main>
            <Title>Conjugador de Verbos React</Title>
            <Menu>
                <MenuList>Idioma</MenuList>
                <MenuList>Pronomes</MenuList>
                <MenuList>Tempo</MenuList>
                <MenuList>Verbos</MenuList>
                <MenuList>Consultar</MenuList>
            </Menu>
        </Main>
    )
}

export default Header;