import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';


function NavWrapper(props){

    return (
        <div className="blackLine">
            <nav className="navigation">
                {props.list.map((item, index)=>{
                    return <Nav item={item} key={index} index={index}/>
                })}
            </nav>
        </div>
        
    );
}

export default NavWrapper;