import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Web Dev News</span>
            </h1>
            <p className={headerStyles.description}>Big testing and tings G</p>

        </div>
    )
}

export default Header
