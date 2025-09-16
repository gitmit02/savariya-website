import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    const checkDone = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    if (images.length === 0) {
      // No images found → stop loading immediately
      setLoading(false);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener("load", checkDone);
          img.addEventListener("error", checkDone);
        }
      });

      if (loadedCount === images.length) {
        setLoading(false);
      }
    }

    // Cleanup
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", checkDone);
        img.removeEventListener("error", checkDone);
      });
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-brown-50">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
