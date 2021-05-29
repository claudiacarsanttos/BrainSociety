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

    /*onPause (){
        if(cc.director.isPaused()){

            // continua todo o jogo
            cc.director.resume();

        }else{

            // pausa todo o jogo
            cc.director.pause();

        }
    }*/

    onPause (){

        // pausa todo o jogo
        cc.director.pause();

    }

    offPause (){

        // continua todo o jogo
        cc.director.resume();
        
    }
}
