import './Time.css'

const Time = (props) => {
    return (
        <section className='time' style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        </section>
    )
}

export default Time