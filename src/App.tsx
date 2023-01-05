import { useEffect, useRef, useState } from "react";
import Quicknote from "./quicknote";
import "./styles.css"

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [columns, addColumn] = useState<string[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [columns]);

  const AddNewRow = (inputValue: HTMLInputElement | null) => {
    if (inputValue) {
      addColumn(prev => [...prev, inputValue.value.toString()])
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
      {columns.map((value, index) => {
        return <Quicknote key={index} title={value} />
      })}
    </div>
  </div>
}