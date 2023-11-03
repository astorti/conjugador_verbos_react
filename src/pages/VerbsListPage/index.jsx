import React, { useState } from "react";
import { Container, Header, ItemMenu, Title, ButtonId } from "./styled";
import VerbListComponent from "../../components/VerbListComponent";
import { useAuth } from '../../hooks/useAuth'

const VerbsListPage = () => {

    const [listOrder, setListOrder] = useState(0)
    const {getListOrderNumber} = useAuth()
    
    const changeListOrder = () => {
        if (listOrder === 0) {
            setListOrder(1)
        }
        else {
            setListOrder(0)
        }
        getListOrderNumber(listOrder)
    }

    return (
        <>
            <Container>
                <Title>VERBOS CADASTRADOS</Title>
                <Header>
                    <ButtonId type="submit" onClick={() => changeListOrder()}>#</ButtonId>
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