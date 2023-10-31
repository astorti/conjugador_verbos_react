import React from "react";
import { Container, Id, Language, Verb, Mode, Tense, Actions, Text, UpdateButton, DeleteButton} from "./styled";
import {useAuth} from '../../hooks/useAuth'

const VerbListComponent = () => {

    const { verb } = useAuth()
    let counter = 1

    return (
        <div>
            
            {verb.map((list) => {
                return (
                    
                    <Container>
                        <Id>
                            <Text>{counter++}</Text>
                        </Id>
                        <Language>
                            <Text>{list.name}</Text>
                        </Language>
                        <Verb>
                            <Text>{list.verbName}</Text>
                        </Verb>
                        <Mode>
                            <Text>{list.mode}</Text>
                        </Mode>
                        <Tense>
                            <Text>{list.tense}</Text>
                        </Tense>
                        <Actions>
                            <UpdateButton>Editar</UpdateButton>
                            <DeleteButton>Excluir</DeleteButton>
                        </Actions>
                    </Container>
                
                )
            })}
        </div>
    )
}

export default VerbListComponent