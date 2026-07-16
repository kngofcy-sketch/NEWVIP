import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PricingPage from './pages/PricingPage';
import SuccessPage from './pages/SuccessPage';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <PricingPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}