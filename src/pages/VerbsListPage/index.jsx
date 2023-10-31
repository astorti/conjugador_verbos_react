import React from "react";
import { Container, Header, ItemMenu, Title } from "./styled";
import VerbListComponent from "../../components/VerbListComponent";

const VerbsListPage = () => {
    return (
        <>
            <Container>
                <Title>VERBOS CADASTRADOS</Title>
                <Header>
                    <ItemMenu>#</ItemMenu>
                    <ItemMenu>Idioma</ItemMenu>
                    <ItemMenu>Verbo</ItemMenu>
                    <ItemMenu>Modo</ItemMenu>
                    <ItemMenu>Tempo</ItemMenu>
                    <div>
                        <ItemMenu>Ações</ItemMenu>
                    </div>
                </Header>
                <VerbListComponent />
            </Container>
        </>
    )
}

export {VerbsListPage}