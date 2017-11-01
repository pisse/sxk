/**
 * Created by Jay on 2016/12/5.
 */

function rootRender() {
    var now = new Date();
    if (window.$topLeftTime) {
        var str = convertTimeToDate(now.getTime(), true, "en");
        var ms = now.getMilliseconds();
        if (ms < 10) ms = "00" + ms;
        else if (ms < 100) ms = "0" + ms;
        str += "." + ms;
        window.$topLeftTime.text = str;
    }
    if (window.$startTime) {
        var costTime = Date.now() - window.$startTime;
        costTime = costTime / 1000;
        window.$scoreCycle.time.text = "TIME COST: " + costTime;
    }
}

function updatePhaseProgress(val) {
    window.$cycleBigProgress && window.$cycleBigProgress.$update(val);
    window.$cycleBigProgressLabel && (window.$cycleBigProgressLabel.text = val + "%");
}

function setPhaseTitle(str, callBack) {
    var txt = window.$cycleBigBoardTitle;
    txt.$text = str;
    txt.text = "";
    txt.alpha = 0.6;
    createjs.Tween.removeTweens(txt);

    var mc = window.$cycleBigBoardTitleFrame;
    mc.gotoAndPlay(0);
    window.$cycleBigBoardTitleFrameTick = function(event) {
        if (mc.currentFrame == (mc.totalFrames - 1)) {
            mc.removeEventListener("tick", window.$cycleBigBoardTitleFrameTick);
            //stop
            mc.gotoAndStop(0);
            //set text
            txt.text = txt.$text;
            createjs.Tween.get(txt, { loop:true }).to({ alpha:1 }, 800, createjs.Ease.linear).to({ alpha:0.6 }, 800, createjs.Ease.linear);
            callBack && callBack();
        }
    }
    mc.removeEventListener("tick", window.$cycleBigBoardTitleFrameTick);
    mc.addEventListener("tick", window.$cycleBigBoardTitleFrameTick);
}

function writePhaseLog() {
    var log = window.$cycleBigBoardLog;
    if (!log) return;
    if (!log.$update) {
        log.$lines = [];
        log.$update = function() {
            if (log.$lines.length > 30) {
                log.$lines.splice(8);
            }
            var str = FAKE_LOG_1.random();
            log.$lines.splice(0, 0, str);
            log.text = log.$lines.join("\r\n");
        }
    }
    //log.removeEventListener("tick", window.$cycleBigBoardLogTick);
    //log.addEventListener("tick", window.$cycleBigBoardLogTick);
    clearInterval(log.$timer);
    log.$timer = setInterval(log.$update.bind(log), 1000 / 8);
}

function updateMapPin() {
    if (!currentUser || (!currentUser.province && !currentUser.loc)) {
        if (currentUser) {
            if (!currentUser.province) {
                console.error("发现为定义的province字段: ", currentUser.province);
            }
            if (!currentUser.loc) {
                console.error("发现为定义的address字段: ", currentUser.loc);
            }
        }
        return;
    }
    var REF_POS = [ 169.8, 96.90 ];  //beijing
    var REF_LOC = CITES["北京"];
    var pect1 = 3.8346613545816655;
    var pect2 = 0.2003519061583578;
    var name = currentUser.province ? currentUser.province : currentUser.loc;
    var loc = CITES[name.substr(0, 2)];
    if (!loc) {
        loc = CITES[name.substr(0, 3)];
    }
    var pin = window.$mapPin;
    if (!loc) {
        console.error("无法定位地理位置: ", name);
        pin.visible = false;
        return;
    }
    //var x = pect1 * (loc[0] - REF_LOC[0]) + REF_POS[0];
    //var y = pect2 * (loc[1] - REF_LOC[1]) + REF_POS[1];
    /*
    var pos = [ [ 110, 175 ], [ 112, 167 ] ];
    var x = Math.round(pos[0][0] + Math.random() * (pos[0][1] - pos[0][0]));
    var y = Math.round(pos[1][0] + Math.random() * (pos[1][1] - pos[1][0]));
    */
    var x = loc[2];
    var y = loc[3];
    if (!pin) return;

    pin.visible = true;
    pin.gotoAndStop(0);
    if (pin.$tween) {
        createjs.Tween.removeTweens(pin);
    }
    pin.$tween = createjs.Tween.get(pin).to({ scaleX:0.01, scaleY:0.01 }, 600, createjs.Ease.bounceOut).to({ x:x, y:y }, 0).to({ scaleX:1, scaleY:1 }, 600, createjs.Ease.bounceOut).call(function() {
        pin.play();

        if (window.$mapPinTick) pin.removeEventListener("tick", window.$mapPinTick);
        window.$mapPinTick = function(event) {
            if (pin.currentFrame == pin.totalFrames - 1) {
                //stop
                pin.gotoAndPlay(20);
            }
        }
        pin.addEventListener("tick", window.$mapPinTick);
    });
}

function updateUserCycle() {
    var Tween = createjs.Tween;
    var Ease = createjs.Ease;

    var cycle = window.$userCycle;
    var inside1 = cycle.inside_1;
    var inside2 = cycle.inside_2;
    var inside3 = cycle.inside_3;
    var core = cycle.core;
    core.gotoAndStop(0);

    cycle.$stopScan();

    inside1.rotation = 0;
    inside2.rotation = 0;
    inside3.rotation = 0;
    cycle.picHolder.alpha = 0;

    loadUserPic(currentUser ? currentUser.pic : null, { width:136, height:136 }, function(bitmap, image) {
        if (cycle.$pic && cycle.$pic.parent) {
            cycle.$pic.parent.removeChild(cycle.$pic);
        }
        cycle.$pic = bitmap;
        bitmap.x = - 68;
        bitmap.y =  - 68;
        bitmap.alpha = 0.7;
        cycle.picHolder.addChildAt(bitmap, 0);
    });

    Tween.get(cycle).to({ scaleX:0.8, scaleY:0.8 }, 1200, Ease.backInOut).to({ scaleX:1.0, scaleY:1.0 }, 1500, Ease.elasticIn);
    Tween.get(inside1).to({ rotation:360 * 4 }, 3400, Ease.backOut);
    Tween.get(inside2).to({ rotation:360 * 3 }, 3000, Ease.backOut);
    Tween.get(inside3).to({ rotation:360 * 2 }, 3000, Ease.backOut).wait(600).call(function() {
        core.playTo(core.totalFrames - 1, {fps:60},function() {
            Tween.get(cycle.picHolder).to({ alpha:1 }, 600, Ease.linear);
            cycle.$startScan();
        });
    });
}

