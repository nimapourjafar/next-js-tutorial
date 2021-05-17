import React from 'react'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
        
    )
}

export default Layout
