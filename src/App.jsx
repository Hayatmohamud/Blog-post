import { Routes , Route} from "react-router"
import Home from "./pages/Home"
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer"



function App() {
  

  return (
    <div>
      {/* Header */}
      <Header />
      <main>
        {/* public routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="article/:id" element={<Articles />} />

          {/* unauthenticated routes (rediracte to home if logged in) */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App
 