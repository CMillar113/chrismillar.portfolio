import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.width}>
    <div className={styles.container}>
      <Head>
        <title>Chris Millar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>
          Hey, I'm Chris!
        </h1>
        


        <div className={styles.grid}>
  

          <p className={styles.para}>A recent software development graduate eager to kickstart his career.<br/> <br/>
           I am actively looking for a software engineering position within an ambitious product-focused company that 
            can offer development training, project based learning and career progression opportunities.</p>
            
            <a
            href="cv.pdf" download
            className={`${styles.card} ${styles.orange}`}
          >
            <h2>Download CV &rarr;</h2>
            <p>Check out my CV!</p>
          </a>

          <a href="https://shorturl.at/DFO69" className={`${styles.card} ${styles.blue}`}>
            <h2>LinkedIn &rarr;</h2>
            <p>Connect with me on LinkedIn.</p>
          </a>

          <a
            href="https://github.com/cmillar113" 
            className={`${styles.card} ${styles.green}`}
          >
            <h2>Github &rarr;</h2>
            <p>Check out my github!</p>
          </a>

          <a
            href="mailto:c.millar.113@gmail.com"
            className={`${styles.cardFull} ${styles.yellow}`}
          >
            <h2>Contact me</h2>
            <p>I'm always keen to expand my network. Let's grab a coffee!</p>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>

      {/* <Image src="/carbon.png" alt='Intro' width={600} height={200}/> */}
      </footer>
    </div>
    </div>
  )
}
export default Home
