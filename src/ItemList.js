import React from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function ItemList({ handleDeleteItem, items = [] }) {
  return (
    <ul className="shop">
      {items.map((item) => (
        <li key={uuid()} className="ui-item-list">
          <Item info={item} />
          <button onClick={handleDeleteItem} className="item-button">
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
