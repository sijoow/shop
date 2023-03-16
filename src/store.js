import { configureStore, createSlice } from '@reduxjs/toolkit'

  let user = createSlice({
    name : 'user',
    initialState : {name:'part',age:20},
    reducers:{
      changeName(state){
       state.name = 'kim'
      },
      increase(state,action){
        state.age +=action.payload
      },

    }
  }) 
 export let {changeName,increase} = user.actions
let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    addCount(state, action){
      state[action.payload].count++
    }
  }
}) 
  export let {addCount} = cart.actions
  
  export default configureStore({
    reducer: {
      cart : cart.reducer,
      user : user.reducer
    }
  }) 
