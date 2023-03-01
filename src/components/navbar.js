import { useState } from "react";
import { Container,Nav,Navbar,Form  } from "react-bootstrap"


export const NavBar=({fliterbysearch})=>{

  const [state,setstate]=useState('');

 

   // fliterbysearch
    const onfilter=(e)=>{
      e.preventDefault ();
      fliterbysearch(state);
      setstate('');
    }

    return(
        <Navbar bg='dark' expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="#" className="brand" style={{color:"orange",fontWeight:'900'}}>QUICK FOOD</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="بحث"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>setstate(e.target.value)}
                value={state}
              />
              <button className="btn-search" onClick={()=>onfilter()}>بحث</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}