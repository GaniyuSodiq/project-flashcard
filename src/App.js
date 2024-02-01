import logo from "./logo.svg";
import "./App.css";

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
function Question() {}
function Flashcards() {}

export default App;
