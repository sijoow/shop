import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import data from './data.js'
import Detail from './Detail.js'
import Test from './Test.js'
import Cart from './Cart.js'
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function App() {

  let[yo,setYo] =useState(null)
  useEffect(() => {
    axios.get('https://codingapple1.github.io/shop/data2.json').then((res)=>{
      setYo([...res.data]);
      console.log(res)
    })
    .catch(()=>{
    })
  },[]);
  

  let [shoes,setShoes]=useState(data)
  let [yogi,setYogi]=useState(['444','333','222'])
  let [yogilist,setYogilist]=useState()
  let {id} = useParams();
  let navigate = useNavigate()
  let [count,setCount] =useState(0)
  function zs(){
    if({useState}==!null){
      return (
        <>
        <div>{yo[0].title}</div>
        </>
      )
      //state안에 뭐가 들어있으면 보여달라고 if문 같은걸 추가하거나 그러면 됩니다. 
    }
  }

  
  return (
    <>
    

    <Navbar bg="white" variant="dark">
      <Container>
      <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + '/web_logo.svg'}/></Navbar.Brand>
      <Nav className="me-auto">
        <button onClick={()=>{navigate('/detail')}}></button>
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
              {
                yo !=null
                ?<div>{yo[1].title}</div>
                :null
              }
            <div>
                <img src={process.env.PUBLIC_URL + '/visual.jpg'} style={{width:'100%'}}/>
            </div>
          <div className="container">
            
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return (
                    <>
                      <Card shoes={shoes[i]} i ={i+1} navigate={navigate} />
                    </>
                  )
                })
              }
            </div>
        </div>   
      </>      
      }/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
      <Route path="/test" element={<Test shoes={shoes}/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="*" element={ <div>404 form</div> } />
     </Routes>
    </>
  );
}

  function Card(props){
    return(
      <>
      <div className="col-md-3 ">
        <img src={process.env.PUBLIC_URL+ props.i +'.jpg'} width="80%" onClick={()=>{
          props.navigate(`/detail/${props.shoes.id}`)
        }} />
        <h6 className="">{props.shoes.title}</h6>
        <p className="">{props.shoes.subtitle}</p>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price.toLocaleString()}</p>
      </div>     
      </>
    )
  }

export default App;


/** 
 *  <button class="buttons"onClick={()=>{
      if(count==0){
        fetch('https://codingapple1.github.io/shop/data2.json').then(data => data.json()).then((data) => { 
          let copy = [...shoes, ...data.data]
          setShoes(copy)
        } )
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
 **/