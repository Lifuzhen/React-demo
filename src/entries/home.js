/**
 * Created by toutyio on 2017/11/16.
 */
import React from "react";
import {message,Button} from "antd";

class home extends React.Component{

    click(){
        message.success("成功按钮被点点击");
    }

    render(){
        return <div style={{padding:"24px"}}>
            <h1>这是所有页面的开始文件</h1>
            <Button type="primary" onClick={this.click.bind(this)}>成功</Button>
        </div>
    }


}
export default home;
