import React from "react";
import { Container, Form, Input, Line, SaveButton, Span, Title, UpdateButton } from "./styled";

const NewVerb = () => {
    return (
        <>
            <Title>CADASTRO DE VERBOS</Title>
            <Container>
                <Form>
                    <Line>
                        <Span>Idioma</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>Verbo</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>Modo</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>Tempo</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>1ª Conjugação</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>2ª Conjugação</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>3ª Conjugação</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>4ª Conjugação</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>5ª Conjugação</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <Span>6ª Conjugação</Span>
                        <Input type="text" />
                    </Line>
                    <Line>
                        <SaveButton>Salvar</SaveButton>
                        <UpdateButton>Atualizar</UpdateButton>
                    </Line>
                </Form>
                </Container>
            </>
    )
}

export {NewVerb}