import {  Form, Row, Typography, Input, Button } from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../src/assets/img/logo.svg'


const {Title} = Typography;

export const SignIn = () => {
    const[setToken] = useAuth(true)
    const[error, setError] = useState(null)
    const handleLogin = async (evt) => {
        const res = await fetch(process.env.REACT_APP_API + '/api/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(evt)
        })  
        if (res.ok) {
            const token = await res.json()
            return setToken(token)
        }
        setError(true)
        alert('eve.holt@reqres.in')
    };

    return(
        <>
             <Link to='/'>
                    <img src={logo} alt="Site Logo" />
            </Link>
            <Row justify="center" align="middle" style={{flexDirection: 'column', height: '100vh'}}>
                <Title>Sign in</Title>
                <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item 
                       label="Email"
                       name="email"
                       rules={[
                         {
                           type: "email",
                           message: 'The input is not valid E-mail!',
                         },
                         {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                       ]}>
                        <Input status={error && 'error'} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback>
                        <Input.Password status={error && 'error'} prefix={<LockOutlined />} placeholder="Password"/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">Sign In</Button>
                </Form>
            </Row>
        </>
    )
}