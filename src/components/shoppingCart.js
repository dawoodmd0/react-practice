import React,{useState} from "react";

function ShoppingCart() {
     const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Laptop', quantity: 1 },
    { id: 2, name: 'Mouse', quantity: 2 }
  ]);
   
  const addQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (rmId) => {
    setCartItems( prevItems => prevItems.filter(item => item.id !== rmId));
  } 

  return (
    <div>
        <h2> Shopping Cart</h2>

        <ul>
            {
                cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                        <button onClick={() => addQuantity(item.id)}> + </button>
                        <button onClick={() => removeItem(item.id)}> - </button>
                    </li>
                ))
            }
        </ul>

        <p>Total number of Items is {cartItems.reduce((total,item) => total + item.quantity,0)}</p>
    </div>
  )

}

export default ShoppingCart;