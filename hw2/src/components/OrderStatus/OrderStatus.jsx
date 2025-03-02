import OrderStatusCard from "./OrderStatusCard"
const OrderStatus = ({ item }) => {
    const element = item.map((item, index) => <OrderStatusCard key={index} orderId={item.orderId} status={item.status} />)
    return (
        <>
            <h2>Компонент Статуса Заказа</h2>
            {element}
        </>
    )
}
export default OrderStatus;