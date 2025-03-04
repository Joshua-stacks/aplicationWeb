import Header from "./components/Header";
import Acceuil from "./components/Acceuil";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Routes, Route} from "react-router";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
