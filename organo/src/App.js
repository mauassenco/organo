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
      name: 'UX and Design',
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
      squad: squads[0].name,
      favorite: true

    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[0].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[1].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[2].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[3].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[4].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      squad: squads[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      squad: squads[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      squad: squads[5].name,
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      squad: squads[5].name,
      favorite: false
    },
  ]

  const [members,setMember] = useState(initial)

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

  const addSquad = ({name, cardColor})=> {
    setSquads([...squads, {name, cardColor, id: uuidv4()}])    
  }

  const favoriteChange = (id) => {
    setMember(members.map(member => {
      if(member.id === id) member.favorite = !member.favorite
      return member
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        squads={squads.map(squad => squad.name) } 
        atRegister={newMember => setMember([...members, newMember])}
        atCreateSquad={addSquad}
      />
      <section className="squads">
        <h1>My Squads</h1>
        {squads.map((squad, index) => 
            <Squad
              atFavorited={favoriteChange}
              changeColor={changeSquadColor}              
              key={index}
              squad={squad}   
              atDelete={deleteMember}     
              members={members.filter(member => member.squad === squad.name)}  
          />
        )}
        </section>
      <Footer />
    </div>
  );
}

export default App;