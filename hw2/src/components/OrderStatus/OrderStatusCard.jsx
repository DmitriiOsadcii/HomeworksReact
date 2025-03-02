const OrderStatusCard = ({ orderId ,status }) => {
    return (
        <p>Заказ # {orderId} : {status}</p>
    )
}
export default OrderStatusCard;