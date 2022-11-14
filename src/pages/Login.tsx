import { Layout, Row, Col, Divider, Typography, Form, Input, Button } from 'antd';

const { Content } = Layout;
const { Paragraph } = Typography;

export function Login() {
  const onFinish = (values: any) => {
    console.log('Creds:', values);
    const plainCreds = `${values.username}:${values.password}`;
    const encodedCreds = btoa(plainCreds);
    localStorage.setItem('token', encodedCreds);
    console.log('Success:', encodedCreds);
  };

  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content>
          <h1>Login</h1>
          <Row align="middle" justify="space-between">
            <Col md={12} sm={24}>
              <Divider orientation="left">Enter account credentials</Divider>
              <Paragraph>Please enter the account credentials in the from below.</Paragraph>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
