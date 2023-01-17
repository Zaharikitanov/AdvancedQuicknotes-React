import { useEffect, useRef, useState } from "react";
import Quicknote from "./quicknote";
import uuid from 'react-uuid';
import "./styles.css"

interface Note {
  id: string;
  name: string;
  tasks: string[];
}

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [columns, addColumn] = useState<Note[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [columns]);

  const AddNewRow = (inputValue: HTMLInputElement | null) => {
    if (inputValue) {
      let newColumn = {
        id: uuid(),
        name: inputValue.value.toString(),
        tasks: new Array<string>()
      }
      addColumn(prev => [...prev, newColumn])
    }
  }

  return <div className="container">
    <div className="row py-4">
      <div className='d-flex justify-content-between col-3 mx-3 px-0 py-4'>
        <input className="input-field p-2 px-3" ref={inputRef} />
        <button className="red-btn p-2 px-3" onClick={() => AddNewRow(inputRef.current)} >+ Column</button>
      </div>
    </div>
    <div className="row">
      {columns.map((value) => {
        return <Quicknote key={value.id} title={value.name} />
      })}
    </div>
  </div>
}