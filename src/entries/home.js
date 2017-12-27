/**
 * Created by toutyio on 2017/11/16.
 */
import React from "react";
import {message, Button, Tooltip, Radio, Icon, Dropdown, Menu, Affix, Breadcrumb} from "antd";

class home extends React.Component{
    state = {
        size: 'large',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

     handleMenuClick(e) {
        console.log('click', e);
     }

    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        const size = this.state.size;
        return <div className="home">
            <h1>这是所有页面的开始文件</h1>
            <div>
                <Button type="primary">primary</Button>
                <Button>default</Button>
                <Button type="dashed">dashed</Button>
                <Button type="danger">danger</Button>
            </div>
            <div>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">search</Button>
                <Button type="danger" shape="circle" icon="search" />
            </div>
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange.bind(this)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type="primary" size={size}>Primary</Button>
                <Button size={size}>Normal</Button>
                <Button type="dashed" size={size}>Dashed</Button>
                <Button type="danger" size={size}>Danger</Button>
                <br />
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Button type="primary" icon="download" size={size}>Download</Button>
                <br />
                <Button.Group size={size}>
                    <Button type="primary">
                        <Icon type="left" />Backward
                    </Button>
                    <Button type="primary">
                        Forward<Icon type="right" />
                    </Button>
                </Button.Group>
            </div>
            <div>
                <Dropdown overlay={menu}>
                    <Button>
                        Actions <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
            <div className="home-bgColor">
                <p>幽灵按钮</p>
                <Button type="primary" ghost>primary</Button>
                <Button ghost>Default</Button>
            </div>

            <hr/>
            <div>
                <Tooltip title="taobao">
                    <a href="http://www.taobao.com"><Icon type="taobao-circle"/></a>
                </Tooltip>
                <Tooltip title="weibo">
                    <Icon type="meh" />
                </Tooltip>
                <Icon type="smile-o" />
                <Icon type="smile" />
                <Icon type="appstore" />
            </div>
            <div>
                <Affix offsetBottom={0}><Button type="primary">Affix bottom</Button></Affix>
                <Affix offsetTop={20}><Button>20px to affix top</Button></Affix>
            </div>

            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>

        </div>
    }
}
export default home;
