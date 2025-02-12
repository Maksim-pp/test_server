import React, { useState } from 'react'
import { SeminarItem } from './SeminarItem'
import { Deleted } from './Deleted'
import { MyModal } from './UI/modal/MyModal'
import { FormItem } from './FormItem'
import { Popup } from './UI/popup/Popup'
import { useDispatch } from 'react-redux'
import { deleted, patch } from '../store/SeminarSlice'

export const SeminarList = ({seminars, title, updateSeminar, setUpdateSeminar}) => {
  const [popup, setPopup] =useState({show: false, id: null})
  const [modal, setModal] = useState({show: false, id: null})
  const dispatch = useDispatch()

  const removeSeminar = () => {
    if(modal.show && modal.id){
      dispatch(deleted(modal.id))
      setModal({
        show: false,
        id: null
      })
    }
  }

  const update = (updateSeminar) => {
    if(popup.show && popup.id){
      dispatch(patch(popup.id))
    }
    setPopup({
      show: false,
      id: null
    })
    // setUpdateSeminar({id:null, title: '', description: '', date: '', time: '', photo: ''})
  }


  const toggleModalTrue = (id) =>{
    setModal({
      show: true,
      id,
    })
  }

  const togglePopupTrue = (id) =>{
    setPopup({
      show: true,
      id,
    })
  }
  
  if(!seminars.length) return <h1 style={{textAlign:'center'}}>Семинаров нет</h1>

  return (
    <div>
        <h2 style={{textAlign:'center'}}>{title}</h2>
        {
          seminars.map(seminar =>(
            <div key={seminar.id}>
              <SeminarItem
                seminar={seminar}
                toggleModalTrue={toggleModalTrue}
                togglePopupTrue={togglePopupTrue}
              />
              <MyModal modal={modal} setModal={setModal}>
                <Deleted  seminar={seminar} removeSeminar={removeSeminar} setModal={setModal}/>
              </MyModal>
              <Popup popup={popup} setPopup={setPopup}>
                <FormItem updateSeminar={updateSeminar} setPopup={setPopup} setUpdateSeminar ={setUpdateSeminar} update={update} seminar={seminar} popup={popup}/>
              </Popup>
            </div>
          ))
        }
    </div>
  )
}
