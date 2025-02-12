import React, { useContext } from "react";
import { MyButton } from "./UI/button/MyButton";

export const Deleted = ({seminar,removeSeminar, setModal, modal}) => {

  const toggleModalFalse = () =>{
    setModal({
      show: false,
      id: null
    })
  }

  return (
    <div>
      <strong>Вы дествительно хотите удалить?</strong>
      <div style={{display: 'flex' ,justifyContent: 'space-around', marginTop: 20}}>
        <MyButton onClick={toggleModalFalse}>Отмена</MyButton>
        <MyButton onClick={()=>removeSeminar(seminar.id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
