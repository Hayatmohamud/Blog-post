import { Routes , Route} from "react-router"
import Home from "./pages/Home"
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { AuthProvider } from "./context/AuthContext";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute"
import ArticleEditor from "./pages/ArticleEditor";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile"
import ManageArticles from "./pages/manageArticles"
import { Toaster } from "react-hot-toast";




function App() {
  

  return (
    <AuthProvider>
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
            <Route
              path="/signin"
              element={
                <UnAuthenticatedRoute>
                  <SignIn />
                </UnAuthenticatedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <UnAuthenticatedRoute>
                  <SignUp />
                </UnAuthenticatedRoute>
              }
            />

            {/* protected route */}

            <Route
              path="/editor"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />

            <Route
              path="/editor/:id"
              element={
                <ProtectedRoute>
                  <ArticleEditor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manageArticles"
              element={
                <ProtectedRoute>
                  <manageArticles />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        {/* footer */}
        <Footer />
      </div>
      <Toaster />
    </AuthProvider>
  );
}

export default App
 