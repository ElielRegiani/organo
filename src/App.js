import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const times = [
    {
      name: 'Programação', 
      primaryColor: '#57c278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End', 
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8E2'
    },
    {
      name: 'Data Science', 
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: 'Devops', 
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design', 
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile', 
      primaryColor: '#FFBAD5',
      secundaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão', 
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    }
  ]

  const [colaborators, setColaborators] = useState([])

  const whenNewColaboratorRegister = (colaborator) => {
    console.log(colaborator)
    setColaborators([...colaborators, colaborator] )
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.name)} whenColaboratorRegister={colaborator => whenNewColaboratorRegister(colaborator)}/>
      {times.map(time => <Time key={time.name} name={time.name} primaryColor={time.primaryColor} secundaryColor={time.secundaryColor}/>)}
    </div>
  );
}

export default App;
