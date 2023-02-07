import React from "react";
import uuid from "react-uuid";

export default function AddItem({
  handleFormSubmit,
  handleOnChangeName,
  handleOnChangeDesc,
  valid,
  name,
  desc
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Название</label>
      <div>
        <input
          onChange={handleOnChangeName}
          id={uuid()}
          value={name}
          name="name"
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
        />
      </div>
      <label htmlFor="desc">Описание</label>
      <div>
        <input
          onChange={handleOnChangeDesc}
          id={uuid()}
          value={desc}
          desc="desc"
          type="text"
          placeholder="Описание товара"
          className="ui-textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation">
          {!valid ? "Есть незаполненные поля" : ""}
        </div>
        <input type="submit" className="ui-button" value="Добавить" />
      </div>
    </form>
  );
}
