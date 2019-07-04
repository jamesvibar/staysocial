import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout>
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "50px 50px 0" }}>
        <div style={{ background: "#FFF", padding: 24, minHeight: 280 }}>
          StaySocial PH Prototype
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        StaySocial PH Prototype ©2019
      </Footer>

      <style jsx>{`
        .logo {
          width: 100px;
          height: 31px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px 24px 16px 0;
          float: left;
        }
      `}</style>
    </Layout>
  );
}
