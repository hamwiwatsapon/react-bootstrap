import localFont from 'next/font/local'
import Header from '@/app/ui/Header/Header';
import ServiceSection from '@/app/ui/ServiceSection/ServiceSection';
import ContentCard from '@/app/ui/ContentCard/ContentCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'
import Image from 'next/image';
const muliFont = localFont({ src: './font/Muli.ttf'})

const Home = () => {
  return (
    <main className={muliFont.className}>
      <div className={styles.main}>
        <Header />
        <Image className={styles.bg_dot} src="/homeBgDot.svg" alt="homeBG" width={132} height={115}/>
        <ServiceSection />
        <Image className={styles.bg_curve} src="/homeBG.svg" alt="homeBG" width={1119} height={968}/>
        <ContentCard 
        image="/homeSecond.svg"
        title="Leading healthcare providers" 
        detail="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
        in the solutions we deliver" 
        button="Learn more"
        direction="reverse"
        />
        <ContentCard 
        image="/homeThird.svg"
        title="Download our mobile apps" 
        detail="Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely" 
        button="Download"
        direction=""
        />
        
      </div>
    </main>
  );
}

export default Home
