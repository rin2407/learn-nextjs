import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '../assets/abc.jpg'
import Layout from '../components/Layout'
import { useEffect } from 'react'
function Home() {
  useEffect(() => {
    console.log('use effect')
  }, [])
  console.log('render');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App edit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/login">
          <button><a>Login</a></button>
      </Link>
      <Link href="/user/10">
          <button><a>User</a></button>
      </Link>
      <img src={Image} />
      <img src="/images/image003_vbgj.jpg" />
      <Layout/>
    </div>
  )
}
export default Home;