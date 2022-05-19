import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import data from "./data";

export default function Review() {
  const [people, setPeople] = useState(data);

  return (
    <div className="review">
      {people.map((person) => {
        const { id, name, info, image } = person;
        return (
          <article key={id} {...person}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{info}</p>
            </div>
          </article>
        );
      })}
      {/*<div>
        <button>
          <FaChevronLeft />
        </button>
        <button>
          {" "}
          <FaChevronRight />
        </button>
      </div> */}
    </div>
  );
}
