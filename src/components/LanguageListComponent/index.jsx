import React, { useState } from "react";
import { Container, Id, Language, Actions, Text, DeleteButton} from "./styled";
import {useAuth} from '../../hooks/useAuth'

const LanguageListComponent = () => {

    const { languages } = useAuth()
    const [lan, setLan] = useState(languages)

    let counter = 1

    return (
        <div>
            {lan.map((l) => {
                return (
                    <Container>
                        <Id>
                            <Text>{counter++}</Text>
                        </Id>
                        <Language>
                            <Text>{l}</Text>
                        </Language>
                        <Actions>
                            <DeleteButton>Excluir</DeleteButton>
                        </Actions>
                    </Container>
                )
            })}
        </div>
    )
}

export default LanguageListComponent