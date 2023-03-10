import axios from 'axios'
import { useState } from 'react'
import data from './data.js'

function Test(props){
    let [shoes, setShoes] = useState(data);
    return (
        <>
        {
            props.shoes.map((a,i)=>{
                return(
                    <>
                        <div>
                            <div>{shoes[i].title}</div>
                            <div>{shoes[i].price}</div>
                        </div>
                        
                    </>
                )
            })
        }
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                let copy = [...shoes, ...결과.data]
                setShoes(copy)
            })
            .catch(()=>{
                console.log('실패함')
            })
            }}>버튼</button>
      </>
    )
  }
  
export default Test;


