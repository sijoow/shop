import { useParams } from 'react-router-dom'
function Detail(props){
  let {id} = useParams();
  //찾는상품이 id값과 입력값이 같을때 그데이터를 불러와라
  let searchPrd = props.shoes.find((x) => x.id == id )
  return(
      <>  
        <div className="col-md-4 ">
          <img src={'http://localhost:3000/'+ id +'.jpg'} width="80%" />
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>  
      </> 
  )
}

export default Detail