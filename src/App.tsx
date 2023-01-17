import { useEffect, useRef, useState } from "react";
import Quicknote from "./quicknote";
import uuid from 'react-uuid';
import "./styles.css"

export default function App() {

  const inputRef = useRef<HTMLInputElement>(null)
  const [columns, addColumn] = useState<string[]>([]);

  useEffect(() => {
    const handleTabClose = (event: any) => {
      event.preventDefault();

      console.log('beforeunload event triggered');

      return (event.returnValue = 'Are you sure you want to exit?');
    };

    window.addEventListener('beforeunload', handleTabClose);

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    }
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [notes]);

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
      {columns.map((value) => {
        return <Quicknote key={uuid()} title={value} />
      })}
    </div>
  </div>
}