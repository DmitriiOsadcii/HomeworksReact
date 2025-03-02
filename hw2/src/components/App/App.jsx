import { Greeting } from '../Greeting/Greeting'
import ShoppingList from '../ShoppingList/ShoppingList'
import OrderStatus from '../OrderStatus/OrderStatus'


import { array } from '../../assets/data/ShoppingListArray'
import { orderStatus } from '../../assets/data/orderStatusArray'

import './App.css'



function App() {


  return (
    <>
      <p>Hello</p>
      <Greeting name="Юрий" />
      <ShoppingList items={array} />
      <OrderStatus item={orderStatus} />
    </>
  )
}

export default App
