import { useState } from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaQuoteRight,
  FaPeopleArrows
} from "react-icons/fa";
import data from "./data";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, info, image } = data[index];

  function limitNumber(number) {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  }
  function next() {
    setIndex((index) => {
      let newIndex = index + 1;
      return limitNumber(newIndex);
    });
  }

  function previous() {
    setIndex((index) => {
      let newIndex = index - 1;
      return limitNumber(newIndex);
    });
  }

  function randomInfo() {
    let random = Math.floor(Math.random() * index.length + 1);
    setIndex(index[random]);
  }

  return (
    <main className="review">
      <section>
        <article className="article">
          <div>
            <img src={image} alt={name} className="image" />
            <span>
              <FaQuoteRight />
            </span>
          </div>
          <div>
            <h4>{name}</h4>
            <p>{info}</p>
          </div>
        </article>

        <div>
          <button>
            <FaChevronLeft onClick={previous} />
          </button>
          <button>
            <FaChevronRight onClick={next} />
          </button>
        </div>
        <button onClick={randomInfo}>Random Info</button>
      </section>
    </main>
  );
}
