import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Button} from 'antd'
import {Table} from 'antd'
import "./All.css"
function Homepage() {
const [columns, setColumns] = useState([
{
    title: "Product ID",
    dataIndex: "id",
    width: '7%'
},
{
 title: "Product Name",
 dataIndex: "quote" ,
 width: '17%'
},
{
  title: "On Hand QTY",
  dataIndex: "author"
},
{
  title: "Vendor",
  dataIndex: "author"
},
{
  title: "Buying Price",
  dataIndex: "author"
},
{
  title: "Product Category",
  dataIndex: "author"
},
{
  title: "Selling Price",
  dataIndex: "author"
},

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

<header className="hader">Stock Management System</header>



<Table columns={columns} dataSource={dataSource} scroll={{y:420}}></Table>

</div>  

);
}


export default Homepage;