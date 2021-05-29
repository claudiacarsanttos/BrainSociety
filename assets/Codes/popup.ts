// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Component.EventHandler)
    yesEventHandler:cc.Component.EventHandler = null;

    @property(cc.Component.EventHandler)
    noEventHandler:cc.Component.EventHandler = null;

    showWindow(){

        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;

        cc.tween(this.node)
        .to(0.1,{scale:1, opacity:255 },{easing: "quartInOut"})
        .start();

    }

    hideWindow(){

        cc.tween(this.node)
        .to(0.1,{scale:0.2, opacity:0 },{easing: "quartInOut"})
        .call(() => {this.node.active = true})
        .start();

    }

    yesClicked(){

        // desabilita janela
        this.hideWindow();

    }

    noClicked(){

        // desabilita janela
        this.hideWindow();
        
    }
}
