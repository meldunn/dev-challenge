import React from 'react';
import {Link} from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import NavBar from '../components/Nav';
import Centerpiece from '../components/Centerpiece';

export default function Welcome() {
    return (
        <div>
            <NavBar></NavBar>
           <Centerpiece></Centerpiece>
        </div>
    )
}
