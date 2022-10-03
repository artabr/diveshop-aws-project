import { Card, Col, Row, Button, Divider } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../redux/hooks';
import { Product } from '../data/types';
import { addCartItem } from '../features/cart/cartSlice';

export type ProductCardProps = Product;

export function ProductCard({ itemId, itemName, itemPrice, itemDescription, itemImage }: ProductCardProps) {
  const dispatch = useAppDispatch();

  function handleAddClick() {
    dispatch(
      addCartItem({
        itemId: 0,
        itemPrice: 400,
        itemQuantity: 1
      })
    );
  }

  return (
    <Col key={itemId} md={8}>
      <Card
        hoverable
        style={{ padding: 10 }}
        cover={<img height="320px" width="280px" alt="example" src={itemImage} />}
      >
        <Card.Meta title={<h2>{itemName}</h2>} description={itemDescription} />
        <br />
        <Divider orientation="center">Price</Divider>
        <p
          style={{
            lineHeight: '28px',
            fontWeight: 'lighter',
            fontSize: '46px',
            color: '#2ecc71',
            textAlign: 'center'
          }}
        >
          {itemPrice}
        </p>
        <Row gutter={10}>
          <Col>
            <Button title="Add item to cart" type="primary" onClick={handleAddClick}>
              Add to cart
            </Button>
          </Col>
          <Col>
            <Button title="Remove item from cart" type="primary" danger>
              <DeleteOutlined />
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
