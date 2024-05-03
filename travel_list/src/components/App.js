import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
    </div>
  );
}
