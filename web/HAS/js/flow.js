/**
 * Created by Jay on 2016/12/8.
 */

var currentUser;
var progress = 0;
var lastProgress = -1;
var progressPayload = {};

function animateProgress(val, time, complete) {
    progressPayload.val = progress;
    createjs.Tween.removeTweens(createjs.Tween);
    progressPayload.tween && progressPayload.tween.removeEventListener("change", progressPayload.update);
    progressPayload.update = function() {
        progress = Math.round(progressPayload.val);
    };
    progressPayload.tween = createjs.Tween.get(progressPayload).to({ val:val }, time);
    complete && progressPayload.tween.call(complete);
    progressPayload.tween.addEventListener("change", progressPayload.update);
}

function switchUser(data, callBack) {
    progress = 0;
    updatePhaseProgress(0);

    if (currentUser) {
        $userCycle.$hideProfile(function() {
            currentUser = null;
            switchUser(data, callBack);
        });
        return;
    }


    currentUser = data;
    updateUserCycle();
    animateProgress(randomBetween(10, 15), 4000);
    setTimeout(function() {
        $cardPlayer.out();
    }, 2000);
    setTimeout(function() {
        $userCycle.$showProfile(currentUser);
        updateMapPin();
    }, 3000);
    setTimeout(function() {
        window.$startTime = Date.now();
        setPhaseTitle("PROCESSING");
        callBack();
    }, 4000);
    setPhaseTitle("SEARCHING");
}

function doProcess1(callBack) {

    window.$processPhase.$activePhase(1, 1);

    var head = window.$processHead;
    head.$setTitle(PROCESS_PHASE[0]);
    var p1 = window.$process1;
    p1.visible = true;
    p1.line.playTo(-1);
    setTimeout(function() {
        p1.__props.forEach(function(txt, i) {
            setTimeout(function() {
                txt.text = "";
                txt.animatePrintIn(PROCESS_1_PROPS[i], { fps:8 });
            }, 100 * i);
        });
    }, 700);
    setTimeout(function() {
        p1.$showTag();
    }, 1200);
    setTimeout(function() {
        window.updateScore(currentUser.info_score);
    }, 600);
    head.$setProgress(0);
    head.$progressTo(100, 4000);

    animateProgress(35, 4000, function() {
        window.$processPhase.$phaseComplete(1);
        setTimeout(function() {
            callBack();
        }, 400);
    });
}

function doProcess2(callBack) {

    window.$processPhase.$activePhase(2, 1);

    var head = window.$processHead;
    head.$setTitle(PROCESS_PHASE[1]);
    var p2 = window.$process2;
    p2.visible = true;
    p2.line.playTo(-1);
    setTimeout(function() {
        p2.__props.forEach(function(txt, i) {
            setTimeout(function() {
                txt.text = "";
                txt.animatePrintIn(PROCESS_2_PROPS[i], { fps:12 });
            }, 100 * i);
        });
    }, 700);
    setTimeout(function() {
        window.updateScore(currentUser.credit_score);
        p2.$showMatric();
    }, 600);
    p2.$showCharts();
    head.$setProgress(0);
    head.$progressTo(100, 4800);

    animateProgress(65, 5000, function() {
        window.$processPhase.$phaseComplete(2);
        setTimeout(function() {
            callBack();
        }, 400);
    });
}

function doProcess3(callBack) {

    window.$processPhase.$activePhase(3, 1);

    var head = window.$processHead;
    head.$setTitle(PROCESS_PHASE[2]);
    var p3 = window.$process3;
    p3.visible = true;
    p3.line.playTo(-1);

    setTimeout(function() {
        window.updateScore(currentUser.fake_score);
        p3.$showCube(function() {
            setTimeout(function() {
                p3.$animateCube();
                p3.$animateProgress();
                p3.$animateCubeInfo(function() {
                    p3.$animateCubeInfo();
                });
            }, 0);
        });
    }, 600);

    setTimeout(function() {
        p3.$showTag(function() {
        });
    }, 1000);

    head.$setProgress(0);
    head.$progressTo(100, 10200);

    animateProgress(85, 10500, function() {
        window.$processPhase.$phaseComplete(3);
        setTimeout(function() {
            callBack();
        }, 400);
    });

}

function doProcess4(callBack) {

    window.$processPhase.$activePhase(4, 1);

    var head = window.$processHead;
    head.$setTitle(PROCESS_PHASE[3]);
    var p4 = window.$process4;
    p4.visible = true;
    p4.line.playTo(-1);

    setTimeout(function() {
        window.updateScore(currentUser.prohibit);
        p4.$showSites(function() {

        });
        p4.$showTag();
    }, 700);

    head.$setProgress(0);
    head.$progressTo(100, 5300);

    animateProgress(100, 5500, function() {
        window.$processPhase.$phaseComplete(4);
        setTimeout(function() {
            callBack();
        }, 400);
    });
}