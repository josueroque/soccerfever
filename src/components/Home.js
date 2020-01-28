import React, { Fragment,useSelector,useState } from 'react';
import Navbar from './Navbar';
import List from './List';
import Countries from './Country';
function Home(){
  
    return(
        <Fragment>
            <Navbar></Navbar>
            <h1>Welcome to our Soccer Stats Web</h1>
            <h3>Pick a country and enjoy!</h3>
            <List></List>
        </Fragment>
    )
}

export default Home;
