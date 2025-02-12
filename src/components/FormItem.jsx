import React from 'react'
import { MyInput } from './UI/input/MyInput'
import { MyButton } from './UI/button/MyButton'
import { useDispatch } from 'react-redux'
import { changeDate, changeDescription, changePhoto, changeTime, changeTitle } from '../store/SeminarSlice'

export const FormItem = ({ updateSeminar,  seminar, setPopup, update, popup }) => {

    const dispatch= useDispatch()


    const togglePopupFalse = () =>{
        setPopup({
            show: false,
            id: null
        })
    }
    

  return (
    <div>
        <MyInput type='text' placeholder='Введите название' value={updateSeminar.title} onChange={(e)=>dispatch(changeTitle(e.target.value))}/>
        <MyInput type='text' placeholder='Введите описание' value={updateSeminar.description} onChange={(e)=>dispatch(changeDescription(e.target.value))}/>
        <MyInput type='text' placeholder='Введите дату Пример: 23.01.2025' value={updateSeminar.date} onChange={(e)=>dispatch(changeDate(e.target.value))}/>
        <MyInput type='text' placeholder='Введите время Пример: 11:00' value={updateSeminar.time} onChange={(e)=>dispatch(changeTime(e.target.value))}/>
        <MyInput type='text' placeholder='Введите ссылку на фото' value={updateSeminar.photo} onChange={(e)=>dispatch(changePhoto(e.target.value))}/>
        <div style={{display: 'flex' ,justifyContent: 'space-around', marginTop: 20}}>
            <MyButton onClick={togglePopupFalse}>Отмена</MyButton>
            <MyButton onClick={()=>update(updateSeminar)}>Редактировать</MyButton>
        </div>
    </div>
  )
}

