/**
 * Created by toutyio on 2017/11/16.
 */
import React from "react";
import {message, Button, Tooltip} from "antd";

class home extends React.Component{

    click(){
        message.success("成功按钮被点击");
    }
    clickWarning(){
        message.warning("警告")
    }
    render(){
        return <div style={{padding:"24px"}}>
            <h1>这是所有页面的开始文件</h1>
            <Button type="primary" onClick={this.click.bind(this)}>成功</Button>
            <Button type="warning" onClick={this.clickWarning.bind(this)}>警告</Button>
            <Tooltip title="字体图标">
                <i className="iconfont icon-power"/>
            </Tooltip>
        </div>
    }


}
export default home;
