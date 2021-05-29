"use strict";
cc._RF.push(module, 'f00d7YrtItOkYG0BFk19lOu', 'player');
// Codes/player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jump = 0;
        _this.jumpSound = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.makePlayerJump = function (event) {
        /*switch(event.keyCode){
            case cc.macro.KEY.space:
                this.addForce();
                
                break;
        }*/
        // Ao clicar na personagem chama a função addForce
        this.node.on('touchstart', function () {
            this.addForce();
        }, this);
    };
    NewClass.prototype.addForce = function () {
        if (this.jump == 0) {
            // Adiciona o som quando a personagem pular
            cc.audioEngine.playEffect(this.jumpSound, false);
            this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0, 40000), true);
            this.jump = 1;
        }
    };
    NewClass.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        if (otherCollider.name == 'image01<PhysicsBoxCollider>') {
            this.jump = 0;
        }
        if (otherCollider.name == 'image02<PhysicsBoxCollider>') {
            this.jump = 0;
        }
        if (otherCollider.name == 'image03<PhysicsBoxCollider>') {
            this.jump = 0;
        }
        if (otherCollider.name == 'image04<PhysicsBoxCollider>') {
            this.jump = 0;
        }
        if (otherCollider.name == 'image05<PhysicsBoxCollider>') {
            this.jump = 0;
        }
        if (otherCollider.name == 'image06<PhysicsBoxCollider>') {
            this.jump = 0;
        }
        // Ao chegar na imagem theEnd o jogo irá chamar a próxima cena finish 
        if (otherCollider.name == 'theEnd<PhysicsBoxCollider>') {
            cc.director.loadScene('finish');
        }
        if ((otherCollider.name == 'chest_gold01<PhysicsBoxCollider>')
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
            || (otherCollider.name == 'chest_gold18<PhysicsBoxCollider>')) {
            // pausa todo o jogo
            cc.director.pause();
        }
        // Ao chegar no zombie o jogo irá chamar a próxima cena gamer 
        if ((otherCollider.name == 'zombie01<PhysicsBoxCollider>')
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
            || (otherCollider.name == 'zombie18<PhysicsBoxCollider>')) {
            cc.director.loadScene('gamer');
        }
    };
    NewClass.prototype.onLoad = function () {
        // Realizar o pula da personagem
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.makePlayerJump, this);
        this.node.on('touchstart', this.addForce, this);
        // Chama a pré-cena gamer
        cc.director.preloadScene('gamer');
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property
    ], NewClass.prototype, "jump", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jumpSound", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();