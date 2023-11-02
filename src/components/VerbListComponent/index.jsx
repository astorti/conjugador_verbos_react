import React from "react";
import { Container, Id, Language, Verb, Mode, Tense, Actions, Text, UpdateButton, DeleteButton} from "./styled";
import {useAuth} from '../../hooks/useAuth'

const VerbListComponent = () => {

    const { verb } = useAuth()
    let reverseListVerb = []
    let counter = verb.length

    for (let i = verb.length - 1; i >= 0; i--){
        reverseListVerb.push(verb[i])
    }

    return (
        <div>
            
            {reverseListVerb.map((list) => {
                return (
                    
                    <Container>
                        <Id>
                            <Text>{counter--}</Text>
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