import './App.css';
import './index.css';
import { useState } from 'react';


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]); 

  function addItem() {

    if(!newItem) {
      alert("Enter an item...");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
    console.log(items);

  }

  function deleteItem(id) {
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
  }

  return (
         
    <div className='text-center flex justify-center flex-col items-center gap-y-5 p-10'>


    <h1 className='text-cyan-300 text-2xl font-bold p-8' >To-Do List</h1> 

    <div className='text-center flex justify-center flex-col items-center w-100 h-100 bg-white bg-opacity-60 p-8 rounded-xl border-2 border-cyan-300' >

      <div className='flex w-100 m-10 items-center'>

        <input type="text" placeholder='  Add an item...' value={newItem} onChange={e => setNewItem(e.target.value)} className='h-8 w-60 mr-10 px-2 border-2 border-cyan-300'/>
        <button className='bg-white h-8 w-16 rounded-sm border-2 border-cyan-300 text-sm font-medium' onClick={() => addItem()}>ADD</button>

      </div>

      <ul className='text-white text-left w-90% flex flex-col gap-y-3'>

        {items.map(item => {
            return(
              <li key={item.id}>{item.value} <button className='ml-4' onClick={() => deleteItem(item.id)}>❌</button></li>
            )
        })}

      </ul>
      
    </div>

    </div>

  );
}

export default App;
