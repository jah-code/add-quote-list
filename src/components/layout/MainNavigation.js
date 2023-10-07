import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <NavLink className={classes.logo} to="/">Great Quotes</NavLink>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" className={(navData) => navData.isActive ? classes.active : ''}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quote" className={(navData) => navData.isActive ? classes.active : ''}>
                            Add Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
