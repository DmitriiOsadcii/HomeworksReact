import { Greeting } from '../Greeting/Greeting'
import ShoppingList from '../ShoppingList/ShoppingList'
import OrderStatus from '../OrderStatus/OrderStatus'


import { array } from '../../assets/data/ShoppingListArray'

import './App.css'

const orderStatus = [
  { orderId: 1, status: 'доставлен' },
  { orderId: 2, status: 'ожидается' },
  { orderId: 3, status: 'обработан' },
  { orderId: 4, status: 'в пути' }]

function App() {
  const items = orderStatus.map(item => <OrderStatus key={item.orderId} orderId={item.orderId} status={item.status} />)


  return (
    <>
      <p>Hello</p>
      <Greeting name="Юрий" />
      <ShoppingList items={array} />
      {items}
    </>
  )
}

export default App
