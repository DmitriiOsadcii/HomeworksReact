import { ShoppingListCard } from "./ShoppingListCard";
const ShoppingList = ({ items = ['Список пуст'] }) => {
    const elements = items.map((item, index) => <ShoppingListCard key={index} staff={item} />)
    return (
        <>
            <h2>Shopping List : </h2>
            <ul>
                {elements}
            </ul>
        </>

    )
}
export default ShoppingList;