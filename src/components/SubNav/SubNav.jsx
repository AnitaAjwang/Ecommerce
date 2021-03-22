import React from 'react';
import {SubNavItems} from './SubNavItems';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SubNav = () => {
    return (
        <div className="sub-nav-container">
            <nav className="sub-nav">
                <ul className="ui-flex sub-nav-list">
                    {SubNavItems.map(({id,item}) => (
                        <li key={id}>
                            <a href="#">
                            {item}
                            </a>
                            <ExpandMoreIcon />
                        </li>

                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default SubNav
