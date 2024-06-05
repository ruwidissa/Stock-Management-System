import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Button} from 'antd'
import {Table} from 'antd'

function Homepage() {
const [columns, setColumns] = useState([
  {
    title: "Product ID",
    dataIndex: "id"
  },
{
 title: "Quote",
 dataIndex: "quote" 
},
{
  title: "Author",
  dataIndex: "author"
},
{
  title: "New Author",
  dataIndex: "author"
}

]);


const [dataSource, setDataSource] = useState([]);

useEffect(() => {

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then((result) => {
  setDataSource(result.quotes)

});})




return(

<div>

<Table columns={columns} dataSource={dataSource} scroll={{y:520}}></Table>

</div>  
       
);
}


export default Homepage;