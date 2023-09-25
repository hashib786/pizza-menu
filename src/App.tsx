import Pizza from "./Pizza";
import "./index.css";

interface pizzaObject {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}
const pizzaData: pizzaObject[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
console.log(pizzaData);

const Header = () => {
  return (
    <header className="header">
      <h1>This is Hashib Header</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </main>
  );
};

const Footer = () => {
  return <footer className="footer">This is Hashib footer</footer>;
};

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
