import React from 'react';
import Head from 'next/head'
import LoginComponent from '../../components/Login'
import Link from 'next/link'

function Login() {
    return (
        <div>
            <Head>
            <title>Login</title>
            </Head>
            <h2>
                <Link href="/">
                <a>Back to home</a>
                </Link>
           </h2>
            <LoginComponent/>
        </div>
    );
}

export default Login;