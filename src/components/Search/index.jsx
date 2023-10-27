import React from "react";
import { Container, Selection, Select, Span, Button } from "./styled";

const Search = () => {
    return (
        <Container>
            <Selection>
                <Span>Idioma</Span>
                <Select>
                    <option>- - -</option>
                </Select>
            </Selection>
            <Selection>
                <Span>Verbo</Span>
                <Select>
                    <option>- - -</option>
                </Select>
            </Selection>
            <Button>Buscar</Button>
        </Container>
    )
}

export default Search