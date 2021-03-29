import {useState,useEffect} from 'react';
import {SubNavItems} from './SubNavItems';
import {FaBars,FaTimes} from 'react-icons/fa';

const SubNav = () => {
    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(!show);
    }
    return (
        <section id="subNav">
            <div className="sub-nav-container">
            <nav className="sub-nav">
                <ul className={`ui-flex sub-nav-list ${show && "sub-nav-show"}`}>
                    {SubNavItems.map(({id,item}) => (
                        <li key={id}>
                            <a href="#">
                            {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hamburger" onClick={showHandler}>{show ? <FaTimes/> : <FaBars/> }</div>
            </nav>
        </div>
        </section>

    )
}

export default SubNav
