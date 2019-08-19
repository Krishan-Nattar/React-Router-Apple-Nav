import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props){
    return (
        <div>
            <Link to={`/${props.index}`}>{props.item}</Link>
        </div>
    );
}

export default Nav;