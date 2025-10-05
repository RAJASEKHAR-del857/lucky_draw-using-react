import "./Cards.css";

function Cards() {
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

  return (
   
   <div>
  <h3> Members: </h3>
    <div className="cards">
      
      {people.map((person) => (
        <div key={person.name} className="card">
          <h4>{person.name}</h4>
          <p>{person.city}</p>
        </div>

      ))}
    </div>
    </div>
   
  );
}

export default Cards;
