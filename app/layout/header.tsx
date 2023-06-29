//css
import styles from '../styles/header.module.css'
import React from 'react'
import Inicio from '../pages/inicio'
import Sobre from '../pages/sobre'
import Contato from '../pages/contato'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
      <h1>LOGO</h1>
      <h2>Melhorando a cada dia</h2>
      </div>
      <nav className={styles.nav}>
        <Inicio/>
        <Sobre/>
        <Contato/>

      </nav>
    </header>
  )
}
