import styles from './styles.module.css'
import CardArticle from '@/app/ui/CardArticle/CardArticle'
type Props = {}

const Article = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.caption}>
          Check out our latest article
          <div className={styles.line} />
      </div>
      <div className={styles.cardContainer}>
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </div>
      <div className={styles.conBut}>
        <div className={styles.button}>View all</div>
      </div>
    </div>
  )
}

export default Article