import React, { useState } from "react";
import { Container, Id, Language, Actions, Text, DeleteButton} from "./styled";
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";

const LanguageListComponent = () => {

    const { languages, deleteSelectedLanguage } = useAuth()
    const navigate = useNavigate()
    const [lan, setLan] = useState(languages)

    let counter = 1

    const deleteByLanguage = (language) => {
        if (window.confirm(`Está ação excluirá todos os cadastros do idioma ${language}. Confirmar a exclusão?`)) {
            deleteSelectedLanguage(language)
        }
        navigate('/verbs')
    }

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
                            <DeleteButton onClick={() => deleteByLanguage(l)}>Excluir</DeleteButton>
                        </Actions>
                    </Container>
                )
            })}
        </div>
    )
}

export default LanguageListComponent