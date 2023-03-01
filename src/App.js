import './index.css'
import { Container, Row} from 'react-bootstrap'
import { NavBar } from './components/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { Buttons } from './components/buttons';
import Cards from './components/Card';
import { Data } from './data';
import { useState } from 'react';

function App() {

  const [Dataitem,setDataitem]=useState(Data);
  // get all cat unique
  const allcat =['الكل',...new Set(Data.map((item)=>item.categort))]
  console.log(allcat)
  // filter by cat
  const fliterbycat=(cat)=>{
    if(cat!=='الكل'){
    const newarr=Data.filter((item)=> item.categort===cat)
    setDataitem(newarr);
    }else setDataitem(Data)
  }

   // filter by search
   const fliterbysearch=(word)=>{
    if(word!==''){
    const newarr=Data.filter((item)=> item.title===word)
    setDataitem(newarr);
    }
  }
  return (
    <div>
      
    <NavBar fliterbysearch={Dataitem} />
    <Container>
    <Header/>
    <Buttons fliterbycat={fliterbycat} allcat={allcat}/>
    <Cards itemdata={Dataitem}/>
    </Container>
   
    </div>
  );
}

export default App;
