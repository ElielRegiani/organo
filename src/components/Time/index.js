import Colaborator from '../Colaborator'
import './Time.css'

const Time = (props) => {
    return (
        props.colaborators.length > 0 ? <section className='time' style={{ backgroundColor: props.secundaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaborators.map(colaborator => <Colaborator corDeFundo={props.primaryColor} key={colaborator.name} nome={colaborator.nome} cargo={colaborator.cargo} imagem={colaborator.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time