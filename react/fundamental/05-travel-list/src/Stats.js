export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Stat adding some items to your packing list 🚀</em>
      </footer>
    );
  //this will work because when items is added or deleted in items array the component is re rendered and hence numItems is calculated each time
  const numItems = items.length;
  const numPacked = items.filter((el) => el.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go✈️</em>
      ) : (
        <em>
          You have {numItems} items on your list,and you already packed{" "}
          {numPacked} {percentage + "%"}
        </em>
      )}
    </footer>
  );
}
