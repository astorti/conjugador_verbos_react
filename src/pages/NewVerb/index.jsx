import React, { useState } from "react";
import { Container, Form, Input, Line, SaveButton, Span, Title, UpdateButton } from "./styled";
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";


const NewVerb = () => {

    const navigate = useNavigate()

    const { handleSubmit } = useAuth()

    const [language, setLanguage] = useState("")
    const [verbName, setVerbName] = useState("")
    const [mode, setMode] = useState("")
    const [tense, setTense] = useState("")
    const [firstConjugation, setFirstConjugation] = useState("")
    const [secondConjugation, setSecondConjugation] = useState("")
    const [thirdConjugation, setThirdConjugation] = useState("")
    const [fourthConjugation, setFourthConjugation] = useState("")
    const [fifthConjugation, setFifthConjugation] = useState("")
    const [sixthConjugation, setSixthConjugation] = useState("")

    const newVerb = () => {
        handleSubmit(language, verbName, mode, tense, firstConjugation, secondConjugation, thirdConjugation, fourthConjugation, fifthConjugation, sixthConjugation)
        setLanguage("")
        setVerbName("")
        setMode("")
        setTense("")
        setFirstConjugation("")
        setSecondConjugation("")
        setThirdConjugation("")
        setFourthConjugation("")
        setFifthConjugation("")
        setSixthConjugation("")

        navigate("/verbs")
    }

    return (
        <>
            <Title>CADASTRO DE VERBOS</Title>
            <Container>
                <Form onSubmit={newVerb}>
                    <Line>
                        <Span>Idioma</Span>
                        <Input type="text" value={language} required onChange={(e) => setLanguage(e.target.value.toLowerCase())} />
                    </Line>
                    <Line>
                        <Span>Verbo</Span>
                        <Input type="text" value={verbName} required onChange={(e) => setVerbName(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>Modo</Span>
                        <Input type="text" value={mode} required onChange={(e) => setMode(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>Tempo</Span>
                        <Input type="text" value={tense} required onChange={(e) => setTense(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>1ª Conjugação</Span>
                        <Input type="text" value={firstConjugation} required onChange={(e) => setFirstConjugation(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>2ª Conjugação</Span>
                        <Input type="text" value={secondConjugation} required onChange={(e) => setSecondConjugation(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>3ª Conjugação</Span>
                        <Input type="text" value={thirdConjugation} required onChange={(e) => setThirdConjugation(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>4ª Conjugação</Span>
                        <Input type="text" value={fourthConjugation} required onChange={(e) => setFourthConjugation(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>5ª Conjugação</Span>
                        <Input type="text" value={fifthConjugation} required onChange={(e) => setFifthConjugation(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <Span>6ª Conjugação</Span>
                        <Input type="text" value={sixthConjugation} required onChange={(e) => setSixthConjugation(e.target.value.toLowerCase())}/>
                    </Line>
                    <Line>
                        <SaveButton type="submit">Salvar</SaveButton>
                        <UpdateButton>Atualizar</UpdateButton>
                    </Line>
                </Form>
                </Container>
            </>
    )
}

export {NewVerb}