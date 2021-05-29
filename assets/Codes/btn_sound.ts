// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioClip)
    myMusic: cc.AudioClip = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // Ao clicar no ícone som habilita o som do jogo
        // Parâmetro: som, repetição, volume
        
        this.node.on('touchstart', function (){
            cc.audioEngine.play(this.myMusic, true, 0.3);
        }, this);
    }

    start () {

    }
}