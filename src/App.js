import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { VerbsListPage } from "./pages/VerbsListPage";
import { AuthContextProvider } from "./context/auth";
import { NewVerb } from "./pages/NewVerb";
import { LanguageListPage } from "./pages/LanguageListPage";
import { WelcomePage } from "./pages/WelcomePage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/verbs" element={<VerbsListPage />} />
          <Route path="/new" element={<NewVerb />} />
          <Route path="/languages" element={<LanguageListPage />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;