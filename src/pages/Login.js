import React, { useState, useContext } from 'react';
import { withRouter } from "react-router-dom";
import Breadcrumb from '../components/Breadcrumb';
import Subbanner from '../components/Subbanner';
import { useLoginForm } from '../components/FormElements/useLoginForm';
import FormItem from '../components/Forms';
import { LoginContext } from '../contexts/LoginContext';
import { responseMessage } from '../config/utils';
import { Form, Input, Button, Spin } from 'antd';

import "../styles/login.scss";
import "../styles/radio-check.scss";

const Login = ({history}) => {
  const {setUserInfo} = useContext(LoginContext);
  const [ loading, setLoading] = useState(false);


  const formElement = useLoginForm();

  const onFinish = (values) => {
    setLoading(true);
    setUserInfo(values).then(() => {
      setTimeout(() => {
        responseMessage({type: "success", message: "Member Login Successful",  description: `Welcome ${values.username}`})
        
        history.push("/")
      }, 2000);
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    { loading && 
    <> 
      <div className="loading">
        <Spin  size="large"/>
      </div>
    </>
    }
      <Breadcrumb />
      <Subbanner title="Login" />
      <div className='page-content'>
        <div className='container-fluid'>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Form
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <FormItem
                  {...formElement.userName}
                >
                  <Input />
                </FormItem>

                <FormItem
                  {...formElement.password}
                >
                  <Input.Password />
                </FormItem>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
