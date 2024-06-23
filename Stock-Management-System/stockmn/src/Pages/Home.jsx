import React, { useState } from "react";
import { Link, Route } from 'react-router-dom';
import {Button} from 'antd'
import {Table} from 'antd'

function Home() {

const [loading, setLoading] = useState(false)

const onButtonClick=(e)=>{
    console.log('clickesd')
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000);



}

return(

<div>

<Button type='primary' loading={loading} onClick={onButtonClick}> New </Button>


</div>  
       
);
}

export default Home;