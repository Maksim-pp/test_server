import { useEffect, useState } from 'react';
import './App.css';
import { SeminarList } from './components/SeminarList';
import { Loading } from './components/UI/loader/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingSeminars } from './store/SeminarSlice';

function App() {

  const dispatch = useDispatch()
  const {seminars, status, error, updateSeminar} = useSelector(state => state.seminars)
  
  useEffect(()=>{
    dispatch(fetchingSeminars())
  },[])
  console.log(seminars);
  
  
  return (
    <div className="App" >
      {
        status
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 30 }}><Loading /></div>
        : <SeminarList 
        title={'Список семинаров'}

        seminars={seminars} 

        updateSeminar={updateSeminar} 
      />
      }
      {
        error && <h1>Произошла ошибка: {error}</h1>
      }
    </div>
  );
}

export default App;
