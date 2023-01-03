
import React from "react"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import style from './login.module.scss'

const Login: React.FC = () => {

  const onFinish = () => {}

  return (
    <div className={style.login}>
      <Form
        wrapperCol={{ span: 24 }}
        size="large"
        name="normal_login"
        className={style.form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
        >
          <h2>Login</h2>
        </Form.Item>
        <Form.Item
          name="username"
          validateStatus='success'
          hasFeedback
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          &nbsp;&nbsp;Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login