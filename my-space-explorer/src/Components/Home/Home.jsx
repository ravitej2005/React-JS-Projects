import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/planets");
    }
  }, [isLoggedIn, navigate]);

  return(
    <div className="h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-6 text-indigo-400">Let&apos;s Get Started..!!</h1>
      <button className="px-6 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2" onClick={() => setIsLoggedIn(true)}>
        Let's Explore...<img className="h-8" src="https://www.svgrepo.com/show/1320/rocket.svg" alt="rocket logo" />
      </button>
      
    </div>
  );
}

export default Home;
