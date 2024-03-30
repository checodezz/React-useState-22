import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Positive and negative</h2>
      <p>Count: {counter}</p>
      <p>The count is {counter < 0 ? "negative" : "positive"}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

const UserLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleClcikEvent = () => {
    if (userName && password) {
      setIsLoggedin(true);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      {!isLoggedin && (
        <>
          <label htmlFor="name">Username: </label>
          <input
            id="name"
            onChange={(event) => setUserName(event.target.value)}
          />
          <br /> <br />
          <label htmlFor="pswrd">Password:</label>
          <input
            type="password"
            id="pswrd"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br /> <br />
          <button onClick={handleClcikEvent}>Login</button>
        </>
      )}
      {isLoggedin && <h2>Welcome, {userName}!</h2>}
    </div>
  );
};

const TempConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const handleCelciusChange = (event) => {
    const newCelsius = event.target.value;
    const newFahrenheit = (newCelsius * 9) / 5 + 32;
    setCelsius(newCelsius);
    setFahrenheit(newFahrenheit);
  };

  const handleFahrenheitChange = (event) => {
    const newFahrenheit = event.target.value;
    const newCelsius = ((newFahrenheit - 32) * 5) / 9;
    setFahrenheit(newFahrenheit);
    setCelsius(newCelsius);
  };
  return (
    <div>
      <h2>Temperature Converter</h2>
      <label htmlFor="cel">Celsius: </label>
      <input
        id="cel"
        type="number"
        value={celsius}
        onChange={handleCelciusChange}
      />
      <br />
      <br />
      <label htmlFor="fahr">Fahrenheit: </label>
      <input
        id="fahr"
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
};

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (itemName, price) => {
    const newObj = { itemName: itemName, price: price };
    setItems([...items, newObj]);
    setTotal((prevPrice) => prevPrice + price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price:{total} </p>
      <button onClick={() => addItemToCart("Product A", 10)}>
        Add Product A
      </button>
      <button onClick={() => addItemToCart("Product B", 20)}>
        Add Product B
      </button>
    </div>
  );
};

const Quiz = () => {
  const questions = [
    "What is the national bird of India?",
    "How many colors are there in Indian flag?",
    "What is the color of sky?",
  ];

  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState("");

  const handleNextQuestion = () => {
    setQuestion(question + 1);
    // console.log(questions[questions]);
    console.log(questions.length);
    console.log(question);
    setAnswers("");
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {question <= questions.length - 1 && (
        <>
          <p>{questions[question]}</p>

          <input
            required
            value={answers}
            onChange={(event) => setAnswers(event.target.value)}
          />
          <button onClick={handleNextQuestion}>Next</button>
        </>
      )}
      {question >= questions.length - 1 && <p>You answered all questions!</p>}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Counter />
      <br />
      <UserLogin />
      <br />
      <TempConverter />
      <br />
      <ShoppingCart />
      <br />
      <Quiz />
    </main>
  );
}
