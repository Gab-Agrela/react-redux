import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";

import { IUserdata } from "../Interfaces";
import { validateEmail } from "../Utils/funtions";

const LoginForm = () => {

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [userdata, setUserdata] = useState<IUserdata>({
    login_email: '',
    login_password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id)
    setUserdata({
      ...userdata,
      [id]: value,
    });
  };

  useEffect(() => {
    const { login_email, login_password } = userdata;
    const minPasswordLength = 6;

    if (login_password.length >= minPasswordLength && validateEmail(login_email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userdata]);

  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password onChange={handleChange}/>
     </Form.Item>

     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" disabled={isDisabled}>
        Submit
      </Button>
    </Form.Item>

    </Form>
  );
}

export default LoginForm