import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const questionPool = [
  {
    id: 1,
    question: "What is flash cards NG?",
    answer:
      "flash cards NG is a program which makes remembering things easy by using Active recall testing.",
  },
  {
    id: 2,
    question: "What is Active recall?",
    answer:
      "Active recall testing means being asked a question and trying to remember the answer",
  },
  {
    id: 3,
    question: "How can you add Active recall into your learning?",
    answer:
      "A good way to integrate active recall testing into your own studies is to use flashcards.",
  },
];

function App() {
  return (
    <div className="App">
      <Intro />
      <Question />
      <Flashcards />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>🃏 flash cards NG ❤</h1>
      <h3>
        flash cards NG is a program which makes remembering things easy by using
        Active recall testing.
      </h3>
      <p>
        Active recall testing means being asked a question and trying to
        remember the answer. This is in contrast to passive study, where we
        read, watch, or listen to something without pausing to consider if we
        know the answer.
      </p>
    </div>
  );
}
function Question() {
  return (
    <form className="form-box">
      <label>
        Question <br></br>
        <input />
      </label>
      <label>
        Answer <br></br>
        <input />
      </label>
      <button className="btn">ADD</button>
    </form>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function cardClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="cards">
      {questionPool.map((q) => (
        <div
          className={`card ${q.id === selectedId ? "answer" : ""}`}
          onClick={() => cardClick(q.id)}
        >
          {q.id === selectedId ? q.answer : q.question}
        </div>
      ))}
    </div>
  );
}

export default App;
