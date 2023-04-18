
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import CategoryDetailsPage from "./pages/category-details-page";
import MainPage from "./pages/main-page";
import LoginPage from './pages/login-page/index';
import RegisterPage from './pages/register-page/index';

function App() {
  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />
        <main>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='category' >
             <Route path=':slug' element={<CategoryDetailsPage />} />
            </Route>
            <Route path='auth'>
              <Route path = 'login' element={<LoginPage />} />
              <Route path = 'register' element={<RegisterPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
