import { Layout, Row, Divider, Typography } from 'antd';
import { ProductCard } from '../components/ProductCard';
import { useGetProductsQuery } from '../features/products/productsApi';

const { Content } = Layout;
const { Paragraph } = Typography;

function Home() {
  const { data = [] } = useGetProductsQuery();

  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content>
          <h1>Buy Scuba Diving Equipment Online</h1>
          <Divider orientation="left">How to buy</Divider>
          <Paragraph>We will continue to provide our customers with everything they love about diving.</Paragraph>
          <Row justify="start" gutter={[40, 16]}>
            {data.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  itemId={item.id}
                  itemName={item.title}
                  itemDescription={item.description}
                  itemImage={item.image}
                  itemPrice={item.price}
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
