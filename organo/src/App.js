import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Squad from './components/Squad';

function App() {
  const squads = [
    {
      name: 'Webstore',
      containerColor: '#D9F7E9',
      cardColor: '#57C278'
    },
    {
      name: 'Recomendations',
      containerColor: '#E8F8FF',
      cardColor: '#82CFFA'
    },
    {
      name: 'Mobile App',
      containerColor: '#F0F8E2',
      cardColor: '#A6D157'
    },
    {
      name: 'Third party',
      containerColor: '#FDE7E8',
      cardColor: '#E06B69'
    },
    {
      name: 'Mobile Site',
      containerColor: '#FAE9F5',
      cardColor: '#DB6EBF'
    }
] 

  const [members,setMember] = useState([])
  const atAddNewMember = (newMember) => {
    setMember([...members, newMember])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        squads={squads.map(squad => squad.name) } 
        atRegister = {newMember => atAddNewMember(newMember)}
      />

      {squads.map(squad => 
          <Squad 
            key={squad.name} 
            name={squad.name} 
            containerColor={squad.containerColor} 
            cardColor={squad.cardColor}
            members={members.filter(member => member.squad === squad.name)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
