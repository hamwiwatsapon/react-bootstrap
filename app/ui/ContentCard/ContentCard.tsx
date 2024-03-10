import { Image } from "react-bootstrap"
import styles from "./styles.module.css"

type Props = {
  title: string;
  detail: string;
  button: string;
  direction: string;
  image: string
}

const ContentCard = (props: Props) => {
  if (props.direction == "reverse") {
    return (
      <div className={styles.card}>
        <div className={styles.image_reverse}>
          <Image alt={props.image} src={props.image} width={693} height={598}/>
        </div>
        <div>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.detail}>{props.detail}</p>
          <div className={styles.button}>{props.button}</div>
        </div>
    </div>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.detail}>{props.detail}</p>
        <div className={styles.button}>{props.button}</div>
      </div>
      <div>
        <Image alt={props.image} src={props.image} width={693} height={598}/>
      </div>
  </div>
  )
}

export default ContentCard