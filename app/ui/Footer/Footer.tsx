import React from 'react'
import Menu from '../Menu/Menu'
import styles from './styles.module.css'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.logobox}>
          <div className={styles.logo}>T</div>
          <div className={styles.title}>Trafalgar</div>
        </div>
        <div className={styles.sub}>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
        </div>
        <div className={styles.sub}>
          ©Trafalgar PTY LTD 2020. All rights reserved
        </div>
      </div>
      <Menu head='Company' sub1='About' sub2='Testimonials' sub3='Find a doctor' sub4='Apps'/>
      <Menu head='Region' sub1='Indonesia' sub2='Hongkong' sub3='Canada' sub4='Singapore'/>
      <Menu head='Help' sub1='Help center' sub2='Contact support' sub3='Instructions' sub4='How it works'/>
    </div>
  )
}

export default Footer