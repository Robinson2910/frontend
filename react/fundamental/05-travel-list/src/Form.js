import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] =
    useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // guard class
    if (!description) return;
    //create a new item as object with description,quantitu,packed as fale and id as data of creatio
    let newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    onAddItems(newItem);
    //setting states back to initial data
    setDescription("");
    setQuantity(1);
  }
  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value)
        }
      >
        {Array.from(
          { length: 20 },
          (el, i) => i + 1
        ).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description} //controlling the element by setting its value to the value of state varibale description
        onChange={(e) =>
          setDescription(e.target.value)
        } //whenever we try to change the value of the input element the callback fn inside OnChange is called
      />
      <button>Add</button>
    </form>
  );
}
