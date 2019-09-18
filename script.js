import TabView from "./TabView.js"
import ScrollView from "./ScrollView.js"

import Div from "./Div.js"
import Text from "./Text.js"
function myCreate(Class, attributes, ...children){    
    var object = new Class();
    for(let name in attributes) {
        if(name.match(/^on-([\s\S]*)$/)) {
            //console.log(attributes[name]);
            object.addEventListener(RegExp.$1, attributes[name]);
        }
        object.setAttribute(name, attributes[name]);

    }
        
    for(let child of children) {
        if(typeof child === "string") {
            object.appendChild(new Text(child));
        } else {
            object.appendChild(child);
        }

    }
        
    return object; 
}


function scrolledToBottom(){
    setTimeout(()=> {
        this.setAttribute("bottomText", "已完成");
    }, 1000);
    
}
function scrolledToTop(){
    setTimeout(()=> {
        this.setAttribute("topText", "已刷新");
    }, 1000);
    
}

var c = <TabView style="width:100%;height:100%;">
    <ScrollView on-scrolledToBottom={scrolledToBottom}  on-scrolledToTop={scrolledToTop} bottomText="加载中......" tab-title="推荐" style="-webkit-overflow-scrolling:touch;overflow:scroll;background-color:lightblue;white-space:normal;font-size:50px">
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text

    </ScrollView>
    <ScrollView tab-title="有趣的店"  style="background-color:lightgreen;">
    btext btext btext btext btext btext btext btext btext 
    </ScrollView>
    <ScrollView tab-title="品牌新店" style="background-color:pink;">
    ctextctextctextctextctextctextctextctextctextctextctextctextctextctextctextctext
    </ScrollView>
</TabView>
c.appendTo(document.body);