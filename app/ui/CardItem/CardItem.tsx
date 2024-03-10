import React from 'react'
import styles from './styles.module.css'
import { Image } from 'react-bootstrap';

type Props = {
  icon:   string;
  title:  string;
  detail: string;
}

const CardItem = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Image src={props.icon} alt={props.title}/>
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.detail}>{props.detail}</div>
    </div>
  )
}

export default CardItem