function loadUserPic(url) {
    var options = typeof arguments[1] == "function" ? null : arguments[1];
    options = options || {};
    var onComplete = typeof arguments[1] == "function" ? arguments[1] : arguments[2];
    if (typeof onComplete != "function") onComplete = null;

    url = url || "img/default_head.png";//"http://p3.music.126.net/JCEKqxPbejzVTlIG65zrWQ==/18691697673688500.jpg?param=150x150";

    var image = new Image();
    image.src = url;
    image.onload = function() {
        var bitmap = new createjs.Bitmap(image);
        var sizeW = image.width;
        var sizeH = image.height;
        if (options.width) {
            bitmap.scaleX = options.width / sizeW;
        }
        if (options.height) {
            bitmap.scaleY = options.height / sizeH;
        }
        onComplete && onComplete(bitmap, image);
    };
}

function updateScore(val, callBack) {
    var mc = window.$scoreCycle.frame_block;
    mc.playTo(mc.totalFrames - 1, { fps:24, finalStop:0 });

    mc = window.$scoreCycle.outside;
    mc.stopAnimate();
    createjs.Tween.get(mc).to({ scaleX:1.2, scaleY:1.2 }, 800, createjs.Ease.backOut).
        wait(300).
        to({ rotation:0 }, 600).
        wait(300).
        to({ scaleX:mc.$scale, scaleY:mc.$scale }, 800, createjs.Ease.backOut).
        wait(200).
        call(function() {
            this.rotation = 0;
            this.animateRotate({ loop:true, direction:-1 });
        }.bind(mc));

    mc = window.$scoreCycle.frame;
    createjs.Tween.get(mc).wait(300).to({ scaleX:1.1, scaleY:1.1 }, 800, createjs.Ease.backOut).
        wait(300).
        to({ rotation:0 }, 600).
        wait(300).
        to({ scaleX:mc.$scale, scaleY:mc.$scale }, 800, createjs.Ease.backOut);

    mc = window.$scoreCycle.frame_light;
    createjs.Tween.get(mc).wait(300).to({ scaleX:1.1, scaleY:1.1 }, 800, createjs.Ease.backOut).
        wait(300).
        to({ rotation:0 }, 600).
        wait(300).
        to({ scaleX:mc.$scale, scaleY:mc.$scale }, 800, createjs.Ease.backOut);

    mc = window.$scoreCycle.core;
    mc.stopAnimate();
    createjs.Tween.get(mc).wait(600).to({ scaleX:1.0, scaleY:1.0 }, 800, createjs.Ease.backOut).
        wait(300).
        to({ rotation:0 }, 600).
        wait(300).
        to({ scaleX:mc.$scale, scaleY:mc.$scale }, 800, createjs.Ease.backOut).
        wait(200).
        call(function() {
            this.rotation = 0;
            this.animateRotate({ loop:true, time:12000 });
            callBack && callBack();
        }.bind(mc));

    createjs.Tween.get(window.$scoreCycle.label).wait(500).call(function() {
        window.$scoreCycle.label.animateNumber(val, { time:2000 }, function() {
        });
    });
}

function fadeOutProcess(id, callBack) {
    var mc = window["$process" + id];
    createjs.Tween.get(mc).to({ alpha:0 }, 500).call(function() {
        this.$reset();
        this.alpha = 1;
        callBack && callBack();
    }.bind(mc));
}

function allReset(callBack) {
    animateProgress(0, 2000);
    setPhaseTitle("PENDING");
    window.$startTime = undefined;
    window.$result.$hide(false);
    window.$scoreCycle.time.text = "TIME COST: 0.000";
    window.$scoreCycle.label.animateNumber(0, { time:2000 }, function() { });
    window.$processHead.$setTitle("- WAITING -");
    window.$processHead.$progressTo(0, 2000);
    window.$userCycle.phase1.gotoAndStop(0);
    window.$userCycle.phase2.gotoAndStop(0);
    window.$userCycle.phase3.gotoAndStop(0);
    window.$userCycle.phase4.gotoAndStop(0);
    window.$processPhase.$reset();
    if (currentUser) {
        window.$userCycle.$hideProfile(function() {
            callBack && callBack();
        });
    } else {
        callBack && callBack();
    }
}

