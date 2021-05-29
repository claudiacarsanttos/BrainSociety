
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