import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"
type Props = {}

const CardArticle = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image className={styles.image} src="/image.png" alt="test" fill/>
      </div>
      <div>
        <h3 className={styles.header}>
          Disease detection, check up in the laboratory
        </h3>
        <p className={styles.detail}>
          In this case, the role of the health laboratory is very important to do a disease detection...
        </p>
        <div className={styles.link}>
          <Link href="#test">
            Readmore
            <Image className={styles.arrowright} width={14.14} height={9} alt="arrow" src="/arrow.svg" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardArticle