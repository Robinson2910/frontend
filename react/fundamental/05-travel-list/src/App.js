import { useState } from "react";
import Logo from "./Logo";

import Form from "./Form";

import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  //TMI love
  /*
we see that we need to store items in an array and we can see that value of data changes over time,it cannot be derived from other states or props,
it has rerender on updating the items,hence we create a new state named items and place it in a component,after sometime we get to realise 
that the items state is required by siblings,hence we lift the state to the closest parent of the siblings and then we pass the states and also
setter fnas props to the required children of the parent element,so now since the setter fn is also passed as props,
we can update the parent container value from child container this is called as child to parent linking or inverse data flow
 ,
*/

  const [items, setItems] = useState([]); //lift up state to the closest common parent component as it is parent of form and packinglist

  function handleAddItems(item) {
    setItems((items) => [...items, item]); //we cannot use item.push(item) as it mutates the state
  }
  function handleRemoveItems(id) {
    setItems((items) =>
      items.filter((item) => item.id !== id)
    );
  }
  function handleToggle(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id
            ? { ...item, packed: !item.packed }
            : item
        )
      //crates a shallowcopy using spread operator and then modifies the packed prop
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are u sure u want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div>
      <div className="app">
        <Logo />
        {/* form to add items */}
        {/*  takes in input and adds the input to items state which was initialized as input array and will be updated on each input
[...items,item]
 */}
        <Form onAddItems={handleAddItems} />
        {/* handle remove items event handler is passed in as a prop to Packing List ,so that it can remove item from items
        array from child  */}
        {/* handle toggle is used to */}
        <PackingList
          items={items}
          handleRemoveItems={handleRemoveItems}
          handleToggle={handleToggle}
          handleClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </div>
  );
}

//////TMI

// In many web applications, the `value` property of an `<input>` element is often used as part of the application's state.
// When a user types into an input field, the `value` property of the input element is updated dynamically to reflect the current content of the input field.
//  This can be considered a form of local component state in web applications, and it does play a role in managing the state of the input field.

//so instead of letting the application control the state ,we create a own state and set its value to the value of state

//thereby controlling the input element

//so if user tries to change the value of input element   ,onChange event is triggered and calls the callback fn

//inside the callback fn we change the value of state we created (TMI:value of the input elment can now only be changed when state changes as value is controlled by the state)

//thereby creating re rendering and new value is displayed
