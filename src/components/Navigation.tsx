import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { ShoppingCartOutlined, HomeOutlined, UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type MenuPropsElement<T> = T extends (infer U)[] ? U : null;
type MenuItem = MenuPropsElement<MenuProps['items']> & {
  route?: string;
};

const items: MenuItem[] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    route: '/'
  },
  {
    label: 'Cart',
    key: 'cart',
    icon: <ShoppingCartOutlined />,
    route: '/cart'
  },
  {
    label: 'About',
    key: 'about',
    route: '/about'
  },
  {
    label: 'Upload',
    key: 'upload',
    route: '/upload',
    icon: <UploadOutlined />
  }
];

function Navigation() {
  const navigate = useNavigate();

  function handleMenuClick({ key }: { key: string }) {
    const url = items.find((item) => item.key === key)?.route;
    if (url) navigate(url);
  }

  return <Menu theme="dark" mode="horizontal" items={items} onClick={handleMenuClick} />;
}

export default Navigation;
