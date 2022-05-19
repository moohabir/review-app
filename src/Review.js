import { useState } from "react";
import data from "./data"

export default function Review() {
  const [people, setPeople] = useState(data),

  return (
    <div className="App">
      {people.map((person) => {
        const {id, name, info, image} = person,
        return <article key= {id} {...person}>
           <img src ={image} alt = {name} />
           <div>
             <h4>{name}</h4>
             <p>{info}</p>
           </div>
        </article>
      })}
      <h1>Review Componnet</h1>
      
    </div>
  );
}
