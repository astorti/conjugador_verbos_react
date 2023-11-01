import React from "react";
import { Container, Header, ItemMenu, Title } from "./styled";
import LanguageListComponent from "../../components/LanguageListComponent";

const LanguageListPage = () => {
    return (
        <>
            <Container>
                <Title>IDIOMAS ESTUDADOS</Title>
                <Header>
                    <ItemMenu>#</ItemMenu>
                    <ItemMenu>Idioma</ItemMenu>
                    <div>
                        <ItemMenu>Ações</ItemMenu>
                    </div>
                </Header>
                <LanguageListComponent/>
            </Container>
        </>
    )
}

export { LanguageListPage }