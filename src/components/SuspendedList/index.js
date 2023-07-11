import './SuspendedList.css'

const SuspendedList = (props) => {
    return (
        <div className='suspendedlist'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SuspendedList