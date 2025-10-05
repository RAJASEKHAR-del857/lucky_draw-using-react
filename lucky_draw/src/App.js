import React from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Button from "./components/Button/Button";
import "./App.css";
import Loading from "./components/Loading/Loading";

function App() {
  // Create state variables to store data
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);
  const [celebration, setCelebration] = React.useState(false);

  // Function to handle the random selection process
  function handleRandomSelect() {
    console.log("Starting random selection...");
    
    // Step 1: Show loading and hide previous results
    setIsLoading(true);
    setShowResult(false);
    setCelebration(false);
    
    // Step 2: Wait for 5 seconds (simulating loading)
    setTimeout(function() {
      console.log("5 seconds passed, selecting winner...");
      
      // List of all people
      const people = [
        { name: "rajasekhar", city: "rayachoty" },
        { name: "rajesh", city: "hyderabad" },
        { name: "sudheer", city: "anathapur" },
        { name: "narasimha", city: "kadapa" },
        { name: "dinesh", city: "medak" },
        { name: "joseph", city: "guntur" },
        { name: "viraj", city: "nalgonda" },
        { name: "jagan", city: "vijayawada" },
        { name: "pavan", city: "hyderabad" }
      ];
      
      // Select a random person
      const randomIndex = Math.floor(Math.random() * people.length);
      const winner = people[randomIndex];
      
      console.log("Winner selected:", winner);
      
      // Update the state with the winner
      setSelectedPerson(winner);
      setIsLoading(false);
      setShowResult(true);
      setCelebration(true);
      
      // Stop celebration after 8 seconds
      setTimeout(function() {
        setCelebration(false);
      }, 8000);
    }, 5000);
  }

  return (
    <div className="App">
      {/* Celebration effects */}
      {celebration && (
        <div className="celebration">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>
      )}
      
      <Header />
      <Body />
      <Cards />
      
      {/* Show loading when button is clicked */}
      {isLoading && <Loading />}
      
      {/* Show winner result after loading */}
      {showResult && selectedPerson && (
        <div className="winner-container">
          <div className="winner-card">
            <h2 className="winner-title">🎉 Congratulations! 🎉</h2>
            <h3 className="winner-name">{selectedPerson.name.toUpperCase()}</h3>
            <p className="winner-city">From: {selectedPerson.city}</p>
            <p className="winner-message">You are the Lucky Winner!</p>
            <div className="fireworks">
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </div>
          </div>
        </div>
      )}
      
      <div className="btn-position"> 
        {/* Pass the function to Button component */}
        <Button onButtonClick={handleRandomSelect} />
      </div>
    </div>
  );
}

export default App;