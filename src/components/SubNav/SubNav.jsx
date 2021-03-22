import React from 'react';
import {SubNavItems} from './SubNavItems';

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
                        </li>

                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default SubNav
