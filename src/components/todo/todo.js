import React, { useEffect, useState } from 'react';
import useForm from '../hooks/form';

import { v4 as uuid } from 'uuid';
import Form from '../form.js';
import List from '../list/list';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log('item:', item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
    // console.log('list::::',list);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
    // console.log(`items after delete :${list}`);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    // console.log('incompleteCount',incompleteCount);
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <br /> <br />
      <header>
        <h1 style={{textAlign:'center'}}>To Do List: {incomplete} items pending</h1>
      </header>

      <div className="border-div" style ={{margin:"50px", display: "flex", align:"center"}}>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}

      />
      <List 
      list = {list}
      toggleComplete = {toggleComplete}
      deleteItem={deleteItem}

      />
          </div> 


    </>
  );
};

export default ToDo;
