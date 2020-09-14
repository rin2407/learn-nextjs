import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '../assets/abc.jpg'
import Layout from '../components/Layout'
function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App edit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={Image} />
      <img src="/images/image003_vbgj.jpg" />
      <Link href="/login">
          <a>Login</a>
      </Link>
      <Link href="/user/10">
          <a>User</a>
      </Link>
      <Layout/>
    </div>
  )
}
export default Home;