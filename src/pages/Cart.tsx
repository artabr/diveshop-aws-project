import { Layout, Breadcrumb, Row, Col, Table, Space, Divider, Statistic, Button } from 'antd';
import { CreditCardOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector } from '../redux/hooks';

const { Content } = Layout;

function Cart() {
  const columns = [
    {
      title: 'Id',
      key: 'itemId',
      dataIndex: 'itemId'
    },
    {
      title: 'Name',
      key: 'itemName',
      dataIndex: 'itemName'
    },
    {
      title: 'Price',
      key: 'itemPrice',
      dataIndex: 'itemPrice'
    }
  ];

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <Layout>
        <Content>
          <Breadcrumb>Cart</Breadcrumb>
          <br />
          <Row justify="end">
            <Col>
              <Button type="default" danger>
                <DeleteOutlined />
                &nbsp;
                <span>Delete Cart</span>
              </Button>
            </Col>
          </Row>
          <h2>
            Total Items <strong>({cart.length})</strong>
          </h2>
          <br />
          <Table columns={columns} dataSource={cart} pagination={false} />
          <Divider orientation="right">
            <p>Billing</p>
          </Divider>
          <Row justify="start">
            <Col md={12}>
              <Divider orientation="left">Policy</Divider>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <Divider orientation="left">Terms</Divider>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
          <br />
          <Row justify="end">
            <Col>
              <Statistic title="Total (tax incl)." value="000" precision={2} />
              <Button style={{ marginTop: 16 }} type="primary">
                Pay now <CreditCardOutlined />
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default Cart;
