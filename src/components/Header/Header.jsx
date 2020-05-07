import React from 'react'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <section className={style.header}>
            <span><b>TRELLO</b></span>
        </section>
    )
}

export default Header