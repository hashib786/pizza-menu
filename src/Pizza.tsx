import { pizzaObject } from "./App";

const Pizza = ({ name, ingredients, price, photoName }: pizzaObject) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Pizza;
