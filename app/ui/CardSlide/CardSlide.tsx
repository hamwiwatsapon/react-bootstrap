import styles from './styles.module.css'
import Image from 'next/image'

type Props = {
  title: string;
  name: string;
  company: string;
  detail: string;
  image: string;
}

const CardSlide = (props: Props) => {
  return (
      <div className={styles.card}>
        <div className={styles.caption}>
          {props.title}
          <div className={styles.line} />
        </div>
        <div className={styles.content}>
          <div className={styles.profile}>
            <Image 
              className={styles.image}
              src={props.image}
              alt={props.image}
              width={141}
              height={141}
            />
            <div className={styles.detailCon}>
              <h3 className={styles.h3}>{props.name}</h3>
              <p className={styles.detail}>{props.company}</p>
            </div>
          </div>
          <div className={styles.desCon}>
            <p className={styles.detail}>
              {props.detail}
            </p>
          </div>
        </div>
      </div>
  )
}

export default CardSlide