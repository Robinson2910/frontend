import { useState } from "react";
import Item from "./item";
export default function PackingList({
  items,
  handleRemoveItems,
  handleToggle,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description") {
    //.sort method is a method which can mutate the items state,wchich should not be done a t any case,so we use slice and then on it we use sorts
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            handleRemoveItems={handleRemoveItems}
            key={item.id}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
      <div className="actions">
        {/* value in select should be the value of any of the value in option elements below  */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
