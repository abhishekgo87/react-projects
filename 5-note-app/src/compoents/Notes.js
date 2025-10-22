import { useEffect, useState } from "react";
import CreateNode from "./create_note";
import Note from "./note";
import './style.css'
import {v4 as uuid} from 'uuid'

const Notes = ()=>{

  const [notes,setNotes] = useState(() =>{
     const data = JSON.parse(localStorage.getItem('mydata'))
     return data || []
  })

  const [inputText,setInputText] = useState("")


  const TextHandel = (e) => {
    setInputText(e.target.value)
  }

const SaveHandler = ()=>{
  setNotes((prevState)=>[
    ...prevState,
    {
      id : uuid(),
      text : inputText
    }
  ])
   setInputText('')
 
}

const deleteHandel = (id) =>{
  const FilterNotes = notes.filter((note)=> note.id !==id)
  setNotes(FilterNotes)

}






useEffect(()=>{
   localStorage.setItem('mydata', JSON.stringify(notes))
})

  return(<>
  <div className="notes">
    {
      notes.map((items)=>(
     <Note id={items.id} text={items.text} deleteHandel = {deleteHandel}/>
      ))
    }
    <CreateNode  TextHandel={TextHandel}  SaveHandler={SaveHandler}
                 inputText = {inputText}/>

                 
    
    </div>
  </>)
}

export default Notes;