import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

    const [value, setValor] = useState('')

    const whenTyped = (event) => {
        props.whenChanged(event.target.value)
    }

    return (
       <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.obrigatorio} placeholder={props.placeholder}/>
       </div>
    )
}

export default TextField;