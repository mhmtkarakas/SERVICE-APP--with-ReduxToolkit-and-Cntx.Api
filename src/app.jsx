
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import CategoryDetailsPage from "./pages/category-details-page";
import MainPage from "./pages/main-page";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
