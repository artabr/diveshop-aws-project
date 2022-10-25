import { Layout, Row, Col, Divider, Typography } from 'antd';

const { Content } = Layout;
const { Paragraph } = Typography;

export function About() {
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content>
          <h1>About Us</h1>
          <Row align="middle" justify="space-between">
            <Col md={12} sm={24}>
              <Divider orientation="left">Policy</Divider>
              <Paragraph>
                If you buy from an authorized dealer, you will be notified in the event of a safety recall.
              </Paragraph>
              <Divider orientation="left">Terms</Divider>
              <Paragraph>
                All items offered for sale are subject to availability. Many items on our Web site or catalog site come
                from various sources.
              </Paragraph>
            </Col>
            <Col
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
              md={12}
              sm={24}
            >
              <img
                alt="Shopping Cart "
                style={{ paddingBottom: 20 }}
                src="https://img.icons8.com/color/240/000000/shopaholic.png"
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
