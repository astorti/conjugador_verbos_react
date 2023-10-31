import { Container, Head, Item } from "./styled";
import { useAuth } from "../../hooks/useAuth";

const ConjugationSecondPart = () => {
    
    const { second } = useAuth()
    
    
    return (
        <>
        
            {second.map((s) => {
                return (
                    <Container>
                        <table>
                            <thead>
                                <Head>{s.tense}</Head>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <Item>{s.first}</Item>
                                </tr>
                                <tr>
                                    <Item>{s.second}</Item>
                                </tr>
                                <tr>
                                    <Item>{s.third}</Item>
                                </tr>
                                <tr>
                                    <Item>{s.fourth}</Item>
                                </tr>
                                <tr>
                                    <Item>{s.fifth}</Item>
                                </tr>
                                <tr>
                                    <Item>{s.sixth}</Item>
                                </tr>
                            </tbody>
                        </table>
                    </Container>                    
                )
            })}
            
        </>
    )
}

export default ConjugationSecondPart;