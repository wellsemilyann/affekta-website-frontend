import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { MediaChat } from './components/MediaChat';
import { HomePage } from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ICorpsPage } from './pages/ICorpsPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="size-full dark">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/icorps" element={<ICorpsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route - redirect any unmatched paths to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <MediaChat />
      </div>
    </Router>
  );
}
