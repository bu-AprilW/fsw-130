import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
    return (
        <div className="navBar">
            <Link className="link1" id="idLink2" to="/movies">
                MOVIES:
            </Link>
            <Link className="link1" id="idLink3" to="/shows">
                SHOWS:
            </Link>
        </div>
    )
}