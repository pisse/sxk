/**
 * Created by Jay on 2016/12/8.
 */

createjs.Container.prototype.loopChild = function(func) {
    var num = this.numChildren;
    for (var i = 0; i < num; i++) {
        func.apply(this, [ this.getChildAt(i), i, num ]);
    }
}

createjs.DisplayObject.prototype.stopAnimate = function() {
    createjs.Tween.removeTweens(this);
    if (this.$rotateTween) {
        this.$rotateTween.pause();
        this.$rotateTween = undefined;
    }
    clearInterval(this.$timer);
    this.$timer = undefined;
}

createjs.DisplayObject.prototype.animateBlink = function(options, callBack) {
    var mc = this;
    var delay = options.delay || 40;
    var v1 = options.hasOwnProperty("min") ? options.min : 0;
    var v2 = options.hasOwnProperty("max") ? options.max : 1;
    var times = (options.times || 2) * 2;
    var tween = createjs.Tween.get(this).wait(options.after || 0);
    var temp = tween;
    for (var i = 0; i < times; i++) {
        var v = i % 2 == 0 ? v1 : v2;
        temp = (function(tween, v, i) {
            return tween.wait(delay).call(function() {
                mc.alpha = v;
            });
        })(temp, v, i);
    }
    temp.call(function() {
        callBack && callBack.apply(mc, []);
    });
}

createjs.DisplayObject.prototype.animateFrameBlink = function(options, callBack) {
    var mc = this;
    var delay = options.delay || 40;
    var frames = options.hasOwnProperty("frames") ? options.frames : [ 0 , 1 ];
    var times = (options.times || 2) * 2;
    var tween = createjs.Tween.get(this).wait(0);
    var temp = tween;
    for (var i = 0; i < times; i++) {
        var frame = i % 2 == 0 ? frames[0] : frames[1];
        temp = (function(tween, frame, i) {
            return tween.wait(i == 0 ? 0 : delay).call(function() {
                mc.gotoAndStop(frame, true);
                options.tick && options.tick.apply(mc, []);
            });
        })(temp, frame, i);
    }
    temp.call(function() {
        callBack && callBack.apply(mc, []);
    });
}

createjs.DisplayObject.prototype.animateRotate = function(options, callBack) {
    options = options || {};
    if (this.$rotateTween) {
        this.$rotateTween.pause();
    }
    var tween = createjs.Tween.get(this, { loop:options.loop == true }).to({ rotation:(options.rotation || 360) * (options.direction == -1 ? -1 : 1) }, options.time || 3000);
    tween.call(function() {
        if (this.$rotateTween) {
            this.$rotateTween = undefined;
        }
        callBack && callBack.call(this);
    }.bind(this));
    this.$rotateTween = tween;
}

createjs.MovieClip.prototype.cancelPlayTo = function() {
    clearInterval(this.__playTimer);
    this.__playTimer = undefined;
    if (this.__playToTick) {
        this.removeEventListener("tick", this.__playToTick);
        this.__playToTick = undefined;
    }
}
createjs.MovieClip.prototype.playTo = function(frame) {
    if (frame < 0) frame = this.totalFrames - 1;
    var options = typeof arguments[1] == "function" ? null : arguments[1];
    options = options || {};
    var onComplete = typeof arguments[1] == "function" ? arguments[1] : arguments[2];
    if (typeof onComplete != "function") onComplete = null;
    var mc = this;
    if (!mc.__playToTick) mc.__playToTick = function(event) {
        var mc = this;
        options.tick && options.tick.apply(mc, []);
        if (mc.currentFrame == frame) {
            if (options.hasOwnProperty("loopTo")) {
                mc.old_gotoAndStop(options.loopTo);
            } else {
                if (event && event.target) {
                    event.target.removeEventListener(event.type, arguments.callee);
                }
                if (options.hasOwnProperty("finalStop")) {
                    mc.gotoAndStop(options.finalStop);
                } else {
                    mc.stop();
                }
                onComplete && onComplete.apply(mc, []);
            }
        }
    }.bind(mc);
    clearInterval(mc.__playTimer);
    mc.removeEventListener("tick", mc.__playToTick);
    if (options.fps || options.playBack) {
        mc.__playTimer = setInterval(function() {
            var mc = this;
            mc.old_gotoAndStop(mc.currentFrame + (options.playBack ? -1 : 1));
            mc.__playToTick();
        }.bind(mc), 1000 / (options.fps || FPS));
    } else {
        mc.addEventListener("tick", mc.__playToTick);
        mc.old_play();
    }
}

