import React from "react";
import { Container, Id, Language, Verb, Mode, Tense, Actions, Text, UpdateButton, DeleteButton} from "./styled";
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";

const VerbListComponent = () => {

    const { verb, handleGetVerbToBeUpdated, handleDeleteVerb, orderNumber } = useAuth()
    const navigate = useNavigate()

    let reverseListVerb = []
    let listOrder = []
    let counter = ''
    
    for (let i = verb.length - 1; i >= 0; i--){
        reverseListVerb.push(verb[i])
    }
    
    if (orderNumber === 0) {
        listOrder = reverseListVerb
        counter = verb.length
    } else {
        listOrder = verb
        counter = 1
    }

    const handleEdit = (list) => {
        handleGetVerbToBeUpdated(list)
        navigate('/new')
    }

    const handleDelete = (id) => {
        if (window.confirm("Confirmar a exclusão deste verbo? A exclusão não poderá ser desfeita.")) {
            handleDeleteVerb(id)
        }
    }

    return (
        <div>
            
            {listOrder.map((list) => {
                return (
                    
                    <Container key={list.id}>
                        <Id>
                            <Text>{orderNumber === 0 ? counter-- : counter++}</Text>
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
                            <DeleteButton onClick={() => handleDelete(list.id)}>Excluir</DeleteButton>
                        </Actions>
                    </Container>
                
                )
            })}
        </div>
    )
}

export default VerbListComponent