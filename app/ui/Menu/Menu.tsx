import styles from './styles.module.css'

type Props = {
  head: string;
  sub1: string;
  sub2: string;
  sub3: string;
  sub4: string;
}

const Menu = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        {props.head}
      </div>
      <div >
        <div className={styles.sub}>
          {props.sub1}
        </div>
        <div className={styles.sub}>
          {props.sub2}
        </div>
        <div className={styles.sub}>
          {props.sub3}
        </div>
        <div className={styles.sub}>
          {props.sub4}
        </div>
      </div>
    </div>
  )
}

export default Menu