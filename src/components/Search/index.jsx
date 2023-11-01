import React, { useEffect, useState } from "react";
import { Container, Selection, Select, Span, Button } from "./styled";
import { useAuth } from '../../hooks/useAuth';

const Search = () => {

    const { languages, verb, select } = useAuth();
    const [lan, setLan] = useState(languages)
    let verbsByLanguage = []
    const [selectedLanguage, setSelectedLanguage] = useState("")
    const [selectedVerb, setSelectedVerb] = useState("")

    for (let item in verb) {
        if (verb[item].name === selectedLanguage) {
            if (!verbsByLanguage.includes(verb[item].verbName)) {
                verbsByLanguage.push(verb[item].verbName)
            }
        }
    }

    
    return (
        <Container>
            <Selection>
                <Span>Idioma</Span>
                <Select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                    <option>- - -</option>
                    {lan.map((l) => {
                        return (
                            <option>{l}</option>
                        )
                    })}
                </Select>
            </Selection>
            <Selection>
                <Span>Verbo</Span>
                <Select value={selectedVerb} onChange={(e) => setSelectedVerb(e.target.value)}>
                    <option>- - -</option>
                    {verbsByLanguage.map((v) => {
                        return (
                            <option>{v}</option>
                        )
                    })}
                </Select>
            </Selection>
            <Button onClick={() => select(selectedLanguage, selectedVerb)}>Buscar</Button>
        </Container>
    )
}

export default Search