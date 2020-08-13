import React from 'react';
import {Link} from 'gatsby';

import styles from './nav-link-styles.module.css'

const Nav = () => {
    return (
        <div className={styles.nav_list}>
            <Link to="/" className={styles.nav_item}>Home</Link> 
            <Link to="/about/" className={styles.nav_item}>About</Link> 
            <Link to="/page-2/" className={styles.nav_item}>page 2</Link> 
        </div>
    )
}

export default Nav;
