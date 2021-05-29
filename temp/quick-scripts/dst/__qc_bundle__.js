
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Codes/btn_continue');
require('./assets/Codes/btn_end_game');
require('./assets/Codes/btn_finish');
require('./assets/Codes/btn_history');
require('./assets/Codes/btn_no_sound');
require('./assets/Codes/btn_play');
require('./assets/Codes/btn_prelude');
require('./assets/Codes/btn_sound');
require('./assets/Codes/gameOver');
require('./assets/Codes/pause');
require('./assets/Codes/physical');
require('./assets/Codes/player');
require('./assets/Codes/popup');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_end_game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a218yPSOBLz6+5O94kDr9M', 'btn_end_game');
// Codes/btn_end_game.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone chama a próxima cena finish
        // E para todos os sons anteriores
        this.node.on('touchstart', function (event) {
            //this.node.on('mousedown', function(event){
            cc.director.loadScene('finish');
            cc.audioEngine.stopAll();
            cc.director.resume();
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9lbmRfZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFxQkEsQ0FBQztJQW5CRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLGlEQUFpRDtRQUNqRCxrQ0FBa0M7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsS0FBSztZQUMxQyw0Q0FBNEM7WUFDeEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBbEJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUI1QjtJQUFELGVBQUM7Q0FyQkQsQUFxQkMsQ0FyQnFDLEVBQUUsQ0FBQyxTQUFTLEdBcUJqRDtrQkFyQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIEFvIGNsaWNhciBubyDDrWNvbmUgY2hhbWEgYSBwcsOzeGltYSBjZW5hIGZpbmlzaFxyXG4gICAgICAgIC8vIEUgcGFyYSB0b2RvcyBvcyBzb25zIGFudGVyaW9yZXNcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2ZpbmlzaCcpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b433bElFjNLDLjquCmMWfyr', 'btn_history');
// Codes/btn_history.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone chama a próxima cena prelude
        // E para todos os sons anteriores
        this.node.on('touchstart', function (event) {
            //this.node.on('mousedown', function(event){
            cc.director.loadScene('prelude');
            cc.audioEngine.stopAll();
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9oaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW9CQSxDQUFDO0lBbEJHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELGtDQUFrQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxLQUFLO1lBQzFDLDRDQUE0QztZQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBakJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0I1QjtJQUFELGVBQUM7Q0FwQkQsQUFvQkMsQ0FwQnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0JqRDtrQkFwQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIEFvIGNsaWNhciBubyDDrWNvbmUgY2hhbWEgYSBwcsOzeGltYSBjZW5hIHByZWx1ZGVcclxuICAgICAgICAvLyBFIHBhcmEgdG9kb3Mgb3Mgc29ucyBhbnRlcmlvcmVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3ByZWx1ZGUnKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_continue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93b68SrPmRBEa2625I2/BM2', 'btn_continue');
// Codes/btn_continue.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone chama a próxima cena gamer
        // E para todos os sons anteriores
        this.node.on('touchstart', function (event) {
            //this.node.on('mousedown', function(event){
            cc.director.loadScene('gamer');
            cc.audioEngine.stopAll();
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9jb250aW51ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFvQkEsQ0FBQztJQWxCRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLGdEQUFnRDtRQUNoRCxrQ0FBa0M7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsS0FBSztZQUMxQyw0Q0FBNEM7WUFDeEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWpCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW9CNUI7SUFBRCxlQUFDO0NBcEJELEFBb0JDLENBcEJxQyxFQUFFLENBQUMsU0FBUyxHQW9CakQ7a0JBcEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBBbyBjbGljYXIgbm8gw61jb25lIGNoYW1hIGEgcHLDs3hpbWEgY2VuYSBnYW1lclxyXG4gICAgICAgIC8vIEUgcGFyYSB0b2RvcyBvcyBzb25zIGFudGVyaW9yZXNcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZXInKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_finish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ebf2/N7JNNbpSI1DHT68d9', 'btn_finish');
// Codes/btn_finish.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone chama a próxima cena main
        this.node.on('touchstart', function (event) {
            //this.node.on('mousedown', function(event){
            cc.director.loadScene('main');
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9maW5pc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBa0JBLENBQUM7SUFoQkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSwrQ0FBK0M7UUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsS0FBSztZQUMxQyw0Q0FBNEM7WUFDeEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFmZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtCNUI7SUFBRCxlQUFDO0NBbEJELEFBa0JDLENBbEJxQyxFQUFFLENBQUMsU0FBUyxHQWtCakQ7a0JBbEJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBBbyBjbGljYXIgbm8gw61jb25lIGNoYW1hIGEgcHLDs3hpbWEgY2VuYSBtYWluXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_prelude.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5371dcmP01ACJ2VhSQx1ciA', 'btn_prelude');
// Codes/btn_prelude.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone chama a próxima cena history
        // E para todos os sons anteriores
        this.node.on('touchstart', function (event) {
            //this.node.on('mousedown', function(event){
            cc.director.loadScene('history');
            cc.audioEngine.stopAll();
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9wcmVsdWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW9CQSxDQUFDO0lBbEJHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELGtDQUFrQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxLQUFLO1lBQzFDLDRDQUE0QztZQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBakJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0I1QjtJQUFELGVBQUM7Q0FwQkQsQUFvQkMsQ0FwQnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0JqRDtrQkFwQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIEFvIGNsaWNhciBubyDDrWNvbmUgY2hhbWEgYSBwcsOzeGltYSBjZW5hIGhpc3RvcnlcclxuICAgICAgICAvLyBFIHBhcmEgdG9kb3Mgb3Mgc29ucyBhbnRlcmlvcmVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAvL3RoaXMubm9kZS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hpc3RvcnknKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/gameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '428a9lqT39NfJjWttupNOfs', 'gameOver');
// Codes/gameOver.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGdhbWVPdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_play.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63a3aQh3GJE45QjCwsfYINF', 'btn_play');
// Codes/btn_play.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone chama a próxima cena opening
        // E para todos os sons anteriores
        this.node.on('touchstart', function (event) {
            //this.node.on('mousedown', function(event){
            cc.director.loadScene('opening');
            cc.audioEngine.stopAll();
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW9CQSxDQUFDO0lBbEJHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELGtDQUFrQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxLQUFLO1lBQzFDLDRDQUE0QztZQUN4QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBakJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0I1QjtJQUFELGVBQUM7Q0FwQkQsQUFvQkMsQ0FwQnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0JqRDtrQkFwQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIEFvIGNsaWNhciBubyDDrWNvbmUgY2hhbWEgYSBwcsOzeGltYSBjZW5hIG9wZW5pbmdcclxuICAgICAgICAvLyBFIHBhcmEgdG9kb3Mgb3Mgc29ucyBhbnRlcmlvcmVzXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChldmVudCl7XHJcbiAgICAgICAgLy90aGlzLm5vZGUub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdvcGVuaW5nJyk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/pause.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e46ad/vrHlOPaNcvFaBAH0f', 'pause');
// Codes/pause.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    NewClass.prototype.onPause = function () {
        // pausa todo o jogo
        cc.director.pause();
    };
    NewClass.prototype.offPause = function () {
        // continua todo o jogo
        cc.director.resume();
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXHBhdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQStCQSxDQUFDO0lBN0JHLHdCQUF3QjtJQUV4Qjs7Ozs7Ozs7Ozs7O09BWUc7SUFFSCwwQkFBTyxHQUFQO1FBRUksb0JBQW9CO1FBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFeEIsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFFSSx1QkFBdUI7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUV6QixDQUFDO0lBOUJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0I1QjtJQUFELGVBQUM7Q0EvQkQsQUErQkMsQ0EvQnFDLEVBQUUsQ0FBQyxTQUFTLEdBK0JqRDtrQkEvQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvKm9uUGF1c2UgKCl7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSl7XHJcblxyXG4gICAgICAgICAgICAvLyBjb250aW51YSB0b2RvIG8gam9nb1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAvLyBwYXVzYSB0b2RvIG8gam9nb1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcbiAgICBvblBhdXNlICgpe1xyXG5cclxuICAgICAgICAvLyBwYXVzYSB0b2RvIG8gam9nb1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9mZlBhdXNlICgpe1xyXG5cclxuICAgICAgICAvLyBjb250aW51YSB0b2RvIG8gam9nb1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/physical.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a53daClvOhGhqCu4cpSMrrB', 'physical');
// Codes/physical.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Física do jogo
        var game = cc.director.getPhysicsManager();
        game.enabled = true;
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXHBoeXNpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWdCQSxDQUFDO0lBZEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxpQkFBaUI7UUFFakIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0I1QjtJQUFELGVBQUM7Q0FoQkQsQUFnQkMsQ0FoQnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0JqRDtrQkFoQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIEbDrXNpY2EgZG8gam9nb1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBnYW1lID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICBnYW1lLmVuYWJsZWQ9dHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_no_sound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93e58dzN7ZKKIp1IdylzZWj', 'btn_no_sound');
// Codes/btn_no_sound.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone sem som desabilita o som do jogo
        this.node.on('touchstart', function () {
            cc.audioEngine.stopAll();
        });
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9ub19zb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFpQkEsQ0FBQztJQWZHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksc0RBQXNEO1FBRXRELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBZGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gQW8gY2xpY2FyIG5vIMOtY29uZSBzZW0gc29tIGRlc2FiaWxpdGEgbyBzb20gZG8gam9nb1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/btn_sound.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e3ffjOindBULtm5YwcMDEA', 'btn_sound');
// Codes/btn_sound.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myMusic = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // Ao clicar no ícone som habilita o som do jogo
        // Parâmetro: som, repetição, volume
        this.node.on('touchstart', function () {
            cc.audioEngine.play(this.myMusic, true, 0.3);
        }, this);
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "myMusic", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXGJ0bl9zb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW1CQztRQWhCRyxhQUFPLEdBQWlCLElBQUksQ0FBQzs7SUFnQmpDLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLGdEQUFnRDtRQUNoRCxvQ0FBb0M7UUFFcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkNBQ007SUFIWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUI1QjtJQUFELGVBQUM7Q0FuQkQsQUFtQkMsQ0FuQnFDLEVBQUUsQ0FBQyxTQUFTLEdBbUJqRDtrQkFuQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgbXlNdXNpYzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIEFvIGNsaWNhciBubyDDrWNvbmUgc29tIGhhYmlsaXRhIG8gc29tIGRvIGpvZ29cclxuICAgICAgICAvLyBQYXLDom1ldHJvOiBzb20sIHJlcGV0acOnw6NvLCB2b2x1bWVcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm15TXVzaWMsIHRydWUsIDAuMyk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Codes/popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a5faXVZEpMMJ9BcBSzJrUc', 'popup');
// Codes/popup.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.yesEventHandler = null;
        _this.noEventHandler = null;
        return _this;
    }
    NewClass.prototype.showWindow = function () {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
            .to(0.1, { scale: 1, opacity: 255 }, { easing: "quartInOut" })
            .start();
    };
    NewClass.prototype.hideWindow = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.1, { scale: 0.2, opacity: 0 }, { easing: "quartInOut" })
            .call(function () { _this.node.active = true; })
            .start();
    };
    NewClass.prototype.yesClicked = function () {
        // desabilita janela
        this.hideWindow();
    };
    NewClass.prototype.noClicked = function () {
        // desabilita janela
        this.hideWindow();
    };
    __decorate([
        property(cc.Component.EventHandler)
    ], NewClass.prototype, "yesEventHandler", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], NewClass.prototype, "noEventHandler", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXHBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMENDO1FBdkNHLHFCQUFlLEdBQTZCLElBQUksQ0FBQztRQUdqRCxvQkFBYyxHQUE2QixJQUFJLENBQUM7O0lBb0NwRCxDQUFDO0lBbENHLDZCQUFVLEdBQVY7UUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUV0QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUUsT0FBTyxFQUFDLEdBQUcsRUFBRSxFQUFDLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDO2FBQ3RELEtBQUssRUFBRSxDQUFDO0lBRWIsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFBQSxpQkFPQztRQUxHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBQyxNQUFNLEVBQUUsWUFBWSxFQUFDLENBQUM7YUFDdEQsSUFBSSxDQUFDLGNBQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDO2FBQ3JDLEtBQUssRUFBRSxDQUFDO0lBRWIsQ0FBQztJQUVELDZCQUFVLEdBQVY7UUFFSSxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBRUksb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV0QixDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO3FEQUNhO0lBR2pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO29EQUNZO0lBTi9CLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwQzVCO0lBQUQsZUFBQztDQTFDRCxBQTBDQyxDQTFDcUMsRUFBRSxDQUFDLFNBQVMsR0EwQ2pEO2tCQTFDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gICAgeWVzRXZlbnRIYW5kbGVyOmNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gICAgbm9FdmVudEhhbmRsZXI6Y2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG51bGw7XHJcblxyXG4gICAgc2hvd1dpbmRvdygpe1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMC4yO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuMSx7c2NhbGU6MSwgb3BhY2l0eToyNTUgfSx7ZWFzaW5nOiBcInF1YXJ0SW5PdXRcIn0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVXaW5kb3coKXtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgIC50bygwLjEse3NjYWxlOjAuMiwgb3BhY2l0eTowIH0se2Vhc2luZzogXCJxdWFydEluT3V0XCJ9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHt0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZX0pXHJcbiAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHllc0NsaWNrZWQoKXtcclxuXHJcbiAgICAgICAgLy8gZGVzYWJpbGl0YSBqYW5lbGFcclxuICAgICAgICB0aGlzLmhpZGVXaW5kb3coKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbm9DbGlja2VkKCl7XHJcblxyXG4gICAgICAgIC8vIGRlc2FiaWxpdGEgamFuZWxhXHJcbiAgICAgICAgdGhpcy5oaWRlV2luZG93KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ29kZXNcXHBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUVJLHdCQUF3QjtRQUY1QixxRUFxSEM7UUFoSEcsVUFBSSxHQUFVLENBQUMsQ0FBQztRQUdoQixlQUFTLEdBQWdCLElBQUksQ0FBQzs7UUEyRzlCLGlCQUFpQjtJQUVyQixDQUFDO0lBM0dHLGlDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2hCOzs7OztXQUtHO1FBRUgsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFDSSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFDO1lBQ2QsMkNBQTJDO1lBQzNDLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRUQsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBQyxZQUFZLEVBQUMsYUFBYTtRQUM3QyxJQUFHLGFBQWEsQ0FBQyxJQUFJLElBQUksNkJBQTZCLEVBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFHLGFBQWEsQ0FBQyxJQUFJLElBQUksNkJBQTZCLEVBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFHLGFBQWEsQ0FBQyxJQUFJLElBQUksNkJBQTZCLEVBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFHLGFBQWEsQ0FBQyxJQUFJLElBQUksNkJBQTZCLEVBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFHLGFBQWEsQ0FBQyxJQUFJLElBQUksNkJBQTZCLEVBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFHLGFBQWEsQ0FBQyxJQUFJLElBQUksNkJBQTZCLEVBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFDRCxzRUFBc0U7UUFDdEUsSUFBRyxhQUFhLENBQUMsSUFBSSxJQUFJLDRCQUE0QixFQUFDO1lBQ2xELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksa0NBQWtDLENBQUM7ZUFDdEQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxDQUFDO2VBQzFELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxrQ0FBa0MsQ0FBQztlQUMxRCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksa0NBQWtDLENBQUM7ZUFDMUQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxDQUFDO2VBQzFELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxrQ0FBa0MsQ0FBQztlQUMxRCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksa0NBQWtDLENBQUM7ZUFDMUQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxDQUFDO2VBQzFELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxrQ0FBa0MsQ0FBQztlQUMxRCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksa0NBQWtDLENBQUM7ZUFDMUQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxDQUFDO2VBQzFELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxrQ0FBa0MsQ0FBQztlQUMxRCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksa0NBQWtDLENBQUM7ZUFDMUQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxDQUFDO2VBQzFELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxrQ0FBa0MsQ0FBQztlQUMxRCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksa0NBQWtDLENBQUM7ZUFDMUQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLGtDQUFrQyxDQUFDO2VBQzFELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxrQ0FBa0MsQ0FBQyxFQUNoRTtZQUNHLG9CQUFvQjtZQUNwQixFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsOERBQThEO1FBQzlELElBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDO2VBQ2xELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSw4QkFBOEIsQ0FBQztlQUN0RCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksOEJBQThCLENBQUM7ZUFDdEQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDO2VBQ3RELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSw4QkFBOEIsQ0FBQztlQUN0RCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksOEJBQThCLENBQUM7ZUFDdEQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDO2VBQ3RELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSw4QkFBOEIsQ0FBQztlQUN0RCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksOEJBQThCLENBQUM7ZUFDdEQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDO2VBQ3RELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSw4QkFBOEIsQ0FBQztlQUN0RCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksOEJBQThCLENBQUM7ZUFDdEQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDO2VBQ3RELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSw4QkFBOEIsQ0FBQztlQUN0RCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksOEJBQThCLENBQUM7ZUFDdEQsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDO2VBQ3RELENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSw4QkFBOEIsQ0FBQztlQUN0RCxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksOEJBQThCLENBQUMsRUFDNUQ7WUFDRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksZ0NBQWdDO1FBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLHlCQUF5QjtRQUN6QixFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUE1R0Q7UUFEQyxRQUFROzBDQUNPO0lBR2hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ087SUFSYixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUg1QjtJQUFELGVBQUM7Q0FySEQsQUFxSEMsQ0FySHFDLEVBQUUsQ0FBQyxTQUFTLEdBcUhqRDtrQkFySG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGp1bXA6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcFNvdW5kOmNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgbWFrZVBsYXllckp1bXAoZXZlbnQpe1xyXG4gICAgICAgIC8qc3dpdGNoKGV2ZW50LmtleUNvZGUpe1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRm9yY2UoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIEFvIGNsaWNhciBuYSBwZXJzb25hZ2VtIGNoYW1hIGEgZnVuw6fDo28gYWRkRm9yY2VcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgdGhpcy5hZGRGb3JjZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZvcmNlKCl7XHJcbiAgICAgICAgaWYodGhpcy5qdW1wID09IDApe1xyXG4gICAgICAgICAgICAvLyBBZGljaW9uYSBvIHNvbSBxdWFuZG8gYSBwZXJzb25hZ2VtIHB1bGFyXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wU291bmQsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuYXBwbHlGb3JjZVRvQ2VudGVyKG5ldyBjYy5WZWMyKDAsNDAwMDApLHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LHNlbGZDb2xsaWRlcixvdGhlckNvbGxpZGVyKXtcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDE8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDI8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDM8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDQ8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDU8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2ltYWdlMDY8UGh5c2ljc0JveENvbGxpZGVyPicpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXAgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBbyBjaGVnYXIgbmEgaW1hZ2VtIHRoZUVuZCBvIGpvZ28gaXLDoSBjaGFtYXIgYSBwcsOzeGltYSBjZW5hIGZpbmlzaCBcclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3RoZUVuZDxQaHlzaWNzQm94Q29sbGlkZXI+Jyl7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZmluaXNoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwMTxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwMjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwMzxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDA0PFBoeXNpY3NCb3hDb2xsaWRlcj4nKSBcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDA1PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMDY8UGh5c2ljc0JveENvbGxpZGVyPicpIFxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMDc8UGh5c2ljc0JveENvbGxpZGVyPicpXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwODxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQwOTxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDEwPFBoeXNpY3NCb3hDb2xsaWRlcj4nKSBcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDExPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMTI8UGh5c2ljc0JveENvbGxpZGVyPicpIFxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMTM8UGh5c2ljc0JveENvbGxpZGVyPicpXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQxNDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ2NoZXN0X2dvbGQxNTxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDE2PFBoeXNpY3NCb3hDb2xsaWRlcj4nKSBcclxuICAgICAgICAgICAgfHwgKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnY2hlc3RfZ29sZDE3PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICdjaGVzdF9nb2xkMTg8UGh5c2ljc0JveENvbGxpZGVyPicpXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgLy8gcGF1c2EgdG9kbyBvIGpvZ29cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQW8gY2hlZ2FyIG5vIHpvbWJpZSBvIGpvZ28gaXLDoSBjaGFtYXIgYSBwcsOzeGltYSBjZW5hIGdhbWVyIFxyXG4gICAgICAgIGlmKChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTAxPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwMjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTAzPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwNDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTA1PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwNjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTA3PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUwODxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTA5PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxMDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTExPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxMjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTEzPFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxNDxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTE1PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxNjxQaHlzaWNzQm94Q29sbGlkZXI+JykgXHJcbiAgICAgICAgICAgIHx8IChvdGhlckNvbGxpZGVyLm5hbWUgPT0gJ3pvbWJpZTE3PFBoeXNpY3NCb3hDb2xsaWRlcj4nKVxyXG4gICAgICAgICAgICB8fCAob3RoZXJDb2xsaWRlci5uYW1lID09ICd6b21iaWUxODxQaHlzaWNzQm94Q29sbGlkZXI+JylcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWVyJyk7XHJcbiAgICAgICAgfSBcclxuICAgIH0gIFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgLy8gUmVhbGl6YXIgbyBwdWxhIGRhIHBlcnNvbmFnZW1cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5tYWtlUGxheWVySnVtcCx0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoc3RhcnQnLHRoaXMuYWRkRm9yY2UsdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIENoYW1hIGEgcHLDqS1jZW5hIGdhbWVyXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdnYW1lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
