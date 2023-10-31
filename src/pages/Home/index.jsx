import Conjugation from "../../components/Conjugation";
import ConjugationSecondPart from "../../components/ConjugationSecondPart";
import ConjugationThirdPart from "../../components/ConjugationThirdPart";
import Search from "../../components/Search";
import { Container, Mode } from './styled'

const Home = () => {

    return (
        <div>
            <Search />
            <Mode>Indicativo</Mode>
            <Container>
                <Conjugation />
            </Container>
            <Mode>Indicativo</Mode>
            <Container>
                <ConjugationSecondPart />
            </Container>
            <Mode>Subjuntivo</Mode>
            <Container>
                <ConjugationThirdPart />
            </Container>
        </div>
    )
}

export { Home };
