import React from 'react';
import style from './index.module.css';

const Navbar = () => {
    return(
        <div className={style.navbar}>
            <div>
                Home
            </div>
            <ul>
                <li>teste1</li>
                <li>teste2</li>
                <li>teste3</li>
            </ul>
            <div>
                End
            </div>
        </div>
    )
}

export default Navbar;