
const OrderStatus = ({ orderId, status }) => {

    return (
        <>
            <div>
                <h2>Заказ # {orderId} : {status} </h2>
            </div>
        </>
    )
}
export default OrderStatus;