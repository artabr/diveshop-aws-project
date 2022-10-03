import { Route, Routes } from 'react-router-dom';

import { Layout, Divider } from 'antd';

import Navigation from './components/Navigation';
import { Home, Cart, About } from './pages';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Divider type="vertical" />
      <Content style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>&copy; 2022 Art Abramov</Footer>
    </Layout>
  );
}

export default App;
