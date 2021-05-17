import React from 'react'
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            <div className={styles.container}>
                <Header></Header>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </div>
        
    )
}

export default Layout
