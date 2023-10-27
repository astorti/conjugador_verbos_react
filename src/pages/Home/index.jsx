import Conjugation from "../../components/Conjugation";
import Header from "../../components/Header";
import Search from "../../components/Search";
import { Container } from './styled'

const Home = () => {
    return (
        <div>
            <Header />
            <Search />
            <Container>
                <Conjugation />
                <Conjugation />
                <Conjugation />
                <Conjugation />
                <Conjugation/>
            </Container>
            <Container>
                <Conjugation />
                <Conjugation />
                <Conjugation />
                <Conjugation />
                <Conjugation/>
            </Container>
            <Container>
                <Conjugation />
                <Conjugation />
                <Conjugation />
                <Conjugation />
                <Conjugation/>
            </Container>
        </div>
    )
}

export { Home };
