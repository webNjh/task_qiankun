import React from 'react';
import { MicroApp } from 'umi';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export default () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        <MicroApp name='app1'/>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <MicroApp name='app2'/>
          <MicroApp name='app3'/>
        </div>
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}
