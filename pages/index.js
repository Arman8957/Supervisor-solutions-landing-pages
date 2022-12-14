import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'
import Body1 from '../components/Body1'
import Body2 from '../components/Body2'
import Body3 from '../components/Body3'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Supervisor solutions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/monogram.ico" />
      </Head>
  
    <Navbar />
    <Body />
    <Body1 />
    <Body2/>
    <Body3/>
   
  <Footer />


    </div>
  )
}
