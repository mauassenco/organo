import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Squad from './components/Squad';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [squads, setSquads] = useState([
    {
      id: uuidv4(),
      name: 'Back-End',
      cardColor: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      cardColor: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      cardColor: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      cardColor: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      cardColor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      cardColor: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'PO',
      cardColor: '#FF8A29'
    },
  ])

  const initial = [
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[5].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[5].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[5].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[5].name
    },
  ]


  const [members,setMember] = useState(initial)

  const atAddNewMember = (newMember) => {
    setMember([...members, newMember])
  }

  const deleteMember = (id) => {
    setMember(members.filter(member => member.id !== id))
  }

  const changeSquadColor = (color, id)=> {
    setSquads(squads.map( squad => {
      if(squad.id === id){
        squad.cardColor = color
      }
      return squad
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        squads={squads.map(squad => squad.name) } 
        atRegister = {newMember => atAddNewMember(newMember)}
      />

      {squads.map((squad, index) => 
          <Squad
            key={index}
            squad={squad}
            changeColor={changeSquadColor}
            atDelete={deleteMember}
            cardColor={squad.cardColor}
            id={squad.id}            
            members={members.filter(member => member.squad === squad.name)}
            name={squad.name}       
        />
      )}
      <Footer />
    </div>
  );
}

export default App;