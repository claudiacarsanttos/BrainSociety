// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // Ao clicar no ícone chama a próxima cena main
        
        this.node.on('touchstart', function (event){
        //this.node.on('mousedown', function(event){
            cc.director.loadScene('main');
        });
    }

    start () {

    }

    // update (dt) {}
}
