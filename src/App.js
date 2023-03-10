import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import data from './data.js'
import Detail from './Detail.js'
import Test from './Test.js'
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
function App() {
  let [shoes,setShoes]=useState(data)
  let [yogi,setYogi]=useState(['444','333','222'])
  let {id} = useParams();
  let navigate = useNavigate()
  let [count,setCount] =useState(0)
  return (
    <>
    <Navbar bg="white" variant="dark">
      <Container>
      <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + '/web_logo.svg'}/></Navbar.Brand>
      <Nav className="me-auto">
        <button onClick={()=>{navigate('/detail')}}>버튼</button>
        <Nav.Link href="#home" style={{color:'#111'}}>소파</Nav.Link>
        <Nav.Link href="#features" style={{color:'#111'}}>바디필로우</Nav.Link>
        <Nav.Link href="#pricing" style={{color:'#111'}}>리빙</Nav.Link>
        <Nav.Link href="#pricing" style={{color:'#111'}}>캐릭터</Nav.Link>
        <Nav.Link href="#pricing" style={{color:'#111'}}>스폐셜 에디션</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
     <Routes>
      <Route path="/" element={
        <>
            <div>
                <img src={process.env.PUBLIC_URL + '/visual.jpg'} style={{width:'100%'}}/>
            </div>
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
              
              <button class="buttons"onClick={()=>{
                if(count==0){
                  fetch("https://codingapple1.github.io/shop/data2.json")
                  .then((res) => res.json())
                  .then((data) => {
                    let copy = [...shoes, ...data.data]
                    setShoes(copy)
                  });
                  
                }else if(count==1){
                  axios.get('https://codingapple1.github.io/shop/data3.json').then((data)=>{
                    let copy = [...shoes, ...data.data]
                    setShoes(copy)
                  })      
                }else if(count<=2){
                  document.querySelector('.buttons').style.display = 'none'
                }
                setCount(count+1)
                }}>{count}</button>  

            </div>
        </div>   
      </>      
      }/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
      <Route path="/test" element={<Test shoes={shoes}/>}></Route>
      <Route path="*" element={ <div>404 form</div> } />
     </Routes>
    </>
  );
}

  function Card(props){
    return(
      <>
      <div className="col-md-4 ">
        <img src={process.env.PUBLIC_URL+ props.i +'.jpg'} width="80%" />
        <h4 className="pt-5">{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>     
      </>
    )
  }

export default App;
