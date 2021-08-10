import React from 'react';
import classes from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={classes.nav}>
            <div>
                <a href="/Profile" className={classes.item}>Profile</a>
            </div>
            <div>
                <a href="/Dialogs" className={classes.item}>Messages</a>
            </div>
            <div>
                <a href="/News" className={`${classes.item} ${classes.and}`}>News</a>
            </div>
            <div>
                <a href="/Musics" className={classes.item}>Music</a>
            </div>
            <div>
                <a href="/Settings" className={classes.item}>Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;