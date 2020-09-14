import React,{useEffect,useState,useMemo} from 'react';
import PropTypes from 'prop-types';

function Login() {
    const [data, setData] = useState('gia tri dau')
    const [user, setUser] = useState({
        firstName: 'join',
        lastName: 'smith'
    })
    useEffect(() => {
       console.log('effect login')
    }, [])
    function handleClick(){
        setData('gia tri click');
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
                   <input type="text" />
              </div>
              <div className="login-password">
                  <lable>password</lable>
                  <input type="password" />
              </div>
              <div>
                  <button onClick={handleClick}>onClick</button>
              </div>
        </div>
    );
}

export default Login;