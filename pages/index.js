import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Encontre a Mimo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1  className={inter.className}>Encontra a Mimo</h1>
      <h2  className={inter.className}>Mimo es un gato con la cola atigrada gris y tiene los ojos como en la foto </h2>
      <h3  className={inter.className}>Recompensa $65,000 pesos argentinos</h3>
      <h4  className={inter.className}>Contacto unicamente por whatsapp y con video de Mimo a +54 9 1127798964, o correo a joelmatiasduran@gmail.com</h4>
      <h5 className={inter.className}> gracias!</h5>
      <Image src="/Mimo.jpg" alt="mimo" height="500" width="600"  />     
      <Image src="/mimo2.jpg" alt="mimo" height="500" width="600" />     
       </main>
    </>
  )
}
