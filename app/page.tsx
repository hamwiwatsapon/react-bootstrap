import localFont from 'next/font/local'
import Header from '@/app/ui/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'
import Image from 'next/image';
const muliFont = localFont({ src: './font/Muli.ttf'})

const Home = () => {
  return (
    <main className={muliFont.className}>
      <div className={styles.main}>
        <Image className={styles.bg_dot} src="/homeBgDot.svg" alt="homeBG" width={132} height={115}/>
        <Header />
        
        <Image className={styles.bg_curve} src="/homeBG.svg" alt="homeBG" width={1119} height={968}/>
      </div>
    </main>
  );
}

export default Home
