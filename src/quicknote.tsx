import React, { useEffect, useRef, useState } from 'react'

export default function Quicknote(title) {

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
        <div className='quicknote col-3'>
            <h1>{title}</h1>
            <div className='note-items'>
                {rows.map((value, index) => {
                    return <p key={index}>{index + 1}. {value}</p>
                })}
            </div>
            <div className='d-flex justify-content-center pt-3'>
                <input className="p-2 px-3" ref={inputRef} />
                <button className="p-2 px-3" onClick={() => AddNewRow(inputRef.current)} >+ Row</button>
            </div>
        </div>
    </>
}
