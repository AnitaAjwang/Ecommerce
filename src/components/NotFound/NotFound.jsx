import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section id="not-found">
            <div className="mainbox">
                <div className="not-found-div ui-text-center">
                    <p>4 <span><i className="far fa-question-circle fa-spin"></i></span> 4</p>
                </div>
                <div className="msg">Maybe this page moved? Got deleted?
                    <p>Let's go <Link to="/">HOME</Link> and try from there.</p></div>
            </div>
        </section>
    )
}

export default NotFound;
