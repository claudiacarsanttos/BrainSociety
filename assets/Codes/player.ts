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

    @property
    jump:number = 0;

    @property(cc.AudioClip)
    jumpSound:cc.AudioClip = null;

    makePlayerJump(event){
        /*switch(event.keyCode){
            case cc.macro.KEY.space:
                this.addForce();
                
                break;
        }*/

        // Ao clicar na personagem chama a função addForce
        this.node.on('touchstart', function (){
            this.addForce();
        }, this);
    }

    addForce(){
        if(this.jump == 0){
            // Adiciona o som quando a personagem pular
            cc.audioEngine.playEffect(this.jumpSound,false);
            this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0,40000),true);
            this.jump = 1;
        }
    }

    onBeginContact(contact,selfCollider,otherCollider){
        if(otherCollider.name == 'image01<PhysicsBoxCollider>'){
            this.jump = 0;
        }
        if(otherCollider.name == 'image02<PhysicsBoxCollider>'){
            this.jump = 0;
        }
        if(otherCollider.name == 'image03<PhysicsBoxCollider>'){
            this.jump = 0;
        }
        if(otherCollider.name == 'image04<PhysicsBoxCollider>'){
            this.jump = 0;
        }
        if(otherCollider.name == 'image05<PhysicsBoxCollider>'){
            this.jump = 0;
        }
        if(otherCollider.name == 'image06<PhysicsBoxCollider>'){
            this.jump = 0;
        }
        // Ao chegar na imagem theEnd o jogo irá chamar a próxima cena finish 
        if(otherCollider.name == 'theEnd<PhysicsBoxCollider>'){
            cc.director.loadScene('finish');
        }
        if((otherCollider.name == 'chest_gold01<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold02<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold03<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold04<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold05<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold06<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold07<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold08<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold09<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold10<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold11<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold12<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold13<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold14<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold15<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold16<PhysicsBoxCollider>') 
            || (otherCollider.name == 'chest_gold17<PhysicsBoxCollider>')
            || (otherCollider.name == 'chest_gold18<PhysicsBoxCollider>')
        ){
            // pausa todo o jogo
            cc.director.pause();
        }
        // Ao chegar no zombie o jogo irá chamar a próxima cena gamer 
        if((otherCollider.name == 'zombie01<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie02<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie03<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie04<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie05<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie06<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie07<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie08<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie09<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie10<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie11<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie12<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie13<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie14<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie15<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie16<PhysicsBoxCollider>') 
            || (otherCollider.name == 'zombie17<PhysicsBoxCollider>')
            || (otherCollider.name == 'zombie18<PhysicsBoxCollider>')
        ){
            cc.director.loadScene('gamer');
        } 
    }  

    onLoad () {
        // Realizar o pula da personagem
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.makePlayerJump,this);
        this.node.on('touchstart',this.addForce,this);

        // Chama a pré-cena gamer
        cc.director.preloadScene('gamer');
    }

    start () {

    }

    // update (dt) {}

}
