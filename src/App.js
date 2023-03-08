import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import data from './data.js'
import Detail from './Detail.js'
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  let [shoes,setShoes]=useState(data)
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <Route path="/detail" element={ <Detail/> } />
    <div><img src={process.env.PUBLIC_URL + '/bg.png'} style={{width:'100%'}}/> </div>
    <div className="container">
      <div className="row">
        {
          shoes.map((a,i)=>{
            return (
              <>
                <Card shoes={shoes[i]} i ={i+1}/>
              </>
            )
          })
        }
      </div>
    </div> 
   
    </>
  );
}

  function Card(props){
    return(
      <>
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
        <h4 className="pt-5">{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>     
      </>
    )
  }
export default App;
