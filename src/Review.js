import { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import data from "./data";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, info, image } = data[index];

  function next() {
    setIndex(index + 1);
  }

  function previous() {
    setIndex(index - 1);
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
      </section>
    </main>
  );
}
