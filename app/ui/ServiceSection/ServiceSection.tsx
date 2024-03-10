import CardItem from "@/app/ui/CardItem/CardItem"
import styles from "./styles.module.css"
type Props = {}

const ServiceSection = (props: Props) => {
  return (
    <div className={styles.our_services}>
      <div className={styles.title_box}>
        <div className={styles.head}>
          Our services
        </div>
        <div className={styles.line_section}>
          <div className={styles.line}/>
        </div>
        <div className={styles.detail}>
          We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </div>
      </div>
      <div className={styles.card_section}>
        <CardItem icon="/icon.svg" title="Search doctor" detail="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
        <CardItem icon="/icon.svg" title="Search doctor" detail="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
        <CardItem icon="/icon.svg" title="Search doctor" detail="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      </div>
      <div className={styles.card_section}>
        <CardItem icon="/icon.svg" title="Search doctor" detail="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
        <CardItem icon="/icon.svg" title="Search doctor" detail="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
        <CardItem icon="/icon.svg" title="Search doctor" detail="Choose your doctor from thousands of specialist, general, and trusted hospitals"/>
      </div>
      <div className={styles.line_section}>
        <div className={styles.button}>Learn more</div>
      </div>
    </div>
  )
}

export default ServiceSection