import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 function ItemDetail({ match }){

  useEffect(() => {
    fetchItem()
    console.log(match)
  },[]);

     const [item, setItem] = useState({});
     const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item)
        console.log(item);
       
     }
     

        return (
            <div>
              <h1>{item.title}</h1>
            </div>
        )
}
export default ItemDetail;
