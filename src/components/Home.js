import React, { Fragment } from 'react';
import Navbar from './Navbar';
import List from './List';
function Home(){
    return(
        <Fragment>
            <Navbar></Navbar>
            <List></List>
        </Fragment>
    )
}

export default Home;
