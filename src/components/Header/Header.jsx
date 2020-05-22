import React from 'react'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <section className={style.header}>
            <h1 className={style.logo}>TRELLO</h1>
        </section>
    )
}

export default Header