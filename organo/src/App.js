import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Squad from './components/Squad';

function App() {
  const [squads, setSquads] = useState([
    {
      name: 'Back-End',
      cardColor: '#57C278'
    },
    {
      name: 'Front-End',
      cardColor: '#82CFFA'
    },
    {
      name: 'Data Science',
      cardColor: '#A6D157'
    },
    {
      name: 'Devops',
      cardColor: '#E06B69'
    },
    {
      name: 'UX e Design',
      cardColor: '#DB6EBF'
    },
    {
      name: 'Mobile',
      cardColor: '#FFBA05'
    },
    {
      name: 'PO',
      cardColor: '#FF8A29'
    },
  ])

  const initial = [
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[0].name
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[1].name
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[2].name
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[3].name
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[4].name
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[5].name
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[5].name
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[5].name
    },
    {
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

  const deleteMember = (color, name) => {
    console.log('MEMBER DELETED')
  }

  const changeSquadColor = (color, name)=> {
    setSquads(squads.map( squad => {
      if(squad.name === name){
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

      {squads.map(squad => 
          <Squad 
            key={squad.name} 
            name={squad.name} 
            containerColor={squad.containerColor} 
            cardColor={squad.cardColor}
            members={members.filter(member => member.squad === squad.name)}
            atDelete={deleteMember}
            changeColor={changeSquadColor}
      
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
