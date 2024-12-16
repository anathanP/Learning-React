import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  $active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(prop) => (prop.$active ? "blue" : "none")};
`;

interface prop {
  items: string[];
  heading: string;
  onSelectItem?: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: prop) {
  const message = items.length === 0 && <p>no city in cities</p>;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            $active={selectedIndex === index}
            onClick={() => {
              handleClick(index);
              onSelectItem && onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
