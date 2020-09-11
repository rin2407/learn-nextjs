import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App edit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/login">
          <a>Login</a>
      </Link>
      <Link href="/user/10">
          <a>User</a>
      </Link>
    </div>
  )
}
export default Home;