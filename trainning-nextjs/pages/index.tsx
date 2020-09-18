import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '../assets/abc.jpg'
import Layout from '../components/Layout'
import HobbyList from '../components/HobbyList'
import { useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import casual from 'casual-browserify'
import {addNewHobby,setStatus} from '../actions/hobbyAction'
function Home() {
  useEffect(() => {
    console.log('use effect')
  }, [])
  const hobbyList = useSelector(state =>state.hobby.list);
  const status= useSelector(state=>state.hobby.status)
  const dispatch = useDispatch();
  const handleAddHobbyClick=()=>{
       const newHobby={
         id: casual.uuid,
         title: casual.title
       }
       const action= addNewHobby(newHobby)
       dispatch(action)
  }
  const handleStatus= ()=>{
    const status='true'
    const action= setStatus(status)
    dispatch(action)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App edit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <h4 onClick={handleStatus}>status: {status}</h4>
      <Link href="/login">
          <button><a>Login</a></button>
      </Link>
      <Link href="/user/10">
          <button><a>User</a></button>
      </Link>
      <Link href="/test-redux">
          <button><a>text-redux</a></button>
      </Link>
      {/* <img src={Image} />
      <img src="/images/image003_vbgj.jpg" /> */}
      <Layout/>
      <h3>Connect with redux</h3>
      <button onClick={handleAddHobbyClick}>Random</button>
      <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  )
}
export default Home;