import react from '@assets/react.svg';
import antd from '@assets/antd.svg';
import vite from '@assets/vite.svg';
import { useState } from 'react';
import { Button, Layout, Avatar, Typography, Col, Row } from 'antd';

const { Content } = Layout;
const { Title, Paragraph, Link } = Typography;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }}
    >
      <Content>
        <Row
          style={{
            height: '100%'
          }}
          align="middle"
        >
          <Col span={12} offset={6}>
            <Avatar size={64} src={vite} />
            <Avatar size={64} src={react} />
            <Avatar size={64} src={antd} />
            <Title>Hello Vite + React + Ant Design!</Title>
            <Paragraph>
              <Button type="primary" onClick={() => setCount((count) => count + 1)}>
                count is: {count}
              </Button>
            </Paragraph>
            <Paragraph>
              Edit <code>App.tsx</code> and save to test HMR updates.
            </Paragraph>
            <Paragraph>
              <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </Link>
              {' | '}
              <Link href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                Vite Docs
              </Link>
            </Paragraph>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
