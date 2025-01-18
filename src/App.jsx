import React, { useEffect } from "react";
import Navbar from "./components/Navbar"; 
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Home from "./components/Home";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";

function App() {
  const { loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      alert('Welcome to our app!');
    }
  }, [loading]);

  return ( 
    <div>
      {loading && <Loading /> }
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;
