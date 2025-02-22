import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>list of {heading}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
