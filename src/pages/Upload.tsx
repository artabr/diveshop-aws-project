import { Layout, Row, Col, Divider, Typography, message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';

const { Content } = Layout;
const { Paragraph } = Typography;
const { Dragger } = Upload;

const token = localStorage.getItem('token');

const props: UploadProps = {
  name: 'file',
  accept: '.csv,text/csv',
  method: 'put',
  showUploadList: false,
  multiple: false,
  beforeUpload: async (file) => {
    console.log(file);

    try {
      const response = await (
        await fetch('https://8xxzwg30o7.execute-api.eu-central-1.amazonaws.com/import', {
          method: 'GET',
          headers: {
            Authorization: `Basic ${token}`
          }
        })
      ).json();

      const src = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
      });
      console.log(src);

      const binary = atob(src.split(',')[1]);
      const array: number[] = [];

      [...binary].forEach((char) => {
        array.push(char.charCodeAt(0));
      });

      const blobData = new Blob([new Uint8Array(array)], { type: 'text/csv' });

      await fetch(response.uploadURL, {
        method: 'PUT',
        body: blobData
      });
    } catch (e) {
      console.log(e);
    }

    return false;
  }
};

export function UploadCSV() {
  return (
    <div>
      <Layout style={{ padding: '24px 0' }}>
        <Content>
          <h1>Upload Products</h1>
          <Row align="middle" justify="space-between">
            <Col md={12} sm={24}>
              <Paragraph>Please select the CSV file with the products to upload.</Paragraph>
              <Divider orientation="left">Upload CSV</Divider>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
                </p>
              </Dragger>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}