createjs.MovieClip.prototype.old_play = createjs.MovieClip.prototype.play;
createjs.MovieClip.prototype.old_stop = createjs.MovieClip.prototype.stop;
createjs.MovieClip.prototype.old_gotoAndPlay = createjs.MovieClip.prototype.gotoAndPlay;
createjs.MovieClip.prototype.old_gotoAndStop = createjs.MovieClip.prototype.gotoAndStop;

createjs.Text.prototype.__stopAnimate = createjs.Text.prototype.stopAnimate;
createjs.Text.prototype.stopAnimate = function(clean) {
    createjs.Text.prototype.__stopAnimate();
    clearInterval(this.$timer);
    this.$timer = undefined;
    if (this.$numbweTween) {
        this.$numbweTween.pause();
        this.$numbweTween.removeEventListener("change", this.$update);
        this.$numbweTween = undefined;
    }
    this.$update = undefined;
    if (clean) this.text = "";
};
createjs.Text.prototype.animateOutput = function(options) {
    if (this.$timer) return;
    options = options || {};
    var fps = options.fps || 8;
    var maxLine = options.maxLine || 30;
    var log = this;
    log.$lines = [];
    log.$update = function() {
        if (log.$lines.length > maxLine) {
            log.$lines.splice(8);
        }
        var str = FAKE_LOG_1.random();
        log.$lines.splice(0, 0, str);
        log.text = log.$lines.join("\r\n");
    };
    clearInterval(log.$timer);
    log.$timer = undefined;
    log.$timer = setInterval(log.$update.bind(log), 1000 / fps);
};
createjs.Text.prototype.animatePrintIn = function(content, options) {
    if (this.$timer) return;
    if (!content) return;
    options = options || {};
    var fps = options.fps || 8;
    var txt = this;
    var len = content.length;
    var i = 0;
    txt.text = "";
    txt.$update = function() {
        txt.text += content.charAt(i);
        i ++;
        if (i == len) {
            txt.stopAnimate();
            options.complete && options.complete.apply(txt, []);
        }
    };
    clearInterval(txt.$timer);
    txt.$timer = undefined;
    txt.$timer = setInterval(txt.$update.bind(txt), 1000 / fps);
};
createjs.Text.prototype.animatePrintOut = function(options) {
    if (this.$timer) return;
    options = options || {};
    var fps = options.fps || 8;
    var txt = this;
    var len = txt.text.length;
    var i = 0;
    txt.$update = function() {
        i ++;
        txt.text = txt.text.substr(0, len - i);
        if (txt.text.length == 0) {
            txt.stopAnimate();
            options.complete && options.complete.apply(txt, []);
        }
    };
    clearInterval(txt.$timer);
    txt.$timer = undefined;
    txt.$timer = setInterval(txt.$update.bind(txt), 1000 / fps);
};
createjs.Text.prototype.animateNumber = function(val, options) {
    if (isNaN(val)) return;
    options = options || {};
    var time = options.time || 1000;
    var txt = this;
    txt.$update = function() {
        var val = txt.$number.val;
        if (options.fix > 0) val = Number(val).toFixed(options.fix);
        else val = parseInt(val);
        txt.text = String(val);
    }.bind(this);
    clearInterval(txt.$timer);
    //txt.$timer = setInterval(txt.$update.bind(txt), 1000 / fps);
    txt.$number = { val:Number(txt.text) || 0 };
    txt.$numbweTween = createjs.Tween.get(txt.$number).to({ val:val }, time, createjs.Ease.Linear).call(function() {
        txt.$update();
        txt.$numbweTween.removeEventListener("change", txt.$update);
        txt.$numbweTween = undefined;
        txt.$number = undefined;
        options.complete && options.complete.apply(txt, []);
    });
    txt.$numbweTween.addEventListener("change", txt.$update);
};

createjs.MovieClip.prototype.play = function() {
    this.cancelPlayTo();
    this.old_play.apply(this, []);
}
createjs.MovieClip.prototype.stop = function() {
    this.cancelPlayTo();
    this.old_stop.apply(this, []);
}
createjs.MovieClip.prototype.gotoAndPlay = function(positionOrLabel) {
    this.cancelPlayTo();
    this.old_gotoAndPlay.apply(this, [ positionOrLabel ]);
}
createjs.MovieClip.prototype.gotoAndStop = function(positionOrLabel, noCancel) {
    if (!noCancel) this.cancelPlayTo();
    this.old_gotoAndStop.apply(this, [ positionOrLabel ]);
}