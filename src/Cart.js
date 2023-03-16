
import {Table} from 'react-bootstrap'
import { useSelector,useDispatch } from "react-redux"
import { changeName,increase,addCount } from './store'

function Cart(){
    let state = useSelector((state) => { return state } )
    console.log(state.cart[0].name)
    let dispatch = useDispatch()
    return(
        <>
        <Table style={{width:'30%',margin:'auto'}}>
            <thead>
                <div>{state.user.name}</div>
                <div>{state.user.age}</div>
                <tr>
                    <th>id</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>
                        <button
                            onClick={()=>{
                            dispatch(changeName())
                            }}
                            >버튼
                        </button>
                        <button
                            onClick={()=>{
                            dispatch(increase(100))
                            }}
                            >버튼2
                        </button>      
                    </th>
                </tr>
            </thead>
            <tbody>
                 {
                    state.cart.map((a, i)=>
                    <tr key={i}>
                        <td>{state.cart[i].id}</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td>
                        <td>
                        <button
                        onClick={()=>{
                            dispatch(addCount(i))
                        }}
                        >+</button>
                        </td>
                    </tr>
                    )
                } 
            </tbody>
        </Table> 
        </>
    )
}
export default Cart