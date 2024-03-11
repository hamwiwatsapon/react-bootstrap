import styles from './styles.module.css'
import CardSlide from '../CardSlide/CardSlide'
import Image from 'next/image'

const Slider = () => {
  return (
    <div className={styles.container}>
      <CardSlide 
        image='/founder.png' 
        title='What our customer are saying'
        detail='“Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely”'
        company='Founder Circle'
        name='Edward Newgate'
      />
      <div className={styles.slice}>
        <Image
          className={styles.arrow}
          src='/arrow.svg' 
          width={28} 
          height={18}
          alt='arrow'
        />
        <Image 
          className={styles.dot}
          src='/dot.svg' 
          width={10} 
          height={10}
          alt='arrow'
        />
        <Image 
          className={styles.arrowright} 
          src='/arrow.svg' 
          width={28} 
          height={18}
          alt='arrow'
        />
      </div>
    </div>
  )
}

export default Slider