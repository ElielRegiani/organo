import { useState } from 'react';
import Button from '../Button';
import SuspendedList from '../SuspendedList';
import TextField from './../TextField/TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [time, setTime] = useState('')

    const whenSaving = (event) => {
        event.preventDefault()
        props.whenColaboratorRegister({
            name: name,
            role: role,
            image: image,
            time: time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)}/>
                <TextField
                    obrigatorio={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    whenChanged={value => setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <SuspendedList 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    value= {time}
                    whenChanged={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;