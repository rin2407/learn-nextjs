import React,{useEffect,useState,useMemo} from 'react';
import PropTypes from 'prop-types';

function Login() {
    const [data, setData] = useState('gia tri dau')
    const [user, setUser] = useState({
        firstName: 'join',
        lastName: 'smith'
    })
    const [value, setValue] = useState({
        username:'',
        password:''
    });
    const onHandelChange=(event)=>{
        setValue({
          ...value,
          [event.target.name] : event.target.value,
        });    
      }
    useEffect(() => {
       console.log('effect login');
    }, [])
    function handleClick(){
        setData('gia tri click');
        const userLogin= {
            username: value.username,
            password: value.password
        }
        console.log(userLogin)
    }
    const fullName= useMemo(() =>{
        return user.firstName+ ' ' + user.lastName;
    },[user])
    return (
        <div>
            <h4>full name : {fullName}</h4>
            <div className="data">
                <h2>{data}</h2>
            </div>
              <div className="login-username">
                   <lable>User name</lable>
                   <input type="text" name="username" onChange={onHandelChange}/>
              </div>
              <div className="login-password">
                  <lable>password</lable>
                  <input type="password" name="password" onChange={onHandelChange} />
              </div>
              <div>
                  <button onClick={handleClick}>onClick</button>
              </div>
        </div>
    );
}

export default Login;