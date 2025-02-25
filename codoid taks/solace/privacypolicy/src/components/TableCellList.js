function TableCellList({ dataList }) {
  return (
    <div className="table-content table-cell next-column">
      <ul className="table-list">
        {dataList.map((data, index) => (
          <li key={index} className="para">
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableCellList;
