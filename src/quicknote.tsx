import { useEffect, useRef, useState } from 'react'
import uuid from 'react-uuid';

export default function Quicknote({ title }: { title: string }) {

    const inputRef = useRef<HTMLInputElement>(null)
    const [rows, addRow] = useState<string[]>([]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }, [rows]);

    const AddNewRow = (inputValue: HTMLInputElement | null) => {
        if (inputValue) {
            addRow(prev => [...prev, inputValue.value.toString()])
        }
    }

    return <>
        <div className='quicknote col-3 m-3'>
            <h2>{title}</h2>
            <div className='note-items pt-4'>
                {rows.map((value, index) => {
                    return <p key={uuid()}>{index + 1}. {value}</p>
                })}
            </div>
            <div className='d-flex justify-content-between pt-3'>
                <input className="input-field p-2 px-3" ref={inputRef} />
                <button className="red-btn p-2 px-3" onClick={() => AddNewRow(inputRef.current)} >+ Row</button>
            </div>
        </div>
    </>
}
