
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXHBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFxSEM7UUFoSEcsVUFBSSxHQUFVLENBQUMsQ0FBQztRQUdoQixlQUFTLEdBQWdCLElBQUksQ0FBQzs7UUEyRzlCLGlCQUFpQjtJQUVyQixDQUFDO0lBM0dHLGlDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2hCOzs7OztXQUtHO1FBRUgsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO1lBQ2QsMkNBQTJDO1lBQzNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsaUNBQWMsR0FB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R2hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ087SUFSYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUg1QjtJQUFELGVBQUM7Q0FySEQsQUFxSEMsQ0FySHFDLEVBQUUsQ0FBQyxTQUFTLEdBcUhqRDtrQkFySG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGp1bXA6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcFNvdW5kOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgbWFrZVBsYXllckp1bXAoZXZlbnQpe1xyXG4gICAgICAgIC8qc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRm9yY2UoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIEFvIGNsaWNhciBuYSBwZXJzb25hZ2VtIGNoYW1hIGEgZnVuw6fDo28gYWRkRm9yY2VcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgdGhpcy5hZGRGb3JjZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZvcmNlKCl7XHJcbiAgICAgICAgaWYodGhpcy5qdW1wID09IDApe1xyXG4gICAgICAgICAgICAvLyBBZGljaW9uYSBvIHNvbSBxdWFuZG8gYSBwZXJzb25hZ2VtIHB1bGFyXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wU291bmQsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKDAsNDAwMDApLHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LHNlbGZDb2xsaWRlcixvdGhlckNvbGxpZGVyKXtcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDE8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDI8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDM8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDQ8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDU8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDY8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbyBjaGVnYXIgbmEgaW1hZ2VtIHRoZUVuZCBvIGpvZ28gaXLDoSBjaGFtYXIgYSBwcsOzeGltYSBjZW5hIGZpbmlzaCBcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3RoZUVuZDxQaHlzaWNzQm94Q29sbGlkZXI+Jyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZmluaXNoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwMTxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwMjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwMzxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDA0PFBoeXNpY3NCb3hDb2xsaWRlcj4nKSBcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDA1PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMDY8UGh5c2ljc0JveENvbGxpZGVyPicpIFxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMDc8UGh5c2ljc0JveENvbGxpZGVyPicpXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwODxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwOTxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDEwPFBoeXNpY3NCb3hDb2xsaWRlcj4nKSBcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDExPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMTI8UGh5c2ljc0JveENvbGxpZGVyPicpIFxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMTM8UGh5c2ljc0JveENvbGxpZGVyPicpXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQxNDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQxNTxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDE2PFBoeXNpY3NCb3hDb2xsaWRlcj4nKSBcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDE3PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMTg8UGh5c2ljc0JveENvbGxpZGVyPicpXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgLy8gcGF1c2EgdG9kbyBvIGpvZ29cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW8gY2hlZ2FyIG5vIHpvbWJpZSBvIGpvZ28gaXLDoSBjaGFtYXIgYSBwcsOzeGltYSBjZW5hIGdhbWVyIFxyXG4gICAgICAgIGlmKChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTAxPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwMjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTAzPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwNDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTA1PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwNjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTA3PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwODxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTA5PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxMDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTExPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxMjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTEzPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxNDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTE1PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxNjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTE3PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxODxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWVyJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH0gIFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gUmVhbGl6YXIgbyBwdWxhIGRhIHBlcnNvbmFnZW1cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5tYWtlUGxheWVySnVtcCx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLHRoaXMuYWRkRm9yY2UsdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIENoYW1hIGEgcHLDqS1jZW5hIGdhbWVyXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdnYW1lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbn1cclxuIl19