import { useState } from "react";

function UpdateArray() {
     const [items,setItems] = useState(['Apple','Banana']);
     const [newItem,setNewItem] = useState('');

     const addItem = () => {
        if(newItem.trim() !== ''){
            setItems(previtem => [...previtem,newItem]);
            setNewItem('');
        }
     }

     return (
        <>
           <input
             type="text"
             value={newItem}
             onChange={(e) => setNewItem(e.target.value)}
             placeholder="Add new Item" />
            
            <button onClick={addItem}>Add Item</button>
             
             <ol>
                 {items.map((item,index) => (
                     <li key={index}>{item}</li>
                 ))}
            </ol>

        </>
     );
}

export default UpdateArray;