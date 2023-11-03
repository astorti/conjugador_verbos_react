import React from "react";
import { Container, Id, Language, Verb, Mode, Tense, Actions, Text, UpdateButton, DeleteButton} from "./styled";
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";

const VerbListComponent = () => {

    const { verb, handleGetVerbToBeUpdated } = useAuth()
    const navigate = useNavigate()

    let reverseListVerb = []
    let counter = verb.length

    for (let i = verb.length - 1; i >= 0; i--){
        reverseListVerb.push(verb[i])
    }

    const handleEdit = (list) => {
        handleGetVerbToBeUpdated(list)
        navigate('/new')
    }

    return (
        <div>
            
            {reverseListVerb.map((list) => {
                return (
                    
                    <Container key={list.id}>
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
                            <UpdateButton onClick={() => handleEdit(list)}>Editar</UpdateButton>
                            <DeleteButton>Excluir</DeleteButton>
                        </Actions>
                    </Container>
                
                )
            })}
        </div>
    )
}

export default VerbListComponent