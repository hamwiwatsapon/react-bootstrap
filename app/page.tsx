import localFont from 'next/font/local'
import Header from '@/app/ui/Header/Header';
import ServiceSection from '@/app/ui/ServiceSection/ServiceSection';
import ContentCard from '@/app/ui/ContentCard/ContentCard';
import Slider from '@/app/ui/Slider/Slider';
import Article from '@/app/ui/Article/Article';
import Footer from '@/app/ui/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'
import Image from 'next/image';
const muliFont = localFont({ src: './font/Muli.ttf'})

const Home = () => {
  return (
    <main className={muliFont.className}>
      <div className={styles.main}>
        <Header />
        <ServiceSection />
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
        <Slider />
        <Article />
        <Footer  />
        <Image className={styles.bg} src="/background.svg" alt="homeBG" width={132} height={115}/>
      </div>
    </main>
  );
}

export default Home
