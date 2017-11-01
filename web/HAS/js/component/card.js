/**
 * Created by Jay on 2016/12/7.
 */
var StackPic = (function(){
    function StackPic(displayList,moveTime){
        this.mcArr = [].concat(displayList);
        this.picNum = displayList.length;
        this.currentIndex = this.picNum - 1;
        var mc0 = displayList[0];
        var mc1 = displayList[1];
        this.startPos = {
            x:mc0.x,
            y:mc0.y,
            alpha:mc0.alpha
        }
        this.picGapX = mc1.x - mc0.x;
        this.picGapY = mc1.y - mc0.y;
        this.moveTime = parseInt(moveTime) > 0 ? moveTime:500;
        this.moveGap = this.moveTime / this.picNum;
        this.switching = false;
        this.waitToRun = 0;
    }
    var _proto = StackPic.prototype;
    var cjs = createjs;

    _proto.run = function(){
        this.waitToRun ++;
        this.readyToRun();
    }

    _proto.readyToRun = function(){
        //console.log( "waitToRun" + this.waitToRun );
        if( this.waitToRun > 0 ){
            this.switchPic(null, null, this.readyToRun.bind(this));
        }
    }

    _proto.getFirstCard = function(){
        return this.mcArr[this.mcArr.length];
    }

    _proto.getCardNum = function(){
        return this.mcArr.length;
    }
    _proto.switchPic = function(inFront, outComplete, allComplete){
        if(!this.switching){
            var out = true;
            var ciC = this.getFirstCard()-1;
            this.switching = true;
            var mc0Index = this.mcArr[0];
            var ins = this;
            mc0Index = mc0Index.parent.getChildIndex(mc0Index);
            var temp = [].concat(ins.mcArr);
            var firstMC = ins.mcArr.pop();
            ins.mcArr.splice(0, 0, firstMC);

            var finalIndex = temp.length - 1;
            for( var i = finalIndex; i >= 0; i-- ){
                var mc = temp[i];
                var frontPos;
                if (i != finalIndex) {
                    var tempMC = temp[i + 1];
                    frontPos = { x:tempMC.x, y:tempMC.y, alpha:tempMC.alpha};
                }
                (function(mc, frontPos, i) {
                    var j = i;
                    var index = i;
                    var targetX = mc.x + ins.picGapX;
                    var targetY = mc.y + ins.picGapY;
                    var time = ins.moveTime;
                    if(!frontPos){
                        var dx = ins.outDistance ? (ins.outDistance + mc.x) : targetX*4;
                        cjs.Tween.get(mc).wait(ins.moveGap*j).to({ x:dx,alpha:0 },ins.moveTime).call(
                            function(mc){
                                mc.x = ins.startPos.x - ins.picGapX;
                                mc.y = ins.startPos.y - ins.picGapY;
                                mc.parent.setChildIndex(mc,mc0Index);
                                outComplete && outComplete.apply(mc, []);
                                cjs.Tween.get(mc).to({ x:ins.startPos.x,y:ins.startPos.y,alpha:ins.startPos.alpha },ins.moveTime).call(ins.animEnd.bind(ins),[(allComplete || function(){}).bind(ins)]);
                            },[mc]
                        );
                        out = false;
                    } else {
                        cjs.Tween.get(mc).wait(ins.moveGap*j).to({ x:frontPos.x,y:frontPos.y,alpha:frontPos.alpha },ins.moveTime).call((inFront || function(){}).bind(mc));
                    }
                })(mc, frontPos, i);
            }

        }

    }
    _proto.animEnd = function(callback){
        this.switching = false;
        this.waitToRun --;
        if(callback){callback()}
    }
    return StackPic;
})();