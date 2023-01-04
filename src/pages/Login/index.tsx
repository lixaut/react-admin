
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
        {/* 登录标题 */}
        <Form.Item>
          <h2>Login</h2>
        </Form.Item>
        {/* 用户名 */}
        <Form.Item
          name="username"
          validateStatus='success'
          hasFeedback
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined/>} placeholder="Username" />
        </Form.Item>
        {/* 密码 */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined/>}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/* 记住我 */}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        {/* 登录 */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          &nbsp;&nbsp;Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login