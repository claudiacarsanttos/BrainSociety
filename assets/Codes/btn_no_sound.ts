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
        // Ao clicar no ícone sem som desabilita o som do jogo
        
        this.node.on('touchstart', function (){
            cc.audioEngine.stopAll();
        });
    }

    start () {

    }

    // update (dt) {}
}
