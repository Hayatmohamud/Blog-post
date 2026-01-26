import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Article from "./pages/Article"; // Kan uun baa loo baahan yahay
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import UnAuthenticatedRoute from "./components/UnAuthenticatedRoute";
import ArticleEditor from "./pages/ArticleEditor";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import ManageArticles from "./pages/manageArticles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Route-ka Article Page-ka */}
            <Route path="/article/:id" element={<Article />} />

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
              path="/manage-articles"
              element={
                <ProtectedRoute>
                  <ManageArticles />
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
        <Footer />
      </div>
      <Toaster />
    </AuthProvider>
  );
}

export default App;