function startStaticAnimation() {

    var cjs = createjs;
    var Tween = cjs.Tween;
    var Ease = cjs.Ease;

    var mc,txt,rect;

    //result
    mc = exportRoot.result;
    mc.label.text = "";
    mc.label.alpha = 0;
    mc.frame1.$x1 = mc.frame1.x;
    mc.frame2.$x1 = mc.frame2.x;
    mc.frame1.x += (1970 * 1);
    mc.frame2.x -= (1970 * 1);
    mc.frame1.$x2 = mc.frame1.x;
    mc.frame2.$x2 = mc.frame2.x;
    mc.bg.visible = false;
    mc.$show = function(txt, callBack) {
        var mc = this;
        Tween.get(mc.frame1).to({ x:mc.frame1.$x1 }, 300, Ease.quadOut);
        Tween.get(mc.frame2).to({ x:mc.frame2.$x1 }, 300, Ease.quadOut).call(function() {
            mc.bg.visible = true;
            mc.label.text = txt;
            mc.label.animateBlink({ times:4, min:0, max:1 }, function() {
                callBack && callBack.apply(mc, []);
            });
        });
    };
    mc.$hide = function(animate, callBack) {
        var mc = this;
        mc.bg.visible = false;
        mc.label.text = "";
        mc.label.alpha = 0;
        if (animate) {
            Tween.get(mc.frame1).to({ x:mc.frame1.$x2 }, 300, Ease.quadOut);
            Tween.get(mc.frame2).to({ x:mc.frame2.$x2 }, 300, Ease.quadOut).call(function() {
                callBack && callBack.apply(mc, []);
            });
        } else {
            setTimeout(function() {
                mc.frame1.x = mc.frame1.$x2;
                mc.frame2.x = mc.frame2.$x2;
                callBack && callBack.apply(mc, []);
            }, 0);
        }
    };
    window.$result = mc;

    //top_info
    mc = exportRoot.top_info;
    mc.$index = 0;
    mc.$run = function() {
        var moveDistance = 2420;
        var move = function(txt, x1) {
            Tween.removeTweens(txt);
            txt.x = x1;
            txt.text = "[" + convertTimeToDate(Date.now(), true, 'en').split(" ")[1] + "] " + FAKE_INFO[this.$index];
            this.$index ++;
            if (this.$index >= FAKE_INFO.length) {
                this.$index = 0;
            }
            var tween = Tween.get(txt).to({ x:x1 - moveDistance }, 14000, Ease.linear).call(function() {
                move.apply(this, [ txt, x1 ]);
            }.bind(this));
            /*
            tween.addEventListener("change", function(event) {
                if (txt.x <= -68) {
                    //again
                    event.target.removeEventListener(event.type, arguments.callee);
                    move(txt, x1);
                }
            }.bind(this));
            */
        }.bind(this);
        move(this.txt1, 1758);
        move(this.txt2, 2373);
        setTimeout(function() {
            move(this.txt3, 1758);
            move(this.txt4, 2373);
        }.bind(this), 7000);
    };
    mc.$run();

    //performance
    var bars = [];
    txt = exportRoot.performance.title.label;
    txt.scaleX = txt.scaleY = 0.8;
    var num = exportRoot.performance.monit.numChildren;
    for (var i = 0; i < num; i++) {
        var child = exportRoot.performance.monit.getChildAt(i);
        if (child.constructor == cjs.Text) {
            child.scaleX = child.scaleY = 0.7;
        } else {
            child = exportRoot.performance.monit["bar" + i];
            if (child) {
                child.gotoAndStop(0);
                bars.push(child);
            }
        }
    }

    exportRoot.performance.monit.$update = function() {
        bars.forEach(function(bar) {
            var frame = 35 + Math.ceil(Math.random() * 64);
            bar.gotoAndStop(frame);
        });
    };
    setInterval(exportRoot.performance.monit.$update, 1000 / 10);

    //cycle_big
    mc = exportRoot.cycle_big.progress_bar;
    mc.gotoAndStop(0);

    mc.$update = function(val) {
        val = Math.ceil((this.totalFrames - 1) * (val / 100));
        val = Math.min(val, (this.totalFrames - 1));
        val = Math.max(val, 0);
        this.gotoAndStop(val);
    };
    window.$cycleBigProgress = mc;

    txt = exportRoot.cycle_big.label;
    txt.txt = "";
    window.$cycleBigProgressLabel = txt;

    mc = exportRoot.cycle_big.inside;
    mc.gotoAndStop(0);

    /*
    mc.$run = function() {
        var r = Math.round(30 + Math.random() * 330) * (Math.random() < 0.5 ? 1 : -1);
        var t = Math.round(800 + Math.random() * 1200);
        var w = Math.round(100 + Math.random() * 300);
        Tween.get(this).wait(w).to({ rotation:r }, t, Ease.backOut).call(this.$run.bind(this));
    };
    */
    mc.$run = function() {
        mc.$tween = Tween.get(this, { loop:true }).to({ rotation:360 }, 1500);
    };
    mc.$stop = function() {
        mc.$tween && mc.$tween.pause();
    };
    mc.$run();

    //cycle big board
    txt = exportRoot.cycle_big_board.title;
    txt.text = "";
    window.$cycleBigBoardTitle = txt;

    txt = exportRoot.cycle_big_board.log;
    txt.text = "";
    txt.scaleX = txt.scaleY = 0.8;
    window.$cycleBigBoardLog = txt;

    mc = exportRoot.cycle_big_board.title_frame;
    mc.gotoAndStop(0);
    window.$cycleBigBoardTitleFrame = mc;

    //map
    mc = exportRoot.map;
    mc.$startScan = function() {
        var scan = this.scan;
        scan.x = -40;
        Tween.get(scan, { loop:true }).wait(1000).to({ x:330 }, 4000, Ease.linear);
    };
    mc.$stopScan = function() {
        var scan = this.scan;
        Tween.removeTweens(scan);
        scan.x = -40;
    };
    mc.$startScan();
    window.$map = mc;

    mc = exportRoot.map.pin;
    mc.gotoAndStop(0);
    mc.visible = false;
    window.$mapPin = mc;


    //process head
    mc = exportRoot.process_head.process_bar;
    mc.$max = mc.width - (mc.width - mc.track.x) * 2;

    mc = exportRoot.process_head;
    mc.__progress = { val:0 };
    mc.$reset = function() {
        this.title.text = "- WAITING -";
        this.$setProgress(0);
        this.process_cycle.gotoAndStop(0);
    };
    mc.$run = function() {
        this.process_cycle.play();
    };
    mc.$stop = function() {
        Tween.removeTweens(this.__progress);
        this.removeEventListener("tick", this.__progressUpdate);
        this.process_cycle.gotoAndStop(0);
    };
    mc.$setTitle = function(str) {
        this.title.animatePrintIn(str, { fps:16 });
    };
    mc.$setProgress = function(val) {
        this.__progress.val = val;
        var bar = this.process_bar;
        bar.track.scaleX = Math.min(1, val / 100);
        this.progress_label.text = String(Math.round(val));
    };
    mc.$progressTo = function(val, time, callBack) {
        this.removeEventListener("tick", this.__progressUpdate);
        this.addEventListener("tick", this.__progressUpdate);
        Tween.get(this.__progress).to({ val:val }, time).call(function() {
            this.$stop();
            this.$setProgress(val);
            callBack && callBack.apply(this, []);
        }.bind(this));
    };
    mc.__progressUpdate = function() {
        this.$run();
        this.$setProgress(this.__progress.val);
    }.bind(mc);
    mc.$reset();
    window.$processHead = mc;


    //process phase
    mc = exportRoot.process_phase;
    mc.__phaseColor = [ "#1F5A75", "#F6AF36", "#8AF8F3" ];
    mc.$activePhase = function(id, status) {
        var item = this["item" + id];
        status = status || 0;
        item.gotoAndStop(status);
        item.label.color = this.__phaseColor[status];
        Tween.removeTweens(item);
        if (status == 1) {
            Tween.get(item).to({ scaleX:1.2, scaleY:1.2 }, 300, Ease.backOut);
        } else {
            Tween.get(item).wait(500).to({ scaleX:1, scaleY:1 }, 300, Ease.backOut);
        }
    };
    mc.$phaseComplete = function(id, flag) {
        var mc = this;
        var delay = 40;
        Tween.get(this).
            wait(0).
            call(function() {
                mc.$activePhase(id, flag ? 2 : 0);
            }).
            wait(delay).
            call(function() {
                mc.$activePhase(id, flag ? 0 : 2);
            }).
            wait(delay).
            call(function() {
                mc.$activePhase(id, flag ? 2 : 0);
            }).
            wait(delay).
            call(function() {
                mc.$activePhase(id, flag ? 0 : 2);
            });
        window.$userCycle.$activePhase(id, flag);
    };
    mc.$reset = function() {
        var mc = this;
        var delay = 200;
        setTimeout(function() {
            mc.$phaseComplete(1, true);
        }, delay * 3);
        setTimeout(function() {
            mc.$phaseComplete(2, true);
        }, delay * 2);
        setTimeout(function() {
            mc.$phaseComplete(3, true);
        }, delay * 1);
        setTimeout(function() {
            mc.$phaseComplete(4, true);
        }, delay * 0);
    };
    window.$processPhase = mc;

    mc = exportRoot.process_phase.item1;
    mc.label.text = PROCESS_PHASE[0];
    mc.gotoAndStop(0);
    mc = exportRoot.process_phase.item2;
    mc.label.text = PROCESS_PHASE[1];
    mc.gotoAndStop(0);
    mc = exportRoot.process_phase.item3;
    mc.label.text = PROCESS_PHASE[2];
    mc.gotoAndStop(0);
    mc = exportRoot.process_phase.item4;
    mc.label.text = PROCESS_PHASE[3];
    mc.gotoAndStop(0);


    //top left
    mc = exportRoot.top_left.cycle;
    mc.gotoAndStop(0);
    mc.$run = function() {
        var shadow = this.shadow;
        function shadowAnimate() {
            shadow.scaleX = 1;
            shadow.scaleY = 1;
            Tween.get(shadow).to({ scaleX:2.4, scaleY:2.4 }, 2000, Ease.linear).to({ scaleX:1.0, scaleY:1.0 }, 2000, Ease.linear).call(function() {
                shadowAnimate();
            });
        }
        shadowAnimate();

        var frame = this.frame;
        function frameAnimate() {
            frame.rotation = 360;
            var r = Math.round(30 + Math.random() * 1030) * (Math.random() < 0.5 ? 1 : -1);
            var t = Math.round(2000 + Math.random() * 2000);
            //var w = Math.round(100 + Math.random() * 300);
            r = 0;
            t = 3000;
            Tween.get(frame, { loop:true }).to({ rotation:r }, t, Ease.linear);
        }
        frameAnimate();

        var core = this.core;
        function coreAnimate() {
            core.rotation = 0;
            var r = Math.round(30 + Math.random() * 1030) * (Math.random() < 0.5 ? 1 : -1);
            var t = Math.round(2000 + Math.random() * 2000);
            //var w = Math.round(100 + Math.random() * 300);
            r = -360;
            t = 3000;
            Tween.get(core, { loop:true }).to({ rotation:r }, t, Ease.linear);
        }
        coreAnimate();

        //this.alpha = 0.8;
        /*
        var cycle = this;
        function cycleAnimate() {
            var s = 0.8 + Math.random() * 0.3;
            var t = Math.round(1000 + Math.random() * 1000);
            var w = Math.round(2000 + Math.random() * 3000);
            Tween.get(cycle).wait(w).to({ scaleX:s, scaleY:s }, t, Ease.backIn).call(cycleAnimate);
        }
        */
        //cycleAnimate();
    };
    window.$topLeftCycle = mc;
    mc.$run();

    var binaryNum = [ "0", "1"];
    mc = exportRoot.top_left;
    mc.$updateText = function() {
        var str = binaryNum.random() + binaryNum.random();
        this.txt1.text = str;
        str = binaryNum.random() + binaryNum.random();
        this.txt2.text = str;
        str = binaryNum.random() + binaryNum.random();
        this.txt3.text = str;
        str = binaryNum.random() + binaryNum.random();
        this.txt4.text = str;
        str = binaryNum.random() + "\r\n" + binaryNum.random() + "\r\n" + binaryNum.random() + "\r\n" + binaryNum.random() + "\r\n" + binaryNum.random();
        this.txt5.text = str;
    };
    setInterval(mc.$updateText.bind(mc), 1000 / 8);

    txt = exportRoot.top_left.time.label;
    window.$topLeftTime = txt;

    //score cycle
    mc = exportRoot.score_cycle;
    window.$scoreCycle = mc;

    mc = exportRoot.score_cycle.outside;
    mc.animateRotate({ loop:true, direction:-1 });
    mc.$scale = mc.scaleX;

    mc = exportRoot.score_cycle.frame_light;
    mc.$scale = mc.scaleX;
    mc.mc1.stop();
    mc.mc2.stop();

    mc.mc1.playTo(mc.mc1.totalFrames - 1, { loopTo:0, fps:8 });
    mc.mc2.playTo(mc.mc2.totalFrames - 1, { loopTo:0, fps:8 });

    mc = exportRoot.score_cycle.core;
    mc.$scale = mc.scaleX;

    mc = exportRoot.score_cycle.frame_block;
    mc.$scale = mc.scaleX;
    mc.stop();

    mc = exportRoot.score_cycle.frame;
    mc.$scale = mc.scaleX;
    mc.stop();

    txt = exportRoot.score_cycle.label;
    txt.text = "0";


    //user cycle
    mc = exportRoot.user_cycle;
    mc.gotoAndStop(0);
    mc.phase1.gotoAndStop(0);
    mc.phase2.gotoAndStop(0);
    mc.phase3.gotoAndStop(0);
    mc.phase4.gotoAndStop(0);
    mc.$activePhase = function(id, reset) {
        this["phase" + id].gotoAndStop(reset ? 1 : 0);
        this["phase" + id].animateFrameBlink({ frames:reset ? [ 1, 0 ] : [ 0, 1 ], times:6 });
    }
    mc.$startScan = function() {
        var scan = this.picHolder.scan;
        scan.y = -75;
        Tween.get(scan, { loop:true }).wait(1000).to({ y:125 }, 4000, Ease.linear);
    };
    mc.$stopScan = function() {
        var scan = this.picHolder.scan;
        Tween.removeTweens(scan);
        scan.y = -75;
    };
    mc.$showProfile = function(data, callBack) {
        var setProfile = function(mc, val, delay, callBack) {
            mc.label.text = "";
            mc.gotoAndStop(0);
            Tween.removeTweens(mc);
            Tween.get(mc).wait(delay).call(function() {
                mc.playTo(-1, function() {
                    mc.label.animatePrintIn(val, { fps:24 });
                    callBack && callBack();
                });
            });
            mc.visible = true;
        };
        var delay = 150;
        setProfile(this.profile1, data.id, (0 * delay));
        setProfile(this.profile2, data.name, (1 * delay));
        setProfile(this.profile3, data.age + "岁", (2 * delay));
        setProfile(this.profile4, data.loc, (3 * delay));
        setProfile(this.profile5, data.phone, (4 * delay));
        setProfile(this.profile6, "借款" + data.loan + "元", (5 * delay), callBack);
    };
    mc.$hideProfile = function(callBack) {
        var hideProfile = function(mc, delay, callBack) {
            Tween.removeTweens(mc);
            //mc.gotoAndStop(mc.totalFrames - 1);
            Tween.get(mc).wait(delay).call(function() {
                var opt = { playBack:true };
                mc.label.animatePrintOut({ fps:24 });
                mc.playTo(0, opt, function() {
                    mc.visible = false;
                    callBack && callBack();
                });
            });
        };
        var delay = 150;
        hideProfile(this.profile6, (0 * delay));
        hideProfile(this.profile5, (1 * delay));
        hideProfile(this.profile4, (2 * delay));
        hideProfile(this.profile3, (3 * delay));
        hideProfile(this.profile2, (4 * delay));
        hideProfile(this.profile1, (5 * delay), callBack);
    };
    mc.profile1.visible = false;
    mc.profile2.visible = false;
    mc.profile3.visible = false;
    mc.profile4.visible = false;
    mc.profile5.visible = false;
    mc.profile6.visible = false;
    setTimeout(function() {
        var mc = this;
        mc.profile1.gotoAndStop(0);
        mc.profile2.gotoAndStop(0);
        mc.profile3.gotoAndStop(0);
        mc.profile4.gotoAndStop(0);
        mc.profile5.gotoAndStop(0);
        mc.profile6.gotoAndStop(0);
    }.bind(mc), 50);

    window.$userCycle = mc;
    mc = exportRoot.user_cycle.core;
    mc.gotoAndStop(0);
    mc = exportRoot.user_cycle.inside_1;
    mc.gotoAndStop(0);
    mc = exportRoot.user_cycle.inside_2;
    mc.gotoAndStop(0);
    mc = exportRoot.user_cycle.inside_3;
    mc.gotoAndStop(0);
    mc = exportRoot.user_cycle.picHolder;
    mc.gotoAndStop(0);
    mc.alpha = 0;


    //card
    mc = exportRoot.card_panel;
    var cardParent = mc.parent;
    var ref = lib.card_panel2;
    ref.prototype.setFront = function() {
        this.cycle.playTo(this.cycle.totalFrames - 1, { fps:4 });
        this.cycle.visible = true;
    };
    ref.prototype.setIndex = function(index) {
        var card = this;
        this.$index = index;
        if (index == window.$cards.length - 1) {
            var pic = null;
            if (users && users.length > 0) {
                pic = users[0].pic;
            }
            loadUserPic(pic, { width:60, height:60 }, function(bitmap) {
                var sp = new createjs.MovieClip();
                sp.alpha = 0;
                bitmap.alpha = 0.7;
                sp.addChild(bitmap);
                sp.x = - 30;
                sp.y = - 30;
                card.$pic = sp;
                card.picHolder.addChild(sp);
                card.picHolder.mock.visible = false;
                sp.animateBlink({ min:0, max:1, times:6 });
                card.cycle_glow.visible = true;
                card.txt1.animateBlink({ min:0, max:1, times:4, after:200 });
                card.txt2.animateBlink({ min:0, max:1, times:4, after:500 });
                card.txt3.alpha = 1;
                card.txt3.animateOutput({ fps:6 });

                card.cycle.animateBlink({ min:0, max:1, times:4, after:700 }, function() {
                    card.cycle.playTo(card.cycle.totalFrames - 1, { fps:4, loopTo:0 });
                });
                card.cycle_glow.scaleX = card.cycle_glow.scaleY = 1.2;
                Tween.get(card.cycle_glow, { loop:true }).to({ scaleX:0.8, scaleY:0.8, alpha:0.8 }, 2000, Ease.linear).to({ scaleX:1.2, scaleY:1.2, alpha:1 }, 2000, Ease.linear);

            });
        } else {
            if (this.$pic && this.$pic.parent) {
                this.$pic.parent.removeChild(this.$pic);
                this.$pic = null;
            }
            this.picHolder.mock.visible = true;
            this.cycle.gotoAndStop(0);
            this.cycle.alpha = 0;
            this.cycle_glow.alpha = 0;
            this.txt1.alpha = 0;
            this.txt2.alpha = 0;
            this.txt3.stopAnimate(true);
            this.txt3.alpha = 0;
            Tween.removeTweens(this.cycle_glow);
        }
    };
    ref.prototype.setData = function(data) {
        data = data || genMockUser();
        var card = this;
        card.$data = data;
        card.picHolder.removeChildAt(0);
        var profile = [
            "NAME: " + data.name,
            "LOCATION: " + data.loc,
            "GENDER: " + (data.gender == 1 ? "MALE" : "FEMALE"),
            "AGE: " + data.age,
            "LOAN REQ: " + data.loan
        ];
        //card.txt1.text = profile.join("\r\n");
        //card.txt2.text = "";
    };
    var cardNum = 6;
    var cards = [];
    var picGapX = 15; //x间距
    var picGapY = 15; //y间距
    for (var i = 0; i < cardNum; i++) {
        var card = new ref();
        card.x = mc.x + picGapX * i;
        card.y = mc.y + picGapY * i;
        card.alpha = (0.6 - 0.08 * cardNum) + 0.08 * i;
        cards.push(card);
        cardParent.addChild(card);
        //card.txt1.text = "";
        //card.txt2.text = "";
        card.txt1.alpha = 0;
        card.txt2.alpha = 0;
        card.txt3.alpha = 0;
        card.txt3.scaleX = card.txt3.scaleY = 0.6;
        card.cycle.alpha = 0;
        card.cycle_glow.alpha = 0;
        (function(card, index) {
            setTimeout(function() {
                card.cycle.gotoAndStop(0);
                card.setData();
                card.setIndex(index);
            }, 50);
        })(card, i);
    }
    window.$cards = cards;
    window.$cardPlayer = new StackPic(cards, 800);
    window.$cardPlayer.outDistance = 300;
    window.$cardPlayer.moveGap = 0;
    window.$cardPlayer.out = function(callBack) {
        var ins = this;
        ins.switchPic(function() {
            //infront
            var card = this;
            card.setIndex(card.$index + 1);
        }, function() {
            //out
            var card = this;
            card.setIndex(0);
        }, function() {
            //all complete
            //var card = this.getFirstCard();
            //card.setIndex(cards.length - 1);
            callBack && callBack();
        });
    }
    mc.parent.removeChild(mc);

    //process link
    mc = exportRoot.link;
    mc.gotoAndStop(0);
    mc.playTo(-1, { loopTo:0, fps:12 });


    //process 1
    mc = exportRoot.process1;
    mc.line.gotoAndStop(0);
    mc.visible = false;
    mc.__props = [];
    mc.__tags = [];
    mc.loopChild(function(child) {
        if (child instanceof lib.tag) {
            this.__tags.push(child);
            child.gotoAndStop(0);
            child.label.text = "";
        } else if (child instanceof createjs.Text) {
            child.text = "";
            this.__props.push(child);
        }
    }.bind(mc));
    mc.$showTag = function() {
        var tagIndex = 0;
        var list = [].concat(PROCESS_1_TAG);
        list.shuffle();
        this.__tags.forEach(function(child) {
            child.scaleX = child.scaleY = randomBetween(1, 1.4);
            child.label.text = list[tagIndex] || "";
            child.gotoAndStop(0);
            clearTimeout(child.__showTimer);
            child.__showTimer = setTimeout(function() {
                child.__showTimer = undefined;
                child.playTo(-1);
            }, Math.round(200 + Math.random() * 1800));
            tagIndex ++;
        });
    };
    mc.$reset = function() {
        this.visible = false;
        this.line.gotoAndStop(0);
        this.__tags.forEach(function(child) {
            child.label.text = "";
            child.gotoAndStop(0);
        });
        this.__props.forEach(function(txt) {
            txt.stopAnimate();
            txt.text = "";
        });
    }
    mc.line.gotoAndStop(0);
    window.$process1 = mc;



    //process 2
    mc = exportRoot.process2;
    mc.line.gotoAndStop(0);
    mc.visible = false;
    mc.__props = [];
    mc.loopChild(function(child) {
        if (child instanceof createjs.Text) {
            child.text = "";
            this.__props.push(child);
        }
    }.bind(mc));
    /*
    mc.$showMatric = function(callBack) {
        var mc = this;
        mc.output.holder.x = mc.__outputHolderStartPos.x;
        mc.output.holder.y = mc.__outputHolderStartPos.y;
        mc.output.animateBlink({ times:3 }, function() {
            var q = [];
            var list = [].concat(mc.__outputTxts);
            //list.reverse();
            list.forEach(function(txt, i) {
                q.push(function(cb) {
                    txt.$show(i < (list.length - 1), function() {
                        cb();
                    });
                });
            });
            async.waterfall(q, function() {
                callBack && callBack.apply(mc, []);
            });
        });
    };
    */
    mc.$showMatric = function(callBack) {
        var mc = this;
        mc.output.holder.x = mc.__outputHolderStartPos.x;
        mc.output.holder.y = mc.__outputHolderStartPos.y;
        mc.output.animateBlink({ times:3 }, function() {
            var q = [];
            var list = [].concat(mc.__outputTxts);
            //list.reverse();
            list.forEach(function(txt, i) {
                /*
                var sepStr = "  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  ";
                if (txt.__str.length > 10) sepStr = sepStr.replace("  .  ", "");
                var finalStr = [1,2,3,4,5].random() + "/5";
                 txt.label.text = txt.__str + sepStr + finalStr;
                 */
                txt.bar.alpha = randomBetween(0.3, 0.9);
                txt.bar.scaleX = randomBetween(0.3, 1);
                txt.label.text = txt.__str;
                mc.output.holder.addChild(txt);
                //Tween.get(txt.bar).wait(i * 150).to({ scaleX:randomBetween(0.3, 1) }, 800, Ease.linear);
            });
            var y = 300 + mc.output.holder.y + (window.$process2.__outputTxtHeight + window.$process2.__offset) * list.length;
            Tween.get(mc.output.holder).to({ y:y }, 3500, Ease.linear).call(function() {

                mc.output.cusor.visible = true;
                mc.output.cusor.play();
                mc.output.done.animateBlink({ min:0, max:1, times:4 });

                callBack && callBack();
            });
        });
    };
    mc.output.cusor.visible = false;
    mc.output.cusor.gotoAndStop(0);
    mc.output.done.alpha = 0;
    mc.output.alpha = 0;
    mc.__outputTxtRect = { x:0, y:0 };
    mc.__outputTxts = [];
    mc.__offset = 0;
    mc.__outputTxtHeight = 26;
    mc.output.holder.removeChild(mc.output.holder.txt);
    mc.output.holder.txt = undefined;
    mc.output.holder.y = mc.output.holder.y + (mc.__outputTxtRect.y) * -1;
    var outputHeight = mc.__outputTxtRect.y;
    PROCESS_2_TAG.forEach(function(str, i) {
        var mc = this;
        var gap = 0;
        var txt = new lib.process2_output_txt();
        txt.bar.scaleX = 0;
        txt.$show = function(down, callBack) {
            var output = window.$process2.output;
            var txt = this;
            txt.bar.scaleX = 0;
            mc.output.holder.addChild(txt);
            var done = function() {
                if (down) {
                    Tween.get(output.holder).wait(0).to({ y:output.holder.y + window.$process2.__outputTxtHeight + window.$process2.__offset }, 200, Ease.quadOut).call(function() {
                        txt.parent && txt.parent.removeChild(txt);
                        callBack && callBack();
                    });
                } else {
                    callBack && callBack();
                }
            }.bind(txt);
            //var sepStr = "  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  ";
            //if (txt.__str.length > 10) sepStr = sepStr.replace("  .  ", "");
            //var finalStr = [1,2,3,4,5].random() + "/5";
            var opt = { fps:24 };
            opt.complete = function() {
                Tween.get(this.bar).to({ scaleX:randomBetween(0.3, 1) }, 400, Ease.linear).call(done);
                /*
                setTimeout(function() {
                    txt.label.text += sepStr;
                    setTimeout(function() {
                        txt.label.text += finalStr;
                        done();
                    }, 1000 / opt.fps);
                }, 1000 / opt.fps);
                */
            }.bind(this);
            txt.label.animatePrintIn(txt.__str, opt);

        }.bind(txt);
        txt.__str = str;
        txt.label.text = "";
        txt.x = this.__outputTxtRect.x;
        txt.y = -outputHeight;
        outputHeight += (this.__offset + this.__outputTxtHeight);
        this.__outputTxts.push(txt);
    }.bind(mc));
    mc.__outputHolderStartPos = { x:mc.output.holder.x, y:mc.output.holder.y };
    mc.$showCharts = function () {
        var mc = this;
        var delay = 100;
        var showAndHide = function(id, delay) {
            setTimeout(function() {
                var obj = mc.charts["c" + id];
                obj.animateBlink({ min:0, max:0.10 + Math.random() * 0.1, times:4 });
                setTimeout(function() {
                    obj.animateBlink({ min:obj.alpha, max:0, times:4 });
                }, 2000);
            }, delay);
        };
        showAndHide(1, delay * 0);
        showAndHide(2, delay * 1);
        showAndHide(3, delay * 2);
        showAndHide(4, delay * 3);
        showAndHide(5, delay * 4);

        setTimeout(function() {
            showAndHide(6, delay * 0);
            showAndHide(7, delay * 1);
            showAndHide(8, delay * 2);
            showAndHide(9, delay * 3);
        }, 2000);
    };
    mc.charts.loopChild(function(child) {
        child.alpha = 0;
    });
    mc.$reset = function() {
        this.line.gotoAndStop(0);
        this.output.alpha = 0;
        this.output.holder.x = this.__outputHolderStartPos.x;
        this.output.holder.y = this.__outputHolderStartPos.y;
        this.__props.forEach(function(txt) {
            txt.stopAnimate();
            txt.text = "";
        });
        this.__outputTxts.forEach(function(txt) {
            txt.label.stopAnimate();
            txt.label.text = "";
            txt.bar.scaleX = 0;
            txt.parent && txt.parent.removeChild(txt);
        });
        this.charts.loopChild(function(child) {
            child.alpha = 0;
        });
        this.output.cusor.visible = false;
        this.output.cusor.gotoAndStop(0);
        this.output.done.alpha = 0;
        this.visible = false;
    };
    window.$process2 = mc;



    //process3
    mc = exportRoot.process3;
    mc.line.gotoAndStop(0);
    mc.visible = false;
    mc.__outsideBlocks = [];
    mc.__blocks = [];
    mc.__blocks = [];
    mc.cube.loopChild(function(child, i) {
        if (child instanceof lib.p3_cube_block || child instanceof lib.p3_cube_block_outside) {
            //child.label.text = PROCESS_4_SITES[i] || "";
            child.alpha = 0;
            child.$index = this.__blocks.length;
            child.$pos = { x:child.x, y:child.y };
            this.__blocks.push(child);
            if (child instanceof lib.p3_cube_block_outside) {
                child.$outside = true;
                this.__outsideBlocks.push(child);
            }
            child.gotoAndStop(0);
        }
    }.bind(mc));
    mc.__blocks.forEach(function(block) {
        if (block.parent) block.parent.removeChild(block);
    });
    mc.__cubeInfos = [];
    mc.cube_info.loopChild(function(child) {
        child.alpha = 0;
        child.label.scaleX = child.label.scaleY = 1.15;
        this.__cubeInfos.push(child);
        child.gotoAndStop(0);
    }.bind(mc));
    mc.__cubeInfos.forEach(function(info) {
        if (info.parent) info.parent.removeChild(info);
    });
    mc.$showCube = function(callBack) {
        var mc = this;
        var num = 0;
        mc.__blocks.forEach(function(block, i) {
            mc.cube.addChild(block);
            block.alpha = 0;
            block.scaleX = block.scaleY = randomBetween(1.6, 2);
            block.x =  [ -randomBetween(400, 600, true), randomBetween(400, 600, true)].random();
            block.y =  [ -randomBetween(400, 600, true), randomBetween(400, 600, true)].random();
            var delay = randomBetween(0, 1000);
            if (child.$outside) {
                delay = randomBetween(1000, 2000);
            }
            var time = randomBetween(300, 800);
            Tween.get(block).wait(delay).to({ x:block.$pos.x, y:block.$pos.y, alpha:1, scaleX:1, scaleY:1 }, time, Ease.quadOut).call(function() {
                num ++;
                if (num >= mc.__blocks.length) {
                    //done
                    callBack && callBack.apply(mc, []);
                }
            });
        });
    };
    mc.$animateCube = function() {
        var mc = this;
        var blocks = [].concat(mc.__outsideBlocks);
        //blocks.reverse();
        blocks.forEach(function(block, i) {
            var delay = randomBetween(0, 2000);
            Tween.get(block).wait(delay).call(function() {
                //block.animateFrameBlink({ frames:[ 0, 1 ], times:3, fps:12 });
                block.gotoAndStop(1);
            });
        });
    };
    mc.cube_progress1.bar.gotoAndStop(0);
    mc.cube_progress1.label.text = "0%";
    mc.cube_progress1.visible = false;
    mc.cube_progress2.label.text = "0%";
    mc.cube_progress2.visible = false;
    mc.$animateProgress = function(callBack) {
        var mc = this;
        mc.$__animateProgress(mc.cube_progress1, function() {
            mc.$__animateProgress(mc.cube_progress2, function() {
                callBack && callBack.apply(mc, []);
            });
        });
    }
    mc.$__animateProgress = function(bar, callBack) {
        var mc = this;
        var p = bar;
        p.visible = true;
        p.animateBlink({ min:0, max:1, fps:16, times:4 });
        var opt = { fps:10 };
        opt.tick = function() {
            var pect = (p.bar.currentFrame + 1) / p.bar.totalFrames;
            p.label.text = Math.round(pect * 100) + "%";
        };
        setTimeout(function() {
            p.bar.playTo(-1, opt, function() {
                callBack && callBack.apply(mc, []);
            });
        }, 400);
    };
    mc.$animateCubeInfo = function(callBack) {
        var mc = this;
        var infos = [].concat(this.__cubeInfos);
        infos.shuffle();
        infos.forEach(function(info, i) {
            mc.cube_info.addChild(info);
            info.label.text = "";
            Tween.get(info).wait(i * 200).call(function() {
                var str = PROCESS_3_TAGS.random(); //PROCESS_3_TAGS.random();
                //str = randomString(randomBetween(8, 15, true));
                info.label.animatePrintIn(str, { fps:14 });
                info.animateBlink({ min:0, max:0.6, fps:16, times:4 }, function() {
                    Tween.get(info).wait(2000).call(function() {
                        info.animateBlink({ min:info.alpha, max:0, fps:16, times:4 }, function() {
                            if (i >= infos.length - 1) {
                                callBack && callBack.apply(mc, []);
                            }
                        });
                    });
                });
            });
        });
    };
    mc.__tags = [];
    mc.__tagRect = { x1:-450, y1:-80, x2:749, y2:800 };
    mc.removeChild(mc.txt_item);
    mc.txt_item = undefined;
    mc.$showTag = function(callBack) {
        var mc = this;
        var gen = function(delay) {
            var tag = new lib.p3_txt_item();
            mc.__tags.push(tag);
            tag.gotoAndStop(0);
            tag.label.text = randomString(randomBetween(6,15), "\n");
            tag.scaleX = tag.scaleY = randomBetween(0.7, 1);
            tag.x = randomBetween(mc.__tagRect.x1, mc.__tagRect.x2, true);
            tag.y = randomBetween(mc.__tagRect.y1 - 40, mc.__tagRect.y1 + 40, true);
            tag.alpha = 0;
            mc.addChildAt(tag);
            Tween.get(tag).wait(delay || 0).to({ alpha:randomBetween(0.4, 0.6), y:randomBetween(mc.__tagRect.y2, mc.__tagRect.y2 + 80, true) }, randomBetween(900, 1300), Ease.linear).call(function() {
                this.parent.removeChild(this);
                mc.__tags.splice(mc.__tags.indexOf(this), 1);
                gen();
            }.bind(tag));
        }.bind(this);
        for (var i = 0; i < 42; i++) {
            gen(i * 40);
        }
    };
    mc.$reset = function() {
        this.cube_progress1.bar.gotoAndStop(0);
        this.cube_progress1.label.text = "0%";
        this.cube_progress1.visible = false;
        this.cube_progress1.bar.gotoAndStop(0);
        this.cube_progress2.label.text = "0%";
        this.cube_progress2.visible = false;
        this.cube_progress2.bar.gotoAndStop(0);
        this.__blocks.forEach(function(block, i) {
            Tween.removeTweens(block);
            if (block.parent) block.parent.removeChild(block);
            block.alpha = 0;
            block.gotoAndStop(0);
        });
        this.__cubeInfos.forEach(function(info) {
            if (info.parent) info.parent.removeChild(info);
            Tween.removeTweens(info);
            info.label.text = "";
            info.alpha = 0;
            info.gotoAndStop(0);
        });
        this.__tags.forEach(function(tag) {
            Tween.removeTweens(tag);
            if (tag.parent) tag.parent.removeChild(tag);
        });
        this.__tags.length = 0;
        this.line.gotoAndStop(0);
        this.visible = false;
    };
    window.$process3 = mc;



    //process4
    mc = exportRoot.process4;
    mc.line.gotoAndStop(0);
    mc.tag_line.gotoAndStop(0);
    mc.visible = false;
    mc.__sites = [];
    mc.sites.loopChild(function(child, i) {
        if (child instanceof lib.p4_site_item) {
            child.label.text = PROCESS_4_SITES[i] || "";
            child.alpha = 0;
            this.__sites.push(child);
        }
    }.bind(mc));
    mc.__sites.forEach(function(child) {
        if (child.parent) child.parent.removeChild(child);
    });
    mc.__tags = [];
    mc.__tagMap = {};
    mc.__tagRect = { x:0, y:0, width:330, height:34, gap:10 };
    PROCESS_4_TAGS.forEach(function(str, i) {
        var tag = this.tags["tag" + (i + 1)];
        if (tag) {
            this.__tagMap["tag" + (i + 1)] = tag;
        }
    }.bind(mc));
    mc.tags.loopChild(function(child, i) {
        if (child instanceof lib.p4_tag_item) {
            child.$text = PROCESS_4_TAGS[i] || "";
            child.label.text = child.$text;
            child.$pos = { x:child.x, y:child.y };
            child.$parent = child.parent;
            child.label.color = "#1F5A75";
            child.gotoAndStop(0);
            child.$active = function(callBack) {
                var ins = this;
                this.$parent.addChild(this);
                this.label.text = this.$text;
                var opt = { frames:[ 0, 1 ], times:6 };
                opt.tick = function() {
                    if (this.currentFrame == 1) {
                        this.label.color = "#8AF8F3";
                    } else {
                        this.label.color = "#1F5A75";
                    }
                }
                Tween.get(this).wait(400).call(function() {
                    ins.animateFrameBlink(opt, function() {
                        ins.label.animatePrintIn("COMPLETE", { fps:16, complete: function() {
                            callBack && callBack();
                        }.bind(this) });
                    }.bind(this));
                }.bind(this));
            };
            this.__tags.push(child);
        }
    }.bind(mc));
    mc.__tags.forEach(function(child) {
        if (child.parent) child.parent.removeChild(child);
    });
    mc.$showTag = function(callBack) {
        var mc = this;
        mc.tag_line.playTo(-1);
        var tags = mc.__tagMap;
        //var delay = 300;
        Tween.get(mc.tags).wait(600).call(function() {
            tags.tag1.$active();
            tags.tag2.$active();
        });
        Tween.get(mc.tags).wait(900).call(function() {
            tags.tag3.$active();
        });
        Tween.get(mc.tags).wait(1000).call(function() {
            tags.tag5.$active();
        });
        Tween.get(mc.tags).wait(1100).call(function() {
            tags.tag4.$active();
            tags.tag6.$active();
        });
        Tween.get(mc.tags).wait(1800).call(function() {
            tags.tag7.$active();
        });
        Tween.get(mc.tags).wait(2000).call(function() {
            tags.tag10.$active();
        });
        Tween.get(mc.tags).wait(2100).call(function() {
            tags.tag8.$active();
            tags.tag9.$active();
        });
        Tween.get(mc.tags).wait(2200).call(function() {
            tags.tag11.$active();
        });
        Tween.get(mc.tags).wait(2700).call(function() {
            tags.tag12.$active(function() {
                callBack && callBack.apply(mc, []);
            });
        });
    };
    mc.sites.animate1.gotoAndStop(0);
    mc.sites.animate2.gotoAndStop(0);
    mc.$showSites = function(callBack) {
        var mc = this;
        var list = [].concat(mc.__sites);
        list.shuffle();
        list.forEach(function(child, i) {
            mc.sites.addChild(child);
            setTimeout(function() {
                child.animateBlink({ min:0, max:1, times:4 }, function() {
                    if (i == list.length - 1) {
                        callBack && callBack.apply(mc, []);
                    }
                });
            }.bind(child), 80 * i);
        });
        setTimeout(function() {
            mc.$startSiteScan();
        }, 1400);
        /*
        setTimeout(function() {
            mc.sites.animate1.playTo(-1, { loopTo:0, fps:18 });
        }, 1300);
        setTimeout(function() {
            mc.sites.animate2.playTo(-1, { loopTo:0, fps:18 });
        }, 2000);
        */
    };
    mc.$startSiteScan = function() {
        var scan = this.sites.scan;
        scan.x = -260;
        Tween.get(scan, { loop:true }).wait(1000).to({ x:640 }, 6000, Ease.linear);
    };
    mc.$stopSiteScan = function() {
        var scan = this.sites.scan;
        Tween.removeTweens(scan);
        scan.x = -260;
    };
    mc.$reset = function() {
        this.line.gotoAndStop(0);
        this.tag_line.gotoAndStop(0);
        this.sites.animate1.gotoAndStop(0);
        this.sites.animate2.gotoAndStop(0);
        this.__sites.forEach(function(child) {
            child.stopAnimate();
            child.alpha = 0;
            if (child.parent) child.parent.removeChild(child);
        });
        this.__tags.forEach(function(child) {
            child.stopAnimate();
            child.gotoAndStop(0);
            child.label.color = "#1F5A75";
            child.label.text = child.$text;
            Tween.removeTweens(child);
            if (child.parent) child.parent.removeChild(child);
        });
        Tween.removeTweens(this.tags);
        this.$stopSiteScan();
        this.visible = false;
    };
    window.$process4 = mc;


    /////////////////////////////////////////

    exportRoot.addEventListener("tick", window.rootRender);

    writePhaseLog();
}