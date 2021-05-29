
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