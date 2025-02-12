import React, { useContext } from "react";
import { MyButton } from "./UI/button/MyButton";

export const SeminarItem = ({ seminar, toggleModalTrue, togglePopupTrue}) => {
  return (
    <div className="seminars">
      <div className="seminars__contents">
        <strong>
          {seminar.id}. {seminar.title}
        </strong>
        <div>{seminar.description}</div>
        <strong>
          {seminar.date} {seminar.time}
        </strong>
        <div>
          <img alt="Фото" src={seminar.photo} />
        </div>
      </div>
      <div className="seminars__btns">
        <MyButton onClick={() => togglePopupTrue(seminar.id)}>Редактировать</MyButton>
        <MyButton onClick={() => toggleModalTrue(seminar.id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
