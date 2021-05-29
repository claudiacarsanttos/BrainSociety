window.__require = function t(e, o, n) {
function r(i, p) {
if (!o[i]) {
if (!e[i]) {
var s = i.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!p && l) return l(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = s;
}
var u = o[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return r(e[i][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
btn_continue: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "93b68SrPmRBEa2625I2/BM2", "btn_continue");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.director.loadScene("gamer");
cc.audioEngine.stopAll();
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_end_game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1a218yPSOBLz6+5O94kDr9M", "btn_end_game");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.director.loadScene("finish");
cc.audioEngine.stopAll();
cc.director.resume();
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_finish: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5ebf2/N7JNNbpSI1DHT68d9", "btn_finish");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.director.loadScene("main");
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_history: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b433bElFjNLDLjquCmMWfyr", "btn_history");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.director.loadScene("prelude");
cc.audioEngine.stopAll();
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_no_sound: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "93e58dzN7ZKKIp1IdylzZWj", "btn_no_sound");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.audioEngine.stopAll();
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_play: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "63a3aQh3GJE45QjCwsfYINF", "btn_play");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.director.loadScene("opening");
cc.audioEngine.stopAll();
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_prelude: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5371dcmP01ACJ2VhSQx1ciA", "btn_prelude");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.director.loadScene("history");
cc.audioEngine.stopAll();
});
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
btn_sound: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7e3ffjOindBULtm5YwcMDEA", "btn_sound");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = i.property, l = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.myMusic = null;
return e;
}
e.prototype.onLoad = function() {
this.node.on("touchstart", function() {
cc.audioEngine.play(this.myMusic, !0, .3);
}, this);
};
e.prototype.start = function() {};
c([ s(cc.AudioClip) ], e.prototype, "myMusic", void 0);
return c([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
gameOver: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "428a9lqT39NfJjWttupNOfs", "gameOver");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = i.property, l = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
return e;
}
e.prototype.start = function() {};
c([ s(cc.Label) ], e.prototype, "label", void 0);
c([ s ], e.prototype, "text", void 0);
return c([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
pause: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e46ad/vrHlOPaNcvFaBAH0f", "pause");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onPause = function() {
cc.director.pause();
};
e.prototype.offPause = function() {
cc.director.resume();
};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
physical: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a53daClvOhGhqCu4cpSMrrB", "physical");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = (i.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.getPhysicsManager().enabled = !0;
};
e.prototype.start = function() {};
return c([ p ], e);
}(cc.Component));
o.default = s;
cc._RF.pop();
}, {} ],
player: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f00d7YrtItOkYG0BFk19lOu", "player");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = i.property, l = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.jump = 0;
e.jumpSound = null;
return e;
}
e.prototype.makePlayerJump = function() {
this.node.on("touchstart", function() {
this.addForce();
}, this);
};
e.prototype.addForce = function() {
if (0 == this.jump) {
cc.audioEngine.playEffect(this.jumpSound, !1);
this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0, 4e4), !0);
this.jump = 1;
}
};
e.prototype.onBeginContact = function(t, e, o) {
"image01<PhysicsBoxCollider>" == o.name && (this.jump = 0);
"image02<PhysicsBoxCollider>" == o.name && (this.jump = 0);
"image03<PhysicsBoxCollider>" == o.name && (this.jump = 0);
"image04<PhysicsBoxCollider>" == o.name && (this.jump = 0);
"image05<PhysicsBoxCollider>" == o.name && (this.jump = 0);
"image06<PhysicsBoxCollider>" == o.name && (this.jump = 0);
"theEnd<PhysicsBoxCollider>" == o.name && cc.director.loadScene("finish");
"chest_gold01<PhysicsBoxCollider>" != o.name && "chest_gold02<PhysicsBoxCollider>" != o.name && "chest_gold03<PhysicsBoxCollider>" != o.name && "chest_gold04<PhysicsBoxCollider>" != o.name && "chest_gold05<PhysicsBoxCollider>" != o.name && "chest_gold06<PhysicsBoxCollider>" != o.name && "chest_gold07<PhysicsBoxCollider>" != o.name && "chest_gold08<PhysicsBoxCollider>" != o.name && "chest_gold09<PhysicsBoxCollider>" != o.name && "chest_gold10<PhysicsBoxCollider>" != o.name && "chest_gold11<PhysicsBoxCollider>" != o.name && "chest_gold12<PhysicsBoxCollider>" != o.name && "chest_gold13<PhysicsBoxCollider>" != o.name && "chest_gold14<PhysicsBoxCollider>" != o.name && "chest_gold15<PhysicsBoxCollider>" != o.name && "chest_gold16<PhysicsBoxCollider>" != o.name && "chest_gold17<PhysicsBoxCollider>" != o.name && "chest_gold18<PhysicsBoxCollider>" != o.name || cc.director.pause();
"zombie01<PhysicsBoxCollider>" != o.name && "zombie02<PhysicsBoxCollider>" != o.name && "zombie03<PhysicsBoxCollider>" != o.name && "zombie04<PhysicsBoxCollider>" != o.name && "zombie05<PhysicsBoxCollider>" != o.name && "zombie06<PhysicsBoxCollider>" != o.name && "zombie07<PhysicsBoxCollider>" != o.name && "zombie08<PhysicsBoxCollider>" != o.name && "zombie09<PhysicsBoxCollider>" != o.name && "zombie10<PhysicsBoxCollider>" != o.name && "zombie11<PhysicsBoxCollider>" != o.name && "zombie12<PhysicsBoxCollider>" != o.name && "zombie13<PhysicsBoxCollider>" != o.name && "zombie14<PhysicsBoxCollider>" != o.name && "zombie15<PhysicsBoxCollider>" != o.name && "zombie16<PhysicsBoxCollider>" != o.name && "zombie17<PhysicsBoxCollider>" != o.name && "zombie18<PhysicsBoxCollider>" != o.name || cc.director.loadScene("gamer");
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.makePlayerJump, this);
this.node.on("touchstart", this.addForce, this);
cc.director.preloadScene("gamer");
};
e.prototype.start = function() {};
c([ s ], e.prototype, "jump", void 0);
c([ s(cc.AudioClip) ], e.prototype, "jumpSound", void 0);
return c([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
popup: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6a5faXVZEpMMJ9BcBSzJrUc", "popup");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, n) {
var r, c = arguments.length, i = c < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, o, n); else for (var p = t.length - 1; p >= 0; p--) (r = t[p]) && (i = (c < 3 ? r(i) : c > 3 ? r(e, o, i) : r(e, o)) || i);
return c > 3 && i && Object.defineProperty(e, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, p = i.ccclass, s = i.property, l = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.yesEventHandler = null;
e.noEventHandler = null;
return e;
}
e.prototype.showWindow = function() {
this.node.active = !0;
this.node.opacity = 0;
this.node.scale = .2;
cc.tween(this.node).to(.1, {
scale: 1,
opacity: 255
}, {
easing: "quartInOut"
}).start();
};
e.prototype.hideWindow = function() {
var t = this;
cc.tween(this.node).to(.1, {
scale: .2,
opacity: 0
}, {
easing: "quartInOut"
}).call(function() {
t.node.active = !0;
}).start();
};
e.prototype.yesClicked = function() {
this.hideWindow();
};
e.prototype.noClicked = function() {
this.hideWindow();
};
c([ s(cc.Component.EventHandler) ], e.prototype, "yesEventHandler", void 0);
c([ s(cc.Component.EventHandler) ], e.prototype, "noEventHandler", void 0);
return c([ p ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "btn_continue", "btn_end_game", "btn_finish", "btn_history", "btn_no_sound", "btn_play", "btn_prelude", "btn_sound", "gameOver", "pause", "physical", "player", "popup" ]);