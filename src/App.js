import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { VerbsListPage } from "./pages/VerbsListPage";
import { AuthContextProvider } from "./context/auth";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verbs" element={<VerbsListPage/>} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;