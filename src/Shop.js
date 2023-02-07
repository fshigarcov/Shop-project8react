import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  //создам стэйты что бы котроллировать состояние инпутов
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || [];
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //получаем содержимое полей
  function handleOnChangeName(e) {
    setName(e.target.value);
  }

  function handleOnChangeDesc(e) {
    setDesc(e.target.value);
  }

  //отправляем айтем в массив, очищаем поля, проверяем поля на кол. знаков.
  function handleFormSubmit(event) {
    event.preventDefault();
    if (name.length === 0 || desc.length === 0) {
      setValid(false);
    } else {
      setItems([...items, { id: items.length, name, desc }]);
      setName("");
      setDesc("");
      setValid(true);
    }
  }

  //удаляем обьекты из массива от 0 до 1
  function handleDeleteItem() {
    setItems([...items.slice(0, items.length - 1)]);
  }

  return (
    <>
      {items.length === 0 ? (
        <h2>Товары отсутствуют</h2>
      ) : (
        <h2>{items.length} товаров сейчас</h2>
      )}
      <AddItem
        handleFormSubmit={handleFormSubmit}
        handleOnChangeName={handleOnChangeName}
        handleOnChangeDesc={handleOnChangeDesc}
        name={name}
        desc={desc}
        valid={valid}
      />
      <ItemList handleDeleteItem={handleDeleteItem} items={items} />
      {items.length === 0 ? (
        <p className="ui-title">Добавьте первый товар</p>
      ) : (
        false
      )}
    </>
  );
}
