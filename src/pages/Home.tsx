import { Layout, Row, Divider, Typography } from 'antd';
import { ProductCard } from '../components/ProductCard';
import items from '../data/mockData';

const { Content } = Layout;
const { Paragraph } = Typography;

function Home() {
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content>
          <h1>Buy Scuba Diving Equipment Online</h1>
          <Divider orientation="left">How to buy</Divider>
          <Paragraph>We will continue to provide our customers with everything they love about diving.</Paragraph>
          <Row justify="start" gutter={[40, 16]}>
            {items.map((item) => {
              return (
                <ProductCard
                  key={item.itemId}
                  itemId={item.itemId}
                  itemName={item.itemName}
                  itemDescription={item.itemDescription}
                  itemImage={item.itemImage}
                  itemPrice={item.itemPrice}
                />
              );
            })}
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default Home;
