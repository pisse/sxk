(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#1B1B1B",
	manifest: [
		{src:"images/bg.jpg?1482227427690", id:"bg"},
		{src:"images/bg_top.png?1482227427690", id:"bg_top"},
		{src:"images/chart1.png?1482227427690", id:"chart1"},
		{src:"images/chart2.png?1482227427690", id:"chart2"},
		{src:"images/chart3.png?1482227427690", id:"chart3"},
		{src:"images/chart4.png?1482227427690", id:"chart4"},
		{src:"images/chart5.png?1482227427690", id:"chart5"},
		{src:"images/chart6.png?1482227427690", id:"chart6"},
		{src:"images/chart7.png?1482227427690", id:"chart7"},
		{src:"images/chart8.png?1482227427690", id:"chart8"},
		{src:"images/chart9.png?1482227427690", id:"chart9"},
		{src:"images/map.png?1482227427690", id:"map"},
		{src:"images/user.png?1482227427690", id:"user"}
	]
};



// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.bg_top = function() {
	this.initialize(img.bg_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,60);


(lib.chart1 = function() {
	this.initialize(img.chart1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,221);


(lib.chart2 = function() {
	this.initialize(img.chart2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,162);


(lib.chart3 = function() {
	this.initialize(img.chart3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,170);


(lib.chart4 = function() {
	this.initialize(img.chart4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,249);


(lib.chart5 = function() {
	this.initialize(img.chart5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,238);


(lib.chart6 = function() {
	this.initialize(img.chart6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,207);


(lib.chart7 = function() {
	this.initialize(img.chart7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,227);


(lib.chart8 = function() {
	this.initialize(img.chart8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,156);


(lib.chart9 = function() {
	this.initialize(img.chart9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,178);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,186);


(lib.user = function() {
	this.initialize(img.user);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.profile_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.label = new cjs.Text("借款 1000元", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 160;
	this.label.setTransform(-14.4,-28.1,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(21));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgGAHQgDgDAAgEQAAgDADgDQAEgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgEgCg");
	this.shape.setTransform(-34,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgJAJQgDgEAAgFQAAgEADgEQAFgEAEgBQAFABAEAEQAFAEAAAEQAAAFgFAEQgEAEgFABQgEgBgFgEg");
	this.shape_1.setTransform(-34,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgFAGgBQAHABAFAFQAGAFgBAGQABAHgGAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(-34,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgHAHABQAJgBAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgHABgHgHg");
	this.shape_3.setTransform(-34,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AgRARQgHgHgBgKQABgJAHgIQAHgIAKAAQALAAAGAIQAJAIgBAJQABAKgJAHQgGAJgLAAQgKAAgHgJg");
	this.shape_4.setTransform(-34,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6AF36").s().p("AgTAUQgKgIABgMQgBgLAKgIQAIgJALAAQAMAAAJAJQAIAIABALQgBAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_5.setTransform(-34,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 图层 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(0.5,1,0,3).p("AAVAAQAAAJgGAGQgHAHgIAAQgHAAgHgHQgHgGAAgJQAAgIAHgGQAHgHAHAAQAIAAAHAHQAGAGAAAIg");
	this.shape_6.setTransform(-34,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8AF8F3").ss(0.8,1,0,3).p("AgcAAQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIQgIgJAAgMg");
	this.shape_7.setTransform(-34,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AF8F3").ss(1.1,1,0,3).p("AgkAAQAAgOALgLQALgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLALgPAAQgOAAgLgLQgLgLAAgPg");
	this.shape_8.setTransform(-34,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8AF8F3").ss(1.4,1,0,3).p("AgsAAQAAgRAOgNQANgOARAAQASAAANAOQAOANAAARQAAASgOANQgNAOgSAAQgRAAgNgOQgOgNAAgSg");
	this.shape_9.setTransform(-34,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8AF8F3").ss(1.7,1,0,3).p("AgzAAQAAgVAQgOQAOgQAVAAQAVAAAPAQQAQAOAAAVQAAAWgQAOQgPAQgVAAQgVAAgOgQQgQgOAAgWg");
	this.shape_10.setTransform(-34,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AA8AAQAAAZgTARQgQASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAAQASQATARAAAYg");
	this.shape_11.setTransform(-34,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},15).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAIAAIgPAA");
	this.shape_12.setTransform(148.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhoAAIDRAA");
	this.shape_13.setTransform(138.5,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjJAAIGTAA");
	this.shape_14.setTransform(128.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkqAAIJVAA");
	this.shape_15.setTransform(119.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AmLAAIMWAA");
	this.shape_16.setTransform(109.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AnrAAIPXAA");
	this.shape_17.setTransform(99.7,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ApMAAISZAA");
	this.shape_18.setTransform(90.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AqtAAIVbAA");
	this.shape_19.setTransform(80.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AsOAAIYdAA");
	this.shape_20.setTransform(70.7,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ANwAAI7fAA");
	this.shape_21.setTransform(61,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(6));

	// 图层 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAFAAIgJAB");
	this.shape_22.setTransform(210,-14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhQATIChgl");
	this.shape_23.setTransform(202.5,-12.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AibAkIE4hH");
	this.shape_24.setTransform(194.9,-10.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjnA1IHPhp");
	this.shape_25.setTransform(187.4,-8.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AEzhGIpmCN");
	this.shape_26.setTransform(179.8,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-28.1,164,28.1);


(lib.profile_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.label = new cjs.Text("186*****670", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 160;
	this.label.setTransform(-59,8,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(21));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgGAHQgDgEAAgDQAAgCADgEQAEgCACAAQAEAAACACQADAEAAACQAAADgDAEQgCADgEAAQgCAAgEgDg");
	this.shape.setTransform(-79,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgJAKQgDgFAAgFQAAgEADgEQAFgFAEAAQAFAAAEAFQAFAEAAAEQAAAFgFAFQgEADgFAAQgEAAgFgDg");
	this.shape_1.setTransform(-79,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgFAGAAQAHAAAFAFQAGAFgBAGQABAHgGAFQgFAFgHABQgGgBgFgFg");
	this.shape_2.setTransform(-79,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgHAHAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgHABgHgHg");
	this.shape_3.setTransform(-79,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AgRASQgHgIgBgKQABgKAHgGQAHgJAKAAQALAAAGAJQAJAGgBAKQABAKgJAIQgGAHgLABQgKgBgHgHg");
	this.shape_4.setTransform(-79,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6AF36").s().p("AgTAUQgKgIABgMQgBgLAKgIQAIgJALAAQAMAAAJAJQAIAIABALQgBAMgIAIQgJAKgMgBQgLABgIgKg");
	this.shape_5.setTransform(-79,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 图层 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(0.5,1,0,3).p("AAWAAQAAAIgHAHQgGAHgJAAQgIAAgGgHQgHgHAAgIQAAgHAHgHQAGgHAIAAQAJAAAGAHQAHAHAAAHg");
	this.shape_6.setTransform(-79,35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8AF8F3").ss(0.8,1,0,3).p("AgcAAQAAgLAJgJQAIgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAJQgIAIgMAAQgLAAgIgIQgJgJAAgMg");
	this.shape_7.setTransform(-79,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AF8F3").ss(1.1,1,0,3).p("AgkAAQAAgOAMgLQAKgKAOAAQAPAAAKAKQAMALAAAOQAAAPgMALQgKALgPAAQgOAAgKgLQgMgLAAgPg");
	this.shape_8.setTransform(-79,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8AF8F3").ss(1.4,1,0,3).p("AgsAAQAAgRAOgNQANgOARAAQASAAANAOQAOANAAARQAAASgOANQgNAOgSAAQgRAAgNgOQgOgNAAgSg");
	this.shape_9.setTransform(-79,35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8AF8F3").ss(1.7,1,0,3).p("AgzAAQAAgVAQgOQAOgQAVAAQAWAAAOAQQAQAOAAAVQAAAWgQAOQgOAQgWAAQgVAAgOgQQgQgOAAgWg");
	this.shape_10.setTransform(-79,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgQQARgTAYAAQAZAAARATQASAQAAAYg");
	this.shape_11.setTransform(-79,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},15).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAIAAIgPAA");
	this.shape_12.setTransform(129.7,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhPAAICfAA");
	this.shape_13.setTransform(122.6,35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AiXAAIEvAA");
	this.shape_14.setTransform(115.4,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjfAAIG/AA");
	this.shape_15.setTransform(108.2,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkmAAIJNAA");
	this.shape_16.setTransform(101,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AluAAILdAA");
	this.shape_17.setTransform(93.8,35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("Am2AAINtAA");
	this.shape_18.setTransform(86.7,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("An+AAIP9AA");
	this.shape_19.setTransform(79.5,35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ApGAAISNAA");
	this.shape_20.setTransform(72.3,35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AqOAAIUdAA");
	this.shape_21.setTransform(65.1,35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ArVAAIWrAA");
	this.shape_22.setTransform(57.9,35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AsdAAIY7AA");
	this.shape_23.setTransform(50.8,35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AtlAAIbLAA");
	this.shape_24.setTransform(43.6,35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AutAAIdbAA");
	this.shape_25.setTransform(36.4,35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AP2AAI/rAA");
	this.shape_26.setTransform(29.2,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,8,164,28.1);


(lib.profile_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.label = new cjs.Text("湖北武汉", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 170;
	this.label.setTransform(-40.4,7,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(21));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgFAHQgDgEgBgDQABgCADgEQACgCADAAQADAAADACQAEAEAAACQAAADgEAEQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(-59.8,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgJAKQgEgFAAgFQAAgEAEgEQAFgFAEAAQAFAAAFAFQADAEAAAEQAAAFgDAFQgFADgFAAQgEAAgFgDg");
	this.shape_1.setTransform(-59.8,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("AgLAMQgGgFABgHQgBgGAGgFQAFgFAGAAQAHAAAFAFQAGAFAAAGQAAAHgGAFQgFAFgHABQgGgBgFgFg");
	this.shape_2.setTransform(-59.8,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgOAPQgGgGgBgJQABgIAGgGQAHgHAHAAQAIAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgIgBQgHABgHgHg");
	this.shape_3.setTransform(-59.8,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AgQASQgIgIAAgKQAAgKAIgGQAGgJAKAAQAKAAAIAJQAHAGAAAKQAAAKgHAIQgIAHgKABQgKgBgGgHg");
	this.shape_4.setTransform(-59.8,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6AF36").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAJAJQAJAIAAALQAAAMgJAIQgJAKgMgBQgLABgJgKg");
	this.shape_5.setTransform(-59.8,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 图层 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(0.5,1,0,3).p("AAVAAQAAAIgGAHQgHAHgIAAQgIAAgGgHQgHgHAAgIQAAgHAHgHQAGgHAIAAQAIAAAHAHQAGAHAAAHg");
	this.shape_6.setTransform(-59.8,35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8AF8F3").ss(0.8,1,0,3).p("AgcAAQAAgLAIgJQAJgIALAAQALAAAJAIQAJAJAAALQAAAMgJAJQgJAIgLAAQgLAAgJgIQgIgJAAgMg");
	this.shape_7.setTransform(-59.8,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AF8F3").ss(1.1,1,0,3).p("AgkAAQAAgOALgLQALgKAOAAQAPAAAKAKQALALAAAOQAAAPgLALQgKALgPAAQgOAAgLgLQgLgLAAgPg");
	this.shape_8.setTransform(-59.8,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8AF8F3").ss(1.4,1,0,3).p("AgsAAQAAgRAOgNQANgOARAAQASAAANAOQAOANAAARQAAASgOANQgNAOgSAAQgRAAgNgOQgOgNAAgSg");
	this.shape_9.setTransform(-59.8,35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8AF8F3").ss(1.7,1,0,3).p("AgzAAQAAgVAQgOQAOgQAVAAQAVAAAPAQQAQAOAAAVQAAAWgQAOQgPAQgVAAQgVAAgOgQQgQgOAAgWg");
	this.shape_10.setTransform(-59.8,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AA8AAQAAAZgTARQgQASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgQQARgTAYAAQAZAAAQATQATAQAAAYg");
	this.shape_11.setTransform(-59.8,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},15).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAIAAIgPAA");
	this.shape_12.setTransform(129.7,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhIAAICRAA");
	this.shape_13.setTransform(123.2,35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AiJAAIETAA");
	this.shape_14.setTransform(116.7,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjKAAIGVAA");
	this.shape_15.setTransform(110.3,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkLAAIIXAA");
	this.shape_16.setTransform(103.8,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AlMAAIKZAA");
	this.shape_17.setTransform(97.3,35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AmNAAIMbAA");
	this.shape_18.setTransform(90.8,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AnOAAIOdAA");
	this.shape_19.setTransform(84.3,35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AoPAAIQfAA");
	this.shape_20.setTransform(77.8,35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ApQAAIShAA");
	this.shape_21.setTransform(71.3,35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AqRAAIUjAA");
	this.shape_22.setTransform(64.8,35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ArSAAIWlAA");
	this.shape_23.setTransform(58.3,35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AsTAAIYnAA");
	this.shape_24.setTransform(51.8,35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AtUAAIapAA");
	this.shape_25.setTransform(45.3,35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AOWAAI8rAA");
	this.shape_26.setTransform(38.8,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,7,174,29.4);


(lib.profile_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.label = new cjs.Text("28岁", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 96;
	this.label.setTransform(-43,8,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(21));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgGAHQgCgEAAgDQAAgCACgEQADgCADAAQADAAAEACQADAEAAACQAAADgDAEQgEADgDAAQgDAAgDgDg");
	this.shape.setTransform(-61.4,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgIAKQgFgFAAgFQAAgEAFgEQAEgFAEAAQAFAAAFAFQADAEAAAEQAAAFgDAFQgFADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(-61.4,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("AgLAMQgGgFABgHQgBgGAGgFQAFgFAGAAQAHAAAFAFQAFAFABAGQgBAHgFAFQgFAFgHABQgGgBgFgFg");
	this.shape_2.setTransform(-61.4,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAIAAAHAHQAGAGAAAIQAAAJgGAGQgHAHgIgBQgIABgGgHg");
	this.shape_3.setTransform(-61.4,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AgQASQgJgIABgKQgBgKAJgGQAGgJAKAAQAKAAAIAJQAHAGABAKQgBAKgHAIQgIAHgKABQgKgBgGgHg");
	this.shape_4.setTransform(-61.4,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6AF36").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIgBALQABAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_5.setTransform(-61.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 图层 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(0.5,1,0,3).p("AAVAAQAAAIgGAHQgHAHgIAAQgHAAgHgHQgHgHAAgIQAAgHAHgHQAHgHAHAAQAIAAAHAHQAGAHAAAHg");
	this.shape_6.setTransform(-61.4,35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8AF8F3").ss(0.8,1,0,3).p("AgcAAQAAgLAIgJQAJgIALAAQALAAAKAIQAIAJAAALQAAAMgIAJQgKAIgLAAQgLAAgJgIQgIgJAAgMg");
	this.shape_7.setTransform(-61.4,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AF8F3").ss(1.1,1,0,3).p("AgjAAQAAgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLALgPAAQgOAAgLgLQgKgLAAgPg");
	this.shape_8.setTransform(-61.4,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8AF8F3").ss(1.4,1,0,3).p("AgsAAQAAgRAOgNQANgOARAAQASAAANAOQAOANAAARQAAASgOANQgNAOgSAAQgRAAgNgOQgOgNAAgSg");
	this.shape_9.setTransform(-61.4,35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8AF8F3").ss(1.7,1,0,3).p("AgzAAQAAgVAQgOQAOgQAVAAQAVAAAPAQQAQAOAAAVQAAAWgQAOQgPAQgVAAQgVAAgOgQQgQgOAAgWg");
	this.shape_10.setTransform(-61.4,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AA8AAQAAAZgSARQgRASgZAAQgXAAgRgSQgTgRAAgZQAAgYATgQQARgTAXAAQAZAAARATQASAQAAAYg");
	this.shape_11.setTransform(-61.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},15).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAIAAIgPAA");
	this.shape_12.setTransform(129.7,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhJAAICTAA");
	this.shape_13.setTransform(123.2,35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AiKAAIEVAA");
	this.shape_14.setTransform(116.6,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjMAAIGZAA");
	this.shape_15.setTransform(110.1,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkNAAIIbAA");
	this.shape_16.setTransform(103.5,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AlPAAIKfAA");
	this.shape_17.setTransform(97,35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AmQAAIMhAA");
	this.shape_18.setTransform(90.4,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AnSAAIOlAA");
	this.shape_19.setTransform(83.9,35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AoUAAIQpAA");
	this.shape_20.setTransform(77.3,35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ApVAAISrAA");
	this.shape_21.setTransform(70.8,35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AqXAAIUuAA");
	this.shape_22.setTransform(64.2,35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ArYAAIWxAA");
	this.shape_23.setTransform(57.7,35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AsaAAIY1AA");
	this.shape_24.setTransform(51.1,35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AtbAAIa3AA");
	this.shape_25.setTransform(44.6,35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AOeAAI87AA");
	this.shape_26.setTransform(38,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,8,100,29.4);


(lib.profile_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.label = new cjs.Text("李先生", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 129;
	this.label.setTransform(11.6,7,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(21));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgGAHQgDgEAAgDQAAgCADgEQAEgCACAAQAEAAACACQADAEAAACQAAADgDAEQgCADgEAAQgCAAgEgDg");
	this.shape.setTransform(-5.2,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgJAKQgDgFAAgFQAAgEADgEQAFgFAEAAQAFAAAEAFQAFAEAAAEQAAAFgFAFQgEADgFAAQgEAAgFgDg");
	this.shape_1.setTransform(-5.2,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgFAGAAQAHAAAFAFQAGAFgBAGQABAHgGAFQgFAFgHABQgGgBgFgFg");
	this.shape_2.setTransform(-5.2,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgHAHAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJgBQgHABgHgHg");
	this.shape_3.setTransform(-5.2,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AgRASQgHgIgBgKQABgKAHgGQAHgJAKAAQALAAAGAJQAJAGgBAKQABAKgJAIQgGAHgLABQgKgBgHgHg");
	this.shape_4.setTransform(-5.2,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6AF36").s().p("AgTAUQgKgIABgMQgBgLAKgIQAIgJALAAQAMAAAJAJQAIAIABALQgBAMgIAIQgJAKgMgBQgLABgIgKg");
	this.shape_5.setTransform(-5.2,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 图层 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(0.5,1,0,3).p("AAWAAQAAAIgHAHQgGAHgJAAQgHAAgHgHQgHgHAAgIQAAgHAHgHQAHgHAHAAQAJAAAGAHQAHAHAAAHg");
	this.shape_6.setTransform(-5.2,35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8AF8F3").ss(0.8,1,0,3).p("AgcAAQAAgLAJgJQAJgIAKAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgKAAgJgIQgJgJAAgMg");
	this.shape_7.setTransform(-5.2,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AF8F3").ss(1.1,1,0,3).p("AgjAAQAAgOALgLQAKgKAOAAQAPAAALAKQALALAAAOQAAAPgLALQgLALgPAAQgOAAgKgLQgLgLAAgPg");
	this.shape_8.setTransform(-5.2,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8AF8F3").ss(1.4,1,0,3).p("AgsAAQAAgRAOgNQANgOARAAQASAAANAOQANANAAARQAAASgNANQgNAOgSAAQgRAAgNgOQgOgNAAgSg");
	this.shape_9.setTransform(-5.2,35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8AF8F3").ss(1.7,1,0,3).p("AgzAAQAAgVAQgOQAOgQAVAAQAVAAAPAQQAQAOAAAVQAAAWgQAOQgPAQgVAAQgVAAgOgQQgQgOAAgWg");
	this.shape_10.setTransform(-5.2,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AA7AAQAAAZgSARQgRASgYAAQgYAAgRgSQgSgRAAgZQAAgYASgQQARgTAYAAQAYAAARATQASAQAAAYg");
	this.shape_11.setTransform(-5.2,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},15).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAIAAIgPAA");
	this.shape_12.setTransform(129.7,35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhNAAICcAA");
	this.shape_13.setTransform(122.7,35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AiUAAIEpAA");
	this.shape_14.setTransform(115.7,35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjaAAIG1AA");
	this.shape_15.setTransform(108.6,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkhAAIJDAA");
	this.shape_16.setTransform(101.6,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AlnAAILPAA");
	this.shape_17.setTransform(94.6,35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AmuAAINcAA");
	this.shape_18.setTransform(87.5,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("An0AAIPpAA");
	this.shape_19.setTransform(80.5,35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("Ao6AAIR1AA");
	this.shape_20.setTransform(73.4,35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AKCAAI0CAA");
	this.shape_21.setTransform(66.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(6));

	// 图层 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAKAKIgTgT");
	this.shape_22.setTransform(204.7,51.9,1,1,-30,0,0,1.6,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhmgVIDNAr");
	this.shape_23.setTransform(193.8,49.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("Ai+gpIF9BT");
	this.shape_24.setTransform(185,47.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkWg9IItB6");
	this.shape_25.setTransform(176.2,45.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AFwBRIreih");
	this.shape_26.setTransform(167.4,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,7,132.8,29.4);


(lib.profile_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.label = new cjs.Text("ID: 2342793451", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 142;
	this.label.setTransform(-1,-25,1,1.118);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(21));

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(-18,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgIAJQgEgEgBgFQABgEAEgEQAEgEAEgBQAFABAEAEQAEAEABAEQgBAFgEAEQgEAEgFABQgEgBgEgEg");
	this.shape_1.setTransform(-18,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgFAGgBQAHABAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(-18,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIABQAJgBAGAHQAHAGgBAIQABAJgHAGQgGAHgJgBQgIABgGgHg");
	this.shape_3.setTransform(-18,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AgRARQgIgHAAgKQAAgJAIgIQAIgIAJAAQAKAAAHAIQAJAIAAAJQAAAKgJAHQgHAJgKAAQgJAAgIgJg");
	this.shape_4.setTransform(-18,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6AF36").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_5.setTransform(-18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 图层 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(0.5,1,0,3).p("AAVAAQAAAJgGAGQgHAHgIAAQgHAAgHgHQgGgGAAgJQAAgIAGgGQAHgHAHAAQAIAAAHAHQAGAGAAAIg");
	this.shape_6.setTransform(-18,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8AF8F3").ss(0.8,1,0,3).p("AgcAAQAAgLAIgJQAKgIAKAAQALAAAJAIQAJAJAAALQAAAMgJAJQgJAIgLAAQgKAAgKgIQgIgJAAgMg");
	this.shape_7.setTransform(-18,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AF8F3").ss(1.1,1,0,3).p("AgjAAQAAgOAKgLQALgLAOAAQAPAAAKALQALALAAAOQAAAPgLALQgKALgPAAQgOAAgLgLQgKgLAAgPg");
	this.shape_8.setTransform(-18,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8AF8F3").ss(1.4,1,0,3).p("AgsAAQAAgRAOgNQANgOARAAQASAAANAOQAOANAAARQAAASgOANQgNAOgSAAQgRAAgNgOQgOgNAAgSg");
	this.shape_9.setTransform(-18,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8AF8F3").ss(1.7,1,0,3).p("AgzAAQAAgVAQgOQAPgQAUAAQAVAAAPAQQAQAOAAAVQAAAWgQAOQgPAQgVAAQgUAAgPgQQgQgOAAgWg");
	this.shape_10.setTransform(-18,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AA8AAQAAAZgTARQgQASgZAAQgYAAgQgSQgTgRAAgZQAAgYATgRQAQgSAYAAQAZAAAQASQATARAAAYg");
	this.shape_11.setTransform(-18,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},15).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// 图层 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAIAAIgPAA");
	this.shape_12.setTransform(148.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhfAAIC/AA");
	this.shape_13.setTransform(139.3,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("Ai3AAIFvAA");
	this.shape_14.setTransform(130.5,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AkQAAIIhAA");
	this.shape_15.setTransform(121.7,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AloAAILQAA");
	this.shape_16.setTransform(112.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("Am/AAIOAAA");
	this.shape_17.setTransform(104.1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AoYAAIQxAA");
	this.shape_18.setTransform(95.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ApwAAIThAA");
	this.shape_19.setTransform(86.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ArIAAIWRAA");
	this.shape_20.setTransform(77.7,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AMhAAI5BAA");
	this.shape_21.setTransform(68.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},6).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(6));

	// 图层 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AAKAKIgTgT");
	this.shape_22.setTransform(203.1,50.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AhMhGICZCN");
	this.shape_23.setTransform(196.5,44.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AiOiEIEdEJ");
	this.shape_24.setTransform(189.9,38);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AjQjCIGhGF");
	this.shape_25.setTransform(183.2,31.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("AETEAIoln/");
	this.shape_26.setTransform(176.6,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-25,145.8,28.1);


(lib.inside_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("Al9ZvQi/gsiqhUQighPiOhvQj5jDihkRQhBhsgzh+Qglhagfh5IgLgwIgKgtIgXiaIgIipIA3AAIACBRIACAZIANB/IANBQIAKArIAKAuQAfB1AkBXQAxB6A+BpQCdEIDwC9QCHBqCdBOQChBQC8AsQC+AsDEgCQDOgCDGg1QDLg2C7hqQC+htCZiZQCjikBoi4QAMgUAPgdIAZgxIAihLIAwiDQAHgRAKgkQAMgpACgMQA3jegGjXQgBhegSh+QgQhXgFgVIgNg1IgPg0Qg/jQhzi6Qhyi3iZiPQiOiIi7hpQimhcjEg3IhcgWIhcgRIhbgLIgtgEIgtgCQivgHioAdQkvA0kGCeQhoA/hlBTIgrAmIgoAlQgTARg1A4Ig9BFIhaB5IhVCMIgxgaIAEgGIB+jGIA0hCIA+hHQA3g6ATgRIAqgnIAtgnQBnhWBthBQEQikE4g1QCwgfCyAIQAVAAAaACIAuAEIBfALIBfASIBfAXQDJA3CtBhQDCBtCSCMQCfCUB1C9QB4DABADXIAPA2IAOA3QAHAeAOBSQAUCEAABeQAHDfg5DlIgPA4QgJAfgIAYIg+CgIgYA0QgrBUgKARQhsDAioCoQifCejEBxQjBBujSA3QjNA2jUADIgTAAQjCAAi6gsg");
	this.shape.setTransform(0,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-109.9,220,220);


(lib.inside_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AkIYDQkfgxj8iXQhng/hdhNIgqgkIgmgkQgPgOg1g3Ig6hCIhWhzIgegvIg0hYIBig1IBMB9IBQBrQAgAlAWAYIA/BBIAkAhIAmAhQBbBLBbA3QDrCMEKAuQCXAaCZgGIAngDIApgDIBRgJIBRgPIBRgUQCvgwCShTQClhdB+h4QCIh/BliiQBmilA4i4IANguIALgwQAEgPAPhQQARh1AAhOQAGi7gxjIIgNgwQgHgbgHgUIhKi2QglhIgJgOQhdiliPiQQiIiIiohgQimhei0gwQivgui3gCQivgDinAoQilAmiQBHQiMBGh3BeQjUCniMDqQg1BYguBxQgeBKgdBrIgJAoQgGAYgCAPIgUCEIgHCQIhwAAIAChMIAPiRQABgQAEgVIAHgnQACgOAHgcIAKgsQAfhzAhhPQAwh4A6hhQCWj8Dli0QCChmCVhKQCZhMC0gqQC1gqC7ACQDFACC9AyQDCAzCyBmQC1BoCTCSQCZCaBlCyQANAWAlBIIBPDEIAPAyIAOA0QA1DTgGDOQgBBWgSB7QgNBMgHAbIgaBlQg8DHhuCxQhtCuiSCJQiICBiyBlQigBai5AyIhYAWQgSAEhGAMIhXALIgrADIgrACIg+ABQiFAAiEgWg");
	this.shape.setTransform(0,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.6,-101.5,203.2,203.1);


(lib.inside_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AGuEqIgugDQh7gMhcgYQh5gehxgzQhwgzhqhIQhTg3hXhQIg9g9QgOgOgfgkIglguIBPg+IAJALIALAOIAPARIApAvIA5A5QBQBKBOA1QBeA/BsAxQBpAwBwAbQBSAWB2AMIAqADIAnABIB1gCIAGBlIgPABIhvABIgpgCg");
	this.shape.setTransform(-39.3,71.8,0.65,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AoeEpIAOgCQAXgCARgEQBJgMBDgTQBbgYBiguQBtgyBahBQBehCBUhRQBFhEA/hWIBNh4IAUgkIAGgMIBaAuIgsBOIgTAfIgxBIQg/BXhOBPQhXBVhpBKQhiBGh0A2QhqAxhjAaQg/AShYAQIgrAGIgOACg");
	this.shape_1.setTransform(39.6,64.8,0.65,0.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AF36").s().p("Ag/JkQAJgSAMggIAWg7QAJgYADgMIAJgpQAehwAIhXQAMhzgIhzQgHh5gchsQgWhcgphkQglhTgagtIgcgvIBWg1IAeAzQAeA1AkBVQAsBqAZBlQAeBzAJCDQAIB3gNCBQgJBfgfB4IgNAsIgNAnIgXA/IgQAoIgGAOg");
	this.shape_2.setTransform(75.6,-5.5,0.65,0.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AHsE7IgYggIgngxIgZgdIgdgfQhIhLhPg8QhfhFhmg0Qhlg1hwgiQhSgahzgRIgqgFIicgHIgBhlIAPAAIBvAEIApAEIAuAFQB3ARBdAeQB5AkBtA5QBuA4BmBNQBSA9BQBSIAgAiIBFBTQAOARAMASIAJAMIhTA6g");
	this.shape_3.setTransform(30.6,-70.1,0.65,0.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AotFBIAHgNIAXgkIARgaIAVgeIAYgiIAcgkQBGhWBQhHQBbhTBshDQBmhBB3gwQBtgtBjgUQBDgQBVgKQAWgDAVgCIAPgBIAIBkIgPACQgWABgRACQhNAKhBAPQhdAThjApQhwAshdA9QhlA+hVBMQhIBChCBRIgaAiIgXAfIg5BWIgHAMg");
	this.shape_4.setTransform(-48.8,-66.8,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,-91.3,170.3,182.6);


(lib.core_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AnuHuQjMjNgBkhQABkgDMjOQDOjMEggBQEhABDNDMQDNDOABEgQgBEhjNDNQjNDNkhABQkggBjOjNgAnSnSQjCDCABEQQgBERDCDBQDCDDEQgBQERABDBjDQDDjBgBkRQABkQjDjCQjBjCkRABQkQgBjCDCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-70,140,140);


(lib.core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(138,248,243,0)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(138,248,243,0.067)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(138,248,243,0.133)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(138,248,243,0.2)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(138,248,243,0.267)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(138,248,243,0.333)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(138,248,243,0.4)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(138,248,243,0.467)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(138,248,243,0.533)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(138,248,243,0.6)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(138,248,243,0.667)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(138,248,243,0.733)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(138,248,243,0.8)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(138,248,243,0.867)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(138,248,243,0.933)").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8AF8F3").s().p("AoeIfQjjjgAAk/QAAk+DjjgQDgjjE+AAQE/AADgDjQDjDgAAE+QAAE/jjDgQjgDjk/AAQk+AAjgjjgAoRoRQjbDcAAE1QAAE2DbDcQDcDbE1AAQE2AADcjbQDbjcAAk2QAAk1jbjcQjcjbk2AAQk1AAjcDbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},34).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// 图层 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_16.setTransform(0.4,-13.3,0.65,0.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_17.setTransform(0.4,13.3,0.65,0.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_18.setTransform(12.9,0,0.65,0.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_19.setTransform(-13.7,0,0.65,0.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_20.setTransform(0.4,13.3,0.65,0.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_21.setTransform(0.4,15.2,0.65,0.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_22.setTransform(-13.7,0,0.65,0.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_23.setTransform(-15.6,0,0.65,0.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_24.setTransform(0.4,15.2,0.65,0.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_25.setTransform(0.4,17.1,0.65,0.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_26.setTransform(-15.6,0,0.65,0.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_27.setTransform(-17.5,0,0.65,0.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_28.setTransform(0.4,17.1,0.65,0.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_29.setTransform(0.4,19,0.65,0.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_30.setTransform(-17.5,0,0.65,0.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_31.setTransform(-19.3,0,0.65,0.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_32.setTransform(0.4,19,0.65,0.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_33.setTransform(0.4,20.9,0.65,0.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_34.setTransform(-19.3,0,0.65,0.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_35.setTransform(-21.2,0,0.65,0.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_36.setTransform(0.4,20.9,0.65,0.65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_37.setTransform(0.4,22.8,0.65,0.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_38.setTransform(-21.2,0,0.65,0.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_39.setTransform(-23.1,0,0.65,0.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_40.setTransform(0.4,22.8,0.65,0.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_41.setTransform(0.4,24.7,0.65,0.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_42.setTransform(-23.1,0,0.65,0.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_43.setTransform(-25,0,0.65,0.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_44.setTransform(0.4,24.7,0.65,0.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_45.setTransform(0.4,26.5,0.65,0.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_46.setTransform(-25,0,0.65,0.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_47.setTransform(-26.9,0,0.65,0.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_48.setTransform(0.4,26.5,0.65,0.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_49.setTransform(0.4,28.4,0.65,0.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_50.setTransform(-26.9,0,0.65,0.65);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_51.setTransform(-28.8,0,0.65,0.65);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_52.setTransform(0.4,28.4,0.65,0.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_53.setTransform(0.4,30.3,0.65,0.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_54.setTransform(-28.8,0,0.65,0.65);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_55.setTransform(-30.6,0,0.65,0.65);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_56.setTransform(0.4,30.3,0.65,0.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_57.setTransform(0.4,32.2,0.65,0.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_58.setTransform(-30.6,0,0.65,0.65);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_59.setTransform(-32.5,0,0.65,0.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_60.setTransform(0.4,32.2,0.65,0.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_61.setTransform(0.4,34,0.65,0.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_62.setTransform(-32.5,0,0.65,0.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_63.setTransform(-34.4,0,0.65,0.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_64.setTransform(0.4,34,0.65,0.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_65.setTransform(0.4,35.9,0.65,0.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_66.setTransform(-34.4,0,0.65,0.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_67.setTransform(-36.3,0,0.65,0.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_68.setTransform(0.4,35.9,0.65,0.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_69.setTransform(0.4,37.8,0.65,0.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_70.setTransform(-36.3,0,0.65,0.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_71.setTransform(-38.2,0,0.65,0.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_72.setTransform(0.4,37.8,0.65,0.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_73.setTransform(0.4,39.7,0.65,0.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_74.setTransform(-38.2,0,0.65,0.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_75.setTransform(-40.1,0,0.65,0.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_76.setTransform(0.4,39.7,0.65,0.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_77.setTransform(0.4,41.6,0.65,0.65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_78.setTransform(-40.1,0,0.65,0.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_79.setTransform(-41.9,0,0.65,0.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_80.setTransform(0.4,41.6,0.65,0.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_81.setTransform(0.4,43.5,0.65,0.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_82.setTransform(-41.9,0,0.65,0.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_83.setTransform(-43.8,0,0.65,0.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_84.setTransform(0.4,43.5,0.65,0.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_85.setTransform(0.4,45.4,0.65,0.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_86.setTransform(-43.8,0,0.65,0.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_87.setTransform(-45.7,0,0.65,0.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_88.setTransform(0.4,45.4,0.65,0.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_89.setTransform(0.4,47.2,0.65,0.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_90.setTransform(-45.7,0,0.65,0.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_91.setTransform(-47.6,0,0.65,0.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_92.setTransform(0.4,47.2,0.65,0.65);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_93.setTransform(0.4,49.1,0.65,0.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_94.setTransform(-47.6,0,0.65,0.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_95.setTransform(-49.5,0,0.65,0.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_96.setTransform(0.4,49.1,0.65,0.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_97.setTransform(0.4,51,0.65,0.65);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_98.setTransform(-49.5,0,0.65,0.65);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_99.setTransform(-51.4,0,0.65,0.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_100.setTransform(0.4,51,0.65,0.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_101.setTransform(0.4,52.9,0.65,0.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_102.setTransform(-51.4,0,0.65,0.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_103.setTransform(-53.3,0,0.65,0.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_104.setTransform(0.4,52.9,0.65,0.65);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_105.setTransform(0.4,54.8,0.65,0.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_106.setTransform(-53.3,0,0.65,0.65);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_107.setTransform(-55.1,0,0.65,0.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_108.setTransform(0.4,54.8,0.65,0.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_109.setTransform(0.4,56.7,0.65,0.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_110.setTransform(-55.1,0,0.65,0.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_111.setTransform(-57,0,0.65,0.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_112.setTransform(0.4,56.7,0.65,0.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_113.setTransform(0.4,58.5,0.65,0.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_114.setTransform(-57,0,0.65,0.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_115.setTransform(-58.9,0,0.65,0.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_116.setTransform(0.4,58.5,0.65,0.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_117.setTransform(0.4,60.4,0.65,0.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_118.setTransform(-58.9,0,0.65,0.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_119.setTransform(-60.8,0,0.65,0.65);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_120.setTransform(0.4,60.4,0.65,0.65);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_121.setTransform(0.4,62.3,0.65,0.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_122.setTransform(-60.8,0,0.65,0.65);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_123.setTransform(-62.7,0,0.65,0.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_124.setTransform(0.4,62.3,0.65,0.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_125.setTransform(0.4,64.2,0.65,0.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_126.setTransform(-62.7,0,0.65,0.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_127.setTransform(-64.5,0,0.65,0.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_128.setTransform(0.4,64.2,0.65,0.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_129.setTransform(0.4,66.1,0.65,0.65);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_130.setTransform(-64.5,0,0.65,0.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_131.setTransform(-66.4,0,0.65,0.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_132.setTransform(0.4,66.1,0.65,0.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_133.setTransform(0.4,68,0.65,0.65);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_134.setTransform(-66.4,0,0.65,0.65);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_135.setTransform(-68.3,0,0.65,0.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_136.setTransform(0.4,68,0.65,0.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8AF8F3").s().p("AgSAGIAAgLIAlAAIAAALg");
	this.shape_137.setTransform(0.4,69.8,0.65,0.65);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_138.setTransform(-68.3,0,0.65,0.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8AF8F3").s().p("AgFATIAAglIALAAIAAAlg");
	this.shape_139.setTransform(-70.2,0,0.65,0.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19,p:{x:-13.7}},{t:this.shape_18,p:{x:12.9}},{t:this.shape_17,p:{y:13.3}},{t:this.shape_16,p:{y:-13.3}}]},1).to({state:[{t:this.shape_23,p:{x:-15.6}},{t:this.shape_22,p:{x:-13.7}},{t:this.shape_19,p:{x:12.9}},{t:this.shape_18,p:{x:14.8}},{t:this.shape_21,p:{y:15.2}},{t:this.shape_20,p:{y:13.3}},{t:this.shape_17,p:{y:-13.3}},{t:this.shape_16,p:{y:-15.1}}]},1).to({state:[{t:this.shape_27,p:{x:-17.5}},{t:this.shape_26,p:{x:-15.6}},{t:this.shape_23,p:{x:-13.7}},{t:this.shape_22,p:{x:12.9}},{t:this.shape_19,p:{x:14.8}},{t:this.shape_18,p:{x:16.7}},{t:this.shape_25,p:{y:17.1}},{t:this.shape_24,p:{y:15.2}},{t:this.shape_21,p:{y:13.3}},{t:this.shape_20,p:{y:-13.3}},{t:this.shape_17,p:{y:-15.1}},{t:this.shape_16,p:{y:-17}}]},1).to({state:[{t:this.shape_31,p:{x:-19.3}},{t:this.shape_30,p:{x:-17.5}},{t:this.shape_27,p:{x:-15.6}},{t:this.shape_26,p:{x:-13.7}},{t:this.shape_23,p:{x:12.9}},{t:this.shape_22,p:{x:14.8}},{t:this.shape_19,p:{x:16.7}},{t:this.shape_18,p:{x:18.6}},{t:this.shape_29,p:{y:19}},{t:this.shape_28,p:{y:17.1}},{t:this.shape_25,p:{y:15.2}},{t:this.shape_24,p:{y:13.3}},{t:this.shape_21,p:{y:-13.3}},{t:this.shape_20,p:{y:-15.1}},{t:this.shape_17,p:{y:-17}},{t:this.shape_16,p:{y:-18.9}}]},1).to({state:[{t:this.shape_35,p:{x:-21.2}},{t:this.shape_34,p:{x:-19.3}},{t:this.shape_31,p:{x:-17.5}},{t:this.shape_30,p:{x:-15.6}},{t:this.shape_27,p:{x:-13.7}},{t:this.shape_26,p:{x:12.9}},{t:this.shape_23,p:{x:14.8}},{t:this.shape_22,p:{x:16.7}},{t:this.shape_19,p:{x:18.6}},{t:this.shape_18,p:{x:20.5}},{t:this.shape_33,p:{y:20.9}},{t:this.shape_32,p:{y:19}},{t:this.shape_29,p:{y:17.1}},{t:this.shape_28,p:{y:15.2}},{t:this.shape_25,p:{y:13.3}},{t:this.shape_24,p:{y:-13.3}},{t:this.shape_21,p:{y:-15.1}},{t:this.shape_20,p:{y:-17}},{t:this.shape_17,p:{y:-18.9}},{t:this.shape_16,p:{y:-20.8}}]},1).to({state:[{t:this.shape_39,p:{x:-23.1}},{t:this.shape_38,p:{x:-21.2}},{t:this.shape_35,p:{x:-19.3}},{t:this.shape_34,p:{x:-17.5}},{t:this.shape_31,p:{x:-15.6}},{t:this.shape_30,p:{x:-13.7}},{t:this.shape_27,p:{x:12.9}},{t:this.shape_26,p:{x:14.8}},{t:this.shape_23,p:{x:16.7}},{t:this.shape_22,p:{x:18.6}},{t:this.shape_19,p:{x:20.5}},{t:this.shape_18,p:{x:22.3}},{t:this.shape_37,p:{y:22.8}},{t:this.shape_36,p:{y:20.9}},{t:this.shape_33,p:{y:19}},{t:this.shape_32,p:{y:17.1}},{t:this.shape_29,p:{y:15.2}},{t:this.shape_28,p:{y:13.3}},{t:this.shape_25,p:{y:-13.3}},{t:this.shape_24,p:{y:-15.1}},{t:this.shape_21,p:{y:-17}},{t:this.shape_20,p:{y:-18.9}},{t:this.shape_17,p:{y:-20.8}},{t:this.shape_16,p:{y:-22.7}}]},1).to({state:[{t:this.shape_43,p:{x:-25}},{t:this.shape_42,p:{x:-23.1}},{t:this.shape_39,p:{x:-21.2}},{t:this.shape_38,p:{x:-19.3}},{t:this.shape_35,p:{x:-17.5}},{t:this.shape_34,p:{x:-15.6}},{t:this.shape_31,p:{x:-13.7}},{t:this.shape_30,p:{x:12.9}},{t:this.shape_27,p:{x:14.8}},{t:this.shape_26,p:{x:16.7}},{t:this.shape_23,p:{x:18.6}},{t:this.shape_22,p:{x:20.5}},{t:this.shape_19,p:{x:22.3}},{t:this.shape_18,p:{x:24.2}},{t:this.shape_41,p:{y:24.7}},{t:this.shape_40,p:{y:22.8}},{t:this.shape_37,p:{y:20.9}},{t:this.shape_36,p:{y:19}},{t:this.shape_33,p:{y:17.1}},{t:this.shape_32,p:{y:15.2}},{t:this.shape_29,p:{y:13.3}},{t:this.shape_28,p:{y:-13.3}},{t:this.shape_25,p:{y:-15.1}},{t:this.shape_24,p:{y:-17}},{t:this.shape_21,p:{y:-18.9}},{t:this.shape_20,p:{y:-20.8}},{t:this.shape_17,p:{y:-22.7}},{t:this.shape_16,p:{y:-24.6}}]},1).to({state:[{t:this.shape_47,p:{x:-26.9}},{t:this.shape_46,p:{x:-25}},{t:this.shape_43,p:{x:-23.1}},{t:this.shape_42,p:{x:-21.2}},{t:this.shape_39,p:{x:-19.3}},{t:this.shape_38,p:{x:-17.5}},{t:this.shape_35,p:{x:-15.6}},{t:this.shape_34,p:{x:-13.7}},{t:this.shape_31,p:{x:12.9}},{t:this.shape_30,p:{x:14.8}},{t:this.shape_27,p:{x:16.7}},{t:this.shape_26,p:{x:18.6}},{t:this.shape_23,p:{x:20.5}},{t:this.shape_22,p:{x:22.3}},{t:this.shape_19,p:{x:24.2}},{t:this.shape_18,p:{x:26.1}},{t:this.shape_45,p:{y:26.5}},{t:this.shape_44,p:{y:24.7}},{t:this.shape_41,p:{y:22.8}},{t:this.shape_40,p:{y:20.9}},{t:this.shape_37,p:{y:19}},{t:this.shape_36,p:{y:17.1}},{t:this.shape_33,p:{y:15.2}},{t:this.shape_32,p:{y:13.3}},{t:this.shape_29,p:{y:-13.3}},{t:this.shape_28,p:{y:-15.1}},{t:this.shape_25,p:{y:-17}},{t:this.shape_24,p:{y:-18.9}},{t:this.shape_21,p:{y:-20.8}},{t:this.shape_20,p:{y:-22.7}},{t:this.shape_17,p:{y:-24.6}},{t:this.shape_16,p:{y:-26.5}}]},1).to({state:[{t:this.shape_51,p:{x:-28.8}},{t:this.shape_50,p:{x:-26.9}},{t:this.shape_47,p:{x:-25}},{t:this.shape_46,p:{x:-23.1}},{t:this.shape_43,p:{x:-21.2}},{t:this.shape_42,p:{x:-19.3}},{t:this.shape_39,p:{x:-17.5}},{t:this.shape_38,p:{x:-15.6}},{t:this.shape_35,p:{x:-13.7}},{t:this.shape_34,p:{x:12.9}},{t:this.shape_31,p:{x:14.8}},{t:this.shape_30,p:{x:16.7}},{t:this.shape_27,p:{x:18.6}},{t:this.shape_26,p:{x:20.5}},{t:this.shape_23,p:{x:22.3}},{t:this.shape_22,p:{x:24.2}},{t:this.shape_19,p:{x:26.1}},{t:this.shape_18,p:{x:28}},{t:this.shape_49,p:{y:28.4}},{t:this.shape_48,p:{y:26.5}},{t:this.shape_45,p:{y:24.7}},{t:this.shape_44,p:{y:22.8}},{t:this.shape_41,p:{y:20.9}},{t:this.shape_40,p:{y:19}},{t:this.shape_37,p:{y:17.1}},{t:this.shape_36,p:{y:15.2}},{t:this.shape_33,p:{y:13.3}},{t:this.shape_32,p:{y:-13.3}},{t:this.shape_29,p:{y:-15.1}},{t:this.shape_28,p:{y:-17}},{t:this.shape_25,p:{y:-18.9}},{t:this.shape_24,p:{y:-20.8}},{t:this.shape_21,p:{y:-22.7}},{t:this.shape_20,p:{y:-24.6}},{t:this.shape_17,p:{y:-26.5}},{t:this.shape_16,p:{y:-28.3}}]},1).to({state:[{t:this.shape_55,p:{x:-30.6}},{t:this.shape_54,p:{x:-28.8}},{t:this.shape_51,p:{x:-26.9}},{t:this.shape_50,p:{x:-25}},{t:this.shape_47,p:{x:-23.1}},{t:this.shape_46,p:{x:-21.2}},{t:this.shape_43,p:{x:-19.3}},{t:this.shape_42,p:{x:-17.5}},{t:this.shape_39,p:{x:-15.6}},{t:this.shape_38,p:{x:-13.7}},{t:this.shape_35,p:{x:12.9}},{t:this.shape_34,p:{x:14.8}},{t:this.shape_31,p:{x:16.7}},{t:this.shape_30,p:{x:18.6}},{t:this.shape_27,p:{x:20.5}},{t:this.shape_26,p:{x:22.3}},{t:this.shape_23,p:{x:24.2}},{t:this.shape_22,p:{x:26.1}},{t:this.shape_19,p:{x:28}},{t:this.shape_18,p:{x:29.9}},{t:this.shape_53,p:{y:30.3}},{t:this.shape_52,p:{y:28.4}},{t:this.shape_49,p:{y:26.5}},{t:this.shape_48,p:{y:24.7}},{t:this.shape_45,p:{y:22.8}},{t:this.shape_44,p:{y:20.9}},{t:this.shape_41,p:{y:19}},{t:this.shape_40,p:{y:17.1}},{t:this.shape_37,p:{y:15.2}},{t:this.shape_36,p:{y:13.3}},{t:this.shape_33,p:{y:-13.3}},{t:this.shape_32,p:{y:-15.1}},{t:this.shape_29,p:{y:-17}},{t:this.shape_28,p:{y:-18.9}},{t:this.shape_25,p:{y:-20.8}},{t:this.shape_24,p:{y:-22.7}},{t:this.shape_21,p:{y:-24.6}},{t:this.shape_20,p:{y:-26.5}},{t:this.shape_17,p:{y:-28.3}},{t:this.shape_16,p:{y:-30.2}}]},1).to({state:[{t:this.shape_59,p:{x:-32.5}},{t:this.shape_58,p:{x:-30.6}},{t:this.shape_55,p:{x:-28.8}},{t:this.shape_54,p:{x:-26.9}},{t:this.shape_51,p:{x:-25}},{t:this.shape_50,p:{x:-23.1}},{t:this.shape_47,p:{x:-21.2}},{t:this.shape_46,p:{x:-19.3}},{t:this.shape_43,p:{x:-17.5}},{t:this.shape_42,p:{x:-15.6}},{t:this.shape_39,p:{x:-13.7}},{t:this.shape_38,p:{x:12.9}},{t:this.shape_35,p:{x:14.8}},{t:this.shape_34,p:{x:16.7}},{t:this.shape_31,p:{x:18.6}},{t:this.shape_30,p:{x:20.5}},{t:this.shape_27,p:{x:22.3}},{t:this.shape_26,p:{x:24.2}},{t:this.shape_23,p:{x:26.1}},{t:this.shape_22,p:{x:28}},{t:this.shape_19,p:{x:29.9}},{t:this.shape_18,p:{x:31.8}},{t:this.shape_57,p:{y:32.2}},{t:this.shape_56,p:{y:30.3}},{t:this.shape_53,p:{y:28.4}},{t:this.shape_52,p:{y:26.5}},{t:this.shape_49,p:{y:24.7}},{t:this.shape_48,p:{y:22.8}},{t:this.shape_45,p:{y:20.9}},{t:this.shape_44,p:{y:19}},{t:this.shape_41,p:{y:17.1}},{t:this.shape_40,p:{y:15.2}},{t:this.shape_37,p:{y:13.3}},{t:this.shape_36,p:{y:-13.3}},{t:this.shape_33,p:{y:-15.1}},{t:this.shape_32,p:{y:-17}},{t:this.shape_29,p:{y:-18.9}},{t:this.shape_28,p:{y:-20.8}},{t:this.shape_25,p:{y:-22.7}},{t:this.shape_24,p:{y:-24.6}},{t:this.shape_21,p:{y:-26.5}},{t:this.shape_20,p:{y:-28.3}},{t:this.shape_17,p:{y:-30.2}},{t:this.shape_16,p:{y:-32.1}}]},1).to({state:[{t:this.shape_63,p:{x:-34.4}},{t:this.shape_62,p:{x:-32.5}},{t:this.shape_59,p:{x:-30.6}},{t:this.shape_58,p:{x:-28.8}},{t:this.shape_55,p:{x:-26.9}},{t:this.shape_54,p:{x:-25}},{t:this.shape_51,p:{x:-23.1}},{t:this.shape_50,p:{x:-21.2}},{t:this.shape_47,p:{x:-19.3}},{t:this.shape_46,p:{x:-17.5}},{t:this.shape_43,p:{x:-15.6}},{t:this.shape_42,p:{x:-13.7}},{t:this.shape_39,p:{x:12.9}},{t:this.shape_38,p:{x:14.8}},{t:this.shape_35,p:{x:16.7}},{t:this.shape_34,p:{x:18.6}},{t:this.shape_31,p:{x:20.5}},{t:this.shape_30,p:{x:22.3}},{t:this.shape_27,p:{x:24.2}},{t:this.shape_26,p:{x:26.1}},{t:this.shape_23,p:{x:28}},{t:this.shape_22,p:{x:29.9}},{t:this.shape_19,p:{x:31.8}},{t:this.shape_18,p:{x:33.7}},{t:this.shape_61,p:{y:34}},{t:this.shape_60,p:{y:32.2}},{t:this.shape_57,p:{y:30.3}},{t:this.shape_56,p:{y:28.4}},{t:this.shape_53,p:{y:26.5}},{t:this.shape_52,p:{y:24.7}},{t:this.shape_49,p:{y:22.8}},{t:this.shape_48,p:{y:20.9}},{t:this.shape_45,p:{y:19}},{t:this.shape_44,p:{y:17.1}},{t:this.shape_41,p:{y:15.2}},{t:this.shape_40,p:{y:13.3}},{t:this.shape_37,p:{y:-13.3}},{t:this.shape_36,p:{y:-15.1}},{t:this.shape_33,p:{y:-17}},{t:this.shape_32,p:{y:-18.9}},{t:this.shape_29,p:{y:-20.8}},{t:this.shape_28,p:{y:-22.7}},{t:this.shape_25,p:{y:-24.6}},{t:this.shape_24,p:{y:-26.5}},{t:this.shape_21,p:{y:-28.3}},{t:this.shape_20,p:{y:-30.2}},{t:this.shape_17,p:{y:-32.1}},{t:this.shape_16,p:{y:-34}}]},1).to({state:[{t:this.shape_67,p:{x:-36.3}},{t:this.shape_66,p:{x:-34.4}},{t:this.shape_63,p:{x:-32.5}},{t:this.shape_62,p:{x:-30.6}},{t:this.shape_59,p:{x:-28.8}},{t:this.shape_58,p:{x:-26.9}},{t:this.shape_55,p:{x:-25}},{t:this.shape_54,p:{x:-23.1}},{t:this.shape_51,p:{x:-21.2}},{t:this.shape_50,p:{x:-19.3}},{t:this.shape_47,p:{x:-17.5}},{t:this.shape_46,p:{x:-15.6}},{t:this.shape_43,p:{x:-13.7}},{t:this.shape_42,p:{x:12.9}},{t:this.shape_39,p:{x:14.8}},{t:this.shape_38,p:{x:16.7}},{t:this.shape_35,p:{x:18.6}},{t:this.shape_34,p:{x:20.5}},{t:this.shape_31,p:{x:22.3}},{t:this.shape_30,p:{x:24.2}},{t:this.shape_27,p:{x:26.1}},{t:this.shape_26,p:{x:28}},{t:this.shape_23,p:{x:29.9}},{t:this.shape_22,p:{x:31.8}},{t:this.shape_19,p:{x:33.7}},{t:this.shape_18,p:{x:35.5}},{t:this.shape_65,p:{y:35.9}},{t:this.shape_64,p:{y:34}},{t:this.shape_61,p:{y:32.2}},{t:this.shape_60,p:{y:30.3}},{t:this.shape_57,p:{y:28.4}},{t:this.shape_56,p:{y:26.5}},{t:this.shape_53,p:{y:24.7}},{t:this.shape_52,p:{y:22.8}},{t:this.shape_49,p:{y:20.9}},{t:this.shape_48,p:{y:19}},{t:this.shape_45,p:{y:17.1}},{t:this.shape_44,p:{y:15.2}},{t:this.shape_41,p:{y:13.3}},{t:this.shape_40,p:{y:-13.3}},{t:this.shape_37,p:{y:-15.1}},{t:this.shape_36,p:{y:-17}},{t:this.shape_33,p:{y:-18.9}},{t:this.shape_32,p:{y:-20.8}},{t:this.shape_29,p:{y:-22.7}},{t:this.shape_28,p:{y:-24.6}},{t:this.shape_25,p:{y:-26.5}},{t:this.shape_24,p:{y:-28.3}},{t:this.shape_21,p:{y:-30.2}},{t:this.shape_20,p:{y:-32.1}},{t:this.shape_17,p:{y:-34}},{t:this.shape_16,p:{y:-35.9}}]},1).to({state:[{t:this.shape_71,p:{x:-38.2}},{t:this.shape_70,p:{x:-36.3}},{t:this.shape_67,p:{x:-34.4}},{t:this.shape_66,p:{x:-32.5}},{t:this.shape_63,p:{x:-30.6}},{t:this.shape_62,p:{x:-28.8}},{t:this.shape_59,p:{x:-26.9}},{t:this.shape_58,p:{x:-25}},{t:this.shape_55,p:{x:-23.1}},{t:this.shape_54,p:{x:-21.2}},{t:this.shape_51,p:{x:-19.3}},{t:this.shape_50,p:{x:-17.5}},{t:this.shape_47,p:{x:-15.6}},{t:this.shape_46,p:{x:-13.7}},{t:this.shape_43,p:{x:12.9}},{t:this.shape_42,p:{x:14.8}},{t:this.shape_39,p:{x:16.7}},{t:this.shape_38,p:{x:18.6}},{t:this.shape_35,p:{x:20.5}},{t:this.shape_34,p:{x:22.3}},{t:this.shape_31,p:{x:24.2}},{t:this.shape_30,p:{x:26.1}},{t:this.shape_27,p:{x:28}},{t:this.shape_26,p:{x:29.9}},{t:this.shape_23,p:{x:31.8}},{t:this.shape_22,p:{x:33.7}},{t:this.shape_19,p:{x:35.5}},{t:this.shape_18,p:{x:37.4}},{t:this.shape_69,p:{y:37.8}},{t:this.shape_68,p:{y:35.9}},{t:this.shape_65,p:{y:34}},{t:this.shape_64,p:{y:32.2}},{t:this.shape_61,p:{y:30.3}},{t:this.shape_60,p:{y:28.4}},{t:this.shape_57,p:{y:26.5}},{t:this.shape_56,p:{y:24.7}},{t:this.shape_53,p:{y:22.8}},{t:this.shape_52,p:{y:20.9}},{t:this.shape_49,p:{y:19}},{t:this.shape_48,p:{y:17.1}},{t:this.shape_45,p:{y:15.2}},{t:this.shape_44,p:{y:13.3}},{t:this.shape_41,p:{y:-13.3}},{t:this.shape_40,p:{y:-15.1}},{t:this.shape_37,p:{y:-17}},{t:this.shape_36,p:{y:-18.9}},{t:this.shape_33,p:{y:-20.8}},{t:this.shape_32,p:{y:-22.7}},{t:this.shape_29,p:{y:-24.6}},{t:this.shape_28,p:{y:-26.5}},{t:this.shape_25,p:{y:-28.3}},{t:this.shape_24,p:{y:-30.2}},{t:this.shape_21,p:{y:-32.1}},{t:this.shape_20,p:{y:-34}},{t:this.shape_17,p:{y:-35.9}},{t:this.shape_16,p:{y:-37.8}}]},1).to({state:[{t:this.shape_75,p:{x:-40.1}},{t:this.shape_74,p:{x:-38.2}},{t:this.shape_71,p:{x:-36.3}},{t:this.shape_70,p:{x:-34.4}},{t:this.shape_67,p:{x:-32.5}},{t:this.shape_66,p:{x:-30.6}},{t:this.shape_63,p:{x:-28.8}},{t:this.shape_62,p:{x:-26.9}},{t:this.shape_59,p:{x:-25}},{t:this.shape_58,p:{x:-23.1}},{t:this.shape_55,p:{x:-21.2}},{t:this.shape_54,p:{x:-19.3}},{t:this.shape_51,p:{x:-17.5}},{t:this.shape_50,p:{x:-15.6}},{t:this.shape_47,p:{x:-13.7}},{t:this.shape_46,p:{x:12.9}},{t:this.shape_43,p:{x:14.8}},{t:this.shape_42,p:{x:16.7}},{t:this.shape_39,p:{x:18.6}},{t:this.shape_38,p:{x:20.5}},{t:this.shape_35,p:{x:22.3}},{t:this.shape_34,p:{x:24.2}},{t:this.shape_31,p:{x:26.1}},{t:this.shape_30,p:{x:28}},{t:this.shape_27,p:{x:29.9}},{t:this.shape_26,p:{x:31.8}},{t:this.shape_23,p:{x:33.7}},{t:this.shape_22,p:{x:35.5}},{t:this.shape_19,p:{x:37.4}},{t:this.shape_18,p:{x:39.3}},{t:this.shape_73,p:{y:39.7}},{t:this.shape_72,p:{y:37.8}},{t:this.shape_69,p:{y:35.9}},{t:this.shape_68,p:{y:34}},{t:this.shape_65,p:{y:32.2}},{t:this.shape_64,p:{y:30.3}},{t:this.shape_61,p:{y:28.4}},{t:this.shape_60,p:{y:26.5}},{t:this.shape_57,p:{y:24.7}},{t:this.shape_56,p:{y:22.8}},{t:this.shape_53,p:{y:20.9}},{t:this.shape_52,p:{y:19}},{t:this.shape_49,p:{y:17.1}},{t:this.shape_48,p:{y:15.2}},{t:this.shape_45,p:{y:13.3}},{t:this.shape_44,p:{y:-13.3}},{t:this.shape_41,p:{y:-15.1}},{t:this.shape_40,p:{y:-17}},{t:this.shape_37,p:{y:-18.9}},{t:this.shape_36,p:{y:-20.8}},{t:this.shape_33,p:{y:-22.7}},{t:this.shape_32,p:{y:-24.6}},{t:this.shape_29,p:{y:-26.5}},{t:this.shape_28,p:{y:-28.3}},{t:this.shape_25,p:{y:-30.2}},{t:this.shape_24,p:{y:-32.1}},{t:this.shape_21,p:{y:-34}},{t:this.shape_20,p:{y:-35.9}},{t:this.shape_17,p:{y:-37.8}},{t:this.shape_16,p:{y:-39.6}}]},1).to({state:[{t:this.shape_79,p:{x:-41.9}},{t:this.shape_78,p:{x:-40.1}},{t:this.shape_75,p:{x:-38.2}},{t:this.shape_74,p:{x:-36.3}},{t:this.shape_71,p:{x:-34.4}},{t:this.shape_70,p:{x:-32.5}},{t:this.shape_67,p:{x:-30.6}},{t:this.shape_66,p:{x:-28.8}},{t:this.shape_63,p:{x:-26.9}},{t:this.shape_62,p:{x:-25}},{t:this.shape_59,p:{x:-23.1}},{t:this.shape_58,p:{x:-21.2}},{t:this.shape_55,p:{x:-19.3}},{t:this.shape_54,p:{x:-17.5}},{t:this.shape_51,p:{x:-15.6}},{t:this.shape_50,p:{x:-13.7}},{t:this.shape_47,p:{x:12.9}},{t:this.shape_46,p:{x:14.8}},{t:this.shape_43,p:{x:16.7}},{t:this.shape_42,p:{x:18.6}},{t:this.shape_39,p:{x:20.5}},{t:this.shape_38,p:{x:22.3}},{t:this.shape_35,p:{x:24.2}},{t:this.shape_34,p:{x:26.1}},{t:this.shape_31,p:{x:28}},{t:this.shape_30,p:{x:29.9}},{t:this.shape_27,p:{x:31.8}},{t:this.shape_26,p:{x:33.7}},{t:this.shape_23,p:{x:35.5}},{t:this.shape_22,p:{x:37.4}},{t:this.shape_19,p:{x:39.3}},{t:this.shape_18,p:{x:41.2}},{t:this.shape_77,p:{y:41.6}},{t:this.shape_76,p:{y:39.7}},{t:this.shape_73,p:{y:37.8}},{t:this.shape_72,p:{y:35.9}},{t:this.shape_69,p:{y:34}},{t:this.shape_68,p:{y:32.2}},{t:this.shape_65,p:{y:30.3}},{t:this.shape_64,p:{y:28.4}},{t:this.shape_61,p:{y:26.5}},{t:this.shape_60,p:{y:24.7}},{t:this.shape_57,p:{y:22.8}},{t:this.shape_56,p:{y:20.9}},{t:this.shape_53,p:{y:19}},{t:this.shape_52,p:{y:17.1}},{t:this.shape_49,p:{y:15.2}},{t:this.shape_48,p:{y:13.3}},{t:this.shape_45,p:{y:-13.3}},{t:this.shape_44,p:{y:-15.1}},{t:this.shape_41,p:{y:-17}},{t:this.shape_40,p:{y:-18.9}},{t:this.shape_37,p:{y:-20.8}},{t:this.shape_36,p:{y:-22.7}},{t:this.shape_33,p:{y:-24.6}},{t:this.shape_32,p:{y:-26.5}},{t:this.shape_29,p:{y:-28.3}},{t:this.shape_28,p:{y:-30.2}},{t:this.shape_25,p:{y:-32.1}},{t:this.shape_24,p:{y:-34}},{t:this.shape_21,p:{y:-35.9}},{t:this.shape_20,p:{y:-37.8}},{t:this.shape_17,p:{y:-39.6}},{t:this.shape_16,p:{y:-41.5}}]},1).to({state:[{t:this.shape_83,p:{x:-43.8}},{t:this.shape_82,p:{x:-41.9}},{t:this.shape_79,p:{x:-40.1}},{t:this.shape_78,p:{x:-38.2}},{t:this.shape_75,p:{x:-36.3}},{t:this.shape_74,p:{x:-34.4}},{t:this.shape_71,p:{x:-32.5}},{t:this.shape_70,p:{x:-30.6}},{t:this.shape_67,p:{x:-28.8}},{t:this.shape_66,p:{x:-26.9}},{t:this.shape_63,p:{x:-25}},{t:this.shape_62,p:{x:-23.1}},{t:this.shape_59,p:{x:-21.2}},{t:this.shape_58,p:{x:-19.3}},{t:this.shape_55,p:{x:-17.5}},{t:this.shape_54,p:{x:-15.6}},{t:this.shape_51,p:{x:-13.7}},{t:this.shape_50,p:{x:12.9}},{t:this.shape_47,p:{x:14.8}},{t:this.shape_46,p:{x:16.7}},{t:this.shape_43,p:{x:18.6}},{t:this.shape_42,p:{x:20.5}},{t:this.shape_39,p:{x:22.3}},{t:this.shape_38,p:{x:24.2}},{t:this.shape_35,p:{x:26.1}},{t:this.shape_34,p:{x:28}},{t:this.shape_31,p:{x:29.9}},{t:this.shape_30,p:{x:31.8}},{t:this.shape_27,p:{x:33.7}},{t:this.shape_26,p:{x:35.5}},{t:this.shape_23,p:{x:37.4}},{t:this.shape_22,p:{x:39.3}},{t:this.shape_19,p:{x:41.2}},{t:this.shape_18,p:{x:43.1}},{t:this.shape_81,p:{y:43.5}},{t:this.shape_80,p:{y:41.6}},{t:this.shape_77,p:{y:39.7}},{t:this.shape_76,p:{y:37.8}},{t:this.shape_73,p:{y:35.9}},{t:this.shape_72,p:{y:34}},{t:this.shape_69,p:{y:32.2}},{t:this.shape_68,p:{y:30.3}},{t:this.shape_65,p:{y:28.4}},{t:this.shape_64,p:{y:26.5}},{t:this.shape_61,p:{y:24.7}},{t:this.shape_60,p:{y:22.8}},{t:this.shape_57,p:{y:20.9}},{t:this.shape_56,p:{y:19}},{t:this.shape_53,p:{y:17.1}},{t:this.shape_52,p:{y:15.2}},{t:this.shape_49,p:{y:13.3}},{t:this.shape_48,p:{y:-13.3}},{t:this.shape_45,p:{y:-15.1}},{t:this.shape_44,p:{y:-17}},{t:this.shape_41,p:{y:-18.9}},{t:this.shape_40,p:{y:-20.8}},{t:this.shape_37,p:{y:-22.7}},{t:this.shape_36,p:{y:-24.6}},{t:this.shape_33,p:{y:-26.5}},{t:this.shape_32,p:{y:-28.3}},{t:this.shape_29,p:{y:-30.2}},{t:this.shape_28,p:{y:-32.1}},{t:this.shape_25,p:{y:-34}},{t:this.shape_24,p:{y:-35.9}},{t:this.shape_21,p:{y:-37.8}},{t:this.shape_20,p:{y:-39.6}},{t:this.shape_17,p:{y:-41.5}},{t:this.shape_16,p:{y:-43.4}}]},1).to({state:[{t:this.shape_87,p:{x:-45.7}},{t:this.shape_86,p:{x:-43.8}},{t:this.shape_83,p:{x:-41.9}},{t:this.shape_82,p:{x:-40.1}},{t:this.shape_79,p:{x:-38.2}},{t:this.shape_78,p:{x:-36.3}},{t:this.shape_75,p:{x:-34.4}},{t:this.shape_74,p:{x:-32.5}},{t:this.shape_71,p:{x:-30.6}},{t:this.shape_70,p:{x:-28.8}},{t:this.shape_67,p:{x:-26.9}},{t:this.shape_66,p:{x:-25}},{t:this.shape_63,p:{x:-23.1}},{t:this.shape_62,p:{x:-21.2}},{t:this.shape_59,p:{x:-19.3}},{t:this.shape_58,p:{x:-17.5}},{t:this.shape_55,p:{x:-15.6}},{t:this.shape_54,p:{x:-13.7}},{t:this.shape_51,p:{x:12.9}},{t:this.shape_50,p:{x:14.8}},{t:this.shape_47,p:{x:16.7}},{t:this.shape_46,p:{x:18.6}},{t:this.shape_43,p:{x:20.5}},{t:this.shape_42,p:{x:22.3}},{t:this.shape_39,p:{x:24.2}},{t:this.shape_38,p:{x:26.1}},{t:this.shape_35,p:{x:28}},{t:this.shape_34,p:{x:29.9}},{t:this.shape_31,p:{x:31.8}},{t:this.shape_30,p:{x:33.7}},{t:this.shape_27,p:{x:35.5}},{t:this.shape_26,p:{x:37.4}},{t:this.shape_23,p:{x:39.3}},{t:this.shape_22,p:{x:41.2}},{t:this.shape_19,p:{x:43.1}},{t:this.shape_18,p:{x:44.9}},{t:this.shape_85,p:{y:45.4}},{t:this.shape_84,p:{y:43.5}},{t:this.shape_81,p:{y:41.6}},{t:this.shape_80,p:{y:39.7}},{t:this.shape_77,p:{y:37.8}},{t:this.shape_76,p:{y:35.9}},{t:this.shape_73,p:{y:34}},{t:this.shape_72,p:{y:32.2}},{t:this.shape_69,p:{y:30.3}},{t:this.shape_68,p:{y:28.4}},{t:this.shape_65,p:{y:26.5}},{t:this.shape_64,p:{y:24.7}},{t:this.shape_61,p:{y:22.8}},{t:this.shape_60,p:{y:20.9}},{t:this.shape_57,p:{y:19}},{t:this.shape_56,p:{y:17.1}},{t:this.shape_53,p:{y:15.2}},{t:this.shape_52,p:{y:13.3}},{t:this.shape_49,p:{y:-13.3}},{t:this.shape_48,p:{y:-15.1}},{t:this.shape_45,p:{y:-17}},{t:this.shape_44,p:{y:-18.9}},{t:this.shape_41,p:{y:-20.8}},{t:this.shape_40,p:{y:-22.7}},{t:this.shape_37,p:{y:-24.6}},{t:this.shape_36,p:{y:-26.5}},{t:this.shape_33,p:{y:-28.3}},{t:this.shape_32,p:{y:-30.2}},{t:this.shape_29,p:{y:-32.1}},{t:this.shape_28,p:{y:-34}},{t:this.shape_25,p:{y:-35.9}},{t:this.shape_24,p:{y:-37.8}},{t:this.shape_21,p:{y:-39.6}},{t:this.shape_20,p:{y:-41.5}},{t:this.shape_17,p:{y:-43.4}},{t:this.shape_16,p:{y:-45.3}}]},1).to({state:[{t:this.shape_91,p:{x:-47.6}},{t:this.shape_90,p:{x:-45.7}},{t:this.shape_87,p:{x:-43.8}},{t:this.shape_86,p:{x:-41.9}},{t:this.shape_83,p:{x:-40.1}},{t:this.shape_82,p:{x:-38.2}},{t:this.shape_79,p:{x:-36.3}},{t:this.shape_78,p:{x:-34.4}},{t:this.shape_75,p:{x:-32.5}},{t:this.shape_74,p:{x:-30.6}},{t:this.shape_71,p:{x:-28.8}},{t:this.shape_70,p:{x:-26.9}},{t:this.shape_67,p:{x:-25}},{t:this.shape_66,p:{x:-23.1}},{t:this.shape_63,p:{x:-21.2}},{t:this.shape_62,p:{x:-19.3}},{t:this.shape_59,p:{x:-17.5}},{t:this.shape_58,p:{x:-15.6}},{t:this.shape_55,p:{x:-13.7}},{t:this.shape_54,p:{x:12.9}},{t:this.shape_51,p:{x:14.8}},{t:this.shape_50,p:{x:16.7}},{t:this.shape_47,p:{x:18.6}},{t:this.shape_46,p:{x:20.5}},{t:this.shape_43,p:{x:22.3}},{t:this.shape_42,p:{x:24.2}},{t:this.shape_39,p:{x:26.1}},{t:this.shape_38,p:{x:28}},{t:this.shape_35,p:{x:29.9}},{t:this.shape_34,p:{x:31.8}},{t:this.shape_31,p:{x:33.7}},{t:this.shape_30,p:{x:35.5}},{t:this.shape_27,p:{x:37.4}},{t:this.shape_26,p:{x:39.3}},{t:this.shape_23,p:{x:41.2}},{t:this.shape_22,p:{x:43.1}},{t:this.shape_19,p:{x:44.9}},{t:this.shape_18,p:{x:46.8}},{t:this.shape_89,p:{y:47.2}},{t:this.shape_88,p:{y:45.4}},{t:this.shape_85,p:{y:43.5}},{t:this.shape_84,p:{y:41.6}},{t:this.shape_81,p:{y:39.7}},{t:this.shape_80,p:{y:37.8}},{t:this.shape_77,p:{y:35.9}},{t:this.shape_76,p:{y:34}},{t:this.shape_73,p:{y:32.2}},{t:this.shape_72,p:{y:30.3}},{t:this.shape_69,p:{y:28.4}},{t:this.shape_68,p:{y:26.5}},{t:this.shape_65,p:{y:24.7}},{t:this.shape_64,p:{y:22.8}},{t:this.shape_61,p:{y:20.9}},{t:this.shape_60,p:{y:19}},{t:this.shape_57,p:{y:17.1}},{t:this.shape_56,p:{y:15.2}},{t:this.shape_53,p:{y:13.3}},{t:this.shape_52,p:{y:-13.3}},{t:this.shape_49,p:{y:-15.1}},{t:this.shape_48,p:{y:-17}},{t:this.shape_45,p:{y:-18.9}},{t:this.shape_44,p:{y:-20.8}},{t:this.shape_41,p:{y:-22.7}},{t:this.shape_40,p:{y:-24.6}},{t:this.shape_37,p:{y:-26.5}},{t:this.shape_36,p:{y:-28.3}},{t:this.shape_33,p:{y:-30.2}},{t:this.shape_32,p:{y:-32.1}},{t:this.shape_29,p:{y:-34}},{t:this.shape_28,p:{y:-35.9}},{t:this.shape_25,p:{y:-37.8}},{t:this.shape_24,p:{y:-39.6}},{t:this.shape_21,p:{y:-41.5}},{t:this.shape_20,p:{y:-43.4}},{t:this.shape_17,p:{y:-45.3}},{t:this.shape_16,p:{y:-47.2}}]},1).to({state:[{t:this.shape_95,p:{x:-49.5}},{t:this.shape_94,p:{x:-47.6}},{t:this.shape_91,p:{x:-45.7}},{t:this.shape_90,p:{x:-43.8}},{t:this.shape_87,p:{x:-41.9}},{t:this.shape_86,p:{x:-40.1}},{t:this.shape_83,p:{x:-38.2}},{t:this.shape_82,p:{x:-36.3}},{t:this.shape_79,p:{x:-34.4}},{t:this.shape_78,p:{x:-32.5}},{t:this.shape_75,p:{x:-30.6}},{t:this.shape_74,p:{x:-28.8}},{t:this.shape_71,p:{x:-26.9}},{t:this.shape_70,p:{x:-25}},{t:this.shape_67,p:{x:-23.1}},{t:this.shape_66,p:{x:-21.2}},{t:this.shape_63,p:{x:-19.3}},{t:this.shape_62,p:{x:-17.5}},{t:this.shape_59,p:{x:-15.6}},{t:this.shape_58,p:{x:-13.7}},{t:this.shape_55,p:{x:12.9}},{t:this.shape_54,p:{x:14.8}},{t:this.shape_51,p:{x:16.7}},{t:this.shape_50,p:{x:18.6}},{t:this.shape_47,p:{x:20.5}},{t:this.shape_46,p:{x:22.3}},{t:this.shape_43,p:{x:24.2}},{t:this.shape_42,p:{x:26.1}},{t:this.shape_39,p:{x:28}},{t:this.shape_38,p:{x:29.9}},{t:this.shape_35,p:{x:31.8}},{t:this.shape_34,p:{x:33.7}},{t:this.shape_31,p:{x:35.5}},{t:this.shape_30,p:{x:37.4}},{t:this.shape_27,p:{x:39.3}},{t:this.shape_26,p:{x:41.2}},{t:this.shape_23,p:{x:43.1}},{t:this.shape_22,p:{x:44.9}},{t:this.shape_19,p:{x:46.8}},{t:this.shape_18,p:{x:48.7}},{t:this.shape_93,p:{y:49.1}},{t:this.shape_92,p:{y:47.2}},{t:this.shape_89,p:{y:45.4}},{t:this.shape_88,p:{y:43.5}},{t:this.shape_85,p:{y:41.6}},{t:this.shape_84,p:{y:39.7}},{t:this.shape_81,p:{y:37.8}},{t:this.shape_80,p:{y:35.9}},{t:this.shape_77,p:{y:34}},{t:this.shape_76,p:{y:32.2}},{t:this.shape_73,p:{y:30.3}},{t:this.shape_72,p:{y:28.4}},{t:this.shape_69,p:{y:26.5}},{t:this.shape_68,p:{y:24.7}},{t:this.shape_65,p:{y:22.8}},{t:this.shape_64,p:{y:20.9}},{t:this.shape_61,p:{y:19}},{t:this.shape_60,p:{y:17.1}},{t:this.shape_57,p:{y:15.2}},{t:this.shape_56,p:{y:13.3}},{t:this.shape_53,p:{y:-13.3}},{t:this.shape_52,p:{y:-15.1}},{t:this.shape_49,p:{y:-17}},{t:this.shape_48,p:{y:-18.9}},{t:this.shape_45,p:{y:-20.8}},{t:this.shape_44,p:{y:-22.7}},{t:this.shape_41,p:{y:-24.6}},{t:this.shape_40,p:{y:-26.5}},{t:this.shape_37,p:{y:-28.3}},{t:this.shape_36,p:{y:-30.2}},{t:this.shape_33,p:{y:-32.1}},{t:this.shape_32,p:{y:-34}},{t:this.shape_29,p:{y:-35.9}},{t:this.shape_28,p:{y:-37.8}},{t:this.shape_25,p:{y:-39.6}},{t:this.shape_24,p:{y:-41.5}},{t:this.shape_21,p:{y:-43.4}},{t:this.shape_20,p:{y:-45.3}},{t:this.shape_17,p:{y:-47.2}},{t:this.shape_16,p:{y:-49.1}}]},1).to({state:[{t:this.shape_99,p:{x:-51.4}},{t:this.shape_98,p:{x:-49.5}},{t:this.shape_95,p:{x:-47.6}},{t:this.shape_94,p:{x:-45.7}},{t:this.shape_91,p:{x:-43.8}},{t:this.shape_90,p:{x:-41.9}},{t:this.shape_87,p:{x:-40.1}},{t:this.shape_86,p:{x:-38.2}},{t:this.shape_83,p:{x:-36.3}},{t:this.shape_82,p:{x:-34.4}},{t:this.shape_79,p:{x:-32.5}},{t:this.shape_78,p:{x:-30.6}},{t:this.shape_75,p:{x:-28.8}},{t:this.shape_74,p:{x:-26.9}},{t:this.shape_71,p:{x:-25}},{t:this.shape_70,p:{x:-23.1}},{t:this.shape_67,p:{x:-21.2}},{t:this.shape_66,p:{x:-19.3}},{t:this.shape_63,p:{x:-17.5}},{t:this.shape_62,p:{x:-15.6}},{t:this.shape_59,p:{x:-13.7}},{t:this.shape_58,p:{x:12.9}},{t:this.shape_55,p:{x:14.8}},{t:this.shape_54,p:{x:16.7}},{t:this.shape_51,p:{x:18.6}},{t:this.shape_50,p:{x:20.5}},{t:this.shape_47,p:{x:22.3}},{t:this.shape_46,p:{x:24.2}},{t:this.shape_43,p:{x:26.1}},{t:this.shape_42,p:{x:28}},{t:this.shape_39,p:{x:29.9}},{t:this.shape_38,p:{x:31.8}},{t:this.shape_35,p:{x:33.7}},{t:this.shape_34,p:{x:35.5}},{t:this.shape_31,p:{x:37.4}},{t:this.shape_30,p:{x:39.3}},{t:this.shape_27,p:{x:41.2}},{t:this.shape_26,p:{x:43.1}},{t:this.shape_23,p:{x:44.9}},{t:this.shape_22,p:{x:46.8}},{t:this.shape_19,p:{x:48.7}},{t:this.shape_18,p:{x:50.6}},{t:this.shape_97,p:{y:51}},{t:this.shape_96,p:{y:49.1}},{t:this.shape_93,p:{y:47.2}},{t:this.shape_92,p:{y:45.4}},{t:this.shape_89,p:{y:43.5}},{t:this.shape_88,p:{y:41.6}},{t:this.shape_85,p:{y:39.7}},{t:this.shape_84,p:{y:37.8}},{t:this.shape_81,p:{y:35.9}},{t:this.shape_80,p:{y:34}},{t:this.shape_77,p:{y:32.2}},{t:this.shape_76,p:{y:30.3}},{t:this.shape_73,p:{y:28.4}},{t:this.shape_72,p:{y:26.5}},{t:this.shape_69,p:{y:24.7}},{t:this.shape_68,p:{y:22.8}},{t:this.shape_65,p:{y:20.9}},{t:this.shape_64,p:{y:19}},{t:this.shape_61,p:{y:17.1}},{t:this.shape_60,p:{y:15.2}},{t:this.shape_57,p:{y:13.3}},{t:this.shape_56,p:{y:-13.3}},{t:this.shape_53,p:{y:-15.1}},{t:this.shape_52,p:{y:-17}},{t:this.shape_49,p:{y:-18.9}},{t:this.shape_48,p:{y:-20.8}},{t:this.shape_45,p:{y:-22.7}},{t:this.shape_44,p:{y:-24.6}},{t:this.shape_41,p:{y:-26.5}},{t:this.shape_40,p:{y:-28.3}},{t:this.shape_37,p:{y:-30.2}},{t:this.shape_36,p:{y:-32.1}},{t:this.shape_33,p:{y:-34}},{t:this.shape_32,p:{y:-35.9}},{t:this.shape_29,p:{y:-37.8}},{t:this.shape_28,p:{y:-39.6}},{t:this.shape_25,p:{y:-41.5}},{t:this.shape_24,p:{y:-43.4}},{t:this.shape_21,p:{y:-45.3}},{t:this.shape_20,p:{y:-47.2}},{t:this.shape_17,p:{y:-49.1}},{t:this.shape_16,p:{y:-50.9}}]},1).to({state:[{t:this.shape_103,p:{x:-53.3}},{t:this.shape_102,p:{x:-51.4}},{t:this.shape_99,p:{x:-49.5}},{t:this.shape_98,p:{x:-47.6}},{t:this.shape_95,p:{x:-45.7}},{t:this.shape_94,p:{x:-43.8}},{t:this.shape_91,p:{x:-41.9}},{t:this.shape_90,p:{x:-40.1}},{t:this.shape_87,p:{x:-38.2}},{t:this.shape_86,p:{x:-36.3}},{t:this.shape_83,p:{x:-34.4}},{t:this.shape_82,p:{x:-32.5}},{t:this.shape_79,p:{x:-30.6}},{t:this.shape_78,p:{x:-28.8}},{t:this.shape_75,p:{x:-26.9}},{t:this.shape_74,p:{x:-25}},{t:this.shape_71,p:{x:-23.1}},{t:this.shape_70,p:{x:-21.2}},{t:this.shape_67,p:{x:-19.3}},{t:this.shape_66,p:{x:-17.5}},{t:this.shape_63,p:{x:-15.6}},{t:this.shape_62,p:{x:-13.7}},{t:this.shape_59,p:{x:12.9}},{t:this.shape_58,p:{x:14.8}},{t:this.shape_55,p:{x:16.7}},{t:this.shape_54,p:{x:18.6}},{t:this.shape_51,p:{x:20.5}},{t:this.shape_50,p:{x:22.3}},{t:this.shape_47,p:{x:24.2}},{t:this.shape_46,p:{x:26.1}},{t:this.shape_43,p:{x:28}},{t:this.shape_42,p:{x:29.9}},{t:this.shape_39,p:{x:31.8}},{t:this.shape_38,p:{x:33.7}},{t:this.shape_35,p:{x:35.5}},{t:this.shape_34,p:{x:37.4}},{t:this.shape_31,p:{x:39.3}},{t:this.shape_30,p:{x:41.2}},{t:this.shape_27,p:{x:43.1}},{t:this.shape_26,p:{x:44.9}},{t:this.shape_23,p:{x:46.8}},{t:this.shape_22,p:{x:48.7}},{t:this.shape_19,p:{x:50.6}},{t:this.shape_18,p:{x:52.5}},{t:this.shape_101,p:{y:52.9}},{t:this.shape_100,p:{y:51}},{t:this.shape_97,p:{y:49.1}},{t:this.shape_96,p:{y:47.2}},{t:this.shape_93,p:{y:45.4}},{t:this.shape_92,p:{y:43.5}},{t:this.shape_89,p:{y:41.6}},{t:this.shape_88,p:{y:39.7}},{t:this.shape_85,p:{y:37.8}},{t:this.shape_84,p:{y:35.9}},{t:this.shape_81,p:{y:34}},{t:this.shape_80,p:{y:32.2}},{t:this.shape_77,p:{y:30.3}},{t:this.shape_76,p:{y:28.4}},{t:this.shape_73,p:{y:26.5}},{t:this.shape_72,p:{y:24.7}},{t:this.shape_69,p:{y:22.8}},{t:this.shape_68,p:{y:20.9}},{t:this.shape_65,p:{y:19}},{t:this.shape_64,p:{y:17.1}},{t:this.shape_61,p:{y:15.2}},{t:this.shape_60,p:{y:13.3}},{t:this.shape_57,p:{y:-13.3}},{t:this.shape_56,p:{y:-15.1}},{t:this.shape_53,p:{y:-17}},{t:this.shape_52,p:{y:-18.9}},{t:this.shape_49,p:{y:-20.8}},{t:this.shape_48,p:{y:-22.7}},{t:this.shape_45,p:{y:-24.6}},{t:this.shape_44,p:{y:-26.5}},{t:this.shape_41,p:{y:-28.3}},{t:this.shape_40,p:{y:-30.2}},{t:this.shape_37,p:{y:-32.1}},{t:this.shape_36,p:{y:-34}},{t:this.shape_33,p:{y:-35.9}},{t:this.shape_32,p:{y:-37.8}},{t:this.shape_29,p:{y:-39.6}},{t:this.shape_28,p:{y:-41.5}},{t:this.shape_25,p:{y:-43.4}},{t:this.shape_24,p:{y:-45.3}},{t:this.shape_21,p:{y:-47.2}},{t:this.shape_20,p:{y:-49.1}},{t:this.shape_17,p:{y:-50.9}},{t:this.shape_16,p:{y:-52.8}}]},1).to({state:[{t:this.shape_107,p:{x:-55.1}},{t:this.shape_106,p:{x:-53.3}},{t:this.shape_103,p:{x:-51.4}},{t:this.shape_102,p:{x:-49.5}},{t:this.shape_99,p:{x:-47.6}},{t:this.shape_98,p:{x:-45.7}},{t:this.shape_95,p:{x:-43.8}},{t:this.shape_94,p:{x:-41.9}},{t:this.shape_91,p:{x:-40.1}},{t:this.shape_90,p:{x:-38.2}},{t:this.shape_87,p:{x:-36.3}},{t:this.shape_86,p:{x:-34.4}},{t:this.shape_83,p:{x:-32.5}},{t:this.shape_82,p:{x:-30.6}},{t:this.shape_79,p:{x:-28.8}},{t:this.shape_78,p:{x:-26.9}},{t:this.shape_75,p:{x:-25}},{t:this.shape_74,p:{x:-23.1}},{t:this.shape_71,p:{x:-21.2}},{t:this.shape_70,p:{x:-19.3}},{t:this.shape_67,p:{x:-17.5}},{t:this.shape_66,p:{x:-15.6}},{t:this.shape_63,p:{x:-13.7}},{t:this.shape_62,p:{x:12.9}},{t:this.shape_59,p:{x:14.8}},{t:this.shape_58,p:{x:16.7}},{t:this.shape_55,p:{x:18.6}},{t:this.shape_54,p:{x:20.5}},{t:this.shape_51,p:{x:22.3}},{t:this.shape_50,p:{x:24.2}},{t:this.shape_47,p:{x:26.1}},{t:this.shape_46,p:{x:28}},{t:this.shape_43,p:{x:29.9}},{t:this.shape_42,p:{x:31.8}},{t:this.shape_39,p:{x:33.7}},{t:this.shape_38,p:{x:35.5}},{t:this.shape_35,p:{x:37.4}},{t:this.shape_34,p:{x:39.3}},{t:this.shape_31,p:{x:41.2}},{t:this.shape_30,p:{x:43.1}},{t:this.shape_27,p:{x:44.9}},{t:this.shape_26,p:{x:46.8}},{t:this.shape_23,p:{x:48.7}},{t:this.shape_22,p:{x:50.6}},{t:this.shape_19,p:{x:52.5}},{t:this.shape_18,p:{x:54.4}},{t:this.shape_105,p:{y:54.8}},{t:this.shape_104,p:{y:52.9}},{t:this.shape_101,p:{y:51}},{t:this.shape_100,p:{y:49.1}},{t:this.shape_97,p:{y:47.2}},{t:this.shape_96,p:{y:45.4}},{t:this.shape_93,p:{y:43.5}},{t:this.shape_92,p:{y:41.6}},{t:this.shape_89,p:{y:39.7}},{t:this.shape_88,p:{y:37.8}},{t:this.shape_85,p:{y:35.9}},{t:this.shape_84,p:{y:34}},{t:this.shape_81,p:{y:32.2}},{t:this.shape_80,p:{y:30.3}},{t:this.shape_77,p:{y:28.4}},{t:this.shape_76,p:{y:26.5}},{t:this.shape_73,p:{y:24.7}},{t:this.shape_72,p:{y:22.8}},{t:this.shape_69,p:{y:20.9}},{t:this.shape_68,p:{y:19}},{t:this.shape_65,p:{y:17.1}},{t:this.shape_64,p:{y:15.2}},{t:this.shape_61,p:{y:13.3}},{t:this.shape_60,p:{y:-13.3}},{t:this.shape_57,p:{y:-15.1}},{t:this.shape_56,p:{y:-17}},{t:this.shape_53,p:{y:-18.9}},{t:this.shape_52,p:{y:-20.8}},{t:this.shape_49,p:{y:-22.7}},{t:this.shape_48,p:{y:-24.6}},{t:this.shape_45,p:{y:-26.5}},{t:this.shape_44,p:{y:-28.3}},{t:this.shape_41,p:{y:-30.2}},{t:this.shape_40,p:{y:-32.1}},{t:this.shape_37,p:{y:-34}},{t:this.shape_36,p:{y:-35.9}},{t:this.shape_33,p:{y:-37.8}},{t:this.shape_32,p:{y:-39.6}},{t:this.shape_29,p:{y:-41.5}},{t:this.shape_28,p:{y:-43.4}},{t:this.shape_25,p:{y:-45.3}},{t:this.shape_24,p:{y:-47.2}},{t:this.shape_21,p:{y:-49.1}},{t:this.shape_20,p:{y:-50.9}},{t:this.shape_17,p:{y:-52.8}},{t:this.shape_16,p:{y:-54.7}}]},1).to({state:[{t:this.shape_111,p:{x:-57}},{t:this.shape_110,p:{x:-55.1}},{t:this.shape_107,p:{x:-53.3}},{t:this.shape_106,p:{x:-51.4}},{t:this.shape_103,p:{x:-49.5}},{t:this.shape_102,p:{x:-47.6}},{t:this.shape_99,p:{x:-45.7}},{t:this.shape_98,p:{x:-43.8}},{t:this.shape_95,p:{x:-41.9}},{t:this.shape_94,p:{x:-40.1}},{t:this.shape_91,p:{x:-38.2}},{t:this.shape_90,p:{x:-36.3}},{t:this.shape_87,p:{x:-34.4}},{t:this.shape_86,p:{x:-32.5}},{t:this.shape_83,p:{x:-30.6}},{t:this.shape_82,p:{x:-28.8}},{t:this.shape_79,p:{x:-26.9}},{t:this.shape_78,p:{x:-25}},{t:this.shape_75,p:{x:-23.1}},{t:this.shape_74,p:{x:-21.2}},{t:this.shape_71,p:{x:-19.3}},{t:this.shape_70,p:{x:-17.5}},{t:this.shape_67,p:{x:-15.6}},{t:this.shape_66,p:{x:-13.7}},{t:this.shape_63,p:{x:12.9}},{t:this.shape_62,p:{x:14.8}},{t:this.shape_59,p:{x:16.7}},{t:this.shape_58,p:{x:18.6}},{t:this.shape_55,p:{x:20.5}},{t:this.shape_54,p:{x:22.3}},{t:this.shape_51,p:{x:24.2}},{t:this.shape_50,p:{x:26.1}},{t:this.shape_47,p:{x:28}},{t:this.shape_46,p:{x:29.9}},{t:this.shape_43,p:{x:31.8}},{t:this.shape_42,p:{x:33.7}},{t:this.shape_39,p:{x:35.5}},{t:this.shape_38,p:{x:37.4}},{t:this.shape_35,p:{x:39.3}},{t:this.shape_34,p:{x:41.2}},{t:this.shape_31,p:{x:43.1}},{t:this.shape_30,p:{x:44.9}},{t:this.shape_27,p:{x:46.8}},{t:this.shape_26,p:{x:48.7}},{t:this.shape_23,p:{x:50.6}},{t:this.shape_22,p:{x:52.5}},{t:this.shape_19,p:{x:54.4}},{t:this.shape_18,p:{x:56.3}},{t:this.shape_109,p:{y:56.7}},{t:this.shape_108,p:{y:54.8}},{t:this.shape_105,p:{y:52.9}},{t:this.shape_104,p:{y:51}},{t:this.shape_101,p:{y:49.1}},{t:this.shape_100,p:{y:47.2}},{t:this.shape_97,p:{y:45.4}},{t:this.shape_96,p:{y:43.5}},{t:this.shape_93,p:{y:41.6}},{t:this.shape_92,p:{y:39.7}},{t:this.shape_89,p:{y:37.8}},{t:this.shape_88,p:{y:35.9}},{t:this.shape_85,p:{y:34}},{t:this.shape_84,p:{y:32.2}},{t:this.shape_81,p:{y:30.3}},{t:this.shape_80,p:{y:28.4}},{t:this.shape_77,p:{y:26.5}},{t:this.shape_76,p:{y:24.7}},{t:this.shape_73,p:{y:22.8}},{t:this.shape_72,p:{y:20.9}},{t:this.shape_69,p:{y:19}},{t:this.shape_68,p:{y:17.1}},{t:this.shape_65,p:{y:15.2}},{t:this.shape_64,p:{y:13.3}},{t:this.shape_61,p:{y:-13.3}},{t:this.shape_60,p:{y:-15.1}},{t:this.shape_57,p:{y:-17}},{t:this.shape_56,p:{y:-18.9}},{t:this.shape_53,p:{y:-20.8}},{t:this.shape_52,p:{y:-22.7}},{t:this.shape_49,p:{y:-24.6}},{t:this.shape_48,p:{y:-26.5}},{t:this.shape_45,p:{y:-28.3}},{t:this.shape_44,p:{y:-30.2}},{t:this.shape_41,p:{y:-32.1}},{t:this.shape_40,p:{y:-34}},{t:this.shape_37,p:{y:-35.9}},{t:this.shape_36,p:{y:-37.8}},{t:this.shape_33,p:{y:-39.6}},{t:this.shape_32,p:{y:-41.5}},{t:this.shape_29,p:{y:-43.4}},{t:this.shape_28,p:{y:-45.3}},{t:this.shape_25,p:{y:-47.2}},{t:this.shape_24,p:{y:-49.1}},{t:this.shape_21,p:{y:-50.9}},{t:this.shape_20,p:{y:-52.8}},{t:this.shape_17,p:{y:-54.7}},{t:this.shape_16,p:{y:-56.6}}]},1).to({state:[{t:this.shape_111,p:{x:-57}},{t:this.shape_110,p:{x:-55.1}},{t:this.shape_107,p:{x:-53.3}},{t:this.shape_106,p:{x:-51.4}},{t:this.shape_103,p:{x:-49.5}},{t:this.shape_102,p:{x:-47.6}},{t:this.shape_99,p:{x:-45.7}},{t:this.shape_98,p:{x:-43.8}},{t:this.shape_95,p:{x:-41.9}},{t:this.shape_94,p:{x:-40.1}},{t:this.shape_91,p:{x:-38.2}},{t:this.shape_90,p:{x:-36.3}},{t:this.shape_87,p:{x:-34.4}},{t:this.shape_86,p:{x:-32.5}},{t:this.shape_83,p:{x:-30.6}},{t:this.shape_82,p:{x:-28.8}},{t:this.shape_79,p:{x:-26.9}},{t:this.shape_78,p:{x:-25}},{t:this.shape_75,p:{x:-23.1}},{t:this.shape_74,p:{x:-21.2}},{t:this.shape_71,p:{x:-19.3}},{t:this.shape_70,p:{x:-17.5}},{t:this.shape_67,p:{x:-15.6}},{t:this.shape_66,p:{x:-13.7}},{t:this.shape_63,p:{x:12.9}},{t:this.shape_62,p:{x:14.8}},{t:this.shape_59,p:{x:16.7}},{t:this.shape_58,p:{x:18.6}},{t:this.shape_55,p:{x:20.5}},{t:this.shape_54,p:{x:22.3}},{t:this.shape_51,p:{x:24.2}},{t:this.shape_50,p:{x:26.1}},{t:this.shape_47,p:{x:28}},{t:this.shape_46,p:{x:29.9}},{t:this.shape_43,p:{x:31.8}},{t:this.shape_42,p:{x:33.7}},{t:this.shape_39,p:{x:35.5}},{t:this.shape_38,p:{x:37.4}},{t:this.shape_35,p:{x:39.3}},{t:this.shape_34,p:{x:41.2}},{t:this.shape_31,p:{x:43.1}},{t:this.shape_30,p:{x:44.9}},{t:this.shape_27,p:{x:46.8}},{t:this.shape_26,p:{x:48.7}},{t:this.shape_23,p:{x:50.6}},{t:this.shape_22,p:{x:52.5}},{t:this.shape_19,p:{x:54.4}},{t:this.shape_18,p:{x:56.3}},{t:this.shape_109,p:{y:56.7}},{t:this.shape_108,p:{y:54.8}},{t:this.shape_105,p:{y:52.9}},{t:this.shape_104,p:{y:51}},{t:this.shape_101,p:{y:49.1}},{t:this.shape_100,p:{y:47.2}},{t:this.shape_97,p:{y:45.4}},{t:this.shape_96,p:{y:43.5}},{t:this.shape_93,p:{y:41.6}},{t:this.shape_92,p:{y:39.7}},{t:this.shape_89,p:{y:37.8}},{t:this.shape_88,p:{y:35.9}},{t:this.shape_85,p:{y:34}},{t:this.shape_84,p:{y:32.2}},{t:this.shape_81,p:{y:30.3}},{t:this.shape_80,p:{y:28.4}},{t:this.shape_77,p:{y:26.5}},{t:this.shape_76,p:{y:24.7}},{t:this.shape_73,p:{y:22.8}},{t:this.shape_72,p:{y:20.9}},{t:this.shape_69,p:{y:19}},{t:this.shape_68,p:{y:17.1}},{t:this.shape_65,p:{y:15.2}},{t:this.shape_64,p:{y:13.3}},{t:this.shape_61,p:{y:-13.3}},{t:this.shape_60,p:{y:-15.1}},{t:this.shape_57,p:{y:-17}},{t:this.shape_56,p:{y:-18.9}},{t:this.shape_53,p:{y:-20.8}},{t:this.shape_52,p:{y:-22.7}},{t:this.shape_49,p:{y:-24.6}},{t:this.shape_48,p:{y:-26.5}},{t:this.shape_45,p:{y:-28.3}},{t:this.shape_44,p:{y:-30.2}},{t:this.shape_41,p:{y:-32.1}},{t:this.shape_40,p:{y:-34}},{t:this.shape_37,p:{y:-35.9}},{t:this.shape_36,p:{y:-37.8}},{t:this.shape_33,p:{y:-39.6}},{t:this.shape_32,p:{y:-41.5}},{t:this.shape_29,p:{y:-43.4}},{t:this.shape_28,p:{y:-45.3}},{t:this.shape_25,p:{y:-47.2}},{t:this.shape_24,p:{y:-49.1}},{t:this.shape_21,p:{y:-50.9}},{t:this.shape_20,p:{y:-52.8}},{t:this.shape_17,p:{y:-54.7}},{t:this.shape_16,p:{y:-56.6}}]},1).to({state:[{t:this.shape_115,p:{x:-58.9}},{t:this.shape_114,p:{x:-57}},{t:this.shape_111,p:{x:-55.1}},{t:this.shape_110,p:{x:-53.3}},{t:this.shape_107,p:{x:-51.4}},{t:this.shape_106,p:{x:-49.5}},{t:this.shape_103,p:{x:-47.6}},{t:this.shape_102,p:{x:-45.7}},{t:this.shape_99,p:{x:-43.8}},{t:this.shape_98,p:{x:-41.9}},{t:this.shape_95,p:{x:-40.1}},{t:this.shape_94,p:{x:-38.2}},{t:this.shape_91,p:{x:-36.3}},{t:this.shape_90,p:{x:-34.4}},{t:this.shape_87,p:{x:-32.5}},{t:this.shape_86,p:{x:-30.6}},{t:this.shape_83,p:{x:-28.8}},{t:this.shape_82,p:{x:-26.9}},{t:this.shape_79,p:{x:-25}},{t:this.shape_78,p:{x:-23.1}},{t:this.shape_75,p:{x:-21.2}},{t:this.shape_74,p:{x:-19.3}},{t:this.shape_71,p:{x:-17.5}},{t:this.shape_70,p:{x:-15.6}},{t:this.shape_67,p:{x:-13.7}},{t:this.shape_66,p:{x:12.9}},{t:this.shape_63,p:{x:14.8}},{t:this.shape_62,p:{x:16.7}},{t:this.shape_59,p:{x:18.6}},{t:this.shape_58,p:{x:20.5}},{t:this.shape_55,p:{x:22.3}},{t:this.shape_54,p:{x:24.2}},{t:this.shape_51,p:{x:26.1}},{t:this.shape_50,p:{x:28}},{t:this.shape_47,p:{x:29.9}},{t:this.shape_46,p:{x:31.8}},{t:this.shape_43,p:{x:33.7}},{t:this.shape_42,p:{x:35.5}},{t:this.shape_39,p:{x:37.4}},{t:this.shape_38,p:{x:39.3}},{t:this.shape_35,p:{x:41.2}},{t:this.shape_34,p:{x:43.1}},{t:this.shape_31,p:{x:44.9}},{t:this.shape_30,p:{x:46.8}},{t:this.shape_27,p:{x:48.7}},{t:this.shape_26,p:{x:50.6}},{t:this.shape_23,p:{x:52.5}},{t:this.shape_22,p:{x:54.4}},{t:this.shape_19,p:{x:56.3}},{t:this.shape_18,p:{x:58.1}},{t:this.shape_113,p:{y:58.5}},{t:this.shape_112,p:{y:56.7}},{t:this.shape_109,p:{y:54.8}},{t:this.shape_108,p:{y:52.9}},{t:this.shape_105,p:{y:51}},{t:this.shape_104,p:{y:49.1}},{t:this.shape_101,p:{y:47.2}},{t:this.shape_100,p:{y:45.4}},{t:this.shape_97,p:{y:43.5}},{t:this.shape_96,p:{y:41.6}},{t:this.shape_93,p:{y:39.7}},{t:this.shape_92,p:{y:37.8}},{t:this.shape_89,p:{y:35.9}},{t:this.shape_88,p:{y:34}},{t:this.shape_85,p:{y:32.2}},{t:this.shape_84,p:{y:30.3}},{t:this.shape_81,p:{y:28.4}},{t:this.shape_80,p:{y:26.5}},{t:this.shape_77,p:{y:24.7}},{t:this.shape_76,p:{y:22.8}},{t:this.shape_73,p:{y:20.9}},{t:this.shape_72,p:{y:19}},{t:this.shape_69,p:{y:17.1}},{t:this.shape_68,p:{y:15.2}},{t:this.shape_65,p:{y:13.3}},{t:this.shape_64,p:{y:-13.3}},{t:this.shape_61,p:{y:-15.1}},{t:this.shape_60,p:{y:-17}},{t:this.shape_57,p:{y:-18.9}},{t:this.shape_56,p:{y:-20.8}},{t:this.shape_53,p:{y:-22.7}},{t:this.shape_52,p:{y:-24.6}},{t:this.shape_49,p:{y:-26.5}},{t:this.shape_48,p:{y:-28.3}},{t:this.shape_45,p:{y:-30.2}},{t:this.shape_44,p:{y:-32.1}},{t:this.shape_41,p:{y:-34}},{t:this.shape_40,p:{y:-35.9}},{t:this.shape_37,p:{y:-37.8}},{t:this.shape_36,p:{y:-39.6}},{t:this.shape_33,p:{y:-41.5}},{t:this.shape_32,p:{y:-43.4}},{t:this.shape_29,p:{y:-45.3}},{t:this.shape_28,p:{y:-47.2}},{t:this.shape_25,p:{y:-49.1}},{t:this.shape_24,p:{y:-50.9}},{t:this.shape_21,p:{y:-52.8}},{t:this.shape_20,p:{y:-54.7}},{t:this.shape_17,p:{y:-56.6}},{t:this.shape_16,p:{y:-58.5}}]},1).to({state:[{t:this.shape_119,p:{x:-60.8}},{t:this.shape_118,p:{x:-58.9}},{t:this.shape_115,p:{x:-57}},{t:this.shape_114,p:{x:-55.1}},{t:this.shape_111,p:{x:-53.3}},{t:this.shape_110,p:{x:-51.4}},{t:this.shape_107,p:{x:-49.5}},{t:this.shape_106,p:{x:-47.6}},{t:this.shape_103,p:{x:-45.7}},{t:this.shape_102,p:{x:-43.8}},{t:this.shape_99,p:{x:-41.9}},{t:this.shape_98,p:{x:-40.1}},{t:this.shape_95,p:{x:-38.2}},{t:this.shape_94,p:{x:-36.3}},{t:this.shape_91,p:{x:-34.4}},{t:this.shape_90,p:{x:-32.5}},{t:this.shape_87,p:{x:-30.6}},{t:this.shape_86,p:{x:-28.8}},{t:this.shape_83,p:{x:-26.9}},{t:this.shape_82,p:{x:-25}},{t:this.shape_79,p:{x:-23.1}},{t:this.shape_78,p:{x:-21.2}},{t:this.shape_75,p:{x:-19.3}},{t:this.shape_74,p:{x:-17.5}},{t:this.shape_71,p:{x:-15.6}},{t:this.shape_70,p:{x:-13.7}},{t:this.shape_67,p:{x:12.9}},{t:this.shape_66,p:{x:14.8}},{t:this.shape_63,p:{x:16.7}},{t:this.shape_62,p:{x:18.6}},{t:this.shape_59,p:{x:20.5}},{t:this.shape_58,p:{x:22.3}},{t:this.shape_55,p:{x:24.2}},{t:this.shape_54,p:{x:26.1}},{t:this.shape_51,p:{x:28}},{t:this.shape_50,p:{x:29.9}},{t:this.shape_47,p:{x:31.8}},{t:this.shape_46,p:{x:33.7}},{t:this.shape_43,p:{x:35.5}},{t:this.shape_42,p:{x:37.4}},{t:this.shape_39,p:{x:39.3}},{t:this.shape_38,p:{x:41.2}},{t:this.shape_35,p:{x:43.1}},{t:this.shape_34,p:{x:44.9}},{t:this.shape_31,p:{x:46.8}},{t:this.shape_30,p:{x:48.7}},{t:this.shape_27,p:{x:50.6}},{t:this.shape_26,p:{x:52.5}},{t:this.shape_23,p:{x:54.4}},{t:this.shape_22,p:{x:56.3}},{t:this.shape_19,p:{x:58.1}},{t:this.shape_18,p:{x:60}},{t:this.shape_117,p:{y:60.4}},{t:this.shape_116,p:{y:58.5}},{t:this.shape_113,p:{y:56.7}},{t:this.shape_112,p:{y:54.8}},{t:this.shape_109,p:{y:52.9}},{t:this.shape_108,p:{y:51}},{t:this.shape_105,p:{y:49.1}},{t:this.shape_104,p:{y:47.2}},{t:this.shape_101,p:{y:45.4}},{t:this.shape_100,p:{y:43.5}},{t:this.shape_97,p:{y:41.6}},{t:this.shape_96,p:{y:39.7}},{t:this.shape_93,p:{y:37.8}},{t:this.shape_92,p:{y:35.9}},{t:this.shape_89,p:{y:34}},{t:this.shape_88,p:{y:32.2}},{t:this.shape_85,p:{y:30.3}},{t:this.shape_84,p:{y:28.4}},{t:this.shape_81,p:{y:26.5}},{t:this.shape_80,p:{y:24.7}},{t:this.shape_77,p:{y:22.8}},{t:this.shape_76,p:{y:20.9}},{t:this.shape_73,p:{y:19}},{t:this.shape_72,p:{y:17.1}},{t:this.shape_69,p:{y:15.2}},{t:this.shape_68,p:{y:13.3}},{t:this.shape_65,p:{y:-13.3}},{t:this.shape_64,p:{y:-15.1}},{t:this.shape_61,p:{y:-17}},{t:this.shape_60,p:{y:-18.9}},{t:this.shape_57,p:{y:-20.8}},{t:this.shape_56,p:{y:-22.7}},{t:this.shape_53,p:{y:-24.6}},{t:this.shape_52,p:{y:-26.5}},{t:this.shape_49,p:{y:-28.3}},{t:this.shape_48,p:{y:-30.2}},{t:this.shape_45,p:{y:-32.1}},{t:this.shape_44,p:{y:-34}},{t:this.shape_41,p:{y:-35.9}},{t:this.shape_40,p:{y:-37.8}},{t:this.shape_37,p:{y:-39.6}},{t:this.shape_36,p:{y:-41.5}},{t:this.shape_33,p:{y:-43.4}},{t:this.shape_32,p:{y:-45.3}},{t:this.shape_29,p:{y:-47.2}},{t:this.shape_28,p:{y:-49.1}},{t:this.shape_25,p:{y:-50.9}},{t:this.shape_24,p:{y:-52.8}},{t:this.shape_21,p:{y:-54.7}},{t:this.shape_20,p:{y:-56.6}},{t:this.shape_17,p:{y:-58.5}},{t:this.shape_16,p:{y:-60.4}}]},1).to({state:[{t:this.shape_123,p:{x:-62.7}},{t:this.shape_122,p:{x:-60.8}},{t:this.shape_119,p:{x:-58.9}},{t:this.shape_118,p:{x:-57}},{t:this.shape_115,p:{x:-55.1}},{t:this.shape_114,p:{x:-53.3}},{t:this.shape_111,p:{x:-51.4}},{t:this.shape_110,p:{x:-49.5}},{t:this.shape_107,p:{x:-47.6}},{t:this.shape_106,p:{x:-45.7}},{t:this.shape_103,p:{x:-43.8}},{t:this.shape_102,p:{x:-41.9}},{t:this.shape_99,p:{x:-40.1}},{t:this.shape_98,p:{x:-38.2}},{t:this.shape_95,p:{x:-36.3}},{t:this.shape_94,p:{x:-34.4}},{t:this.shape_91,p:{x:-32.5}},{t:this.shape_90,p:{x:-30.6}},{t:this.shape_87,p:{x:-28.8}},{t:this.shape_86,p:{x:-26.9}},{t:this.shape_83,p:{x:-25}},{t:this.shape_82,p:{x:-23.1}},{t:this.shape_79,p:{x:-21.2}},{t:this.shape_78,p:{x:-19.3}},{t:this.shape_75,p:{x:-17.5}},{t:this.shape_74,p:{x:-15.6}},{t:this.shape_71,p:{x:-13.7}},{t:this.shape_70,p:{x:12.9}},{t:this.shape_67,p:{x:14.8}},{t:this.shape_66,p:{x:16.7}},{t:this.shape_63,p:{x:18.6}},{t:this.shape_62,p:{x:20.5}},{t:this.shape_59,p:{x:22.3}},{t:this.shape_58,p:{x:24.2}},{t:this.shape_55,p:{x:26.1}},{t:this.shape_54,p:{x:28}},{t:this.shape_51,p:{x:29.9}},{t:this.shape_50,p:{x:31.8}},{t:this.shape_47,p:{x:33.7}},{t:this.shape_46,p:{x:35.5}},{t:this.shape_43,p:{x:37.4}},{t:this.shape_42,p:{x:39.3}},{t:this.shape_39,p:{x:41.2}},{t:this.shape_38,p:{x:43.1}},{t:this.shape_35,p:{x:44.9}},{t:this.shape_34,p:{x:46.8}},{t:this.shape_31,p:{x:48.7}},{t:this.shape_30,p:{x:50.6}},{t:this.shape_27,p:{x:52.5}},{t:this.shape_26,p:{x:54.4}},{t:this.shape_23,p:{x:56.3}},{t:this.shape_22,p:{x:58.1}},{t:this.shape_19,p:{x:60}},{t:this.shape_18,p:{x:61.9}},{t:this.shape_121,p:{y:62.3}},{t:this.shape_120,p:{y:60.4}},{t:this.shape_117,p:{y:58.5}},{t:this.shape_116,p:{y:56.7}},{t:this.shape_113,p:{y:54.8}},{t:this.shape_112,p:{y:52.9}},{t:this.shape_109,p:{y:51}},{t:this.shape_108,p:{y:49.1}},{t:this.shape_105,p:{y:47.2}},{t:this.shape_104,p:{y:45.4}},{t:this.shape_101,p:{y:43.5}},{t:this.shape_100,p:{y:41.6}},{t:this.shape_97,p:{y:39.7}},{t:this.shape_96,p:{y:37.8}},{t:this.shape_93,p:{y:35.9}},{t:this.shape_92,p:{y:34}},{t:this.shape_89,p:{y:32.2}},{t:this.shape_88,p:{y:30.3}},{t:this.shape_85,p:{y:28.4}},{t:this.shape_84,p:{y:26.5}},{t:this.shape_81,p:{y:24.7}},{t:this.shape_80,p:{y:22.8}},{t:this.shape_77,p:{y:20.9}},{t:this.shape_76,p:{y:19}},{t:this.shape_73,p:{y:17.1}},{t:this.shape_72,p:{y:15.2}},{t:this.shape_69,p:{y:13.3}},{t:this.shape_68,p:{y:-13.3}},{t:this.shape_65,p:{y:-15.1}},{t:this.shape_64,p:{y:-17}},{t:this.shape_61,p:{y:-18.9}},{t:this.shape_60,p:{y:-20.8}},{t:this.shape_57,p:{y:-22.7}},{t:this.shape_56,p:{y:-24.6}},{t:this.shape_53,p:{y:-26.5}},{t:this.shape_52,p:{y:-28.3}},{t:this.shape_49,p:{y:-30.2}},{t:this.shape_48,p:{y:-32.1}},{t:this.shape_45,p:{y:-34}},{t:this.shape_44,p:{y:-35.9}},{t:this.shape_41,p:{y:-37.8}},{t:this.shape_40,p:{y:-39.6}},{t:this.shape_37,p:{y:-41.5}},{t:this.shape_36,p:{y:-43.4}},{t:this.shape_33,p:{y:-45.3}},{t:this.shape_32,p:{y:-47.2}},{t:this.shape_29,p:{y:-49.1}},{t:this.shape_28,p:{y:-50.9}},{t:this.shape_25,p:{y:-52.8}},{t:this.shape_24,p:{y:-54.7}},{t:this.shape_21,p:{y:-56.6}},{t:this.shape_20,p:{y:-58.5}},{t:this.shape_17,p:{y:-60.4}},{t:this.shape_16,p:{y:-62.3}}]},1).to({state:[{t:this.shape_127,p:{x:-64.5}},{t:this.shape_126,p:{x:-62.7}},{t:this.shape_123,p:{x:-60.8}},{t:this.shape_122,p:{x:-58.9}},{t:this.shape_119,p:{x:-57}},{t:this.shape_118,p:{x:-55.1}},{t:this.shape_115,p:{x:-53.3}},{t:this.shape_114,p:{x:-51.4}},{t:this.shape_111,p:{x:-49.5}},{t:this.shape_110,p:{x:-47.6}},{t:this.shape_107,p:{x:-45.7}},{t:this.shape_106,p:{x:-43.8}},{t:this.shape_103,p:{x:-41.9}},{t:this.shape_102,p:{x:-40.1}},{t:this.shape_99,p:{x:-38.2}},{t:this.shape_98,p:{x:-36.3}},{t:this.shape_95,p:{x:-34.4}},{t:this.shape_94,p:{x:-32.5}},{t:this.shape_91,p:{x:-30.6}},{t:this.shape_90,p:{x:-28.8}},{t:this.shape_87,p:{x:-26.9}},{t:this.shape_86,p:{x:-25}},{t:this.shape_83,p:{x:-23.1}},{t:this.shape_82,p:{x:-21.2}},{t:this.shape_79,p:{x:-19.3}},{t:this.shape_78,p:{x:-17.5}},{t:this.shape_75,p:{x:-15.6}},{t:this.shape_74,p:{x:-13.7}},{t:this.shape_71,p:{x:12.9}},{t:this.shape_70,p:{x:14.8}},{t:this.shape_67,p:{x:16.7}},{t:this.shape_66,p:{x:18.6}},{t:this.shape_63,p:{x:20.5}},{t:this.shape_62,p:{x:22.3}},{t:this.shape_59,p:{x:24.2}},{t:this.shape_58,p:{x:26.1}},{t:this.shape_55,p:{x:28}},{t:this.shape_54,p:{x:29.9}},{t:this.shape_51,p:{x:31.8}},{t:this.shape_50,p:{x:33.7}},{t:this.shape_47,p:{x:35.5}},{t:this.shape_46,p:{x:37.4}},{t:this.shape_43,p:{x:39.3}},{t:this.shape_42,p:{x:41.2}},{t:this.shape_39,p:{x:43.1}},{t:this.shape_38,p:{x:44.9}},{t:this.shape_35,p:{x:46.8}},{t:this.shape_34,p:{x:48.7}},{t:this.shape_31,p:{x:50.6}},{t:this.shape_30,p:{x:52.5}},{t:this.shape_27,p:{x:54.4}},{t:this.shape_26,p:{x:56.3}},{t:this.shape_23,p:{x:58.1}},{t:this.shape_22,p:{x:60}},{t:this.shape_19,p:{x:61.9}},{t:this.shape_18,p:{x:63.8}},{t:this.shape_125,p:{y:64.2}},{t:this.shape_124,p:{y:62.3}},{t:this.shape_121,p:{y:60.4}},{t:this.shape_120,p:{y:58.5}},{t:this.shape_117,p:{y:56.7}},{t:this.shape_116,p:{y:54.8}},{t:this.shape_113,p:{y:52.9}},{t:this.shape_112,p:{y:51}},{t:this.shape_109,p:{y:49.1}},{t:this.shape_108,p:{y:47.2}},{t:this.shape_105,p:{y:45.4}},{t:this.shape_104,p:{y:43.5}},{t:this.shape_101,p:{y:41.6}},{t:this.shape_100,p:{y:39.7}},{t:this.shape_97,p:{y:37.8}},{t:this.shape_96,p:{y:35.9}},{t:this.shape_93,p:{y:34}},{t:this.shape_92,p:{y:32.2}},{t:this.shape_89,p:{y:30.3}},{t:this.shape_88,p:{y:28.4}},{t:this.shape_85,p:{y:26.5}},{t:this.shape_84,p:{y:24.7}},{t:this.shape_81,p:{y:22.8}},{t:this.shape_80,p:{y:20.9}},{t:this.shape_77,p:{y:19}},{t:this.shape_76,p:{y:17.1}},{t:this.shape_73,p:{y:15.2}},{t:this.shape_72,p:{y:13.3}},{t:this.shape_69,p:{y:-13.3}},{t:this.shape_68,p:{y:-15.1}},{t:this.shape_65,p:{y:-17}},{t:this.shape_64,p:{y:-18.9}},{t:this.shape_61,p:{y:-20.8}},{t:this.shape_60,p:{y:-22.7}},{t:this.shape_57,p:{y:-24.6}},{t:this.shape_56,p:{y:-26.5}},{t:this.shape_53,p:{y:-28.3}},{t:this.shape_52,p:{y:-30.2}},{t:this.shape_49,p:{y:-32.1}},{t:this.shape_48,p:{y:-34}},{t:this.shape_45,p:{y:-35.9}},{t:this.shape_44,p:{y:-37.8}},{t:this.shape_41,p:{y:-39.6}},{t:this.shape_40,p:{y:-41.5}},{t:this.shape_37,p:{y:-43.4}},{t:this.shape_36,p:{y:-45.3}},{t:this.shape_33,p:{y:-47.2}},{t:this.shape_32,p:{y:-49.1}},{t:this.shape_29,p:{y:-50.9}},{t:this.shape_28,p:{y:-52.8}},{t:this.shape_25,p:{y:-54.7}},{t:this.shape_24,p:{y:-56.6}},{t:this.shape_21,p:{y:-58.5}},{t:this.shape_20,p:{y:-60.4}},{t:this.shape_17,p:{y:-62.3}},{t:this.shape_16,p:{y:-64.1}}]},1).to({state:[{t:this.shape_131,p:{x:-66.4}},{t:this.shape_130,p:{x:-64.5}},{t:this.shape_127,p:{x:-62.7}},{t:this.shape_126,p:{x:-60.8}},{t:this.shape_123,p:{x:-58.9}},{t:this.shape_122,p:{x:-57}},{t:this.shape_119,p:{x:-55.1}},{t:this.shape_118,p:{x:-53.3}},{t:this.shape_115,p:{x:-51.4}},{t:this.shape_114,p:{x:-49.5}},{t:this.shape_111,p:{x:-47.6}},{t:this.shape_110,p:{x:-45.7}},{t:this.shape_107,p:{x:-43.8}},{t:this.shape_106,p:{x:-41.9}},{t:this.shape_103,p:{x:-40.1}},{t:this.shape_102,p:{x:-38.2}},{t:this.shape_99,p:{x:-36.3}},{t:this.shape_98,p:{x:-34.4}},{t:this.shape_95,p:{x:-32.5}},{t:this.shape_94,p:{x:-30.6}},{t:this.shape_91,p:{x:-28.8}},{t:this.shape_90,p:{x:-26.9}},{t:this.shape_87,p:{x:-25}},{t:this.shape_86,p:{x:-23.1}},{t:this.shape_83,p:{x:-21.2}},{t:this.shape_82,p:{x:-19.3}},{t:this.shape_79,p:{x:-17.5}},{t:this.shape_78,p:{x:-15.6}},{t:this.shape_75,p:{x:-13.7}},{t:this.shape_74,p:{x:12.9}},{t:this.shape_71,p:{x:14.8}},{t:this.shape_70,p:{x:16.7}},{t:this.shape_67,p:{x:18.6}},{t:this.shape_66,p:{x:20.5}},{t:this.shape_63,p:{x:22.3}},{t:this.shape_62,p:{x:24.2}},{t:this.shape_59,p:{x:26.1}},{t:this.shape_58,p:{x:28}},{t:this.shape_55,p:{x:29.9}},{t:this.shape_54,p:{x:31.8}},{t:this.shape_51,p:{x:33.7}},{t:this.shape_50,p:{x:35.5}},{t:this.shape_47,p:{x:37.4}},{t:this.shape_46,p:{x:39.3}},{t:this.shape_43,p:{x:41.2}},{t:this.shape_42,p:{x:43.1}},{t:this.shape_39,p:{x:44.9}},{t:this.shape_38,p:{x:46.8}},{t:this.shape_35,p:{x:48.7}},{t:this.shape_34,p:{x:50.6}},{t:this.shape_31,p:{x:52.5}},{t:this.shape_30,p:{x:54.4}},{t:this.shape_27,p:{x:56.3}},{t:this.shape_26,p:{x:58.1}},{t:this.shape_23,p:{x:60}},{t:this.shape_22,p:{x:61.9}},{t:this.shape_19,p:{x:63.8}},{t:this.shape_18,p:{x:65.7}},{t:this.shape_129,p:{y:66.1}},{t:this.shape_128,p:{y:64.2}},{t:this.shape_125,p:{y:62.3}},{t:this.shape_124,p:{y:60.4}},{t:this.shape_121,p:{y:58.5}},{t:this.shape_120,p:{y:56.7}},{t:this.shape_117,p:{y:54.8}},{t:this.shape_116,p:{y:52.9}},{t:this.shape_113,p:{y:51}},{t:this.shape_112,p:{y:49.1}},{t:this.shape_109,p:{y:47.2}},{t:this.shape_108,p:{y:45.4}},{t:this.shape_105,p:{y:43.5}},{t:this.shape_104,p:{y:41.6}},{t:this.shape_101,p:{y:39.7}},{t:this.shape_100,p:{y:37.8}},{t:this.shape_97,p:{y:35.9}},{t:this.shape_96,p:{y:34}},{t:this.shape_93,p:{y:32.2}},{t:this.shape_92,p:{y:30.3}},{t:this.shape_89,p:{y:28.4}},{t:this.shape_88,p:{y:26.5}},{t:this.shape_85,p:{y:24.7}},{t:this.shape_84,p:{y:22.8}},{t:this.shape_81,p:{y:20.9}},{t:this.shape_80,p:{y:19}},{t:this.shape_77,p:{y:17.1}},{t:this.shape_76,p:{y:15.2}},{t:this.shape_73,p:{y:13.3}},{t:this.shape_72,p:{y:-13.3}},{t:this.shape_69,p:{y:-15.1}},{t:this.shape_68,p:{y:-17}},{t:this.shape_65,p:{y:-18.9}},{t:this.shape_64,p:{y:-20.8}},{t:this.shape_61,p:{y:-22.7}},{t:this.shape_60,p:{y:-24.6}},{t:this.shape_57,p:{y:-26.5}},{t:this.shape_56,p:{y:-28.3}},{t:this.shape_53,p:{y:-30.2}},{t:this.shape_52,p:{y:-32.1}},{t:this.shape_49,p:{y:-34}},{t:this.shape_48,p:{y:-35.9}},{t:this.shape_45,p:{y:-37.8}},{t:this.shape_44,p:{y:-39.6}},{t:this.shape_41,p:{y:-41.5}},{t:this.shape_40,p:{y:-43.4}},{t:this.shape_37,p:{y:-45.3}},{t:this.shape_36,p:{y:-47.2}},{t:this.shape_33,p:{y:-49.1}},{t:this.shape_32,p:{y:-50.9}},{t:this.shape_29,p:{y:-52.8}},{t:this.shape_28,p:{y:-54.7}},{t:this.shape_25,p:{y:-56.6}},{t:this.shape_24,p:{y:-58.5}},{t:this.shape_21,p:{y:-60.4}},{t:this.shape_20,p:{y:-62.3}},{t:this.shape_17,p:{y:-64.1}},{t:this.shape_16,p:{y:-66}}]},1).to({state:[{t:this.shape_135,p:{x:-68.3}},{t:this.shape_134,p:{x:-66.4}},{t:this.shape_131,p:{x:-64.5}},{t:this.shape_130,p:{x:-62.7}},{t:this.shape_127,p:{x:-60.8}},{t:this.shape_126,p:{x:-58.9}},{t:this.shape_123,p:{x:-57}},{t:this.shape_122,p:{x:-55.1}},{t:this.shape_119,p:{x:-53.3}},{t:this.shape_118,p:{x:-51.4}},{t:this.shape_115,p:{x:-49.5}},{t:this.shape_114,p:{x:-47.6}},{t:this.shape_111,p:{x:-45.7}},{t:this.shape_110,p:{x:-43.8}},{t:this.shape_107,p:{x:-41.9}},{t:this.shape_106,p:{x:-40.1}},{t:this.shape_103,p:{x:-38.2}},{t:this.shape_102,p:{x:-36.3}},{t:this.shape_99,p:{x:-34.4}},{t:this.shape_98,p:{x:-32.5}},{t:this.shape_95,p:{x:-30.6}},{t:this.shape_94,p:{x:-28.8}},{t:this.shape_91,p:{x:-26.9}},{t:this.shape_90,p:{x:-25}},{t:this.shape_87,p:{x:-23.1}},{t:this.shape_86,p:{x:-21.2}},{t:this.shape_83,p:{x:-19.3}},{t:this.shape_82,p:{x:-17.5}},{t:this.shape_79,p:{x:-15.6}},{t:this.shape_78,p:{x:-13.7}},{t:this.shape_75,p:{x:12.9}},{t:this.shape_74,p:{x:14.8}},{t:this.shape_71,p:{x:16.7}},{t:this.shape_70,p:{x:18.6}},{t:this.shape_67,p:{x:20.5}},{t:this.shape_66,p:{x:22.3}},{t:this.shape_63,p:{x:24.2}},{t:this.shape_62,p:{x:26.1}},{t:this.shape_59,p:{x:28}},{t:this.shape_58,p:{x:29.9}},{t:this.shape_55,p:{x:31.8}},{t:this.shape_54,p:{x:33.7}},{t:this.shape_51,p:{x:35.5}},{t:this.shape_50,p:{x:37.4}},{t:this.shape_47,p:{x:39.3}},{t:this.shape_46,p:{x:41.2}},{t:this.shape_43,p:{x:43.1}},{t:this.shape_42,p:{x:44.9}},{t:this.shape_39,p:{x:46.8}},{t:this.shape_38,p:{x:48.7}},{t:this.shape_35,p:{x:50.6}},{t:this.shape_34,p:{x:52.5}},{t:this.shape_31,p:{x:54.4}},{t:this.shape_30,p:{x:56.3}},{t:this.shape_27,p:{x:58.1}},{t:this.shape_26,p:{x:60}},{t:this.shape_23,p:{x:61.9}},{t:this.shape_22,p:{x:63.8}},{t:this.shape_19,p:{x:65.7}},{t:this.shape_18,p:{x:67.6}},{t:this.shape_133,p:{y:68}},{t:this.shape_132,p:{y:66.1}},{t:this.shape_129,p:{y:64.2}},{t:this.shape_128,p:{y:62.3}},{t:this.shape_125,p:{y:60.4}},{t:this.shape_124,p:{y:58.5}},{t:this.shape_121,p:{y:56.7}},{t:this.shape_120,p:{y:54.8}},{t:this.shape_117,p:{y:52.9}},{t:this.shape_116,p:{y:51}},{t:this.shape_113,p:{y:49.1}},{t:this.shape_112,p:{y:47.2}},{t:this.shape_109,p:{y:45.4}},{t:this.shape_108,p:{y:43.5}},{t:this.shape_105,p:{y:41.6}},{t:this.shape_104,p:{y:39.7}},{t:this.shape_101,p:{y:37.8}},{t:this.shape_100,p:{y:35.9}},{t:this.shape_97,p:{y:34}},{t:this.shape_96,p:{y:32.2}},{t:this.shape_93,p:{y:30.3}},{t:this.shape_92,p:{y:28.4}},{t:this.shape_89,p:{y:26.5}},{t:this.shape_88,p:{y:24.7}},{t:this.shape_85,p:{y:22.8}},{t:this.shape_84,p:{y:20.9}},{t:this.shape_81,p:{y:19}},{t:this.shape_80,p:{y:17.1}},{t:this.shape_77,p:{y:15.2}},{t:this.shape_76,p:{y:13.3}},{t:this.shape_73,p:{y:-13.3}},{t:this.shape_72,p:{y:-15.1}},{t:this.shape_69,p:{y:-17}},{t:this.shape_68,p:{y:-18.9}},{t:this.shape_65,p:{y:-20.8}},{t:this.shape_64,p:{y:-22.7}},{t:this.shape_61,p:{y:-24.6}},{t:this.shape_60,p:{y:-26.5}},{t:this.shape_57,p:{y:-28.3}},{t:this.shape_56,p:{y:-30.2}},{t:this.shape_53,p:{y:-32.1}},{t:this.shape_52,p:{y:-34}},{t:this.shape_49,p:{y:-35.9}},{t:this.shape_48,p:{y:-37.8}},{t:this.shape_45,p:{y:-39.6}},{t:this.shape_44,p:{y:-41.5}},{t:this.shape_41,p:{y:-43.4}},{t:this.shape_40,p:{y:-45.3}},{t:this.shape_37,p:{y:-47.2}},{t:this.shape_36,p:{y:-49.1}},{t:this.shape_33,p:{y:-50.9}},{t:this.shape_32,p:{y:-52.8}},{t:this.shape_29,p:{y:-54.7}},{t:this.shape_28,p:{y:-56.6}},{t:this.shape_25,p:{y:-58.5}},{t:this.shape_24,p:{y:-60.4}},{t:this.shape_21,p:{y:-62.3}},{t:this.shape_20,p:{y:-64.1}},{t:this.shape_17,p:{y:-66}},{t:this.shape_16,p:{y:-67.9}}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_135,p:{x:-66.4}},{t:this.shape_134,p:{x:-64.5}},{t:this.shape_131,p:{x:-62.7}},{t:this.shape_130,p:{x:-60.8}},{t:this.shape_127,p:{x:-58.9}},{t:this.shape_126,p:{x:-57}},{t:this.shape_123,p:{x:-55.1}},{t:this.shape_122,p:{x:-53.3}},{t:this.shape_119,p:{x:-51.4}},{t:this.shape_118,p:{x:-49.5}},{t:this.shape_115,p:{x:-47.6}},{t:this.shape_114,p:{x:-45.7}},{t:this.shape_111,p:{x:-43.8}},{t:this.shape_110,p:{x:-41.9}},{t:this.shape_107,p:{x:-40.1}},{t:this.shape_106,p:{x:-38.2}},{t:this.shape_103,p:{x:-36.3}},{t:this.shape_102,p:{x:-34.4}},{t:this.shape_99,p:{x:-32.5}},{t:this.shape_98,p:{x:-30.6}},{t:this.shape_95,p:{x:-28.8}},{t:this.shape_94,p:{x:-26.9}},{t:this.shape_91,p:{x:-25}},{t:this.shape_90,p:{x:-23.1}},{t:this.shape_87,p:{x:-21.2}},{t:this.shape_86,p:{x:-19.3}},{t:this.shape_83,p:{x:-17.5}},{t:this.shape_82,p:{x:-15.6}},{t:this.shape_79,p:{x:-13.7}},{t:this.shape_78,p:{x:12.9}},{t:this.shape_75,p:{x:14.8}},{t:this.shape_74,p:{x:16.7}},{t:this.shape_71,p:{x:18.6}},{t:this.shape_70,p:{x:20.5}},{t:this.shape_67,p:{x:22.3}},{t:this.shape_66,p:{x:24.2}},{t:this.shape_63,p:{x:26.1}},{t:this.shape_62,p:{x:28}},{t:this.shape_59,p:{x:29.9}},{t:this.shape_58,p:{x:31.8}},{t:this.shape_55,p:{x:33.7}},{t:this.shape_54,p:{x:35.5}},{t:this.shape_51,p:{x:37.4}},{t:this.shape_50,p:{x:39.3}},{t:this.shape_47,p:{x:41.2}},{t:this.shape_46,p:{x:43.1}},{t:this.shape_43,p:{x:44.9}},{t:this.shape_42,p:{x:46.8}},{t:this.shape_39,p:{x:48.7}},{t:this.shape_38,p:{x:50.6}},{t:this.shape_35,p:{x:52.5}},{t:this.shape_34,p:{x:54.4}},{t:this.shape_31,p:{x:56.3}},{t:this.shape_30,p:{x:58.1}},{t:this.shape_27,p:{x:60}},{t:this.shape_26,p:{x:61.9}},{t:this.shape_23,p:{x:63.8}},{t:this.shape_22,p:{x:65.7}},{t:this.shape_19,p:{x:67.6}},{t:this.shape_18,p:{x:69.4}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_133,p:{y:66.1}},{t:this.shape_132,p:{y:64.2}},{t:this.shape_129,p:{y:62.3}},{t:this.shape_128,p:{y:60.4}},{t:this.shape_125,p:{y:58.5}},{t:this.shape_124,p:{y:56.7}},{t:this.shape_121,p:{y:54.8}},{t:this.shape_120,p:{y:52.9}},{t:this.shape_117,p:{y:51}},{t:this.shape_116,p:{y:49.1}},{t:this.shape_113,p:{y:47.2}},{t:this.shape_112,p:{y:45.4}},{t:this.shape_109,p:{y:43.5}},{t:this.shape_108,p:{y:41.6}},{t:this.shape_105,p:{y:39.7}},{t:this.shape_104,p:{y:37.8}},{t:this.shape_101,p:{y:35.9}},{t:this.shape_100,p:{y:34}},{t:this.shape_97,p:{y:32.2}},{t:this.shape_96,p:{y:30.3}},{t:this.shape_93,p:{y:28.4}},{t:this.shape_92,p:{y:26.5}},{t:this.shape_89,p:{y:24.7}},{t:this.shape_88,p:{y:22.8}},{t:this.shape_85,p:{y:20.9}},{t:this.shape_84,p:{y:19}},{t:this.shape_81,p:{y:17.1}},{t:this.shape_80,p:{y:15.2}},{t:this.shape_77,p:{y:13.3}},{t:this.shape_76,p:{y:-13.3}},{t:this.shape_73,p:{y:-15.1}},{t:this.shape_72,p:{y:-17}},{t:this.shape_69,p:{y:-18.9}},{t:this.shape_68,p:{y:-20.8}},{t:this.shape_65,p:{y:-22.7}},{t:this.shape_64,p:{y:-24.6}},{t:this.shape_61,p:{y:-26.5}},{t:this.shape_60,p:{y:-28.3}},{t:this.shape_57,p:{y:-30.2}},{t:this.shape_56,p:{y:-32.1}},{t:this.shape_53,p:{y:-34}},{t:this.shape_52,p:{y:-35.9}},{t:this.shape_49,p:{y:-37.8}},{t:this.shape_48,p:{y:-39.6}},{t:this.shape_45,p:{y:-41.5}},{t:this.shape_44,p:{y:-43.4}},{t:this.shape_41,p:{y:-45.3}},{t:this.shape_40,p:{y:-47.2}},{t:this.shape_37,p:{y:-49.1}},{t:this.shape_36,p:{y:-50.9}},{t:this.shape_33,p:{y:-52.8}},{t:this.shape_32,p:{y:-54.7}},{t:this.shape_29,p:{y:-56.6}},{t:this.shape_28,p:{y:-58.5}},{t:this.shape_25,p:{y:-60.4}},{t:this.shape_24,p:{y:-62.3}},{t:this.shape_21,p:{y:-64.1}},{t:this.shape_20,p:{y:-66}},{t:this.shape_17,p:{y:-67.9}},{t:this.shape_16,p:{y:-69.8}}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_135,p:{x:-66.4}},{t:this.shape_134,p:{x:-64.5}},{t:this.shape_131,p:{x:-62.7}},{t:this.shape_130,p:{x:-60.8}},{t:this.shape_127,p:{x:-58.9}},{t:this.shape_126,p:{x:-57}},{t:this.shape_123,p:{x:-55.1}},{t:this.shape_122,p:{x:-53.3}},{t:this.shape_119,p:{x:-51.4}},{t:this.shape_118,p:{x:-49.5}},{t:this.shape_115,p:{x:-47.6}},{t:this.shape_114,p:{x:-45.7}},{t:this.shape_111,p:{x:-43.8}},{t:this.shape_110,p:{x:-41.9}},{t:this.shape_107,p:{x:-40.1}},{t:this.shape_106,p:{x:-38.2}},{t:this.shape_103,p:{x:-36.3}},{t:this.shape_102,p:{x:-34.4}},{t:this.shape_99,p:{x:-32.5}},{t:this.shape_98,p:{x:-30.6}},{t:this.shape_95,p:{x:-28.8}},{t:this.shape_94,p:{x:-26.9}},{t:this.shape_91,p:{x:-25}},{t:this.shape_90,p:{x:-23.1}},{t:this.shape_87,p:{x:-21.2}},{t:this.shape_86,p:{x:-19.3}},{t:this.shape_83,p:{x:-17.5}},{t:this.shape_82,p:{x:-15.6}},{t:this.shape_79,p:{x:-13.7}},{t:this.shape_78,p:{x:12.9}},{t:this.shape_75,p:{x:14.8}},{t:this.shape_74,p:{x:16.7}},{t:this.shape_71,p:{x:18.6}},{t:this.shape_70,p:{x:20.5}},{t:this.shape_67,p:{x:22.3}},{t:this.shape_66,p:{x:24.2}},{t:this.shape_63,p:{x:26.1}},{t:this.shape_62,p:{x:28}},{t:this.shape_59,p:{x:29.9}},{t:this.shape_58,p:{x:31.8}},{t:this.shape_55,p:{x:33.7}},{t:this.shape_54,p:{x:35.5}},{t:this.shape_51,p:{x:37.4}},{t:this.shape_50,p:{x:39.3}},{t:this.shape_47,p:{x:41.2}},{t:this.shape_46,p:{x:43.1}},{t:this.shape_43,p:{x:44.9}},{t:this.shape_42,p:{x:46.8}},{t:this.shape_39,p:{x:48.7}},{t:this.shape_38,p:{x:50.6}},{t:this.shape_35,p:{x:52.5}},{t:this.shape_34,p:{x:54.4}},{t:this.shape_31,p:{x:56.3}},{t:this.shape_30,p:{x:58.1}},{t:this.shape_27,p:{x:60}},{t:this.shape_26,p:{x:61.9}},{t:this.shape_23,p:{x:63.8}},{t:this.shape_22,p:{x:65.7}},{t:this.shape_19,p:{x:67.6}},{t:this.shape_18,p:{x:69.4}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_133,p:{y:66.1}},{t:this.shape_132,p:{y:64.2}},{t:this.shape_129,p:{y:62.3}},{t:this.shape_128,p:{y:60.4}},{t:this.shape_125,p:{y:58.5}},{t:this.shape_124,p:{y:56.7}},{t:this.shape_121,p:{y:54.8}},{t:this.shape_120,p:{y:52.9}},{t:this.shape_117,p:{y:51}},{t:this.shape_116,p:{y:49.1}},{t:this.shape_113,p:{y:47.2}},{t:this.shape_112,p:{y:45.4}},{t:this.shape_109,p:{y:43.5}},{t:this.shape_108,p:{y:41.6}},{t:this.shape_105,p:{y:39.7}},{t:this.shape_104,p:{y:37.8}},{t:this.shape_101,p:{y:35.9}},{t:this.shape_100,p:{y:34}},{t:this.shape_97,p:{y:32.2}},{t:this.shape_96,p:{y:30.3}},{t:this.shape_93,p:{y:28.4}},{t:this.shape_92,p:{y:26.5}},{t:this.shape_89,p:{y:24.7}},{t:this.shape_88,p:{y:22.8}},{t:this.shape_85,p:{y:20.9}},{t:this.shape_84,p:{y:19}},{t:this.shape_81,p:{y:17.1}},{t:this.shape_80,p:{y:15.2}},{t:this.shape_77,p:{y:13.3}},{t:this.shape_76,p:{y:-13.3}},{t:this.shape_73,p:{y:-15.1}},{t:this.shape_72,p:{y:-17}},{t:this.shape_69,p:{y:-18.9}},{t:this.shape_68,p:{y:-20.8}},{t:this.shape_65,p:{y:-22.7}},{t:this.shape_64,p:{y:-24.6}},{t:this.shape_61,p:{y:-26.5}},{t:this.shape_60,p:{y:-28.3}},{t:this.shape_57,p:{y:-30.2}},{t:this.shape_56,p:{y:-32.1}},{t:this.shape_53,p:{y:-34}},{t:this.shape_52,p:{y:-35.9}},{t:this.shape_49,p:{y:-37.8}},{t:this.shape_48,p:{y:-39.6}},{t:this.shape_45,p:{y:-41.5}},{t:this.shape_44,p:{y:-43.4}},{t:this.shape_41,p:{y:-45.3}},{t:this.shape_40,p:{y:-47.2}},{t:this.shape_37,p:{y:-49.1}},{t:this.shape_36,p:{y:-50.9}},{t:this.shape_33,p:{y:-52.8}},{t:this.shape_32,p:{y:-54.7}},{t:this.shape_29,p:{y:-56.6}},{t:this.shape_28,p:{y:-58.5}},{t:this.shape_25,p:{y:-60.4}},{t:this.shape_24,p:{y:-62.3}},{t:this.shape_21,p:{y:-64.1}},{t:this.shape_20,p:{y:-66}},{t:this.shape_17,p:{y:-67.9}},{t:this.shape_16,p:{y:-69.8}}]},1).wait(17));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_34 = new cjs.Graphics().p("AhDL0QhNgGhHgWQhIgVhEgkIgYgOIgigVQgEgNgFgTIgLhFIgDgkIAAg9IgaAAQgXABgjgDQgfgDgcgFIg3gMIgkg8QgihBgXhKQgWhKgGhLIgChVIACgxQAGhLAWhKQAXhKAihBIAOgZIAWgiIAggIIAggGIBZgJIAtAAIgBgZQAAgWADgkQADgcAFggIANg3IAigVIAYgOQBBgjBLgWQBJgWBLgGIBDgEIBEAEQBLAGBJAWQBMAWBAAjIAYAOIAjAVIAIAgIAHAgIAEAlQACALABAZIABAgIAAAdIAZAAQAWAAAlACQAcADAfAFIA3ANIAVAiIAOAZQAjBDAWBIQAVBHAHBOIACBqIgCAcQgHBNgVBIQgVBJgkBCIgOAZIgVAjIggAHIggAHIgmAFIgkACIg8ABIAAAZQABAYgEAjQgDAggEAbIgNA3IgjAVIgYAOQhDAkhJAVQhHAWhNAGIgcADgAmnHkIACAkIAFAkIAFAgIAHAgIAjAVIAXANQBAAiBJAWQBHAVBJAGIBTADIAwgDQBKgGBHgVQBJgWA/giIAYgNIAigVIAHggIAFggIAFgkQACgQAAgUIAAg8IA8ABQAUgBAQgCIAkgEIAggGQATgDANgEIAUgiIAOgYQAig+AWhKQAVhHAGhJIAChpIgCgbQgGhJgVhHQgWhJgig/IgOgYIgUgiIgggHIgggGIgkgEIhggCIAAg8QAAgUgCgQIgFgkIgFggIgHggIgigUIgYgOQhAgjhIgVQhGgVhLgGIhogCIgbACQhJAGhHAVQhIAVhBAjIgXAOIgjAUIgMBAIgFAkIgCAkIABA8Ig9gBIgkADIgkAEIg/ANIgKAQIgKASIgOAYQgjBBgVBHQgVBHgHBJIgBBoIABAcQAHBKAVBGQAVBIAjBAQAEAJAKAPIAKATIAKAPIAgAHIAfAGIAkAEQAQACAUABIAfAAIAegBg");
	var mask_graphics_35 = new cjs.Graphics().p("AhDL0QhNgGhHgWQhIgVhEgkIgYgOIgigVQgEgNgFgTIgLhFIgDgkIAAg9IgaAAQgXABgjgDQgfgDgcgFIg3gMIgkg8QgihBgXhKQgWhKgGhLIgChVIACgxQAGhLAWhKQAXhKAihBIAOgZIAWgiIAggIIAggGIBZgJIAtAAIgBgZQAAgWADgkQADgcAFggIANg3IAigVIAYgOQBBgjBLgWQBJgWBLgGIBDgEIBEAEQBLAGBJAWQBMAWBAAjIAYAOIAjAVIAIAgIAHAgIAEAlQACALABAZIABAgIAAAdIAZAAQAWAAAlACQAcADAfAFIA3ANIAVAiIAOAZQAjBDAWBIQAVBHAHBOIACBqIgCAcQgHBNgVBIQgVBJgkBCIgOAZIgVAjIggAHIggAHIgmAFIgkACIg8ABIAAAZQABAYgEAjQgDAggEAbIgNA3IgjAVIgYAOQhDAkhJAVQhHAWhNAGIgcADgAmnHkIACAkIAFAkIAFAgIAHAgIAjAVIAXANQBAAiBJAWQBHAVBJAGIBTADIAwgDQBKgGBHgVQBJgWA/giIAYgNIAigVIAHggIAFggIAFgkQACgQAAgUIAAg8IA8ABQAUgBAQgCIAkgEIAggGQATgDANgEIAUgiIAOgYQAig+AWhKQAVhHAGhJIAChpIgCgbQgGhJgVhHQgWhJgig/IgOgYIgUgiIgggHIgggGIgkgEIhggCIAAg8QAAgUgCgQIgFgkIgFggIgHggIgigUIgYgOQhAgjhIgVQhGgVhLgGIhogCIgbACQhJAGhHAVQhIAVhBAjIgXAOIgjAUIgMBAIgFAkIgCAkIABA8Ig9gBIgkADIgkAEIg/ANIgKAQIgYAqQgjBBgVBHQgVBHgHBJIgBBoIABAcQAHBKAVBGQAVBIAjBAQAEAJAKAPIAKATIAKAPIAgAHIAfAGIAkAEQAQACAUABIAfAAIAegBg");
	var mask_graphics_49 = new cjs.Graphics().p("AhDL0QhNgGhHgWQhIgVhEgkIgYgOIgigVQgEgNgFgTIgLhFIgDgkIAAg9IgaAAQgXABgjgDQgfgDgcgFIg3gMIgkg8QgihBgXhKQgWhKgGhLIgChVIACgxQAGhLAWhKQAXhKAihBIAOgZIAWgiIAggIIAggGIBZgJIAtAAIgBgZQAAgWADgkQADgcAFggIANg3IAigVIAYgOQBBgjBLgWQBJgWBLgGIBDgEIBEAEQBLAGBJAWQBMAWBAAjIAYAOIAjAVIAIAgIAHAgIAEAlQACALABAZIABAgIAAAdIAZAAQAWAAAlACQAcADAfAFIA3ANIAVAiIAOAZQAjBDAWBIQAVBHAHBOIACBqIgCAcQgHBNgVBIQgVBJgkBCIgOAZIgVAjIggAHIggAHIgmAFIgkACIg8ABIAAAZQABAYgEAjQgDAggEAbIgNA3IgjAVIgYAOQhDAkhJAVQhHAWhNAGIgcADgAmnHkIACAkIAFAkIAFAgIAHAgIAjAVIAXANQBAAiBJAWQBHAVBJAGIBTADIAwgDQBKgGBHgVQBJgWA/giIAYgNIAigVIAHggIAFggIAFgkQACgQAAgUIAAg8IA8ABQAUgBAQgCIAkgEIAggGQATgDANgEIAUgiIAOgYQAig+AWhKQAVhHAGhJIAChpIgCgbQgGhJgVhHQgWhJgig/IgOgYIgUgiIgggHIgggGIgkgEIhggCIAAg8QAAgUgCgQIgFgkIgFggIgHggIgigUIgYgOQhAgjhIgVQhGgVhLgGIhogCIgbACQhJAGhHAVQhIAVhBAjIgXAOIgjAUIgMBAIgFAkIgCAkIABA8Ig9gBIgkADIgkAEIg/ANIgKAQIgKASIgOAYQgjBBgVBHQgVBHgHBJIgBBoIABAcQAHBKAVBGQAVBIAjBAQAEAJAKAPIAKATIAKAPIAgAHIAfAGIAkAEQAQACAUABIAfAAIAegBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_graphics_34,x:0,y:0}).wait(1).to({graphics:mask_graphics_35,x:0,y:0}).wait(14).to({graphics:mask_graphics_49,x:0,y:0}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AjiAyQAAhlBJhKQBKhKBlAAQA/ABA3AdQA1AcAiAzIgKAHQghgvgygbQg1gcg7AAQhgAAhFBFQhGBGAABgQAABPAwA/IgLAHQgyhCAAhTg");
	this.shape.setTransform(22.8,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,40);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgXgQIABgBIAuAiIgBABg");
	this.shape.setTransform(2.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.9,3.7);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("Ah0BVQgXgjAAgrQAAg6ArgrQAqgrA7AAQAtAAAlAZQAkAaARApIgMAEQgPglghgWQgigYgpABQg1gBgnAnQgnAoAAA1QAAAnAVAgQAUAgAiAQIgFALQgmgSgWgjg");
	this.shape.setTransform(14,13.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.1,27.7);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AggAhQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAATgOAOQgOAOgTAAQgSAAgOgOg");
	this.shape.setTransform(4.7,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.5,9.5);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgCgLIAEAAIABAWIgEABg");
	this.shape.setTransform(0.4,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,2.5);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgCAFIABgKIAEAAIgBAKg");
	this.shape.setTransform(0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.7,1.2);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgDAIIADgRIAEABIgDARg");
	this.shape.setTransform(0.4,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,2);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgEAIIAEgQIAEABIgDAQg");
	this.shape.setTransform(0.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,1.9);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgDAEIADgJIAEACIgDAJg");
	this.shape.setTransform(0.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,1.4);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgFAHIAFgPIAGACIgGAPg");
	this.shape.setTransform(0.6,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.3,1.9);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgCAAIACgCIADACIgCADg");
	this.shape.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,0.6);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgIAIIALgTIAFAEIgKATg");
	this.shape.setTransform(0.9,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.4);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgNASIAagkIABABIgaAkg");
	this.shape.setTransform(1.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgGADIAIgKIAFAEIgJALg");
	this.shape.setTransform(0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,1.6);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgDAAIADgDIAEADIgEAEg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgEAAIAFgEIAEAEIgFAFg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgHABIAMgHIADAGIgMAHg");
	this.shape.setTransform(0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.7,1.4);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgDAAIAEgDIADAEIgEADg");
	this.shape.setTransform(0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,0.8);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgLAAIAVgFIACAFIgVAGg");
	this.shape.setTransform(1.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,1.4);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgLgBIAWgBIABAEIgXABg");
	this.shape.setTransform(1.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,0.8);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgLABIABgEIAWADIgBAEg");
	this.shape.setTransform(1.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,0.9);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgLAAIACgFIAVAFIgCAGg");
	this.shape.setTransform(1.3,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,1.3);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgKgDIAEgFIARAMIgEAFg");
	this.shape.setTransform(1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.3,2);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgKgFIAEgEIAQAOIgEAFg");
	this.shape.setTransform(1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,2.1);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgJgFIAEgFIAPAQIgFAEg");
	this.shape.setTransform(1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.1,2.2);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgHgIIAFgDIAKAUIgGADg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.7,2.5);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgGgIIAFgDIAIAVIgFACg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.5);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgEgJIAEgCIAFAVIgFACg");
	this.shape.setTransform(0.6,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.2,2.5);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgBAMIgBgWIAEgBIABAXg");
	this.shape.setTransform(0.4,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,2.5);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgDALIADgWIAEABIgDAWg");
	this.shape.setTransform(0.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,2.5);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgEALIAEgWIAFACIgFAVg");
	this.shape.setTransform(0.6,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,2.5);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgHAJIAJgUIAGADIgJAUg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.7,2.5);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgMAUIAXgnIACABIgYAmg");
	this.shape.setTransform(1.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,4.2);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgNASIAagkIABABIgaAkg");
	this.shape.setTransform(1.5,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgQASIAgglIABABIggAlg");
	this.shape.setTransform(1.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,4);


(lib.Path_22_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgTAPIAmgeIABABIgmAeg");
	this.shape.setTransform(2.1,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.1,3.4);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AABAhIgDhAIACgBIADBBg");
	this.shape.setTransform(0.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.6,6.7);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgYAPIAwgfIABACIgwAfg");
	this.shape.setTransform(2.5,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.1,3.5);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgWALIAtgXIAAACIgsAXg");
	this.shape.setTransform(2.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,2.7);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgVAJIAqgSIABACIgqARg");
	this.shape.setTransform(2.2,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.5,2.1);


(lib.Path_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgVAGIArgNIAAABIgrAOg");
	this.shape.setTransform(2.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,1.7);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgDAgIAFhAIACAAIgFBAg");
	this.shape.setTransform(0.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,6.6);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgWAFIAtgKIAAACIgsAJg");
	this.shape.setTransform(2.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,1.3);


(lib.Path_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgaADIA1gHIAAACIg1AGg");
	this.shape.setTransform(2.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.5,1);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgPgbIABgBIAeA4IgCABg");
	this.shape.setTransform(1.7,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,5.9);


(lib.Path_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgcABIA5gCIAAABIg5ACg");
	this.shape.setTransform(3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,0.6);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgNgcIACgBIAYA6IgBABg");
	this.shape.setTransform(1.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.8,6.1);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgcgBIAAgCIA5AFIAAACg");
	this.shape.setTransform(3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6,0.8);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgWgCIAAgCIAtAIIAAABg");
	this.shape.setTransform(2.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,1.1);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgWgEIABgCIArAMIAAABg");
	this.shape.setTransform(2.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.6,1.5);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgZgIIABgCIAyATIgBABg");
	this.shape.setTransform(2.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,2.2);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgZAUIAygoIABABIgyAog");
	this.shape.setTransform(2.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,4.3);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgXgKIABgBIAuAWIAAABg");
	this.shape.setTransform(2.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.9,2.6);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgWgMIABgBIAsAaIAAABg");
	this.shape.setTransform(2.4,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,3);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3EACE2").s().p("AgCgBIAEgBIABAEIgEABg");
	this.shape.setTransform(0.4,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.7,0.7);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgDgFIAEgCIADANIgEACg");
	this.shape.setTransform(0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,1.6);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgcAOIA4gdIABABIg4Aeg");
	this.shape.setTransform(3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.9,3.3);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7AAAC").s().p("AgtAHIAKgFIANgGQARgNAGgTIADgKIAqAOIgEAKQgMAfgbAUQgHAIgNAGIgKAEg");
	this.shape.setTransform(4.7,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,9.5);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgFgJIAFgCIAGAVIgGACg");
	this.shape.setTransform(0.7,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,2.5);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F10B1D","#1B1B1B"],[0,1],0,0,0,0,0,26.6).s().p("Ai6C7QhOhNAAhuQAAhsBOhOQBNhOBtAAQBtAABOBOQBOBNAABtQAABuhOBNQhOBOhtAAQhtAAhNhOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53.1,53.2);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgGgIIAFgDIAIAVIgFACg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.5);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgLAeIAWg8IABABIgWA8g");
	this.shape.setTransform(1.3,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.6,6.3);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgFgFIAFgDIAGAOIgFADg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgOAdIAcg6IABABIgbA6g");
	this.shape.setTransform(1.6,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.1,6);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7AAAC").s().p("AAAAbQgKgMgRgEIgKgDIALgpIAKADQAaAHAVAUIAHAFIgeAgg");
	this.shape.setTransform(3.9,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.8,6.9);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgGgDIAFgEIAIAMIgEADg");
	this.shape.setTransform(0.8,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,1.7);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape.setTransform(68.6,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(246,173,57,0.984)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_1.setTransform(68.6,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(246,170,60,0.969)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_2.setTransform(68.6,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(246,168,62,0.949)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_3.setTransform(68.6,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(246,166,65,0.933)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_4.setTransform(68.6,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(246,163,68,0.918)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_5.setTransform(68.6,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(246,161,71,0.902)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_6.setTransform(68.6,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(245,159,74,0.882)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_7.setTransform(68.6,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(245,156,76,0.867)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_8.setTransform(68.6,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(245,154,79,0.851)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_9.setTransform(68.6,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(245,152,82,0.831)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_10.setTransform(68.6,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(245,149,85,0.816)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_11.setTransform(68.6,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(245,147,88,0.8)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_12.setTransform(68.6,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(245,145,90,0.784)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_13.setTransform(68.6,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(245,142,93,0.769)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_14.setTransform(68.6,2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(245,140,96,0.749)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_15.setTransform(68.6,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(245,138,99,0.733)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_16.setTransform(68.6,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(245,135,101,0.718)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_17.setTransform(68.6,2.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(245,133,104,0.702)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_18.setTransform(68.6,2.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(244,131,107,0.682)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_19.setTransform(68.6,2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(244,128,110,0.667)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_20.setTransform(68.6,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(244,126,113,0.651)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_21.setTransform(68.6,2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(244,124,115,0.631)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_22.setTransform(68.6,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(244,121,118,0.616)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_23.setTransform(68.6,2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(244,119,121,0.6)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_24.setTransform(68.6,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(244,123,116,0.631)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_25.setTransform(68.6,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(244,126,113,0.647)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_26.setTransform(68.6,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(244,128,110,0.663)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_27.setTransform(68.6,2.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(244,130,108,0.678)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_28.setTransform(68.6,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(244,132,105,0.694)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_29.setTransform(68.6,2.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(245,135,102,0.714)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_30.setTransform(68.6,2.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(245,137,100,0.729)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_31.setTransform(68.6,2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(245,139,97,0.745)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_32.setTransform(68.6,2.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(245,141,94,0.761)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_33.setTransform(68.6,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(245,144,92,0.776)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_34.setTransform(68.6,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(245,146,89,0.792)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_35.setTransform(68.6,2.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(245,148,86,0.808)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_36.setTransform(68.6,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(245,150,83,0.824)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_37.setTransform(68.6,2.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(245,153,81,0.839)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_38.setTransform(68.6,2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(245,155,78,0.855)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_39.setTransform(68.6,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(245,157,75,0.871)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_40.setTransform(68.6,2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(245,159,73,0.886)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_41.setTransform(68.6,2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(246,162,70,0.906)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_42.setTransform(68.6,2.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(246,164,67,0.922)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_43.setTransform(68.6,2.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(246,166,65,0.937)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_44.setTransform(68.6,2.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(246,168,62,0.953)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_45.setTransform(68.6,2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(246,171,59,0.969)").s().p("AqtAUIAfgnIU8AAIgeAng");
	this.shape_46.setTransform(68.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,4.1);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgJgGIAEgEIAPAQIgFAEg");
	this.shape.setTransform(1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.1,2.2);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D87778").s().p("AgWgWIABgBIAsAuIgBABg");
	this.shape.setTransform(2.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,4.9);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7AAAC").s().p("AgUgMIAqACIgBAWIgqABg");
	this.shape.setTransform(2.3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.5,2.8);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,90,117,0.498)").s().p("AkfBrIgegqIFIAAIBHhQIzGAAIg/hbICbAAIAiAvILDAAIAigvIXFAAIgUAaI1UAAIgaAiIOEAAIh6CZg");
	this.shape.setTransform(120.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,21.5);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgRgOIABgBIAiAeIgBABg");
	this.shape.setTransform(1.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.7,3.3);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgSALQANgSARgLIAHAMQgQAHgJARg");
	this.shape.setTransform(1.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AAAA0QAOgagIgdQgGgagVgSIAIgLQAZAVAHAgQAJAfgSAgg");
	this.shape_1.setTransform(14.8,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17,12.4);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgMAdQgGgXAHgWQAHgWAPgQIAFAFQgQAPgFAUQgGAUAFAWQAEANAEALIgDADQgHgKgEgQg");
	this.shape.setTransform(1.6,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AAeAsQAAgNgCgJQgGgWgSgRQgQgQgYgEIABgGQAaAEARASQATASAHAYQADAMgBALg");
	this.shape_1.setTransform(13.8,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AgXADIABgEQATACAQgDIAJgCIACAEQgEACgFAAQgLADgIAAQgKAAgJgCg");
	this.shape_2.setTransform(9.3,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.5,17.4);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(62,172,226,0.6)").s().p("AiZCbQhBhBAAhaQAAhZBBhBQBAhABZAAQBaAABABAQBBBBAABZQAABbhBBAQhABAhaAAQhZAAhAhAgAh/iAQg2A2AABKQAABLA2A2QA1A1BKAAQBLAAA1g1QA2g2AAhLQAAhKg2g2Qg1g1hLAAQhKAAg1A1g");
	this.shape.setTransform(21.9,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,44);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AidCeQhBhCAAhcQAAhbBBhCQBChBBbAAQBcAABCBBQBBBCAABbQAABchBBCQhCBBhcAAQhbAAhChBgAiZiaQhBBBAABZQAABaBBBBQBABABZAAQBaAABAhAQBBhAAAhbQAAhZhBhBQhAhAhaAAQhZAAhABAg");
	this.shape.setTransform(22.4,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,44.8);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("Ah/CBQg2g2AAhLQAAhKA2g2QA1g1BKAAQBLAAA1A1QA2A2AABKQAABLg2A2Qg1A1hLAAQhKAAg1g1gAh8h8Qg1A0AABIQAABKA1A0QA0A0BIAAQBJAAA0g0QA1g0AAhKQAAhIg1g0Qg0g1hJAAQhIAAg0A1g");
	this.shape.setTransform(18.2,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,36.6);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AhDBEQgcgcAAgoQAAgmAcgcQAdgdAmAAQAnAAAcAdQAcAcAAAmQAAAogcAcQgbAcgoAAQgmAAgdgcgAhBhAQgbAbAAAlQAAAmAbAcQAcAbAlAAQAmAAAbgbQAcgcgBgmQABglgcgbQgbgcgmAAQglAAgcAcg");
	this.shape.setTransform(9.6,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.2,19.3);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape.setTransform(1.2,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AD39").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_1.setTransform(1.2,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6AA3C").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_2.setTransform(1.2,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6A83E").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_3.setTransform(1.2,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6A641").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_4.setTransform(1.2,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6A344").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_5.setTransform(1.2,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6A147").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_6.setTransform(1.2,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F59F4A").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_7.setTransform(1.2,32.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F59C4C").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_8.setTransform(1.2,32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F59A4F").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_9.setTransform(1.2,32.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F59852").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_10.setTransform(1.2,32.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F59555").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_11.setTransform(1.2,32.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F59358").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_12.setTransform(1.2,32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5915A").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_13.setTransform(1.2,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F58E5D").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_14.setTransform(1.2,32.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F58C60").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_15.setTransform(1.2,32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F58A63").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_16.setTransform(1.2,32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F58765").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_17.setTransform(1.2,32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F58568").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_18.setTransform(1.2,32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F4836B").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_19.setTransform(1.2,32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4806E").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_20.setTransform(1.2,32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F47E71").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_21.setTransform(1.2,32.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F47C73").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_22.setTransform(1.2,32.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F47976").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_23.setTransform(1.2,32.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F47779").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_24.setTransform(1.2,32.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F47B74").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_25.setTransform(1.2,32.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F4826C").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_26.setTransform(1.2,32.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F48469").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_27.setTransform(1.2,32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F58766").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_28.setTransform(1.2,32.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F58964").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_29.setTransform(1.2,32.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F58B61").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_30.setTransform(1.2,32.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F58D5E").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_31.setTransform(1.2,32.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F5905C").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_32.setTransform(1.2,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F59259").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_33.setTransform(1.2,32.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F59456").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_34.setTransform(1.2,32.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F59653").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_35.setTransform(1.2,32.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F59951").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_36.setTransform(1.2,32.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F59B4E").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_37.setTransform(1.2,32.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F59D4B").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_38.setTransform(1.2,32.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F59F49").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_39.setTransform(1.2,32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F6A246").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_40.setTransform(1.2,32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6A443").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_41.setTransform(1.2,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F6AB3B").s().p("AgKkjIAVgfIAAJmIgVAfg");
	this.shape_42.setTransform(1.2,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.4,64.7);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,90,117,0.498)").s().p("Ag6JJIAaghIAAlTIgDgDIgXAdIAAgiIAaghIAAhKIgDgCIgXAdIAAgiIAaghIAAhIIgDgCIgXAbIAAgfIAagiIAAhJIgDgDIgXAdIAAgiIAaghIAAhJIgDgDIgXAdIAAj5IB1iYIAAAtIhkCDIAAA1IBkiDIAABIIghAqIAAJvIAhgqIAAAVIgsA4IAAq2IgbAlIAAPAIguA8g");
	this.shape.setTransform(6,61.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,123.5);


(lib.top_left_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("2016-12-06 18:22:32.003", "16px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 23;
	this.label.lineWidth = 223;
	this.label.setTransform(111.3,4);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgGAHIAAgFIAIAAIAAgIIAFAAIAAANg");
	this.shape.setTransform(223.3,27.3,4.851,4.851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AgGAHIAAgNIAFAAIAAAIIAIAAIAAAFg");
	this.shape_1.setTransform(3.1,27.3,4.851,4.851);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AgGAHIAAgNIANAAIAAAGIgIAAIAAAHg");
	this.shape_2.setTransform(3.1,3.1,4.851,4.851);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AACAHIAAgHIgIAAIAAgGIANAAIAAANg");
	this.shape_3.setTransform(223.3,3.1,4.851,4.851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#31464B").s().p("AxhCOIAAkbMAjDAAAIAAEbg");
	this.shape_4.setTransform(113.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,227.5,31.6);


(lib.top_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.bg_top();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgzBADIIgBl2MC7hAAAIAAF2g");
	mask.setTransform(873.5,20);

	// 图层 4
	this.txt4 = new cjs.Text("", "12px 'Microsoft YaHei'", "#6A6D76");
	this.txt4.name = "txt4";
	this.txt4.lineHeight = 18;
	this.txt4.lineWidth = 611;
	this.txt4.setTransform(2373.5,10);

	this.txt3 = new cjs.Text("", "12px 'Microsoft YaHei'", "#6A6D76");
	this.txt3.name = "txt3";
	this.txt3.lineHeight = 18;
	this.txt3.lineWidth = 611;
	this.txt3.setTransform(1758.5,10);

	this.txt4.mask = this.txt3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt3},{t:this.txt4}]}).wait(1));

	// 图层 1
	this.txt2 = new cjs.Text("", "12px 'Microsoft YaHei'", "#6A6D76");
	this.txt2.name = "txt2";
	this.txt2.lineHeight = 18;
	this.txt2.lineWidth = 611;
	this.txt2.setTransform(2373.5,10);

	this.txt1 = new cjs.Text("", "12px 'Microsoft YaHei'", "#6A6D76");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 18;
	this.txt1.lineWidth = 611;
	this.txt1.setTransform(1758.5,10);

	this.txt2.mask = this.txt1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt1},{t:this.txt2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,60);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1B1B").s().p("ABhhoQiKhLibgjQibgjieAIIgBgJQCfgICcAjQCdAjCLBMQD5CDChDkIgIAFQigjkj2iAg");
	this.shape.setTransform(51.1,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.3,50.5);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AnVE5IAFgKQCNkID4ijQD2ikEqgdIABAJQkoAcj0CjQj2CiiMEGIgFALg");
	this.shape.setTransform(47.1,31.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.2,63.6);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1B1B").s().p("AhcAIQgTkqB+kSIAIAEQh9ERATEnQATEqCfD/IgIAEQigkBgTksg");
	this.shape.setTransform(9.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.1,113.1);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("ADGDiQiZgjiKhKQj9iGiijpIAHgFQCiDpD7CDQCIBKCYAjQCZAjCbgHIABAJIgxABQiEAAiCgeg");
	this.shape.setTransform(50.9,25.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.9,51.3);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1B1B").s().p("AnaE1QErgZD3ikQD4iiCOkIIAFgLIAIAEIgGAKQiOELj6CjQj5ClktAag");
	this.shape.setTransform(47.6,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.1,63.7);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AgUI1QB/kTgVkpQgUksijkBIAIgEQCkECAUEuQAVEsiAEVg");
	this.shape_3.setTransform(9.8,57);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.7,113.9);


(lib.outside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#95C9DA").s().p("AAegEQg9jUhti+IAegRQBuDBBADYQBADVANDfIgkACQgMjag/jSg");
	this.shape.setTransform(178.2,-53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("AmmB0QDAhxDXhBQDVhDDegQIADAjQjbAQjQBCQjTA/i9Bvg");
	this.shape_1.setTransform(-55.7,-177.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AsmYSIAOggQGPC5G7gMQG+gMGGjOIARAfQmODSnGAMIg2ABQmmAAl9ixgA5VNIQj0l/gvm/IAjgEQAvG3DvF4QDvF3F4DkIgSAeQl/joj0l+gAQpVaQC8iBCbirQCZisBtjLQDGl0AVmfIAjABQgVGnjLF8QhtDOidCvQidCvjACDgA+EjIQACjqA5jkQA6jlBvjOQDJl5FTkAIAVAcQlND7jGFyQhsDMg4DgQg5DggBDlg");
	this.shape_2.setTransform(-0.1,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AovONIgDg0IAAg4IAAg9QAAglADgZIALh7IAQhqQADgWALg1IARhKQAEgSAKgiIAUhCIAMgmQAIgcAFgMIA0iAIBCiIIAyhYQAlg/APgVIA0hMQAdgpAVgYIArg2IBVhgIAWgYQARgSAOgNIBPhJQAJgIAOgLIAYgTIAxgoQAUgRAegUIAygjIAugfIAsgbIBag1IAvBYIh6BHIhEAvQgeATglAdIg4AtQgiAbgFAFIgOANIhhAbIgLAKQgLAKgRATIhfBpQg8BIg+BaQhDBig2BlQhlC/g8DTIgTBPIgOA+QgDALgEAcIgCAOIAgBfIgHBGIgGBHQgDAvABAjIAABTIAJCNIhiALg");
	this.shape_3.setTransform(-149.7,-80.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5A75").s().p("AoyOeIB6hIIBEgvQAegSAlgdIA4gtIAnghIAOgNIBhgbIALgJQAJgJATgUIBfhqQA8hHA+hbQBDhiA2hlQBki9A9jVQAJgjAKgsIAOg9IAHgnIACgPIgghfIAHhFIAGhIQADgvgBgjIAAhTIgJiNIBigLIAHBpIADAyIAAA5IAAA9QAAAkgDAaIgLB7IgQBrQgDAYgLAyIgRBKQgFAZgdBdIgMAmQgIAbgFAOIg0CAIhCCIIgyBXQgmBCgOASIg0BMQgdApgVAYIiACXQgdAhgYAVIhPBJQgJAIgOALIgYATIgxAoQgUAQgdAWIgyAiIgvAgIgsAaIhaA1g");
	this.shape_4.setTransform(149.7,79.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206,-192.3,412.1,384.6);


(lib.light1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("ArWRIIAhgIIAUBXIgkAHgApQQnIAhgKIAaBUIgjALgAnOP7IAggMIAhBSIghANgAlPPGIAfgPIAnBPIggAQgAjVOGIAegSIAtBMIgfASgAhgM8IAcgTIAzBHIgdAVgAAMLqIAagWIA5BDIgbAXgABzKPIAYgYIA/A+IgaAZgADSIrIAXgaIBDA6IgYAbgAEpHBIAUgcIBIA0IgVAdgAF3FPIASgdIBMAuIgTAegAG8DYIAQgfIBPAoIgRAggAH3BbIANgfIBSAgIgOAigAIogkIALggIBUAaIgLAigAJOioIAIghIBWATIgIAjgAJqkvIAFgiIBXAMIgFAkgAJ6m4IACgiIBZAFIgDAkgAJ/pkIBYgCIAAAkIhYABgAJ2rtIBYgKIADAkIhYAIgAJit2IBXgQIAGAkIhXAOgAJDv8IBWgXIAJAjIhWAVgAIax/IBTgeIAMAiIhUAcg");
	this.shape.setTransform(72.8,119.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("ArTSjQgJhGgCgbIAAgHIAHgCQF0hPEujjQErjiCxlMQCmk2AbllQAalmh2lSIgDgIIAHgDQA0gXAogNIAIgDIADAJQB/FqgcF+QgcF+iyFMQi/FolEDxQlCDxmQBSIgJACgAIfx4QB1FUgbFnQgbFmioE4QixFPktDkQkuDjl1BSQACAhAGAuQGIhSE9jvQE+jvC9lhQCvlHAcl4QAcl4h7lmQgdALgtATg");
	this.shape_1.setTransform(73.6,119.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(42));

	// 图层 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("Al5BeQAjgIAigKIAggJIAWBMQg0APg2AMgAF0ipIAGAGIAAABg");
	this.shape_2.setTransform(41.4,219.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("Al5BeQAjgIAigKIAggJIAWBMQg0APg2AMgAjzA5QAygPAwgTIAcBLQgyATg0AQgAF0ipIAGAGIAAABg");
	this.shape_3.setTransform(41.4,219.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8AF8F3").s().p("Al5BeQAjgIAigKIAggJIAWBMQg0APg2AMgAjzA5QAygPAwgTIAcBLQgyATg0AQgAhxALQAjgMAjgQIAagMIAgBHIAAAAQgvAXgzAUgAF0ipIAGAGIAAABg");
	this.shape_4.setTransform(41.4,219.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AF8F3").s().p("Al5BeQAjgIAigKIAggJIAWBMQg0APg2AMgAjzA5QAygPAwgTIAcBLQgyATg0AQgAhxALQAjgMAjgQIAagMIAgBHIAAAAQgvAXgzAUgAAMgsIAagOQAhgRAggSIAoBGQgvAZgxAYgAF0ipIAGAGIAAABg");
	this.shape_5.setTransform(41.4,219.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8AF8F3").s().p("Al5BeQAjgIAigKIAggJIAWBMQg0APg2AMgAjzA5QAygPAwgTIAcBLQgyATg0AQgAhxALQAjgMAjgQIAagMIAgBHIAAAAQgvAXgzAUgAAMgsIAagOQAhgRAggSIAoBGQgvAZgxAYgACFhvQAsgbArgdIAtBCQgsAfgvAcgAF0ipIAGAGIAAABg");
	this.shape_6.setTransform(41.4,219.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AF8F3").s().p("Al7CGQAjgIAigJIAggJIAWBMQg0APg1AMgAj1BiQAygQAwgSIAdBLQgzATg0AQgAhzAzQAjgOAjgPIAagMIAgBIIAAAAQgvAXgyAUgAAKgEIAagNQAhgRAggTIAoBEQgvAbgxAZgACDhGQAsgbArgeIAuBCQgtAfgvAdgAD2iTIAggXIAzgoIAzA+IgPAMIhIA2gAFyiBIAGAHIAAAAg");
	this.shape_7.setTransform(41.6,215.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8AF8F3").s().p("AmyC0QAjgIAigKIAggJIAWBNQg0AOg1AMgAksCPQAygPAwgSIAdBKQgzATg0AQgAiqBhQAjgOAjgQIAagMIAiBJIAAAAQgxAXgyAUgAgrAoIAagOQAfgRAggQIAoBEQgvAbgvAYgABMgZQAsgaArgeIAuBCQgtAdgvAcgAC/hlIAggXIAzgoIAzA+IgPAMIhIA2gAE7hTIAGAHIAAAAgAEti6QAggcAfgdIANgMIA6A4QgoAmgrAkIgBABg");
	this.shape_8.setTransform(47.1,211.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8AF8F3").s().p("AnjDmQAigIAigKIAhgJIAWBMQg0APg2AMgAldDBQAygPAwgTIAcBLQgyATg0AQgAjbCTQAjgOAigQIAagMIAjBJIgBAAQgxAXgyAUgAhdBaIAbgOQAhgRAggSIAmBGQgtAbgxAYgAAbAXQAsgZArgdIAtBAQgtAfguAcgACOgzIAggXIAzgoIAyA+IgOAMIhIA0gAEKghIAGAGIAAABgAD7iIQAhgcAfgdIANgNIA5A4QgoAngqAkIgBABgAFhjlIAcgdIArgvIA8A1QgkApgnAmg");
	this.shape_9.setTransform(52,206.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8AF8F3").s().p("AoREbQAjgIAigJIAggJIAWBMQg0APg2AMgAmLD3QAygQAwgSIAcBLQgyATg0AQgAkJDIQAjgOAjgPIAagMIAiBIIAAAAQgxAXgzAUgAiKCQIAagOQAhgRAggTIAoBGQgvAbgxAZgAgRBNQAqgbArgeIAtBCQgsAggvAcgABgABIAggWIAzgnIAzA8IgPALIhIA2gADcASIAGAHIAAAAgADNhTQAhgbAfgeIANgMIA6A4QgoAmgrAkIgBABgAEziwIAcgdIAsgvIA7A1QgkApgmAmgAGRkWQAignAfgqIBAAwQghAsgjApg");
	this.shape_10.setTransform(56.6,200.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8AF8F3").s().p("Ao6FUQAjgIAigJIAggJIAWBMQg0APg2AMgAm0EwQAygQAwgSIAcBLQgyATg0AQgAkyECQAjgPAjgPIAagMIAiBIIAAAAQgxAYgzAUgAizDJIAagOQAhgRAggTIAoBGQgvAcgxAYgAg6CGQAsgbApgeIAtBDQgsAfgtAcgAA3A6IAggYIAzglIAzA8IgPALIhIA3gACzBLIAGAHIAAAAgACkgaQAhgbAfgdIANgNIA6A4QgoAngrAiIgBABgAEKh3IAcgdIAsgvIA7A1QgkApgmAngAFojdQAignAfgqIBAAwQghAsgjApgAG+lKQAegqAbgsIBEArQgdAuggAsg");
	this.shape_11.setTransform(60.7,195);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8AF8F3").s().p("ApeGQQAjgIAigJIAggJIAWBMQg0APg2AMgAnYFsQAygQAwgSIAcBLQgyATg0AQgAlWE+QAjgPAjgPIAagMIAiBIIAAAAQgxAYgzAUgAjXEFIAagOQAhgRAggTIAoBGQgvAcgxAYgAheDCQAsgbArgeIArBDQgqAfgvAcgAATB2IAggYIAzgnIAzA+IgPALIhIA3gACPCHIAGAHIAAAAgACAAgQAhgbAfgbIANgNIA6A2QgoAngrAkIgBABgADmg7IAcgdIAsgvIA7A1QgkApgmAngAFEihQAignAfgqIBAAwQghAsgjApgAGakOQAegqAbgsIBEArQgdAuggAsgAHmmBQAXgoAWgpIAAAAIAFgKIBHAlIgGALIggA6IgPAag");
	this.shape_12.setTransform(64.3,189);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8AF8F3").s().p("Ap+HPQAigIAigKIAhgJIAWBNQg0APg2AMgAn4GqQAygPAwgSIAcBLQgyASg0AQgAl2F8QAjgOAigPIAagNIAjBJIgBAAQgxAXgyAUgAj4FDIAbgNQAhgRAggTIAoBGQgvAbgxAZgAh+EAQAsgaArgeIArBCQgrAfguAdgAgLC0IAegXIAzgoIAyA+IgOAMIhIA2gABvDGIAGAHIAAAAgABgBfQAhgcAfgdIANgMIA5A4QgoAmgqAkIgBABgADGACIAcgbIArgvIA8A1QgkAngnAmgAEkhiQAignAfgqIBAAwQghAsgjApgAF5jPQAegqAcgsIBEArQgeAugfAsgAHFlDQAYgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgQAagAIIm8IATgnIAZg3IBLAgIgHAQIgpBRg");
	this.shape_13.setTransform(67.5,182.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8AF8F3").s().p("AqXIQQAjgIAigKIAggJIAWBNQg0AOg1AMgAoRHrQAygPAwgSIAdBKQgzATg0AQgAmOG9QAjgOAigQIAagMIAiBJIAAAAQgxAXgyAUgAkQGEIAbgOQAggRAggSIAoBGQgvAbgxAYgAiXFBQAsgaArgeIAuBCQgtAfguAcgAgkD1IAggXIAxgoIAzA+IgPAMIhIA2gABXEHIAFAHIAAAAgABICgQAggcAfgdIAOgMIA5A4QgoAmgrAkIgBABgACtBDIAdgdIArgtIA8AzQgkApgnAmgAEMghQAhgoAfgpIBAAwQghArgjAogAFhiOQAegqAcgsIBDAqQgdAvggAsgAGtkCQAXgnAWgpIAAAAIAGgKIBGAkIgFALIghA7IgPAagAHvl7IATgnIAZg4IBMAhIgIAQIgoBRgAIon5QAPgmANgmIAIgWIBMAZIgVA8IgOAsIAAAAg");
	this.shape_14.setTransform(70,176.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8AF8F3").s().p("AqqJSQAigIAigJIAggJIAWBMQg0APg1AMgAokIuQAxgQAxgSIAcBLQgzATg0AQgAmiH/QAjgOAigPIAagMIAiBIIAAAAQgxAXgyAUgAkkHHIAbgOQAhgRAggTIAoBGQgwAbgxAZgAirGEQAtgbArgeIAtBCQgtAgguAcgAg3E4IAfgYIAxgnIAzA+IgPALIhFA2gABDFJIAFAHIAAAAgAA0DiQAhgbAfgeIANgMIA5A4QgoAmgqAkIgBABgACaCFIAcgdIArgvIA8A1QgkApgnAmgAD4AfQAhglAggqIA/AwQggAqgkApgAFNhMQAegqAcgsIBDArQgdAugfAsgAGZi/QAYgoAVgpIAAAAIAGgKIBGAlIgFALIggA6IgQAagAHck5IASgnIAZg3IBMAgIgHARIgpBRgAIUm3QAPgmAOgmIAHgWIBMAZIgVA9IgOArIAAAAgAJDo6IAIgdQALgjAIgkIBNATQgMA1gQA0g");
	this.shape_15.setTransform(72,169.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8AF8F3").s().p("Aq4KWQAigIAigJIAggJIAWBMQg0APg1AMgAoyJyQAxgQAxgSIAcBLQgzATg0AQgAmwJDQAjgOAigPIAagMIAiBIIAAAAQgxAXgyAUgAkyIKIAbgNQAhgRAggTIAoBGQgwAbgxAZgAi5HIQAtgbArgeIAtBCQgtAfguAdgAhFF7IAfgXIAxgoIAzA+IgPAMIhFA2gAA1GNIAFAHIAAAAgAAmEmQAhgcAfgdIANgMIA5A4QgoAmgqAkIgBABgACMDJIAcgdIArgvIA8A1QgkApgnAmgADqBjQAhgnAggqIA/AwQggAsgkApgAE/gIQAegqAcgsIBDArQgdAugfAqgAGLh8QAYgnAVgpIAAAAIAGgKIBGAlIgFALIggA6IgQAagAHOj1IASgnIAZg3IBMAgIgHARIgpBRgAIGlzQAPgmAOgmIAHgWIBMAZIgVA8IgOAsIAAAAgAI1n2IAIgdQALgjAIgkIBNATQgMA1gQA0gAJYp8IANhDIAGgjIBOANQgIA2gMA0g");
	this.shape_16.setTransform(73.4,162.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AF8F3").s().p("ArBLbQAjgIAigKIAggJIAWBNQg0APg1AMgAo7K2QAygPAwgSIAdBLQgzASg0AQgAm5KIQAjgOAjgPIAagNIAiBJIAAAAQgxAXgyAUgAk6JPIAagNQAhgRAggTIAoBGQgvAbgxAZgAjBIMQAsgaArgeIAuBCQgtAfgvAdgAhOHAIAggXIAxgoIAzA+IgPAMIhGA2gAAsHSIAGAHIAAAAgAAeFrQAggcAfgdIANgMIA6A4QgoAmgrAkIgBABgACDEOIAcgdIAsgvIA8A1QglApgmAmgADiCoQAhgnAfgqIBAAwQghAsgjApgAE3A7QAegqAbgqIBEApQgdAuggAsgAGDg3QAXgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgPAagAHFiwIATgnIAZg3IBLAgIgHAQIgoBSgAH+kuQAPgmANgmIAIgWIBMAZIgVA8IgOAsIAAAAgAIsmxIAJgdQAKgjAJgkIBNATQgNA1gPAzgAJPo3IAOhDIAFgjIBPANQgIA2gMA0gAJorAIACgSQAFgqADgqIBQAGIgFA2IgHA2g");
	this.shape_17.setTransform(74.2,156);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8AF8F3").s().p("ArEMgQAjgIAigJIAggJIAWBMQg0APg1AMgAo+L8QAygQAwgSIAdBLQgzATg0AQgAm7LNQAjgOAigPIAagMIAiBIIAAAAQgxAXgyAUgAk9KVIAbgOQAhgRAggTIAnBGQgvAbgxAZgAjEJSQAtgbArgeIAtBCQgtAgguAcgAhQIGIAfgYIAxgnIAzA+IgPALIhGA2gAAqIXIAFAHIAAAAgAAbGwQAggbAfgeIAOgMIA5A4QgoAmgqAkIgBABgACAFTIAdgdIArgvIA8A1QgkApgnAmgADfDtQAhgnAfgqIBAAwQghAsgjApgAE0CAQAegqAcgsIBDArQgdAuggAsgAGAANQAYgmAVgpIAAAAIAGgKIBGAlIgFALIghA4IgPAagAHChrIATgnIAZg3IBMAgIgHARIgpBRgAH7jpQAPgmAOgmIAHgWIBMAZIgVA9IgOArIAAAAgAIqlsIAIgdQAKgjAJgkIBNATQgMA1gQA0gAJNnxIANhEIAGgiIBOAMQgIA2gMA1gAJlp6IACgTQAFgqAEgqIBPAGIgFA2IgGA2gAJysEIADg9IAAgqIBQgBQAAA2gEA3g");
	this.shape_18.setTransform(74.5,149);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AF8F3").s().p("ArENoQAjgIAigJIAggJIAWBMQg0APg1AMgAo+NEQAygPAwgTIAdBLQgzATg0AQgAm7MWQAjgOAigQIAagMIAiBJIAAAAQgxAXgyAUgAk9LdIAbgOQAhgRAggSIAnBFQgvAcgxAYgAjEKaQAtgbArgdIAtBCQgtAfguAcgAhQJOIAfgXIAxgoIAzA+IgPAMIhGA2gAAqJgIAFAGIAAABgAAbH5QAggcAfgdIAOgNIA5A4QgoAngqAkIgBABgACAGbIAdgcIArgvIA8A1QgkAognAngADfE2QAhgoAfgpIBAAwQghArgjAqgAE0DJQAegqAcgtIBDArQgdAuggAsgAGABVQAYgnAVgpIAAgBIAGgIIBGAjIgFALIghA6IgPAagAHCgiIATgnIAZg4IBMAhIgHAQIgpBQgAH7ihQAPglAOgnIAHgWIBMAaIgVA8IgOArIAAABgAIqkjIAIgeQAKgjAJgjIBNASQgMA1gQA0gAJNmpIANhEIAGgiIBOAMQgIA2gMA1gAJloyIACgTQAFgpAEgrIBPAGIgFA3IgGA1gAJyq7IADg9IAAgrIBQAAQAAA2gEA2gAJ0tSQgBgugEgtIBPgHIAEA2IACA3IhPABIgBgMg");
	this.shape_19.setTransform(74.5,141.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("ArEOwQAjgIAigJIAggJIAWBMQg0APg1AMgAo+OMQAygQAwgSIAdBLQgzATg0AQgAm7NeQAjgPAigPIAagMIAiBIIAAAAQgxAYgyAUgAk9MlIAbgOQAhgRAggTIAnBGQgvAcgxAYgAjELiQAtgbArgeIAtBDQgtAfguAcgAhQKWIAfgYIAxgnIAzA+IgPALIhGA3gAAqKnIAFAHIAAAAgAAbJAQAggbAfgdIAOgNIA5A4QgoAngqAkIgBABgACAHjIAdgdIArgvIA8A1QgkApgnAngADfF9QAhgnAfgqIBAAwQghAsgjApgAE0EQQAegqAcgsIBDArQgdAuggAsgAGACdQAYgoAVgpIAAAAIAGgKIBGAlIgFALIghA6IgPAagAHCAjIATgkIAZg4IBMAgIgHARIgpBPgAH7hZQAPgmAOgmIAHgWIBMAZIgVA9IgOArIAAAAgAIqjcIAIgdQAKgjAJgkIBNATQgMA1gQA0gAJNlhIANhEIAGgiIBOAMQgIA2gMA1gAJlnqIACgTQAFgqAEgqIBPAGIgFA2IgGA2gAJyp0IADg9IAAgqIBQgBQAAA2gEA3gAJ0sKQgBgugEguIBPgGIAEA2IACA2IhPACIgBgMgAJmu6IgIg1IBPgNQAJA2AFA2IhPAIIgGgyg");
	this.shape_20.setTransform(74.5,134.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("ArEP3QAjgIAigJIAggJIAWBMQg0APg1AMgAo+PTQAygQAwgSIAdBLQgzATg0AQgAm7OlQAjgPAigPIAagMIAiBIIAAAAQgxAYgyAUgAk9NsIAbgOQAhgRAggTIAnBGQgvAcgxAYgAjEMpQAtgbArgeIAtBDQgtAfguAcgAhQLdIAfgYIAxgnIAzA+IgPALIhGA3gAAqLuIAFAHIAAAAgAAbKHQAggbAfgdIAOgNIA5A4QgoAngqAkIgBABgACAIqIAdgdIArgvIA8A1QgkApgnAngADfHEQAhgnAfgqIBAAwQghAsgjApgAE0FXQAegqAcgsIBDArQgdAuggAsgAGADkQAYgoAVgpIAAAAIAGgKIBGAlIgFALIghA6IgPAagAHCBqIATgmIAZg4IBMAgIgHARIgpBRgAH7gSQAPgmAOgmIAHgWIBMAZIgVA9IgOApIAAAAgAIqiVIAIgdQAKgjAJgkIBNATQgMA1gQA0gAJNkaIANhEIAGgiIBOAMQgIA2gMA1gAJlmjIACgTQAFgqAEgqIBPAGIgFA2IgGA2gAJyotIADg9IAAgqIBQgBQAAA2gEA3gAJ0rDQgBgugEguIBPgGIAEA2IACA2IhPACIgBgMgAJmtzIgIg1IBPgNQAJA2AFA2IhPAIIgGgygAJGwiIgEgNIBOgUIAMA1IAKA2IhNAOQgJgsgKgsg");
	this.shape_21.setTransform(74.5,127.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("ArEQ9QAjgIAigKIAggJIAWBNQg0AOg1AMgAo+QYQAygPAwgSIAdBKQgzATg0AQgAm7PqQAjgOAigQIAagMIAiBJIAAAAQgxAXgyAUgAk9OxIAbgOQAhgRAggSIAnBGQgvAbgxAYgAjENuQAtgaArgeIAtBCQgtAfguAcgAhQMiIAfgXIAxgoIAzA+IgPAMIhGA2gAAqM0IAFAHIAAAAgAAbLNQAggcAfgdIAOgMIA5A4QgoAmgqAkIgBABgACAJwIAdgdIArgvIA8A1QgkApgnAmgADfIKQAhgoAfgpIBAAwQghArgjAqgAE0GdQAegqAcgsIBDAqQgdAvggAsgAGAEpQAYgnAVgpIAAAAIAGgKIBGAkIgFALIghA7IgPAagAHCCwIATgnIAZg4IBMAhIgHAQIgpBRgAH7AyQAPgmAOgkIAHgWIBMAZIgVA6IgOAsIAAAAgAIqhPIAIgdQAKgkAJgjIBNATQgMA1gQAzgAJNjVIANhDIAGgjIBOANQgIA1gMA1gAJlleIACgSQAFgqAEgrIBPAHIgFA2IgGA2gAJynnIADg9IAAgrIBQAAQAAA2gEA2gAJ0p9QgBgugEguIBPgHIAEA2IACA3IhPACIgBgMgAJmsuIgIg0IBPgNQAJA1AFA2IhPAJIgGgzgAJGvcIgEgOIBOgTIAMA1IAKA1IhNAPQgJgtgKgrgAIvwzIgTg8IBLgZQARAzAPA1IhNAVIgLgog");
	this.shape_22.setTransform(74.5,120.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AqBQrQAygQAwgSIAdBLQgzATg0AQgAn+P9QAjgPAigPIAagMIAiBIIAAAAQgxAYgyAUgAmAPEIAbgOQAhgRAggTIAnBGQgvAcgxAYgAkHOBQAtgbArgeIAtBDQgtAfguAcgAiTM1IAfgYIAzgnIAzA+IgPALIhIA3gAgXNGIAFAHIAAAAgAgmLfQAggbAdgdIAOgNIA5A4QgoAngqAkIgBABgAA9KCIAdgdIArgvIA8A1QgkApgnAngACcIcQAhgnAfgqIBAAwQghAsgjApgADxGvQAegqAcgsIBDArQgdAuggAsgAE9E8QAYgoAVgpIAAAAIAGgKIBGAlIgFALIghA6IgPAagAF/DCIATgmIAZg4IBMAgIgHARIgpBRgAG4BEQAPgmAOgkIAHgWIBMAZIgVA7IgOArIAAAAgAHng9IAIgdQAKgjAJgkIBNATQgMA1gQA0gAIKjCIANhEIAGgiIBOAMQgIA2gMA1gAIilLIACgTQAFgqAEgqIBPAGIgFA2IgGA2gAIvnVIADg9IAAgqIBQgBQAAA2gEA3gAIxprQgBgugEguIBPgGIAEA2IACA2IhPACIgBgMgAIjsbIgIg1IBPgNQAJA2AFA2IhPAIIgGgygAIDvKIgEgNIBOgUIAMA1IAKA2IhNAOQgJgsgKgsgAHswgIgTg8IBLgaQARA0APA0IhNAVIgLgng");
	this.shape_23.setTransform(81.2,118.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("Ao/QVQAjgOAigQIAagMIAiBJIAAAAQgxAXgyAUgAnBPcIAbgOQAggRAggSIAoBFQgvAcgxAYgAlIOZQAsgbArgeIAuBDQgtAfguAcgAjVNNIAggXIAzgoIAzA+IgPALIhIA3gAhYNeIAFAHIAAABgAhnL4QAggcAfgdIAOgNIA3A4QgmAngrAkIgBABgAgCKaIAbgdIArguIA8A1QgkAognAngABbI1QAhgoAfgqIBAAwQghAsgjAqgACwHIQAegrAcgsIBDArQgdAuggAsgAD8FUQAXgoAWgpIAAAAIAGgKIBGAlIgFALIghA6IgPAagAE+DbIATgnIAZg4IBMAhIgIAQIgoBRgAF3BcQAPglANgnIAIgUIBMAXIgVA9IgOArIAAAAgAGlgkIAJgeQAKgjAJgjIBNASQgNA1gPA0gAHJiqIANhEIAGgiIBOAMQgIA2gMA1gAHhkzIACgTQAFgqAEgqIBPAGIgFA2IgHA2gAHum8IACg9IABgrIBPgBQAAA2gDA3gAHwpTQgBgugEgtIBPgHIAEA2IACA2IhQACIAAgMgAHisDIgIg1IBPgNQAIA2AGA2IhPAIIgGgygAHCuyIgEgNIBNgUIANA1IAKA2IhOAOQgIgsgKgsgAGrwIIgTg8IBLgaQARA0AOA0IhMAWIgLgog");
	this.shape_24.setTransform(87.7,116.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AoAP5IAagOQAhgRAggSIAoBGQgvAbgxAYgAmHO2QAsgaArgeIAuBCQgtAfgvAcgAkUNqIAggXIAzgoIAzA+IgPAMIhIA2gAiYN8IAGAHIAAAAgAimMVQAggcAfgdIANgMIA6A4QgoAmgrAkIgBABgAhBK4IAcgdIAqgvIA8A1QglApgkAmgAAcJSQAhgoAfgpIBAAwQghArgjAqgABxHlQAegqAbgsIBEAqQgdAvggAsgAC9FxQAXgnAWgpIAAAAIAFgKIBHAkIgGALIggA7IgPAagAD/D4IATgnIAZg4IBLAhIgHAQIgoBRgAE4B6QAPgmANgmIAIgWIBMAZIgVA8IgOAsIAAAAgAFmgHIAJgdQAKgkAJgjIBNATQgNA1gPAxgAGJiNIAOhDIAFgjIBPANQgIA1gMA1gAGikWIACgSQAFgqADgrIBQAHIgFA2IgHA2gAGvmfIACg9IABgrIBPAAQAAA2gDA2gAGxo1QgBgugEguIBPgHIAEA2IACA3IhQACIAAgMgAGjrmIgIg0IBPgNQAIA1AGA2IhPAJIgGgzgAGCuUIgDgOIBNgTIAMA1IALA1IhOAPQgIgtgLgrgAFsvrIgTg8IBLgZQARAzAOA1IhNAVIgKgog");
	this.shape_25.setTransform(94,113.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AnEPZQAtgaArgeIAtBCQgtAfguAcgAlQONIAfgXIAzgoIAzA+IgPAMIhHA2gAjUOfIAFAHIAAAAgAjjM4QAhgcAfgdIANgMIA5A4QgoAmgqAkIgBABgAh9LbIAcgdIArgvIA6A1QgiApgnAmgAgfJ1QAfgoAggpIA/AwQggArgkAqgAA0IIQAegqAcgsIBDAqQgdAvgfAsgACAGUQAYgnAVgpIAAAAIAGgKIBGAkIgFALIggA7IgQAagADDEbIASgnIAZg4IBMAhIgHAQIgpBRgAD7CdQAPgmAOgmIAHgWIBMAZIgVA8IgOAsIAAAAgAEqAaIAIgbQALgkAIgjIBNATQgMA1gQAxgAFNhqIANhDIAGgjIBOANQgIA1gMA1gAFljzIACgSQAGgqADgrIBPAHIgFA2IgGA2gAFyl8IADg9IAAgrIBQAAQAAA2gDA2gAF0oSQgBgugEguIBPgHIAEA2IACA3IhPACIgBgMgAFmrDIgHg0IBOgNQAJA1AFA2IhPAJIgGgzgAFGtxIgDgOIBNgTIAMA1IALA1IhOAPQgJgtgKgrgAEvvIIgTg8IBLgZQARAzAPA1IhNAVIgLgog");
	this.shape_26.setTransform(100.1,109.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AmKO1IAggXIAzgoIAyA+IgOAMIhIA2gAkOPHIAGAHIAAAAgAkdNgQAhgcAfgdIANgMIA5A4QgnAmgrAkIgBABgAi3MDIAcgdIAsgvIA7A1QgkApgnAmgAhZKdQAignAfgqIA+AwQghAsghApgAgDIwQAcgqAbgsIBEArQgdAuggAsgABGG8QAYgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgPAagACJFDIATgnIAZg3IBLAgIgHAQIgpBSgADCDFQAPgmANgmIAIgWIBLAZIgUA8IgPAsIAAAAgADwBCIAJgdQAKgjAIgiIBOATQgNAzgQAzgAEThCIANhDIAGgjIBPANQgJA2gLA0gAErjLIADgSQAFgqADgqIBQAGIgGA2IgGA2gAE4lUIADg9IAAgqIBQgBQAAA2gDA3gAE7nqQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgAEtqbIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgAEMtJIgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAD1ufIgTg9IBMgZQARA0AOA0IhNAVIgLgng");
	this.shape_27.setTransform(105.8,105.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AlEPbIAFAHIAAAAgAlTN0QAggcAfgdIAOgMIA5A4QgoAmgrAkIgBABgAjuMXIAdgdIArgvIA8A1QgkApgnAmgAiPKxQAhgnAfgqIBAAwQghAsgjApgAg6JEQAegqAcgsIBBArQgdAuggAsgAAQHQQAXgnAWgpIAAAAIAGgKIBGAlIgFALIghA6IgPAagABSFXIATgnIAZg3IBMAgIgIARIgoBRgACLDZQAPgmANgmIAIgWIBMAZIgVA8IgOAsIAAAAgAC5BWIAJgdQAKgjAJgiIBNARQgNA1gPA0gADdguIANhDIAGgjIBOANQgIA2gMA0gAD1i2IACgTQAFgqAEgqIBPAGIgFA2IgHA2gAEClAIACg9IABgqIBPgBQAAA2gDA3gAEEnWQgBgugEguIBPgHIAEA3IACA2IhQACIAAgMgAD2qHIgIg0IBPgNQAIA1AGA2IhPAJIgGgzgADWs1IgEgOIBNgTIANA1IAKA1IhOAPQgIgsgKgsgAC/uLIgTg8IBLgaQARA0AOA0IhMAVIgLgng");
	this.shape_28.setTransform(111.3,103.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgAj1MXIAcgdIArgvIA8A1QgkApgnAmgAiXKxQAignAfgqIBAAwQghAsgjApgAhCJEQAegqAcgsIBCArQgeAugdAsgAAIHQQAYgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgQAagABLFXIATgnIAZg3IBLAgIgHARIgpBRgACEDZQAPgmANgmIAHgWIBMAZIgUA8IgPAsIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_29.setTransform(112,103.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgAiXKxQAignAfgqIBAAwQghAsgjApgAhCJEQAegqAcgsIBCArQgeAugdAsgAAIHQQAYgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgQAagABLFXIATgnIAZg3IBLAgIgHARIgpBRgACEDZQAPgmANgmIAHgWIBMAZIgUA8IgPAsIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_30.setTransform(112,103.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgAhCJEQAegqAcgsIBCArQgeAugdAsgAAIHQQAYgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgQAagABLFXIATgnIAZg3IBLAgIgHARIgpBRgACEDZQAPgmANgmIAHgWIBMAZIgUA8IgPAsIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_31.setTransform(112,103.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgAAIHQQAYgnAWgpIAAAAIAFgKIBHAlIgGALIggA6IgQAagABLFXIATgnIAZg3IBLAgIgHARIgpBRgACEDZQAPgmANgmIAHgWIBMAZIgUA8IgPAsIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_32.setTransform(112,103.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgABLFXIATgnIAZg3IBLAgIgHARIgpBRgACEDZQAPgmANgmIAHgWIBMAZIgUA8IgPAsIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_33.setTransform(112,103.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgACEDZQAPgmANgmIAHgWIBMAZIgUA8IgPAsIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_34.setTransform(112,103.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgACyBWIAJgdQAKgjAIgiIBOARQgNA1gQA0gADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_35.setTransform(112,103.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgADVguIANhDIAGgjIBPANQgJA2gLA0gADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_36.setTransform(112,103.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgADti2IADgTQAFgqADgqIBPAGIgFA2IgGA2gAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_37.setTransform(112,103.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgAD6lAIADg9IAAgqIBQgBQAAA2gDA3gAD9nWQgCgugDguIBPgHIADA3IACA2IhPACIAAgMgADvqHIgIg0IBOgNQAJA1AFA2IhOAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_38.setTransform(112,103.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8AF8F3").s().p("AlMPbIAGAHIAAAAgAD9nWQgBgugEguIBPgHIAEA3IACA2IhQACIAAgMgADvqHIgIg0IBOgNQAJA1AGA2IhPAJIgGgzgADOs1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgAC3uLIgTg8IBMgaQARA0AOA0IhNAVIgLgng");
	this.shape_39.setTransform(112,103.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8AF8F3").s().p("AlHPbIAFAHIAAAAgADzqHIgHg0IBOgNQAJA1AFA2IhPAJIgGgzgADTs1IgDgOIBNgTIAMA1IALA1IhOAPQgJgsgKgsgAC8uLIgTg8IBLgaQARA0APA0IhNAVIgLgng");
	this.shape_40.setTransform(111.6,103.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8AF8F3").s().p("Ak9PbIAGAHIAAAAgADds1IgDgOIBNgTIAMA1IALA1IhOAPQgIgsgLgsgADGuLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_41.setTransform(110.5,103.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8AF8F3").s().p("AktPbIAGAHIAAAAgADWuLIgTg8IBLgaQASA0AOA0IhNAVIgLgng");
	this.shape_42.setTransform(108.9,103.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.1,239.4);


(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AKwIAQgmABhpgIIgvgDIgSgDIhGhQIgMgCQgUgDgOgEIg2gMIhEgRQi6g0imhYQhYgwhVg6QhQg2g+g1IhdhSIgZgZIgIgJIhpgMIgNgNIgdglIgqg0QgbgigSgcIgrg/IhDhyICDhHIArBKIAVAjIAaAmIAcApQARAYAOAQIAfAoIAgAmIA7BAQARATAbAYIB6BoQAUARAhAYIA+AqQASANAyAdIBHApICSBEIBFAbQAWAJAqAMQBRAZAPADIA7ANQAmAJAXADIBWANIBkAIQAiAEBCgBIAuAAIAqgCIBVgGIAPCUIiDAJg");
	this.shape.setTransform(50,-92.4,0.705,0.705,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("AKwIAQgmABhpgIIgvgDIgSgDIhGhQIgMgCQgUgDgOgEIg2gMIhEgRQi6g0imhYQhYgwhVg6QhQg2g+g1IhdhSIgZgZIgIgJIhpgMIgNgNIgdglIgqg0QgbgigSgcIgrg/IhDhyICDhHIArBKIAVAjIAaAmIAcApQARAYAOAQIAfAoIAgAmIA7BAQARATAbAYIB6BoQAUARAhAYIA+AqQASANAyAdIBHApICSBEIBFAbQAWAJAqAMQBRAZAPADIA7ANQAmAJAXADIBWANIBkAIQAiAEBCgBIAuAAIAqgCIBVgGIAPCUIiDAJg");
	this.shape_1.setTransform(-50.1,92.3,0.706,0.706);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AIvDRIBGg2QBaB0BBCCIhPAnQg+h7hUhsgAEkg2IA1hGQB3BbBfBoIhBA7QhehnhshRgAghjxIAhhSQBHAeBAAiQA+AhA7AnIgwBKQh1hNh8gzgAmLlTIALhXQCQATCMAuIgdBUQiBgsiJgSgAsPmrQCSgTCQAJIgFBYQiHgIiLASg");
	this.shape_2.setTransform(41.4,-77.7,0.706,0.706);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AHLYEQExhdD0jMQDrjFCRkQQCRkQAgkxQAhk6hdkxQhckujFjwQjGjwkWiVQkXiUk1geQkzgekuBcQkuBcjwDGQjwDFiUEWQiUEXgeE1QgeE0BcEtIgRAFQhdkxAek3QAfk4CVkaQCWkZDzjIQDzjIExhdQExhdE3AfQE5AeEZCWQEaCWDHDzQDIDyBdExQBfE1giE+QghE0iSETQiTETjuDHQj2DOk1Bfg");
	this.shape_3.setTransform(-0.4,-2.5,0.706,0.706);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AF36").s().p("AiQW2QkngckKiOQkJiOi9jlQi9jlhXkgQhZkjAgksQAekjCKkDQCLkEDgi8QDpjCEjhZIAGARQkhBYjlDAQjeC6iJEAQiJEBgeEfQgfEoBYEgQBWEdC7DiQC6DjEGCLQEHCMEkAdQEiAcEchXQEchWDji7QDii6CMkHQCMkGAckkQAdkihXkcIARgFQBYEfgdEmQgdEniNEKQiOEJjlC9QjlC9kgBXQjZBCjcAAQhHAAhJgHg");
	this.shape_4.setTransform(-0.1,1.9,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-128.6,226.7,257.2);


(lib.core_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhRDVQgHgDgEgHQgDgIADgIQADgHAHgEQAIgDAIADQAoAQAsgFQAjgDAdgOQAHgDAIACQAIADADAIQAEAHgDAIQgDAIgHADQgjARgqAEIgWABQgrAAgmgPgAiaCmQhAg5gIhYIgBgUQAAgGAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAGIABAQIAAAAQAHBJAzAvQAHAGAAAIQAAAIgFAGQgGAGgIABIgBAAQgIAAgFgGgACMCbQgGgFAAgIQgBgJAGgGIAGgHIAAgBQAxg7gGhJQgBgIAFgHQAGgGAIgBQAIAAAHAFQAGAGABAIQAHBZg7BIIAAgBIgHAKQgGAGgIAAIgBAAQgIAAgGgFgAjJg4QgIgDgDgIQgEgHAEgIQAMggAYgeIABgBQA8hJBegJIgCABIAJgBQAIAAAGAFQAEAGAAAJQAAAIgEAGQgGAGgIAAIgBAAIgCAAQhOAIgxA8IAAAAIgBABQgUAYgKAbQgEAIgHADQgEACgEAAQgEAAgDgCgAC0hIQgHgDgEgHQgRgkghgbQgdgYghgLQgIgCgEgIQgEgHADgIQACgIAIgEQAHgDAIACQApANAiAdQAoAhAVArQAEAIgDAIQgDAHgHAEQgEACgFAAIgHgBg");

	// 图层 1
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(255,0,0,0.8)").s().p("Ag1A+IA2hnIAngkIAOAIIhNCTg");
	this.shape_140.setTransform(-30.1,57,0.999,0.999);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(255,0,0,0.8)").s().p("AguBEIAthsIAggoIAQAGIg9Cbg");
	this.shape_141.setTransform(-24,59.8,0.999,0.999);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(255,0,0,0.8)").s().p("AgmBKIAhhxIAcgrIAQAEIgtChg");
	this.shape_142.setTransform(-17.7,61.9,0.999,0.999);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(255,0,0,0.8)").s().p("AgeBOIAVhzIAXguIARADIgdCkg");
	this.shape_143.setTransform(-11.2,63.3,0.999,0.999);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,0,0,0.8)").s().p("AgVBSIAIh1IASgwIARABIgMCmg");
	this.shape_144.setTransform(-4.5,64,0.999,0.999);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(255,0,0,0.8)").s().p("AgRghIAPgyIAPgBIAFCnIgfABg");
	this.shape_145.setTransform(2.3,64.1,0.999,0.999);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(255,0,0,0.8)").s().p("AgXgeIAJg0IAPgCIAXClIgfAFg");
	this.shape_146.setTransform(9.2,63.5,0.999,0.999);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(255,0,0,0.8)").s().p("AgdgcIAEg1IARgEIAmCiIgeAJg");
	this.shape_147.setTransform(16.1,62.2,0.999,0.999);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(255,0,0,0.8)").s().p("AgigZIgBg1IAPgGIA4CdIggAMg");
	this.shape_148.setTransform(22.7,60.3,0.999,0.999);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(255,0,0,0.8)").s().p("AglgWIgGg0IAPgIIBICWIgeAPg");
	this.shape_149.setTransform(28.9,57.7,0.999,0.999);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(255,0,0,0.8)").s().p("AgngTIgLg0IAOgIIBXCNIgcASg");
	this.shape_150.setTransform(34.7,54.4,0.999,0.999);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(255,0,0,0.8)").s().p("AgngQIgSgxIANgKIBmCDIgaAVg");
	this.shape_151.setTransform(40.1,50.6,0.999,0.999);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(255,0,0,0.8)").s().p("AgpgMIgWgvIAMgMIBzB4IgYAXg");
	this.shape_152.setTransform(45.2,46.2,0.999,0.999);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(255,0,0,0.8)").s().p("AgpgIIgbgtIAKgNIB/BrIgVAag");
	this.shape_153.setTransform(49.7,41.3,0.999,0.999);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(255,0,0,0.8)").s().p("AgpgEIgggqIAJgOICKBdIgTAcg");
	this.shape_154.setTransform(53.6,35.9,0.999,0.999);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(255,0,0,0.8)").s().p("AgpAAIgkgmIAIgPICTBOIgQAdg");
	this.shape_155.setTransform(57,30.1,0.999,0.999);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(255,0,0,0.8)").s().p("AgpACIgnggIAGgQICbA+IgNAfg");
	this.shape_156.setTransform(59.8,24.1,0.999,0.999);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(255,0,0,0.8)").s().p("AgnAGIgrgcIAFgQICgAtIgJAgg");
	this.shape_157.setTransform(61.9,17.7,0.999,0.999);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(255,0,0,0.8)").s().p("AglAKIgugXIADgRICkAeIgGAfg");
	this.shape_158.setTransform(63.3,11.2,0.999,0.999);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(255,0,0,0.8)").s().p("AgjAOIgwgSIABgRICnAMIgDAfg");
	this.shape_159.setTransform(64.1,4.5,0.999,0.999);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(255,0,0,0.8)").s().p("AhTADIgBgOICngGIACAfIh2AEg");
	this.shape_160.setTransform(64.1,-2.3,0.999,0.999);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,0,0,0.8)").s().p("AhTAOIgCgOICmgXIAEAfIh0AQg");
	this.shape_161.setTransform(63.6,-9.2,0.999,0.999);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(255,0,0,0.8)").s().p("AhRAaIgEgQICignIAJAfIhyAcg");
	this.shape_162.setTransform(62.3,-16.1,0.999,0.999);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(255,0,0,0.8)").s().p("AhUAUICdg3IAMAfIhvAnIg0ABg");
	this.shape_163.setTransform(60.3,-22.7,0.999,0.999);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(255,0,0,0.8)").s().p("AhSAdICWhIIAPAeIhpAyIg0AHg");
	this.shape_164.setTransform(57.7,-28.8,0.999,0.999);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(255,0,0,0.8)").s().p("AhPAlICNhXIASAcIhjA9IgzAMg");
	this.shape_165.setTransform(54.4,-34.7,0.999,0.999);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,0,0,0.8)").s().p("AhMAtICDhmIAVAbIhcBHIgyARg");
	this.shape_166.setTransform(50.6,-40.1,0.999,0.999);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(255,0,0,0.8)").s().p("AhHA0IB4hzIAXAYIhUBRIgvAWg");
	this.shape_167.setTransform(46.2,-45.2,0.999,0.999);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(255,0,0,0.8)").s().p("AhCA7IBriAIAaAWIhLBZIgtAcg");
	this.shape_168.setTransform(41.3,-49.7,0.999,0.999);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(255,0,0,0.8)").s().p("Ag8BBIBdiKIAcATIhBBhIgqAfg");
	this.shape_169.setTransform(35.9,-53.6,0.999,0.999);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(255,0,0,0.8)").s().p("Ag1BGIBNiTIAeAQIg2BnIgnAkg");
	this.shape_170.setTransform(30.2,-57,0.999,0.999);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(255,0,0,0.8)").s().p("AguBKIA+iaIAfAMIgtBtIggAog");
	this.shape_171.setTransform(24.1,-59.8,0.999,0.999);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,0,0,0.8)").s().p("AgmBOIAsigIAhAJIghBxIgcArg");
	this.shape_172.setTransform(17.8,-61.9,0.999,0.999);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(255,0,0,0.8)").s().p("AgeBRIAdikIAgAGIgVBzIgXAug");
	this.shape_173.setTransform(11.2,-63.3,0.999,0.999);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(255,0,0,0.8)").s().p("AgVBUIAMinIAfACIgIB1IgSAxg");
	this.shape_174.setTransform(4.6,-64.1,0.999,0.999);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(255,0,0,0.8)").s().p("AgRhTIAfgBIAEB2IgPAyIgPAAg");
	this.shape_175.setTransform(-2.2,-64.1,0.999,0.999);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(255,0,0,0.8)").s().p("AgXhQIAfgFIAQB1IgJAzIgPADg");
	this.shape_176.setTransform(-9.2,-63.5,0.999,0.999);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(255,0,0,0.8)").s().p("AgdhMIAegIIAdBxIgEA0IgRAFg");
	this.shape_177.setTransform(-16,-62.3,0.999,0.999);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(255,0,0,0.8)").s().p("AgjhIIAfgMIAnBuIABA1IgQAGg");
	this.shape_178.setTransform(-22.6,-60.3,0.999,0.999);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(255,0,0,0.8)").s().p("AgrhDIAegPIAzBpIAGA1IgPAHg");
	this.shape_179.setTransform(-28.8,-57.7,0.999,0.999);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(255,0,0,0.8)").s().p("Agyg9IAcgSIA+BjIALAzIgOAJg");
	this.shape_180.setTransform(-34.6,-54.4,0.999,0.999);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(255,0,0,0.8)").s().p("Ag5g3IAagUIBIBbIARAyIgNALg");
	this.shape_181.setTransform(-40.1,-50.6,0.999,0.999);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(255,0,0,0.8)").s().p("Ag/gwIAYgXIBRBUIAWAvIgMAMg");
	this.shape_182.setTransform(-45.1,-46.2,0.999,0.999);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(255,0,0,0.8)").s().p("AhFgoIAWgaIBaBLIAbAtIgLANg");
	this.shape_183.setTransform(-49.6,-41.3,0.999,0.999);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(255,0,0,0.8)").s().p("AhJggIATgcIBgBBIAgAqIgJAOg");
	this.shape_184.setTransform(-53.6,-35.9,0.999,0.999);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(255,0,0,0.8)").s().p("AhNgXIAPgeIBoA2IAkAmIgIAPg");
	this.shape_185.setTransform(-57,-30.2,0.999,0.999);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(255,0,0,0.8)").s().p("AhQgPIANgfIBtAtIAnAgIgGAQg");
	this.shape_186.setTransform(-59.8,-24.1,0.999,0.999);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(255,0,0,0.8)").s().p("AhSgFIAKghIBwAhIArAcIgEAQg");
	this.shape_187.setTransform(-61.9,-17.8,0.999,0.999);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,0,0,0.8)").s().p("AhTABIAGgfIBzAVIAuAXIgDARg");
	this.shape_188.setTransform(-63.3,-11.2,0.999,0.999);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(255,0,0,0.8)").s().p("AhUAKIADgfIB1AIIAwATIgBAQg");
	this.shape_189.setTransform(-64,-4.5,0.999,0.999);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(255,0,0,0.8)").s().p("AhUgNIB2gEIAyAPIABAPIinAFg");
	this.shape_190.setTransform(-64.1,2.2,0.999,0.999);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(255,0,0,0.8)").s().p("AhUgHIB0gQIA0AKIABAOIilAXg");
	this.shape_191.setTransform(-63.5,9.2,0.999,0.999);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(255,0,0,0.8)").s().p("AhVAAIBygdIA0AEIAEARIiiAmg");
	this.shape_192.setTransform(-62.2,16,0.999,0.999);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(255,0,0,0.8)").s().p("AhUAFIBvgnIA0gBIAFAPIicA4g");
	this.shape_193.setTransform(-60.3,22.7,0.999,0.999);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(255,0,0,0.8)").s().p("AhSAOIBpgyIA0gHIAIAPIiWBIg");
	this.shape_194.setTransform(-57.6,28.8,0.999,0.999);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(255,0,0,0.8)").s().p("AhPAXIBjg9IAzgNIAJAPIiNBYg");
	this.shape_195.setTransform(-54.4,34.6,0.999,0.999);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(255,0,0,0.8)").s().p("AhLAfIBbhHIAzgRIAKANIiEBmg");
	this.shape_196.setTransform(-50.6,40.1,0.999,0.999);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(255,0,0,0.8)").s().p("AhHAoIBUhRIAvgWIAMAMIh4Bzg");
	this.shape_197.setTransform(-46.1,45.1,0.999,0.999);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(255,0,0,0.8)").s().p("AhCAwIBLhaIAtgbIANALIhrCAg");
	this.shape_198.setTransform(-41.3,49.6,0.999,0.999);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,0,0,0.8)").s().p("Ag8A4IBBhhIAqggIAOAJIhdCKg");
	this.shape_199.setTransform(-35.9,53.6,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-72.6,145.3,145.2);


(lib.block_inside_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("ADcENQhniTichVQifhSizgDIhxg9IAnjYQAogDAuAAQD1AADVBzQCBBFBnBlQBjBhBDB7IidCYgAm7k7IgkDJIBpA4QC1AECfBTQCdBVBoCTIBpA4ICTiOQhEh5hjhfQhkhhh7hCQhng4h0gdQh0gdh3AAQgnAAgnADg");
	this.shape.setTransform(1.7,3.1,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-49,66.5,98.1);


(lib.block_inside_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AlIFOIA8hyQCThmBVidQBSieADi0IA9hxIDYAnQAMCLgbCJQgcCOhFB/QhECAhmBnQhhBjh6BDgAA7l2QgEC1hTCfQhUCdiUBoIg4BpICOCTQB5hEBghjQBhhkBBh7QBCh6AciHQAdiIgMiLIjJgkg");
	this.shape.setTransform(-3.1,1.7,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-33.2,98.2,66.5);


(lib.block_inside_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AhcDWQiBhFhmhmQhkhghDh7ICdiYIByA8QBmCTCdBUQCfBTCzADIBxA9IgnDXQgtAEgpAAQjzAAjXhzgAneiuQBEB5BkBfQBjBhB7BCQBnA4B0AdQB0AdB3AAQAgAAAugDIAkjJIhpg4QizgDihhUQiehWhniSIhpg4g");
	this.shape.setTransform(-1.7,-3.1,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.2,-49,66.5,98.2);


(lib.block_inside_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AlFHEQgMiMAbiJQAciNBFh/QBEiABmhmQBhhkB7hDICYCdIg8BxQiTBnhVCdQhSCdgDC1Ig9BxgAgpk3QhiBkhBB7QhCB5gcCJQgcCHALCLIDJAkIA4hpQAEi0BTigQBUidCUhoIA4hpIiOiTQh6BEheBjg");
	this.shape.setTransform(3.1,-1.7,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-33.2,98.2,66.4);


(lib.result_frame2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EiZ3AAAMEzvAAA");
	this.shape.setTransform(984.8,-7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ECSfACqIEilTIC3AAIkiFTgECMzACqIEilTIC3AAIkiFTgECHIACqIEhlTIC3AAIkhFTgECBdACqIEilTIC3AAIkiFTgEB7xACqIEilTIC3AAIkiFTgEB2GACqIEhlTIC3AAIkhFTgEBwbACqIEhlTIC3AAIkhFTgEBqvACqIEilTIC3AAIkiFTgEBlDACqIEilTIC3AAIkiFTgEBfZACqIEhlTIC3AAIkhFTgEBZtACqIEilTIC3AAIkiFTgEBUBACqIEilTIC3AAIkiFTgEBOgACqIEilTIC3AAIkiFTgEBI0ACqIEilTIC3AAIkiFTgEBDJACqIEhlTIC3AAIkhFTgEA9eACqIEilTIC3AAIkiFTgEA3yACqIEilTIC3AAIkiFTgEAyHACqIEhlTIC3AAIkhFTgEAscACqIEhlTIC3AAIkhFTgEAmwACqIEilTIC3AAIkiFTgEAhEACqIEilTIC3AAIkiFTgAbaCqIEhlTIC3AAIkhFTgAVuCqIEilTIC3AAIkiFTgAQCCqIEilTIC3AAIkiFTgAKbCqIEhlTIC3AAIkhFTgAEvCqIEilTIC3AAIkiFTgAg7CqIEglTIC3AAIkiFTgAmlCqIEhlTIC1AAIkfFTgAsRCqIEilTIC3AAIkiFTgAx9CqIEilTIC3AAIkiFTgA3oCqIEilTIC3AAIkiFTgA9UCqIEilTIC3AAIkiFTgEgi/ACqIEhlTIC3AAIkhFTgEgoqACqIEilTIC3AAIkiFTgEguWACqIEilTIC3AAIkiFTgEg0BACqIEhlTIC3AAIkhFTgEg5iACqIEhlTIC3AAIkhFTgEg/OACqIEilTIC3AAIkiFTgEhE6ACqIEilTIC3AAIkiFTgEhKkACqIEhlTIC3AAIkhFTgEhQQACqIEilTIC3AAIkiFTgEhV8ACqIEilTIC3AAIkiFTgEhbnACqIEilTIC3AAIkiFTgEhhTACqIEilTIC3AAIkiFTgEhm+ACqIEhlTIC3AAIkhFTgEhspACqIEilTIC3AAIkiFTgEhyVACqIEilTIC3AAIkiFTgEh4AACqIEhlTIC3AAIkhFTgEh9dACqIEhlTIC3AAIkhFTgEiDJACqIEilTIC3AAIkiFTgEiI1ACqIEilTIC3AAIkiFTgEiOfACqIEhlTIC3AAIkhFTgEiULACqIEilTIC3AAIkiFTgEiZ3ACqIEilTIC3AAIkiFTg");
	this.shape_1.setTransform(984.8,17);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-8,1971.7,42);


(lib.result_frame1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EiZ3AAAMEzvAAA");
	this.shape.setTransform(984.8,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ECSfACqIEilTIC3AAIkiFTgECMzACqIEilTIC3AAIkiFTgECHIACqIEhlTIC3AAIkhFTgECBdACqIEilTIC3AAIkiFTgEB7xACqIEilTIC3AAIkiFTgEB2GACqIEhlTIC3AAIkhFTgEBwbACqIEhlTIC3AAIkhFTgEBqvACqIEilTIC3AAIkiFTgEBlDACqIEilTIC3AAIkiFTgEBfZACqIEhlTIC3AAIkhFTgEBZtACqIEilTIC3AAIkiFTgEBUBACqIEilTIC3AAIkiFTgEBOgACqIEilTIC3AAIkiFTgEBI0ACqIEilTIC3AAIkiFTgEBDJACqIEhlTIC3AAIkhFTgEA9eACqIEilTIC3AAIkiFTgEA3yACqIEilTIC3AAIkiFTgEAyHACqIEhlTIC3AAIkhFTgEAscACqIEhlTIC3AAIkhFTgEAmwACqIEilTIC3AAIkiFTgEAhEACqIEilTIC3AAIkiFTgAbaCqIEhlTIC3AAIkhFTgAVuCqIEilTIC3AAIkiFTgAQCCqIEilTIC3AAIkiFTgAKbCqIEhlTIC3AAIkhFTgAEvCqIEilTIC3AAIkiFTgAg7CqIEglTIC3AAIkiFTgAmlCqIEhlTIC1AAIkfFTgAsRCqIEilTIC3AAIkiFTgAx9CqIEilTIC3AAIkiFTgA3oCqIEilTIC3AAIkiFTgA9UCqIEilTIC3AAIkiFTgEgi/ACqIEhlTIC3AAIkhFTgEgoqACqIEilTIC3AAIkiFTgEguWACqIEilTIC3AAIkiFTgEg0BACqIEhlTIC3AAIkhFTgEg5iACqIEhlTIC3AAIkhFTgEg/OACqIEilTIC3AAIkiFTgEhE6ACqIEilTIC3AAIkiFTgEhKkACqIEhlTIC3AAIkhFTgEhQQACqIEilTIC3AAIkiFTgEhV8ACqIEilTIC3AAIkiFTgEhbnACqIEilTIC3AAIkiFTgEhhTACqIEilTIC3AAIkiFTgEhm+ACqIEhlTIC3AAIkhFTgEhspACqIEilTIC3AAIkiFTgEhyVACqIEilTIC3AAIkiFTgEh4AACqIEhlTIC3AAIkhFTgEh9dACqIEhlTIC3AAIkhFTgEiDJACqIEilTIC3AAIkiFTgEiI1ACqIEilTIC3AAIkiFTgEiOfACqIEhlTIC3AAIkhFTgEiULACqIEilTIC3AAIkiFTgEiZ3ACqIEilTIC3AAIkiFTg");
	this.shape_1.setTransform(984.8,17);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,1971.7,43);


(lib.result_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,90,117,0.298)").s().p("EiZ3APxIAA/iMEzvAAAIAAfig");
	this.shape.setTransform(984.8,101);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1969.7,202);


(lib.p4_tag_line_animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 17
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgNAAIAbAA");
	this.shape.setTransform(696.2,-43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhoAAIDRAA");
	this.shape_1.setTransform(705.3,-43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjCAAIGFAA");
	this.shape_2.setTransform(714.3,-43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkdAAII7AA");
	this.shape_3.setTransform(723.4,-43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},78).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// 图层 16
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAgLIAAAX");
	this.shape_4.setTransform(694.8,-59.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAAwIAAhf");
	this.shape_5.setTransform(694.8,-55.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAhUIAACp");
	this.shape_6.setTransform(694.8,-52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},75).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(5));

	// 图层 15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgJAAIATAA");
	this.shape_7.setTransform(648.3,-60.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhUAAICpAA");
	this.shape_8.setTransform(655.8,-60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D495D").ss(2,1,0,3).p("AigAAIFBAA");
	this.shape_9.setTransform(663.4,-60.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjsAAIHZAA");
	this.shape_10.setTransform(671,-60.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},71).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(8));

	// 图层 12
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgLAAIAXAA");
	this.shape_11.setTransform(468.5,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhPAAICfAA");
	this.shape_12.setTransform(475.3,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D495D").ss(2,1,0,3).p("AiTAAIEnAA");
	this.shape_13.setTransform(482.1,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_14.setTransform(488.9,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkbAAII3AA");
	this.shape_15.setTransform(495.7,8.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D495D").ss(2,1,0,3).p("AleAAIK9AA");
	this.shape_16.setTransform(502.5,8.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmjAAINHAA");
	this.shape_17.setTransform(509.3,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},53).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(23));

	// 图层 13
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAgHIAAAP");
	this.shape_18.setTransform(467.3,34.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAAxIAAhh");
	this.shape_19.setTransform(467.3,30.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAABaIAAiz");
	this.shape_20.setTransform(467.3,26.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAiBIAAED");
	this.shape_21.setTransform(467.3,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},49).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(30));

	// 图层 14
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgLAAIAXAA");
	this.shape_22.setTransform(414.5,35.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1D495D").ss(2,1,0,3).p("Ag+AAIB9AA");
	this.shape_23.setTransform(419.6,35.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhxAAIDjAA");
	this.shape_24.setTransform(424.7,35.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1D495D").ss(2,1,0,3).p("AikAAIFJAA");
	this.shape_25.setTransform(429.8,35.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_26.setTransform(434.9,35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkKAAIIVAA");
	this.shape_27.setTransform(440,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},44).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(33));

	// 图层 11
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgLAAIAXAA");
	this.shape_28.setTransform(428.5,78.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhPAAICfAA");
	this.shape_29.setTransform(435.3,78.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1D495D").ss(2,1,0,3).p("AiSAAIElAA");
	this.shape_30.setTransform(442,78.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjWAAIGtAA");
	this.shape_31.setTransform(448.8,78.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkZAAIIzAA");
	this.shape_32.setTransform(455.5,78.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1D495D").ss(2,1,0,3).p("AldAAIK7AA");
	this.shape_33.setTransform(462.3,78.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},55).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(22));

	// 图层 10
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAgHIAAAP");
	this.shape_34.setTransform(427.3,112.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAABAIAAh/");
	this.shape_35.setTransform(427.3,107.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAB4IAAjv");
	this.shape_36.setTransform(427.3,102);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAivIAAFf");
	this.shape_37.setTransform(427.3,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},51).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).wait(28));

	// 图层 9
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgLAAIAXAA");
	this.shape_38.setTransform(334.5,114.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhXAAICvAA");
	this.shape_39.setTransform(342.1,114.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1D495D").ss(2,1,0,3).p("AikAAIFJAA");
	this.shape_40.setTransform(349.8,114.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjwAAIHhAA");
	this.shape_41.setTransform(357.4,114.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1D495D").ss(2,1,0,3).p("Ak8AAIJ5AA");
	this.shape_42.setTransform(365,114.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmIAAIMRAA");
	this.shape_43.setTransform(372.6,114.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#1D495D").ss(2,1,0,3).p("AnVAAIOrAA");
	this.shape_44.setTransform(380.3,114.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},44).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).wait(32));

	// 图层 8
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgLk3IAXAAAAME4IgXAA");
	this.shape_45.setTransform(512,-148.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1D495D").ss(2,1,0,3).p("Ah5k3IBRAAAh5E4IDzAA");
	this.shape_46.setTransform(523,-148.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1D495D").ss(2,1,0,3).p("Ajnk3ICJAAAjnE4IHPAA");
	this.shape_47.setTransform(534,-148.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1D495D").ss(2,1,0,3).p("AlVk3IDBAAAlVE4IKrAA");
	this.shape_48.setTransform(545,-148.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#1D495D").ss(2,1,0,3).p("AnDk3ID5AAAnDE4IOHAA");
	this.shape_49.setTransform(556,-148.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1D495D").ss(2,1,0,3).p("Aoxk3IExAAAIyE4IxjAA");
	this.shape_50.setTransform(567,-148.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},55).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).wait(22));

	// 图层 7
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAgdIAAA7");
	this.shape_51.setTransform(510.8,-142.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAACBIAAkB");
	this.shape_52.setTransform(510.8,-139.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAADjIAAnG");
	this.shape_53.setTransform(510.8,-136.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAFHIAAqM");
	this.shape_54.setTransform(510.8,-133.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAGpIAAtS");
	this.shape_55.setTransform(510.8,-130.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAoMIAAQZ");
	this.shape_56.setTransform(510.8,-127.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51}]},49).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).wait(28));

	// 图层 6
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgJAAIATAA");
	this.shape_57.setTransform(480.8,-142.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgtAAIBbAA");
	this.shape_58.setTransform(484.4,-142.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhRAAICjAA");
	this.shape_59.setTransform(488,-142.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#1D495D").ss(2,1,0,3).p("Ah1AAIDrAA");
	this.shape_60.setTransform(491.6,-142.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#1D495D").ss(2,1,0,3).p("AiaAAIE1AA");
	this.shape_61.setTransform(495.3,-142.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57}]},44).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(34));

	// 图层 5
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1D495D").ss(2,1,0,3).p("ABV4oIAeAAAkmEGIAeAAAEOYpIAZAA");
	this.shape_62.setTransform(196.3,14.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAA4oIC3AAAl7EGIBwAAAC4YpIDEAA");
	this.shape_63.setTransform(204.8,14.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhV4oIFQAAAnREGIDDAAABiYpIFwAA");
	this.shape_64.setTransform(213.4,14.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#1D495D").ss(2,1,0,3).p("Aiq4oIHpAAAomEGIEVAAAANYpIIaAA");
	this.shape_65.setTransform(222,14.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkA4oIKDAAAp8EGIFoAAAhHYpILEAA");
	this.shape_66.setTransform(230.5,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62}]},29).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).wait(49));

	// 图层 4
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1D495D").ss(2,1,0,3).p("ABhyTIAAg3AkZNPIAAgeAEaSyIAAAZ");
	this.shape_67.setTransform(195,12.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#1D495D").ss(2,1,0,3).p("ABh1SIAADsAkZLXIAAClAEaVTIAAh0");
	this.shape_68.setTransform(195,8.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#1D495D").ss(2,1,0,3).p("ABh3bIAAGiAkZJ9IAAEsAEaXcIAAjQ");
	this.shape_69.setTransform(195,3.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#1D495D").ss(2,1,0,3).p("ABh5jIAAJXAkZIjIAAGzAEaZkIAAkr");
	this.shape_70.setTransform(195,-0.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#1D495D").ss(2,1,0,3).p("ABhvfIAAsMAkZQDIAAo6AEaVmIAAGG");
	this.shape_71.setTransform(195,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67}]},24).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(54));

	// 图层 3
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgOwRIAdAAAgOQSIATAA");
	this.shape_72.setTransform(94.8,15.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhswRIDZAAAhsQSIBzAA");
	this.shape_73.setTransform(104.2,15.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjKwRIGVAAAjKQSIDUAA");
	this.shape_74.setTransform(113.6,15.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkowRIJRAAAkoQSIE0AA");
	this.shape_75.setTransform(123,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},14).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).wait(65));

	// 图层 2
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAgkIAABJ");
	this.shape_76.setTransform(93.3,-0.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAC1IAAlp");
	this.shape_77.setTransform(93.3,2.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAFEIAAqH");
	this.shape_78.setTransform(93.3,4.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAHUIAAun");
	this.shape_79.setTransform(93.3,6.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAJjIAAzF");
	this.shape_80.setTransform(93.3,8.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAALzIAA3l");
	this.shape_81.setTransform(93.3,11);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAODIAA8F");
	this.shape_82.setTransform(93.3,13.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAAwRMAAAAgj");
	this.shape_83.setTransform(93.3,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_76}]},6).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).wait(69));

	// 图层 1
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#1D495D").ss(2,1,0,3).p("AgZAAIAzAA");
	this.shape_84.setTransform(2.6,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#1D495D").ss(2,1,0,3).p("AiGAAIENAA");
	this.shape_85.setTransform(13.6,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#1D495D").ss(2,1,0,3).p("Aj0AAIHpAA");
	this.shape_86.setTransform(24.5,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#1D495D").ss(2,1,0,3).p("AlhAAILDAA");
	this.shape_87.setTransform(35.5,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#1D495D").ss(2,1,0,3).p("AnOAAIOdAA");
	this.shape_88.setTransform(46.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.p4_tag_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text("身份证网贷黑名单", "bold 16px 'Microsoft YaHei'", "#1F5A75");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 176;
	this.label.setTransform(10,6);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(2));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape.setTransform(194,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AhPBQIAAifICfAAIAACfg");
	this.shape_1.setTransform(194,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1F5A75").ss(2,1,1).p("AweipMAg9AAAIAAFTMgg9AAAg");
	this.shape_2.setTransform(105.5,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1B1B").s().p("AweCqIAAlTMAg8AAAIAAFTg");
	this.shape_3.setTransform(105.5,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8AF8F3").ss(2,1,1).p("AweipMAg9AAAIAAFTMgg9AAAg");
	this.shape_4.setTransform(105.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,213,36);


(lib.p4_site_line_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#8AF8F3","rgba(255,255,255,0)"],[0.396,0.969],0,0,0,0,0,7.6).s().p("AgiA9QgIgGgHgHQgUgTAAgdQAAgbAUgWQAHgGAIgFQAQgIASgBQAcABAUATQAWAWAAAbQAAAdgWATQgUAWgcAAQgSgBgQgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.p4_site_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.label = new cjs.Text("芝麻", "22px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 31;
	this.label.lineWidth = 96;
	this.label.setTransform(-2,-18);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8AF1EC").ss(1,1,1).p("AD1ljIgWgmIgsAAAGwgmIAWAmIgWAkAmvAkIgWgkIAWgmAj4ljIAWgmIAsAAAj4FkIAWAmIAsAAAD1FkIgWAmIgsAA");
	this.shape.setTransform(0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1F5A75").ss(2,1,1).p("AnuAAID4msIHtAAID4GsIj4GtIntAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(31,90,117,0.498)").s().p("Aj2GsIj4msID4msIHtAAID4GsIj4Gsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8AF8F3").ss(1,1,1).p("AolAAIETnbIIlAAIETHbIkTHcIolAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-48.6,112,97.3);


(lib.line_animate4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D495D").ss(2,1,1).p("AgHAAIAPAA");
	this.shape.setTransform(830.7,115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D495D").ss(2,1,1).p("AisAAIFZAA");
	this.shape_1.setTransform(847.5,115);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D495D").ss(2,1,1).p("AlTAAIKnAA");
	this.shape_2.setTransform(864.4,115);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D495D").ss(2,1,1).p("An4AAIPxAA");
	this.shape_3.setTransform(881.2,115);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D495D").ss(2,1,1).p("AqeAAIU9AA");
	this.shape_4.setTransform(898,115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(23));

	// 图层 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgJIAAAT");
	this.shape_5.setTransform(965.2,116.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D495D").ss(2,1,1).p("AAABEIAAiH");
	this.shape_6.setTransform(965.2,121.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D495D").ss(2,1,1).p("AAAB/IAAj9");
	this.shape_7.setTransform(965.2,127.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D495D").ss(2,1,1).p("AAAi4IAAFx");
	this.shape_8.setTransform(965.2,133.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(20));

	// 图层 5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D495D").ss(2,1,1).p("AAQAAIggAA");
	this.shape_9.setTransform(963.5,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D495D").ss(2,1,1).p("AnvAAIPfAA");
	this.shape_10.setTransform(915.5,152.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1D495D").ss(2,1,1).p("AvOAAIedAA");
	this.shape_11.setTransform(867.6,152.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D495D").ss(2,1,1).p("A2uAAMAtdAAA");
	this.shape_12.setTransform(819.7,152.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D495D").ss(2,1,1).p("A+NAAMA8bAAA");
	this.shape_13.setTransform(771.7,152.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D495D").ss(2,1,1).p("EglsAAAMBLZAAA");
	this.shape_14.setTransform(723.8,152.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D495D").ss(2,1,1).p("EgtMAAAMBaYAAA");
	this.shape_15.setTransform(675.9,152.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D495D").ss(2,1,1).p("Eg0rAAAMBpXAAA");
	this.shape_16.setTransform(627.9,152.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D495D").ss(2,1,1).p("Eg8KAAAMB4VAAA");
	this.shape_17.setTransform(580,152.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D495D").ss(2,1,1).p("EBDrAAAMiHVAAA");
	this.shape_18.setTransform(532.1,152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},7).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(11));

	// 图层 2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgRIAAAj");
	this.shape_19.setTransform(99,153.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D495D").ss(2,1,1).p("AAAGSIAAsj");
	this.shape_20.setTransform(99,192.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1D495D").ss(2,1,1).p("AAAMSIAA4j");
	this.shape_21.setTransform(99,230.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D495D").ss(2,1,1).p("AAASSMAAAgkj");
	this.shape_22.setTransform(99,269.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1D495D").ss(2,1,1).p("AAAYRMAAAgwi");
	this.shape_23.setTransform(99,307.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D495D").ss(2,1,1).p("AAAeRMAAAg8i");
	this.shape_24.setTransform(99,345.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1D495D").ss(2,1,1).p("EAAAAkRMAAAhIh");
	this.shape_25.setTransform(99,384.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1D495D").ss(2,1,1).p("EAAAgqQMAAABUh");
	this.shape_26.setTransform(99,422.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1D495D").ss(2,1,0,3).p("AA8AAQAAAZgSAQQgRATgZAAQgYAAgRgTQgSgQAAgZQAAgYASgRQARgRAYgBQAAAAAAAAQAZAAARASQASARAAAYg");
	this.shape_27.setTransform(99.1,699.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAJAJQAJAIAAALQAAAMgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_28.setTransform(99.1,699.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},16).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_26},{t:this.shape_27}]},1).wait(3));

	// 图层 12
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_29.setTransform(96.6,424);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1D495D").ss(2,1,0,3).p("AhnAAIDPAA");
	this.shape_30.setTransform(88.5,424);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1D495D").ss(2,1,0,3).p("Ai4AAIFxAA");
	this.shape_31.setTransform(80.4,424);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkJAAIITAA");
	this.shape_32.setTransform(72.3,424);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1D495D").ss(2,1,0,3).p("AFbAAIq1AA");
	this.shape_33.setTransform(64.2,424);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D495D").ss(2,1,0,3).p("AkeAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQARgSAYgBQABAAAAAAQAZAAARATQASAQAAAYgAGXAAIq1AA");
	this.shape_34.setTransform(58.2,424);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AgTAUQgKgIABgMQgBgLAKgIQAIgKALABQAMgBAIAKQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_35.setTransform(23.5,424);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},21).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(828.9,114,3.6,2);


(lib.p3_txt_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("s\na\nd\nf\n3\n4\n6\n3\n4\n5\n6\ng\nh\nj\n6\n7\n8\n6\n7", "14px 'Microsoft YaHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 15;
	this.label.lineWidth = 12;

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,351.9);


(lib.p3_cube_progress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AhFAPIAAgdICLAAIAAAdg");
	this.shape.setTransform(7,140.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AhFAlIAAgeICLAAIAAAegAhFgFIAAgfICLAAIAAAfg");
	this.shape_1.setTransform(7,138.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AhFA7IAAgeICLAAIAAAegAhFAPIAAgdICLAAIAAAdgAhFgdIAAgdICLAAIAAAdg");
	this.shape_2.setTransform(7,136.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AhFBSIAAgfICLAAIAAAfgAhFAmIAAgfICLAAIAAAfgAhFgGIAAgdICLAAIAAAdgAhFgyIAAgfICLAAIAAAfg");
	this.shape_3.setTransform(7,133.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8AF8F3").s().p("AhFBpIAAgfICLAAIAAAfgAhFA8IAAgeICLAAIAAAegAhFAPIAAgbICLAAIAAAbgAhFgcIAAgeICLAAIAAAegAhFhJIAAgeICLAAIAAAeg");
	this.shape_4.setTransform(7,131.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AF8F3").s().p("AhFB/IAAgfICLAAIAAAfgAhFBTIAAgfICLAAIAAAfgAhFAlIAAgdICLAAIAAAdgAhFgFIAAgfICLAAIAAAfgAhFgzIAAgeICLAAIAAAegAhFhfIAAgfICLAAIAAAfg");
	this.shape_5.setTransform(7,129.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8AF8F3").s().p("AhFCVIAAgfICLAAIAAAfgAhFBpIAAgfICLAAIAAAfgAhFA7IAAgdICLAAIAAAdgAhFAPIAAgdICLAAIAAAdgAhFgdIAAgeICLAAIAAAegAhFhJIAAgfICLAAIAAAfgAhFh3IAAgdICLAAIAAAdg");
	this.shape_6.setTransform(7,127.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AF8F3").s().p("AhFCsIAAgfICLAAIAAAfgAhFB/IAAgeICLAAIAAAegAhFBSIAAgdICLAAIAAAdgAhFAlIAAgeICLAAIAAAegAhFgGIAAgeICLAAIAAAegAhFgyIAAgfICLAAIAAAfgAhFhgIAAgdICLAAIAAAdgAhFiMIAAgeICLAAIAAAeg");
	this.shape_7.setTransform(7,124.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8AF8F3").s().p("AhFDCIAAgeICLAAIAAAegAhFCWIAAgfICLAAIAAAfgAhFBoIAAgdICLAAIAAAdgAhFA8IAAgeICLAAIAAAegAhFAPIAAgdICLAAIAAAdgAhFgbIAAgfICLAAIAAAfgAhFhJIAAgdICLAAIAAAdgAhFh1IAAgfICLAAIAAAfgAhFijIAAgeICLAAIAAAeg");
	this.shape_8.setTransform(7,122.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8AF8F3").s().p("AhFDZIAAgfICLAAIAAAfgAhFCsIAAgeICLAAIAAAegAhFB/IAAgdICLAAIAAAdgAhFBSIAAgeICLAAIAAAegAhFAlIAAgeICLAAIAAAegAhFgFIAAgfICLAAIAAAfgAhFgzIAAgdICLAAIAAAdgAhFhfIAAgeICLAAIAAAegAhFiNIAAgeICLAAIAAAegAhFi5IAAgeICLAAIAAAeg");
	this.shape_9.setTransform(7,120.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8AF8F3").s().p("AhFDvIAAgfICLAAIAAAfgAhFDCIAAgeICLAAIAAAegAhFCVIAAgdICLAAIAAAdgAhFBoIAAgeICLAAIAAAegAhFA7IAAgeICLAAIAAAegAhFAPIAAgdICLAAIAAAdgAhFgdIAAgdICLAAIAAAdgAhFhJIAAgeICLAAIAAAegAhFh3IAAgeICLAAIAAAegAhFijIAAgeICLAAIAAAegAhFjRIAAgcICLAAIAAAcg");
	this.shape_10.setTransform(7,118.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8AF8F3").s().p("AhFEFIAAgeICLAAIAAAegAhFDZIAAgfICLAAIAAAfgAhFCrIAAgdICLAAIAAAdgAhFB/IAAgeICLAAIAAAegAhFBSIAAgfICLAAIAAAfgAhFAmIAAgfICLAAIAAAfgAhFgGIAAgdICLAAIAAAdgAhFgyIAAgfICLAAIAAAfgAhFhgIAAgeICLAAIAAAegAhFiMIAAgfICLAAIAAAfgAhFi6IAAgdICLAAIAAAdgAhFjmIAAgeICLAAIAAAeg");
	this.shape_11.setTransform(7,115.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8AF8F3").s().p("AhFEcIAAgeICLAAIAAAegAhFDwIAAgfICLAAIAAAfgAhFDCIAAgdICLAAIAAAdgAhFCWIAAgfICLAAIAAAfgAhFBoIAAgeICLAAIAAAegAhFA9IAAggICLAAIAAAggAhFAOIAAgbICLAAIAAAbgAhFgbIAAgfICLAAIAAAfgAhFhJIAAgfICLAAIAAAfgAhFh1IAAgfICLAAIAAAfgAhFijIAAgdICLAAIAAAdgAhFjPIAAgfICLAAIAAAfgAhFj8IAAgfICLAAIAAAfg");
	this.shape_12.setTransform(7,113.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8AF8F3").s().p("AhFEyIAAgeICLAAIAAAegAhFEGIAAgfICLAAIAAAfgAhFDYIAAgdICLAAIAAAdgAhFCsIAAgeICLAAIAAAegAhFB/IAAgfICLAAIAAAfgAhFBTIAAgfICLAAIAAAfgAhFAlIAAgdICLAAIAAAdgAhFgFIAAgfICLAAIAAAfgAhFgzIAAgeICLAAIAAAegAhFhfIAAgfICLAAIAAAfgAhFiNIAAgdICLAAIAAAdgAhFi5IAAgeICLAAIAAAegAhFjmIAAgfICLAAIAAAfgAhFkSIAAgfICLAAIAAAfg");
	this.shape_13.setTransform(7,111.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8AF8F3").s().p("AhFFIIAAgeICLAAIAAAegAhFEcIAAgfICLAAIAAAfgAhFDuIAAgdICLAAIAAAdgAhFDCIAAgeICLAAIAAAegAhFCVIAAgfICLAAIAAAfgAhFBpIAAgfICLAAIAAAfgAhFA7IAAgdICLAAIAAAdgAhFAPIAAgdICLAAIAAAdgAhFgdIAAgeICLAAIAAAegAhFhJIAAgfICLAAIAAAfgAhFh3IAAgdICLAAIAAAdgAhFijIAAgeICLAAIAAAegAhFjQIAAgfICLAAIAAAfgAhFj8IAAgfICLAAIAAAfgAhFkqIAAgdICLAAIAAAdg");
	this.shape_14.setTransform(7,109.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8AF8F3").s().p("AhFFfIAAgeICLAAIAAAegAhFEzIAAgfICLAAIAAAfgAhFEFIAAgdICLAAIAAAdgAhFDZIAAgfICLAAIAAAfgAhFCrIAAgeICLAAIAAAegAhFCAIAAggICLAAIAAAggAhFBRIAAgdICLAAIAAAdgAhFAmIAAgfICLAAIAAAfgAhFgGIAAgfICLAAIAAAfgAhFgyIAAgfICLAAIAAAfgAhFhgIAAgdICLAAIAAAdgAhFiMIAAgfICLAAIAAAfgAhFi5IAAgfICLAAIAAAfgAhFjlIAAggICLAAIAAAggAhFkTIAAgeICLAAIAAAegAhFk/IAAgfICLAAIAAAfg");
	this.shape_15.setTransform(7,107);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8AF8F3").s().p("AhFF2IAAgfICLAAIAAAfgAhFFKIAAgfICLAAIAAAfgAhFEcIAAgdICLAAIAAAdgAhFDwIAAgfICLAAIAAAfgAhFDCIAAgeICLAAIAAAegAhFCWIAAgfICLAAIAAAfgAhFBoIAAgdICLAAIAAAdgAhFA8IAAgeICLAAIAAAegAhFAPIAAgdICLAAIAAAdgAhFgbIAAgfICLAAIAAAfgAhFhJIAAgdICLAAIAAAdgAhFh1IAAgfICLAAIAAAfgAhFijIAAgeICLAAIAAAegAhFjPIAAgfICLAAIAAAfgAhFj9IAAgdICLAAIAAAdgAhFkpIAAgeICLAAIAAAegAhFlWIAAgfICLAAIAAAfg");
	this.shape_16.setTransform(7,104.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AF8F3").s().p("AhFGMIAAgeICLAAIAAAegAhFFgIAAgfICLAAIAAAfgAhFEyIAAgdICLAAIAAAdgAhFEGIAAgfICLAAIAAAfgAhFDYIAAgeICLAAIAAAegAhFCtIAAggICLAAIAAAggAhFB+IAAgdICLAAIAAAdgAhFBTIAAgfICLAAIAAAfgAhFAlIAAgfICLAAIAAAfgAhFgFIAAgfICLAAIAAAfgAhFgzIAAgdICLAAIAAAdgAhFhfIAAgfICLAAIAAAfgAhFiMIAAgfICLAAIAAAfgAhFi4IAAggICLAAIAAAggAhFjmIAAgeICLAAIAAAegAhFkSIAAgfICLAAIAAAfgAhFlAIAAgfICLAAIAAAfgAhFlsIAAgfICLAAIAAAfg");
	this.shape_17.setTransform(7,102.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8AF8F3").s().p("AhFGiIAAgeICLAAIAAAegAhFF2IAAgfICLAAIAAAfgAhFFIIAAgdICLAAIAAAdgAhFEcIAAgfICLAAIAAAfgAhFDuIAAgeICLAAIAAAegAhFDDIAAggICLAAIAAAggAhFCUIAAgdICLAAIAAAdgAhFBpIAAgfICLAAIAAAfgAhFA7IAAgfICLAAIAAAfgAhFAPIAAgdICLAAIAAAdgAhFgdIAAgdICLAAIAAAdgAhFhJIAAgfICLAAIAAAfgAhFh2IAAgfICLAAIAAAfgAhFiiIAAggICLAAIAAAggAhFjQIAAgeICLAAIAAAegAhFj8IAAgfICLAAIAAAfgAhFkqIAAgfICLAAIAAAfgAhFlWIAAgfICLAAIAAAfgAhFmEIAAgdICLAAIAAAdg");
	this.shape_18.setTransform(7,100.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AF8F3").s().p("AhFG5IAAgfICLAAIAAAfgAhFGNIAAgfICLAAIAAAfgAhFFfIAAgdICLAAIAAAdgAhFEzIAAgfICLAAIAAAfgAhFEFIAAgeICLAAIAAAegAhFDZIAAgfICLAAIAAAfgAhFCrIAAgdICLAAIAAAdgAhFB/IAAgeICLAAIAAAegAhFBSIAAgfICLAAIAAAfgAhFAmIAAgfICLAAIAAAfgAhFgGIAAgdICLAAIAAAdgAhFgyIAAgfICLAAIAAAfgAhFhgIAAgeICLAAIAAAegAhFiMIAAgfICLAAIAAAfgAhFi6IAAgdICLAAIAAAdgAhFjmIAAgeICLAAIAAAegAhFkTIAAgfICLAAIAAAfgAhFk/IAAgfICLAAIAAAfgAhFltIAAgdICLAAIAAAdgAhFmZIAAgfICLAAIAAAfg");
	this.shape_19.setTransform(7,98);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AhFHQIAAgfICLAAIAAAfgAhFGjIAAgeICLAAIAAAegAhFF2IAAgdICLAAIAAAdgAhFFJIAAgeICLAAIAAAegAhFEcIAAgeICLAAIAAAegAhFDwIAAgfICLAAIAAAfgAhFDCIAAgdICLAAIAAAdgAhFCWIAAgeICLAAIAAAegAhFBoIAAgeICLAAIAAAegAhFA8IAAgeICLAAIAAAegAhFAOIAAgaICLAAIAAAagAhFgcIAAgeICLAAIAAAegAhFhJIAAgeICLAAIAAAegAhFh1IAAgfICLAAIAAAfgAhFijIAAgdICLAAIAAAdgAhFjPIAAgeICLAAIAAAegAhFj9IAAgeICLAAIAAAegAhFkpIAAgeICLAAIAAAegAhFlXIAAgcICLAAIAAAcgAhFmDIAAgeICLAAIAAAegAhFmwIAAgeICLAAIAAAeg");
	this.shape_20.setTransform(7,95.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("AhFHmIAAgfICLAAIAAAfgAhFG6IAAgfICLAAIAAAfgAhFGMIAAgdICLAAIAAAdgAhFFgIAAgfICLAAIAAAfgAhFEyIAAgeICLAAIAAAegAhFEGIAAgfICLAAIAAAfgAhFDYIAAgdICLAAIAAAdgAhFCsIAAgeICLAAIAAAegAhFB/IAAgfICLAAIAAAfgAhFBTIAAgfICLAAIAAAfgAhFAlIAAgdICLAAIAAAdgAhFgFIAAgfICLAAIAAAfgAhFgzIAAgeICLAAIAAAegAhFhfIAAgfICLAAIAAAfgAhFiNIAAgdICLAAIAAAdgAhFi5IAAgeICLAAIAAAegAhFjmIAAgfICLAAIAAAfgAhFkSIAAgfICLAAIAAAfgAhFlAIAAgdICLAAIAAAdgAhFlsIAAgfICLAAIAAAfgAhFmaIAAgeICLAAIAAAegAhFnGIAAgfICLAAIAAAfg");
	this.shape_21.setTransform(7,93.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AhFH8IAAgfICLAAIAAAfgAhFHQIAAgfICLAAIAAAfgAhFGiIAAgdICLAAIAAAdgAhFF2IAAgfICLAAIAAAfgAhFFIIAAgeICLAAIAAAegAhFEcIAAgfICLAAIAAAfgAhFDuIAAgdICLAAIAAAdgAhFDCIAAgeICLAAIAAAegAhFCVIAAgfICLAAIAAAfgAhFBpIAAgfICLAAIAAAfgAhFA7IAAgdICLAAIAAAdgAhFAPIAAgdICLAAIAAAdgAhFgdIAAgeICLAAIAAAegAhFhJIAAgfICLAAIAAAfgAhFh3IAAgdICLAAIAAAdgAhFijIAAgeICLAAIAAAegAhFjQIAAgfICLAAIAAAfgAhFj8IAAgfICLAAIAAAfgAhFkqIAAgdICLAAIAAAdgAhFlWIAAgfICLAAIAAAfgAhFmEIAAgeICLAAIAAAegAhFmwIAAgfICLAAIAAAfgAhFneIAAgdICLAAIAAAdg");
	this.shape_22.setTransform(7,91.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AhFITIAAgfICLAAIAAAfgAhFHmIAAgeICLAAIAAAegAhFG5IAAgdICLAAIAAAdgAhFGMIAAgeICLAAIAAAegAhFFfIAAgeICLAAIAAAegAhFEzIAAgfICLAAIAAAfgAhFEFIAAgdICLAAIAAAdgAhFDZIAAgeICLAAIAAAegAhFCrIAAgeICLAAIAAAegAhFB/IAAgeICLAAIAAAegAhFBRIAAgcICLAAIAAAcgAhFAlIAAgeICLAAIAAAegAhFgGIAAgeICLAAIAAAegAhFgyIAAgfICLAAIAAAfgAhFhgIAAgdICLAAIAAAdgAhFiMIAAgeICLAAIAAAegAhFi6IAAgeICLAAIAAAegAhFjmIAAgeICLAAIAAAegAhFkUIAAgcICLAAIAAAcgAhFlAIAAgeICLAAIAAAegAhFltIAAgeICLAAIAAAegAhFmZIAAgfICLAAIAAAfgAhFnHIAAgdICLAAIAAAdgAhFnzIAAgeICLAAIAAAeg");
	this.shape_23.setTransform(7,89);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AhFIpIAAgeICLAAIAAAegAhFH9IAAgfICLAAIAAAfgAhFHPIAAgdICLAAIAAAdgAhFGjIAAgeICLAAIAAAegAhFF2IAAgfICLAAIAAAfgAhFFKIAAgfICLAAIAAAfgAhFEcIAAgdICLAAIAAAdgAhFDwIAAgfICLAAIAAAfgAhFDCIAAgeICLAAIAAAegAhFCWIAAgfICLAAIAAAfgAhFBoIAAgdICLAAIAAAdgAhFA8IAAgeICLAAIAAAegAhFAPIAAgdICLAAIAAAdgAhFgbIAAgfICLAAIAAAfgAhFhJIAAgdICLAAIAAAdgAhFh1IAAgfICLAAIAAAfgAhFijIAAgeICLAAIAAAegAhFjPIAAgfICLAAIAAAfgAhFj9IAAgdICLAAIAAAdgAhFkpIAAgeICLAAIAAAegAhFlWIAAgfICLAAIAAAfgAhFmCIAAgfICLAAIAAAfgAhFmwIAAgdICLAAIAAAdgAhFncIAAgfICLAAIAAAfgAhFoKIAAgeICLAAIAAAeg");
	this.shape_24.setTransform(7,86.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AhFJAIAAgfICLAAIAAAfgAhFITIAAgeICLAAIAAAegAhFHmIAAgdICLAAIAAAdgAhFG5IAAgeICLAAIAAAegAhFGMIAAgeICLAAIAAAegAhFFgIAAgfICLAAIAAAfgAhFEyIAAgdICLAAIAAAdgAhFEGIAAgeICLAAIAAAegAhFDYIAAgeICLAAIAAAegAhFCsIAAgeICLAAIAAAegAhFB+IAAgcICLAAIAAAcgAhFBSIAAgeICLAAIAAAegAhFAlIAAgeICLAAIAAAegAhFgFIAAgfICLAAIAAAfgAhFgzIAAgdICLAAIAAAdgAhFhfIAAgeICLAAIAAAegAhFiNIAAgeICLAAIAAAegAhFi5IAAgeICLAAIAAAegAhFjnIAAgcICLAAIAAAcgAhFkTIAAgeICLAAIAAAegAhFlAIAAgeICLAAIAAAegAhFlsIAAgfICLAAIAAAfgAhFmaIAAgdICLAAIAAAdgAhFnGIAAgeICLAAIAAAegAhFn0IAAgeICLAAIAAAegAhFogIAAgeICLAAIAAAeg");
	this.shape_25.setTransform(7,84.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AhFJWIAAgfICLAAIAAAfgAhFIpIAAgeICLAAIAAAegAhFH8IAAgdICLAAIAAAdgAhFHPIAAgeICLAAIAAAegAhFGiIAAgeICLAAIAAAegAhFF2IAAgfICLAAIAAAfgAhFFIIAAgdICLAAIAAAdgAhFEcIAAgeICLAAIAAAegAhFDuIAAgeICLAAIAAAegAhFDCIAAgeICLAAIAAAegAhFCUIAAgcICLAAIAAAcgAhFBoIAAgeICLAAIAAAegAhFA7IAAgeICLAAIAAAegAhFAPIAAgdICLAAIAAAdgAhFgdIAAgdICLAAIAAAdgAhFhJIAAgeICLAAIAAAegAhFh3IAAgeICLAAIAAAegAhFijIAAgeICLAAIAAAegAhFjRIAAgcICLAAIAAAcgAhFj9IAAgeICLAAIAAAegAhFkqIAAgeICLAAIAAAegAhFlWIAAgfICLAAIAAAfgAhFmEIAAgdICLAAIAAAdgAhFmwIAAgeICLAAIAAAegAhFneIAAgeICLAAIAAAegAhFoKIAAgeICLAAIAAAegAhFo4IAAgdICLAAIAAAdg");
	this.shape_26.setTransform(7,82.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AhFJsIAAgeICLAAIAAAegAhFJAIAAgfICLAAIAAAfgAhFISIAAgdICLAAIAAAdgAhFHmIAAgeICLAAIAAAegAhFG5IAAgfICLAAIAAAfgAhFGNIAAgfICLAAIAAAfgAhFFfIAAgdICLAAIAAAdgAhFEzIAAgfICLAAIAAAfgAhFEFIAAgeICLAAIAAAegAhFDZIAAgfICLAAIAAAfgAhFCrIAAgdICLAAIAAAdgAhFB/IAAgeICLAAIAAAegAhFBSIAAgfICLAAIAAAfgAhFAmIAAgfICLAAIAAAfgAhFgGIAAgdICLAAIAAAdgAhFgyIAAgfICLAAIAAAfgAhFhgIAAgeICLAAIAAAegAhFiMIAAgfICLAAIAAAfgAhFi6IAAgdICLAAIAAAdgAhFjmIAAgeICLAAIAAAegAhFkTIAAgfICLAAIAAAfgAhFk/IAAgfICLAAIAAAfgAhFltIAAgdICLAAIAAAdgAhFmZIAAgfICLAAIAAAfgAhFnHIAAgeICLAAIAAAegAhFnzIAAgfICLAAIAAAfgAhFohIAAgdICLAAIAAAdgAhFpNIAAgeICLAAIAAAeg");
	this.shape_27.setTransform(7,80);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AhFKDIAAgeICLAAIAAAegAhFJXIAAgfICLAAIAAAfgAhFIpIAAgdICLAAIAAAdgAhFH9IAAgfICLAAIAAAfgAhFHPIAAgeICLAAIAAAegAhFGkIAAggICLAAIAAAggAhFF1IAAgdICLAAIAAAdgAhFFKIAAgfICLAAIAAAfgAhFEcIAAgfICLAAIAAAfgAhFDwIAAgfICLAAIAAAfgAhFDCIAAgdICLAAIAAAdgAhFCWIAAgfICLAAIAAAfgAhFBpIAAgfICLAAIAAAfgAhFA9IAAggICLAAIAAAggAhFAPIAAgcICLAAIAAAcgAhFgbIAAgfICLAAIAAAfgAhFhJIAAgfICLAAIAAAfgAhFh1IAAgfICLAAIAAAfgAhFijIAAgdICLAAIAAAdgAhFjPIAAgfICLAAIAAAfgAhFj8IAAgfICLAAIAAAfgAhFkoIAAggICLAAIAAAggAhFlWIAAgeICLAAIAAAegAhFmCIAAgfICLAAIAAAfgAhFmwIAAgfICLAAIAAAfgAhFncIAAgfICLAAIAAAfgAhFoKIAAgdICLAAIAAAdgAhFo2IAAgfICLAAIAAAfgAhFpjIAAgfICLAAIAAAfg");
	this.shape_28.setTransform(7,77.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AhFKZIAAgeICLAAIAAAegAhFJtIAAgfICLAAIAAAfgAhFI/IAAgdICLAAIAAAdgAhFITIAAgeICLAAIAAAegAhFHmIAAgfICLAAIAAAfgAhFG6IAAgfICLAAIAAAfgAhFGMIAAgdICLAAIAAAdgAhFFgIAAgfICLAAIAAAfgAhFEyIAAgeICLAAIAAAegAhFEGIAAgfICLAAIAAAfgAhFDYIAAgdICLAAIAAAdgAhFCsIAAgeICLAAIAAAegAhFB/IAAgfICLAAIAAAfgAhFBTIAAgfICLAAIAAAfgAhFAlIAAgdICLAAIAAAdgAhFgFIAAgfICLAAIAAAfgAhFgzIAAgeICLAAIAAAegAhFhfIAAgfICLAAIAAAfgAhFiNIAAgdICLAAIAAAdgAhFi5IAAgeICLAAIAAAegAhFjmIAAgfICLAAIAAAfgAhFkSIAAgfICLAAIAAAfgAhFlAIAAgdICLAAIAAAdgAhFlsIAAgfICLAAIAAAfgAhFmaIAAgeICLAAIAAAegAhFnGIAAgfICLAAIAAAfgAhFn0IAAgdICLAAIAAAdgAhFogIAAgeICLAAIAAAegAhFpNIAAgfICLAAIAAAfgAhFp5IAAgfICLAAIAAAfg");
	this.shape_29.setTransform(7,75.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AhFKvIAAgeICLAAIAAAegAhFKDIAAgfICLAAIAAAfgAhFJVIAAgdICLAAIAAAdgAhFIpIAAgeICLAAIAAAegAhFH8IAAgfICLAAIAAAfgAhFHQIAAgfICLAAIAAAfgAhFGiIAAgdICLAAIAAAdgAhFF2IAAgfICLAAIAAAfgAhFFIIAAgeICLAAIAAAegAhFEcIAAgfICLAAIAAAfgAhFDuIAAgdICLAAIAAAdgAhFDCIAAgeICLAAIAAAegAhFCVIAAgfICLAAIAAAfgAhFBpIAAgfICLAAIAAAfgAhFA7IAAgdICLAAIAAAdgAhFAPIAAgdICLAAIAAAdgAhFgdIAAgeICLAAIAAAegAhFhJIAAgfICLAAIAAAfgAhFh3IAAgdICLAAIAAAdgAhFijIAAgeICLAAIAAAegAhFjQIAAgfICLAAIAAAfgAhFj8IAAgfICLAAIAAAfgAhFkqIAAgdICLAAIAAAdgAhFlWIAAgfICLAAIAAAfgAhFmEIAAgeICLAAIAAAegAhFmwIAAgfICLAAIAAAfgAhFneIAAgdICLAAIAAAdgAhFoKIAAgeICLAAIAAAegAhFo3IAAgfICLAAIAAAfgAhFpjIAAgfICLAAIAAAfgAhFqRIAAgdICLAAIAAAdg");
	this.shape_30.setTransform(7,73.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AhFLGIAAgeICLAAIAAAegAhFKaIAAgfICLAAIAAAfgAhFJsIAAgdICLAAIAAAdgAhFJAIAAgfICLAAIAAAfgAhFISIAAgeICLAAIAAAegAhFHnIAAggICLAAIAAAggAhFG4IAAgdICLAAIAAAdgAhFGNIAAgfICLAAIAAAfgAhFFfIAAgfICLAAIAAAfgAhFEzIAAgfICLAAIAAAfgAhFEFIAAgdICLAAIAAAdgAhFDZIAAgfICLAAIAAAfgAhFCsIAAgfICLAAIAAAfgAhFCAIAAggICLAAIAAAggAhFBSIAAgeICLAAIAAAegAhFAmIAAgfICLAAIAAAfgAhFgGIAAgfICLAAIAAAfgAhFgyIAAgfICLAAIAAAfgAhFhgIAAgdICLAAIAAAdgAhFiMIAAgfICLAAIAAAfgAhFi5IAAgfICLAAIAAAfgAhFjlIAAggICLAAIAAAggAhFkTIAAgeICLAAIAAAegAhFk/IAAgfICLAAIAAAfgAhFltIAAgfICLAAIAAAfgAhFmZIAAgfICLAAIAAAfgAhFnHIAAgdICLAAIAAAdgAhFnzIAAgfICLAAIAAAfgAhFogIAAgfICLAAIAAAfgAhFpMIAAggICLAAIAAAggAhFp6IAAgdICLAAIAAAdgAhFqmIAAgfICLAAIAAAfg");
	this.shape_31.setTransform(7,71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,139.1,14,3);


(lib.p3_cube_info_item7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(-82,70.5,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("AFil5IgNAbIlRLYIllAA");
	this.shape.setTransform(-35.9,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmGGQQgIgJAAgNIAAgBQAAgLAIgJQAJgJANAAQAMAAAJAJQAJAJAAALIAAABQAAAMgHAIIgCACIgDACQgHAGgLAAQgNAAgJgIgAFkleIANgbIgNAbQgFgCgDgDQgJgJAAgNQAAgNAJgIQAJgJAMAAQAMAAAJAJQAJAIAAANQAAALgHAJIgCACIgDACQgEAEgGABIgFABIgDAAQgHAAgGgDg");
	this.shape_1.setTransform(-37.4,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.9,-3.1,189.4,89.3);


(lib.p3_cube_info_item6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(41.2,67.6,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("AiglkIAAAEAillfIAALEIFLAA");
	this.shape.setTransform(16.5,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AChGIQgIgKAAgNIAAAAQAAgMAIgIQAJgKANABQAMgBAJAKQAJAIAAAMQAAAMgHAIIgCADIgDACQgIAGgKgBQgNAAgJgHgAjLlbQgJgIAAgNQAAgNAJgIQAJgJAMAAQANAAAIAJQAJAIAAANQAAALgHAIIgCACIgDADQgEADgGABIAAgEIAAAEIgFABIgDAAQgMABgJgJgAiulUg");
	this.shape_1.setTransform(17.8,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.1,152.8,86.3);


(lib.p3_cube_info_item5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(-60.2,27,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("ADzinIgOAbIijE0Ik0AA");
	this.shape.setTransform(-24.7,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkVC/IgDgCIgCgCQgHgJAAgLQAAgNAJgIQAJgJAMAAQANAAAJAJQAIAIAAANQAAANgIAJQgJAIgNAAQgKAAgIgGgADyiNIAOgcIgOAcIgDgDIgCgCQgHgIAAgMQAAgMAJgJQAIgJANAAQAMAAAJAJQAJAJAAAMQAAANgJAJQgJAIgMAAQgLAAgHgFg");
	this.shape_1.setTransform(-26,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,-3.1,168.2,45.8);


(lib.p3_cube_info_item4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(56.6,27,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("AjyinIAOAbICjE0IE0AA");
	this.shape.setTransform(24.2,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ADuC9QgIgJAAgNQAAgNAIgIQAJgJANAAQAMAAAJAJQAJAIAAANQAAALgHAJIgCACIgDACQgIAGgKAAQgNAAgJgIgAkYiQQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgHAIIgCACIgDADIgOgcIAOAcQgHAFgLAAQgMAAgJgIgAjxiNg");
	this.shape_1.setTransform(25.5,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.1,168.2,45.8);


(lib.p3_cube_info_item3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(-86.7,0,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("AF+FSIgOgbIlVqIImYAA");
	this.shape.setTransform(-35.7,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AF6FmQgJgJAAgMQAAgMAHgIIACgCIADgDQAHgFALAAQAMAAAJAIQAJAJAAANQAAAMgJAJQgJAJgMAAQgNAAgIgJgAGLFUIgOgcgAmjk7QgJgIAAgNQAAgLAHgJIACgCIADgCQAIgGAKAAQANAAAJAIQAIAJAAANQAAANgIAIQgJAJgNAAQgMAAgJgJg");
	this.shape_1.setTransform(-37.1,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.6,0,197.5,77.4);


(lib.p3_cube_info_item2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(74.7,20.4,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("Ak7DsIAOgbIDqm8IF/AA");
	this.shape.setTransform(35,51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AlhEAQgJgJAAgMQAAgNAJgJQAJgIAMAAQALAAAHAFIADADIACACQAHAIAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAlIDuIAOgcgAE3jVQgIgIAAgNQAAgNAIgJQAJgIANAAQAKAAAIAGIADACIACACQAHAJAAALQAAANgJAIQgJAJgMAAQgNAAgJgJg");
	this.shape_1.setTransform(36.3,50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,20.4,182.8,57);


(lib.p3_cube_info_item1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("贷款类号码主叫个数", "12px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.lineHeight = 18;
	this.label.lineWidth = 131;
	this.label.setTransform(87.9,0,0.8,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,3).p("Al9FSIAOgbIFVqIIGYAA");
	this.shape.setTransform(41.6,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmjFmQgJgJAAgMQAAgNAJgJQAJgIAMAAQALAAAHAFIADADIACACQAHAIAAAMQAAAMgJAJQgIAJgNAAQgMAAgJgJgAmKFUIAOgcgAF5k7QgIgIAAgNQAAgNAIgJQAJgIANAAQAKAAAIAGIADACIACACQAHAJAAALQAAANgJAIQgJAJgMAAQgNAAgJgJg");
	this.shape_1.setTransform(42.9,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,77.4);


(lib.p3_cube_block_outside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(31,90,117,0.298)").ss(1,1,1).p("AAAiVIAADHAjHCWIDHhkIDIBk");
	this.shape.setTransform(20,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1F5A75").ss(1,1,1).p("AjHhjIDHhkIDIBkIAADHIjIBkIjHhkIAAjHIDHBjIAADIAAAAAIDIhj");
	this.shape_1.setTransform(20,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#587783").s().p("AjHBjIDHhjIAADHgAAAAAIDHBjIjHBkgADHBjgAAAAAIDHhjIAADGgAjHBjIAAjGIDHBjIjHBjgAAAAAgAAAAAgAjHhjIDHhkIAADHgAAAjHIDHBkIjHBjgAAAjHg");
	this.shape_2.setTransform(20,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(138,248,243,0.2)").ss(1,1,1).p("AAAiVIAADHAjHCWIDHhkIDIBk");
	this.shape_3.setTransform(20,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8AF8F3").ss(1,1,1).p("AjHhjIDHBjIDIhjIAADHIjIBkIjHhkIAAjHIDHhkIDIBkAAAAAIAADI");
	this.shape_4.setTransform(20,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F5A75").s().p("AAADHgAjHBjIDHhjIjHBjIAAjGIDHBjIjHhjIDHhkIAADHIAAjHIDHBkIjHBjIDHBjIjHhjIDHhjIAADGIjHBkIAAjHIAADHgAAAjHg");
	this.shape_5.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,42);


(lib.p3_cube_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(31,90,117,0.298)").ss(1,1,1).p("AAAiVIAADHIDIBkAjHCWIDHhk");
	this.shape.setTransform(20,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1F5A75").ss(1,1,1).p("AjHhjIDHhkIDIBkIAADHIjIBkIjHhkIAAjHIDHBjIDIhjAAAAAIAADI");
	this.shape_1.setTransform(20,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#587783").s().p("AjHBjIDHhjIAADHgAAAAAIDHBjIjHBkgADHBjgAAAAAIDHhjIAADGgAjHBjIAAjGIDHBjIjHhjIDHhkIDHBkIjHBjIAAjHIAADHIjHBjgADHhjg");
	this.shape_2.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,42);


(lib.line_animate3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D495D").ss(2,1,1).p("AgHAAIAPAA");
	this.shape.setTransform(849.7,77);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D495D").ss(2,1,1).p("AiVAAIErAA");
	this.shape_1.setTransform(864.1,77);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D495D").ss(2,1,1).p("AkjAAIJHAA");
	this.shape_2.setTransform(878.6,77);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D495D").ss(2,1,1).p("AmxAAINjAA");
	this.shape_3.setTransform(893.1,77);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D495D").ss(2,1,1).p("Ao/AAIR/AA");
	this.shape_4.setTransform(907.5,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(18));

	// 图层 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgJIAAAT");
	this.shape_5.setTransform(965.2,78.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D495D").ss(2,1,1).p("AAACEIAAkH");
	this.shape_6.setTransform(965.2,90.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D495D").ss(2,1,1).p("AAAD9IAAn5");
	this.shape_7.setTransform(965.2,102.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D495D").ss(2,1,1).p("AAAl2IAALt");
	this.shape_8.setTransform(965.2,114.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(15));

	// 图层 5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D495D").ss(2,1,1).p("AAQAAIggAA");
	this.shape_9.setTransform(963.5,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D495D").ss(2,1,1).p("AnEAAIOJAA");
	this.shape_10.setTransform(919.8,152.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1D495D").ss(2,1,1).p("At5AAIbzAA");
	this.shape_11.setTransform(876.1,152.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D495D").ss(2,1,1).p("A0uAAMApdAAA");
	this.shape_12.setTransform(832.4,152.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D495D").ss(2,1,1).p("A7iAAMA3FAAA");
	this.shape_13.setTransform(788.8,152.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D495D").ss(2,1,1).p("EgiXAAAMBEvAAA");
	this.shape_14.setTransform(745.1,152.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D495D").ss(2,1,1).p("EgpMAAAMBSZAAA");
	this.shape_15.setTransform(701.4,152.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D495D").ss(2,1,1).p("EgwBAAAMBgDAAA");
	this.shape_16.setTransform(657.7,152.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D495D").ss(2,1,1).p("EA23AAAMhtsAAA");
	this.shape_17.setTransform(614.1,152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},7).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(7));

	// 图层 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgRIAAAj");
	this.shape_18.setTransform(263,153.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D495D").ss(2,1,1).p("AAAB7IAAj1");
	this.shape_19.setTransform(263,164.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D495D").ss(2,1,1).p("AAADlIAAnJ");
	this.shape_20.setTransform(263,175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1D495D").ss(2,1,1).p("AAAFOIAAqb");
	this.shape_21.setTransform(263,185.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D495D").ss(2,1,1).p("AAAG4IAAtv");
	this.shape_22.setTransform(263,196.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1D495D").ss(2,1,1).p("AAAogIAARB");
	this.shape_23.setTransform(263,206.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D495D").ss(2,1,0,3).p("AA8AAQAAAZgTAQQgQATgZAAQgYAAgQgTQgTgQAAgZQAAgYATgQQAQgSAYgBQAAAAAAAAQAZAAAQATQATAQAAAYg");
	this.shape_24.setTransform(263.1,267.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIgBALQABAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_25.setTransform(263.1,267.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},15).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_25},{t:this.shape_23},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(847.9,76,3.6,2);


(lib.process2_output_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape.setTransform(-11.3,-13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_1.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_2.setTransform(-15.3,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_3.setTransform(-17.5,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#205872").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_4.setTransform(-18,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#205872").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_5.setTransform(-16.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#205872").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_6.setTransform(-13.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_7.setTransform(-9,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_8.setTransform(3.2,17.6,1,1,-154.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_9.setTransform(8.4,15.6,1,1,-154.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_10.setTransform(12.6,11.9,1,1,-154.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_11.setTransform(16.1,6.8,1,1,150);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_12.setTransform(17.6,1.3,1,1,150);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_13.setTransform(16.9,-4.4,1,1,150);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#205872").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_14.setTransform(14.3,-9.8,1,1,150);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#205872").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_15.setTransform(10.5,-14,1,1,150);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#205872").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_16.setTransform(5.6,-16.6,1,1,150);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_17.setTransform(0.1,-17.5,1,1,150);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#205872").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_18.setTransform(-5.7,-16.5,1,1,150);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_19.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_20.setTransform(-9,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_21.setTransform(-13.5,12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_22.setTransform(-16.8,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_23.setTransform(-18,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_24.setTransform(-17.5,-4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_25.setTransform(-15.3,-9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_26.setTransform(-11.3,-13.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_27.setTransform(-5.7,-16.5,1,1,150);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_28.setTransform(0.1,-17.5,1,1,150);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_29.setTransform(5.6,-16.6,1,1,150);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_30.setTransform(10.5,-14,1,1,150);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_31.setTransform(14.3,-9.8,1,1,150);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_32.setTransform(16.9,-4.4,1,1,150);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_33.setTransform(17.6,1.3,1,1,150);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_34.setTransform(16.1,6.8,1,1,150);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_35.setTransform(16.9,-4.4,1,1,150);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_36.setTransform(17.6,1.3,1,1,150);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_37.setTransform(16.1,6.8,1,1,150);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1F5A75").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_38.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1F5A75").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_39.setTransform(-9,15.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1F5A75").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_40.setTransform(-13.5,12.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1F5A75").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_41.setTransform(-16.8,7.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1F5A75").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_42.setTransform(-18,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1F5A75").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_43.setTransform(-17.5,-4.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1F5A75").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_44.setTransform(-15.3,-9.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F5A75").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_45.setTransform(-11.3,-13.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1F5A75").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_46.setTransform(-5.7,-16.5,1,1,150);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F5A75").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_47.setTransform(0.1,-17.5,1,1,150);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1F5A75").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_48.setTransform(5.6,-16.6,1,1,150);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1F5A75").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_49.setTransform(10.5,-14,1,1,150);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1F5A75").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_50.setTransform(14.3,-9.8,1,1,150);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1F5A75").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_51.setTransform(16.9,-4.4,1,1,150);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1F5A75").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_52.setTransform(17.6,1.3,1,1,150);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1F5A75").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_53.setTransform(16.1,6.8,1,1,150);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1F5A75").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_54.setTransform(16.9,-4.4,1,1,150);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1F5A75").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_55.setTransform(17.6,1.3,1,1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_7,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_1,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]}).to({state:[{t:this.shape_18},{t:this.shape_7,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_1,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_11},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_20,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_19,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_36},{t:this.shape_37},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_37},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_52,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_52,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_53},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_54},{t:this.shape_52,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_53},{t:this.shape_51,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_54},{t:this.shape_55},{t:this.shape_53},{t:this.shape_51,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_52,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).wait(1));

	// 图层 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#8AF8F3").ss(2,1,1).p("AB4AAQAAAygjAjQgRARgTAIQgXAKgaAAQgZAAgXgKQgTgJgRgQQgjgjAAgyQAAgxAjgjQAjgjAxAAQA0AAAhAjQAjAjAAAxg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8AF8F3").s().p("AgJAmQgQgEgIgPQgJgNAFgPQACgIAFgGQAFgGAHgEQAOgJAOAFQAOADAIALIACAEQAJAPgFAOQgEAQgPAIQgJAGgKAAIgJgCg");
	this.shape_57.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-19.1,39.5,38.8);


(lib.p2_output_cusor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgJBaIAAizIASAAIAACzg");
	this.shape.setTransform(1,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,18);


(lib.p2_done_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.title = new cjs.Text("信用分析完成", "bold 26px 'Microsoft YaHei'", "#8AF8F3");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 36;
	this.title.lineWidth = 222;
	this.title.setTransform(111,3);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("ANtAKIAAgSIDwAAIAAASgAxcAKIAAgSIDwAAIAAASg");
	this.shape.setTransform(111.8,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,226.1,41);


(lib.line_animate2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D495D").ss(2,1,1).p("AgHAAIAPAA");
	this.shape.setTransform(868.2,39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D495D").ss(2,1,1).p("AilAAIFLAA");
	this.shape_1.setTransform(884.4,39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D495D").ss(2,1,1).p("AlEAAIKJAA");
	this.shape_2.setTransform(900.6,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D495D").ss(2,1,1).p("AniAAIPFAA");
	this.shape_3.setTransform(916.8,39);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(48));

	// 图层 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgJIAAAT");
	this.shape_4.setTransform(965.2,41.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D495D").ss(2,1,1).p("AAACVIAAkp");
	this.shape_5.setTransform(965.2,54.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D495D").ss(2,1,1).p("AAAEfIAAo9");
	this.shape_6.setTransform(965.2,68.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D495D").ss(2,1,1).p("AAAGpIAAtS");
	this.shape_7.setTransform(965.2,82);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D495D").ss(2,1,1).p("AAAozIAARn");
	this.shape_8.setTransform(965.2,95.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(44));

	// 图层 5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D495D").ss(2,1,1).p("AAQAAIggAA");
	this.shape_9.setTransform(963.5,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D495D").ss(2,1,1).p("AmyAAINlAA");
	this.shape_10.setTransform(921.6,152.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1D495D").ss(2,1,1).p("AtUAAIapAA");
	this.shape_11.setTransform(879.8,152.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D495D").ss(2,1,1).p("Az2AAMAntAAA");
	this.shape_12.setTransform(838,152.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D495D").ss(2,1,1).p("A6ZAAMA0zAAA");
	this.shape_13.setTransform(796.2,152.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D495D").ss(2,1,1).p("Egg6AAAMBB2AAA");
	this.shape_14.setTransform(754.4,152.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D495D").ss(2,1,1).p("EgndAAAMBO7AAA");
	this.shape_15.setTransform(712.5,152.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D495D").ss(2,1,1).p("Egt/AAAMBb/AAA");
	this.shape_16.setTransform(670.7,152.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D495D").ss(2,1,1).p("Eg0hAAAMBpDAAA");
	this.shape_17.setTransform(628.9,152.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D495D").ss(2,1,1).p("EA7FAAAMh2IAAA");
	this.shape_18.setTransform(587.1,152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},7).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(35));

	// 图层 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgRIAAAj");
	this.shape_19.setTransform(209,153.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D495D").ss(2,1,1).p("AAAGSIAAsj");
	this.shape_20.setTransform(209,192.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1D495D").ss(2,1,1).p("AAAMSIAA4j");
	this.shape_21.setTransform(209,230.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D495D").ss(2,1,1).p("AAASSMAAAgkj");
	this.shape_22.setTransform(209,269.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1D495D").ss(2,1,1).p("AAAYRMAAAgwi");
	this.shape_23.setTransform(209,307.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D495D").ss(2,1,1).p("AAAeRMAAAg8i");
	this.shape_24.setTransform(209,345.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1D495D").ss(2,1,1).p("EAAAAkRMAAAhIh");
	this.shape_25.setTransform(209,384.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1D495D").ss(2,1,1).p("EAAAgqQMAAABUh");
	this.shape_26.setTransform(209,422.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1D495D").ss(2,1,0,3).p("AA8AAQAAAZgTAQQgQATgZAAQgYAAgRgTQgSgQAAgZQAAgYASgRQARgRAYgBQAAAAAAAAQAZAAAQASQATARAAAYg");
	this.shape_27.setTransform(209.1,699.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIgBALQABAMgKAIQgIAJgMAAQgLAAgJgJg");
	this.shape_28.setTransform(209.1,699.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},16).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_26},{t:this.shape_27}]},1).wait(27));

	// 图层 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAcAAIg2AA");
	this.shape_29.setTransform(206.2,176.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjaAAIG1AA");
	this.shape_30.setTransform(187,176.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmZAAIMzAA");
	this.shape_31.setTransform(167.9,176.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApZAAISyAA");
	this.shape_32.setTransform(148.8,176.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsYAAIYxAA");
	this.shape_33.setTransform(129.6,176.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_34.setTransform(110.5,176.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_35.setTransform(104.5,176.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_36.setTransform(6,176.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},18).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(27));

	// 图层 9
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAcAAIg2AA");
	this.shape_37.setTransform(206.2,229.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjaAAIG1AA");
	this.shape_38.setTransform(187,229.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmZAAIMzAA");
	this.shape_39.setTransform(167.9,229.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApZAAISyAA");
	this.shape_40.setTransform(148.8,229.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsYAAIYxAA");
	this.shape_41.setTransform(129.6,229.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_42.setTransform(110.5,229.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_43.setTransform(104.5,229.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAJQgIAJgMgBQgLABgJgJg");
	this.shape_44.setTransform(6,229.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},21).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).wait(24));

	// 图层 10
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_45.setTransform(206.6,281.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_46.setTransform(187.3,281.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_47.setTransform(168.1,281.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_48.setTransform(148.9,281.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_49.setTransform(129.7,281.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_50.setTransform(110.5,281.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_51.setTransform(104.5,281.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAIAJQAKAJAAALQAAAMgKAJQgIAIgMABQgLgBgJgIg");
	this.shape_52.setTransform(6,281.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},24).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).wait(21));

	// 图层 11
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAUAAIgnAA");
	this.shape_53.setTransform(207,333.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjTAAIGoAA");
	this.shape_54.setTransform(187.7,333.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmUAAIMpAA");
	this.shape_55.setTransform(168.4,333.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApVAAISrAA");
	this.shape_56.setTransform(149.1,333.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsWAAIYtAA");
	this.shape_57.setTransform(129.8,333.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_58.setTransform(110.5,333.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_59.setTransform(104.5,333.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgIQAJgKALABQAMgBAIAKQAKAIAAALQAAAMgKAJQgIAIgMABQgLgBgJgIg");
	this.shape_60.setTransform(6,333.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},27).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).wait(18));

	// 图层 12
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_61.setTransform(206.6,385.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_62.setTransform(187.3,385.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_63.setTransform(168.1,385.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_64.setTransform(148.9,385.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_65.setTransform(129.7,385.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_66.setTransform(110.5,385.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_67.setTransform(104.5,385.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIAAALQAAAMgKAIQgIAJgMAAQgLAAgJgJg");
	this.shape_68.setTransform(6,385.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},30).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).wait(15));

	// 图层 13
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_69.setTransform(206.6,437.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_70.setTransform(187.3,437.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_71.setTransform(168.1,437.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_72.setTransform(148.9,437.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_73.setTransform(129.7,437.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_74.setTransform(110.5,437.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_75.setTransform(104.5,437.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_76.setTransform(6,437.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69}]},33).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).wait(12));

	// 图层 14
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_77.setTransform(206.6,489.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_78.setTransform(187.3,489.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_79.setTransform(168.1,489.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_80.setTransform(148.9,489.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_81.setTransform(129.7,489.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_82.setTransform(110.5,489.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_83.setTransform(104.5,489.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAJQgIAJgMAAQgLAAgJgJg");
	this.shape_84.setTransform(6,489.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77}]},36).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).wait(9));

	// 图层 15
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_85.setTransform(206.6,541);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_86.setTransform(187.3,541);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_87.setTransform(168.1,541);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_88.setTransform(148.9,541);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_89.setTransform(129.7,541);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_90.setTransform(110.5,541);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgRQAQgRAZgBQAAAAABAAQAZAAARASQASARAAAYgAQUAAI+vAA");
	this.shape_91.setTransform(104.5,541);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgKALABQAMgBAIAKQAKAIAAALQAAAMgKAIQgIAJgMAAQgLAAgJgJg");
	this.shape_92.setTransform(6,541);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85}]},39).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).wait(6));

	// 图层 16
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_93.setTransform(206.6,593);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_94.setTransform(187.3,593);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_95.setTransform(168.1,593);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_96.setTransform(148.9,593);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_97.setTransform(129.7,593);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_98.setTransform(110.5,593);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgRQAQgRAZgBQAAAAABAAQAZAAARASQASARAAAYgAQUAAI+vAA");
	this.shape_99.setTransform(104.5,593);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIAAALQAAAMgKAIQgIAJgMAAQgLAAgJgJg");
	this.shape_100.setTransform(6,593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_93}]},41).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).wait(4));

	// 图层 15
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_101.setTransform(206.6,645);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_102.setTransform(187.3,645);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_103.setTransform(168.1,645);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_104.setTransform(148.9,645);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_105.setTransform(129.7,645);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_106.setTransform(110.5,645);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgRQAQgRAZgBQAAAAABAAQAZAAARASQASARAAAYgAQUAAI+vAA");
	this.shape_107.setTransform(104.5,645);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAIQgIAKgMAAQgLAAgJgKg");
	this.shape_108.setTransform(6,645);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_101}]},44).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(866.4,38,3.6,2);


(lib.tag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgEhsIAAgJIAIAAIAAAJg");
	var mask_graphics_1 = new cjs.Graphics().p("AgICMIAAkXIARAAIAAEXg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah0CMIAAkXIDoAAIAAEXg");
	var mask_graphics_3 = new cjs.Graphics().p("AjYCMIAAkXIGxAAIAAEXg");
	var mask_graphics_4 = new cjs.Graphics().p("Ak3CMIAAkXIJvAAIAAEXg");
	var mask_graphics_5 = new cjs.Graphics().p("AmQCMIAAkXIMhAAIAAEXg");
	var mask_graphics_6 = new cjs.Graphics().p("AniCMIAAkXIPFAAIAAEXg");
	var mask_graphics_7 = new cjs.Graphics().p("AouCMIAAkXIRdAAIAAEXg");
	var mask_graphics_8 = new cjs.Graphics().p("Ap1CMIAAkXITrAAIAAEXg");
	var mask_graphics_9 = new cjs.Graphics().p("Aq1CMIAAkXIVrAAIAAEXg");
	var mask_graphics_10 = new cjs.Graphics().p("ArvCMIAAkXIXfAAIAAEXg");
	var mask_graphics_11 = new cjs.Graphics().p("AsjCMIAAkXIZHAAIAAEXg");
	var mask_graphics_12 = new cjs.Graphics().p("AtRCMIAAkXIajAAIAAEXg");
	var mask_graphics_13 = new cjs.Graphics().p("At5CMIAAkXIbzAAIAAEXg");
	var mask_graphics_14 = new cjs.Graphics().p("AuaCMIAAkXIc1AAIAAEXg");
	var mask_graphics_15 = new cjs.Graphics().p("Au2CMIAAkXIdtAAIAAEXg");
	var mask_graphics_16 = new cjs.Graphics().p("AvLCMIAAkXIeXAAIAAEXg");
	var mask_graphics_17 = new cjs.Graphics().p("AvbCMIAAkXIe3AAIAAEXg");
	var mask_graphics_18 = new cjs.Graphics().p("AvkCMIAAkXIfJAAIAAEXg");
	var mask_graphics_19 = new cjs.Graphics().p("AvmCMIAAkXIfNAAIAAEXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0.5,y:-11.9}).wait(1).to({graphics:mask_graphics_1,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:0,y:0}).wait(1).to({graphics:mask_graphics_3,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:0,y:0}).wait(1).to({graphics:mask_graphics_5,x:0,y:0}).wait(1).to({graphics:mask_graphics_6,x:0,y:0}).wait(1).to({graphics:mask_graphics_7,x:0,y:0}).wait(1).to({graphics:mask_graphics_8,x:0,y:0}).wait(1).to({graphics:mask_graphics_9,x:0,y:0}).wait(1).to({graphics:mask_graphics_10,x:0,y:0}).wait(1).to({graphics:mask_graphics_11,x:0,y:0}).wait(1).to({graphics:mask_graphics_12,x:0,y:0}).wait(1).to({graphics:mask_graphics_13,x:0,y:0}).wait(1).to({graphics:mask_graphics_14,x:0,y:0}).wait(1).to({graphics:mask_graphics_15,x:0,y:0}).wait(1).to({graphics:mask_graphics_16,x:0,y:0}).wait(1).to({graphics:mask_graphics_17,x:0,y:0}).wait(1).to({graphics:mask_graphics_18,x:0,y:0}).wait(1).to({graphics:mask_graphics_19,x:0,y:0}).wait(1));

	// 图层 1
	this.label = new cjs.Text("注册信息", "bold 18px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 26;
	this.label.lineWidth = 196;
	this.label.setTransform(-2,-13.8);

	this.label.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.label).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.line_animate1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1D495D").ss(2,1,1).p("AgHAAIAPAA");
	this.shape.setTransform(890.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D495D").ss(2,1,1).p("AiBAAIEDAA");
	this.shape_1.setTransform(903.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1D495D").ss(2,1,1).p("Aj8AAIH4AA");
	this.shape_2.setTransform(915.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1D495D").ss(2,1,1).p("Al2AAILtAA");
	this.shape_3.setTransform(927.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(40));

	// 图层 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgJIAAAT");
	this.shape_4.setTransform(965.2,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#1D495D").ss(2,1,1).p("AAADGIAAmL");
	this.shape_5.setTransform(965.2,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#1D495D").ss(2,1,1).p("AAAGBIAAsB");
	this.shape_6.setTransform(965.2,38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#1D495D").ss(2,1,1).p("AAAI8IAAx3");
	this.shape_7.setTransform(965.2,57.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D495D").ss(2,1,1).p("AAAr3IAAXv");
	this.shape_8.setTransform(965.2,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(36));

	// 图层 5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#1D495D").ss(2,1,1).p("AAQAAIggAA");
	this.shape_9.setTransform(963.5,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#1D495D").ss(2,1,1).p("AmyAAINlAA");
	this.shape_10.setTransform(921.6,152.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#1D495D").ss(2,1,1).p("AtUAAIapAA");
	this.shape_11.setTransform(879.8,152.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D495D").ss(2,1,1).p("Az2AAMAntAAA");
	this.shape_12.setTransform(838,152.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1D495D").ss(2,1,1).p("A6ZAAMA0zAAA");
	this.shape_13.setTransform(796.2,152.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1D495D").ss(2,1,1).p("Egg6AAAMBB2AAA");
	this.shape_14.setTransform(754.4,152.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D495D").ss(2,1,1).p("EgndAAAMBO7AAA");
	this.shape_15.setTransform(712.5,152.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#1D495D").ss(2,1,1).p("Egt/AAAMBb/AAA");
	this.shape_16.setTransform(670.7,152.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#1D495D").ss(2,1,1).p("Eg0hAAAMBpDAAA");
	this.shape_17.setTransform(628.9,152.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#1D495D").ss(2,1,1).p("EA7FAAAMh2IAAA");
	this.shape_18.setTransform(587.1,152.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},7).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(27));

	// 图层 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D495D").ss(2,1,1).p("AAAgRIAAAj");
	this.shape_19.setTransform(209,153.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#1D495D").ss(2,1,1).p("AAAF8IAAr3");
	this.shape_20.setTransform(209,190.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1D495D").ss(2,1,1).p("AAALnIAA3N");
	this.shape_21.setTransform(209,226.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#1D495D").ss(2,1,1).p("AAARRMAAAgih");
	this.shape_22.setTransform(209,262.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#1D495D").ss(2,1,1).p("AAAW8MAAAgt3");
	this.shape_23.setTransform(209,298.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#1D495D").ss(2,1,1).p("AAAcmMAAAg5L");
	this.shape_24.setTransform(209,335.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#1D495D").ss(2,1,1).p("EAAAAiRMAAAhEh");
	this.shape_25.setTransform(209,371.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#1D495D").ss(2,1,1).p("EAAAgn6MAAABP1");
	this.shape_26.setTransform(209,407.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#1D495D").ss(2,1,0,3).p("AA8AAQAAAZgTAQQgQATgZAAQgYAAgRgTQgSgQAAgZQAAgYASgRQARgRAYgBQAAAAAAAAQAZAAAQASQATARAAAYg");
	this.shape_27.setTransform(209.1,669.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJgBALQABAMgKAJQgIAJgMAAQgLAAgJgJg");
	this.shape_28.setTransform(209.1,669.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},16).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_26},{t:this.shape_27}]},1).wait(19));

	// 图层 7
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAcAAIg2AA");
	this.shape_29.setTransform(206.2,196.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjaAAIG1AA");
	this.shape_30.setTransform(187,196.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmZAAIMzAA");
	this.shape_31.setTransform(167.9,196.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApZAAISyAA");
	this.shape_32.setTransform(148.8,196.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsYAAIYxAA");
	this.shape_33.setTransform(129.6,196.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_34.setTransform(110.5,196.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_35.setTransform(104.5,196.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIAAALQAAAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_36.setTransform(6,196.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},18).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(19));

	// 图层 9
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAcAAIg2AA");
	this.shape_37.setTransform(206.2,249.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjaAAIG1AA");
	this.shape_38.setTransform(187,249.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmZAAIMzAA");
	this.shape_39.setTransform(167.9,249.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApZAAISyAA");
	this.shape_40.setTransform(148.8,249.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsYAAIYxAA");
	this.shape_41.setTransform(129.6,249.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_42.setTransform(110.5,249.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSARQgRASgZAAQgZAAgRgSQgSgRAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_43.setTransform(104.5,249.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIAAALQAAAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_44.setTransform(6,249.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},21).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).wait(16));

	// 图层 10
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_45.setTransform(206.6,301.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_46.setTransform(187.3,301.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_47.setTransform(168.1,301.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_48.setTransform(148.9,301.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_49.setTransform(129.7,301.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_50.setTransform(110.5,301.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_51.setTransform(104.5,301.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_52.setTransform(6,301.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45}]},24).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).wait(13));

	// 图层 11
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAUAAIgnAA");
	this.shape_53.setTransform(207,353.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjTAAIGoAA");
	this.shape_54.setTransform(187.7,353.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmUAAIMpAA");
	this.shape_55.setTransform(168.4,353.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApVAAISrAA");
	this.shape_56.setTransform(149.1,353.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsWAAIYtAA");
	this.shape_57.setTransform(129.8,353.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_58.setTransform(110.5,353.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_59.setTransform(104.5,353.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgJQAJgJALAAQAMAAAIAJQAKAJAAALQAAAMgKAJQgIAIgMABQgLgBgJgIg");
	this.shape_60.setTransform(6,353.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53}]},27).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).wait(10));

	// 图层 12
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_61.setTransform(206.6,405.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_62.setTransform(187.3,405.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_63.setTransform(168.1,405.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_64.setTransform(148.9,405.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_65.setTransform(129.7,405.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_66.setTransform(110.5,405.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_67.setTransform(104.5,405.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8AF8F3").s().p("AgUAVQgIgJgBgMQABgLAIgIQAJgKALABQAMgBAIAKQAKAIAAALQAAAMgKAJQgIAIgMABQgLgBgJgIg");
	this.shape_68.setTransform(6,405.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},30).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).wait(7));

	// 图层 13
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_69.setTransform(206.6,457.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_70.setTransform(187.3,457.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_71.setTransform(168.1,457.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_72.setTransform(148.9,457.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_73.setTransform(129.7,457.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_74.setTransform(110.5,457.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAZgSAQQgRATgZAAQgZAAgRgTQgSgQAAgZQAAgYASgQQAQgSAZgBQAAAAABAAQAZAAARATQASAQAAAYgAQUAAI+vAA");
	this.shape_75.setTransform(104.5,457.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgIQAJgJALAAQAMAAAIAJQAKAIAAALQAAAMgKAIQgIAJgMAAQgLAAgJgJg");
	this.shape_76.setTransform(6,457.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69}]},33).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).wait(4));

	// 图层 14
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#1D495D").ss(2,1,0,3).p("AAXAAIguAA");
	this.shape_77.setTransform(206.6,509.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#1D495D").ss(2,1,0,3).p("AjXAAIGvAA");
	this.shape_78.setTransform(187.3,509.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#1D495D").ss(2,1,0,3).p("AmXAAIMvAA");
	this.shape_79.setTransform(168.1,509.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#1D495D").ss(2,1,0,3).p("ApXAAISvAA");
	this.shape_80.setTransform(148.9,509.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsXAAIYvAA");
	this.shape_81.setTransform(129.7,509.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#1D495D").ss(2,1,0,3).p("APYAAI+vAA");
	this.shape_82.setTransform(110.5,509.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#1D495D").ss(2,1,0,3).p("AubAAIAAAAQAAAYgSARQgRATgZAAQgZAAgRgTQgSgRAAgYQAAgYASgRQAQgRAZgBQAAAAABAAQAZAAARASQASARAAAYgAQUAAI+vAA");
	this.shape_83.setTransform(104.5,509.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8AF8F3").s().p("AgUAUQgIgIgBgMQABgLAIgJQAJgIALgBQAMABAIAIQAKAJAAALQAAAMgKAIQgIAKgMgBQgLABgJgKg");
	this.shape_84.setTransform(6,509.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_77}]},36).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(889.1,-1,3.6,2);


(lib.phase_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text("PHASE X", "bold 14px 'Microsoft YaHei'", "#1F5A75");
	this.label.name = "label";
	this.label.lineHeight = 20;
	this.label.lineWidth = 100;
	this.label.setTransform(10,4);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(3));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AhFBFIAAiJICLAAIAACJg");
	this.shape.setTransform(146,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AhFBFIAAiJICLAAIAACJg");
	this.shape_1.setTransform(146,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AhFBFIAAiJICLAAIAACJg");
	this.shape_2.setTransform(146,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1F5A75").ss(2,1,1).p("AsfiLIY/AAIAAEXI4/AAg");
	this.shape_3.setTransform(80,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1B1B").s().p("AsfCLIAAkWIY/AAIAAEWg");
	this.shape_4.setTransform(80,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F6AF36").ss(2,1,1).p("AsfiLIY/AAIAAEXI4/AAg");
	this.shape_5.setTransform(80,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8AF8F3").ss(2,1,1).p("AsfiLIY/AAIAAEXI4/AAg");
	this.shape_6.setTransform(80,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,162,30);


(lib.process_link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AIrCLIh3iLIB3iLIBLAAIh3CLIB3CLgAGlCLIh3iLIB3iLIBMAAIh4CLIB4CLgAEgCLIh3iLIB3iLIBMAAIh4CLIB4CLgACaCLIh3iLIB3iLIBMAAIh4CLIB4CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh4iLIB4iLIBLAAIh3CLIB3CLgAjzCLIh3iLIB3iLIBLAAIh3CLIB3CLgAl5CLIh3iLIB3iLIBLAAIh3CLIB3CLgAn+CLIh4iLIB4iLIBMAAIh4CLIB4CLg");
	this.shape.setTransform(63.1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AAVCLIh1iLIB1iLIBMAAIh2CLIB2CLg");
	this.shape_1.setTransform(116.5,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5A75").s().p("AHoCLIh3iLIB3iLIBMAAIh4CLIB4CLgAFjCLIh4iLIB4iLIBLAAIh3CLIB3CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBLAAIh3CLIB3CLgAgrCLIh4iLIB4iLIBJAAIh1CLIB1CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh3iLIB3iLIBLAAIh3CLIB3CLgAm7CLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_2.setTransform(56.4,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("ABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgrCLIh4iLIB4iLIBJAAIh2CLIB2CLg");
	this.shape_3.setTransform(109.8,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5A75").s().p("AGmCLIh4iLIB4iLIBLAAIh3CLIB3CLgAEgCLIh3iLIB3iLIBLAAIh3CLIB3CLgACbCLIh3iLIB3iLIBLAAIh4CLIB4CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh3iLIB3iLIBMAAIh4CLIB4CLgAjzCLIh4iLIB4iLIBLAAIh3CLIB3CLgAl4CLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_4.setTransform(49.8,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AF8F3").s().p("ACbCLIh3iLIB3iLIBLAAIh3CLIB3CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_5.setTransform(103.1,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F5A75").s().p("AFjCLIh3iLIB3iLIBLAAIh3CLIB3CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgrCLIh3iLIB3iLIBJAAIh1CLIB1CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_6.setTransform(43.1,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AF8F3").s().p("ADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh2iLIB2iLIBMAAIh4CLIB4CLgAgrCLIh4iLIB4iLIBJAAIh1CLIB1CLgAixCLIh3iLIB3iLIBLAAIh3CLIB3CLg");
	this.shape_7.setTransform(96.5,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F5A75").s().p("AEgCLIh3iLIB3iLIBMAAIh4CLIB4CLgACbCLIh4iLIB4iLIBLAAIh3CLIB3CLgAAWCLIh1iLIB1iLIBLAAIh1CLIB1CLgAhuCLIh3iLIB3iLIBLAAIh3CLIB3CLgAjzCLIh4iLIB4iLIBMAAIh4CLIB4CLg");
	this.shape_8.setTransform(36.4,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8AF8F3").s().p("AEgCLIh3iLIB3iLIBMAAIh4CLIB4CLgACbCLIh4iLIB4iLIBLAAIh4CLIB4CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh3iLIB3iLIBLAAIh3CLIB3CLgAj0CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_9.setTransform(89.8,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F5A75").s().p("ADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgrCLIh4iLIB4iLIBJAAIh1CLIB1CLgAiwCLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_10.setTransform(29.8,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8AF8F3").s().p("AFjCLIh3iLIB3iLIBLAAIh3CLIB3CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgsCLIh3iLIB3iLIBKAAIh2CLIB2CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_11.setTransform(83.1,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F5A75").s().p("ACbCLIh3iLIB3iLIBLAAIh3CLIB3CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_12.setTransform(23.1,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8AF8F3").s().p("AGlCLIh3iLIB3iLIBMAAIh4CLIB4CLgAEgCLIh4iLIB4iLIBMAAIh4CLIB4CLgACbCLIh4iLIB4iLIBLAAIh3CLIB3CLgAAVCLIh1iLIB1iLIBLAAIh1CLIB1CLgAhvCLIh2iLIB2iLIBMAAIh4CLIB4CLgAj0CLIh3iLIB3iLIBMAAIh4CLIB4CLgAl5CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_13.setTransform(76.5,14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F5A75").s().p("ABYCLIh1iLIB1iLIBLAAIh3CLIB3CLgAgrCLIh4iLIB4iLIBKAAIh2CLIB2CLg");
	this.shape_14.setTransform(16.4,14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8AF8F3").s().p("AHoCLIh3iLIB3iLIBMAAIh4CLIB4CLgAFjCLIh4iLIB4iLIBLAAIh4CLIB4CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBLAAIh3CLIB3CLgAgsCLIh3iLIB3iLIBKAAIh2CLIB2CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh3iLIB3iLIBLAAIh3CLIB3CLgAm8CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_15.setTransform(69.8,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F5A75").s().p("AAWCLIh2iLIB2iLIBLAAIh1CLIB1CLg");
	this.shape_16.setTransform(9.8,14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AF8F3").s().p("AIrCLIh3iLIB3iLIBLAAIh3CLIB3CLgAGlCLIh3iLIB3iLIBMAAIh4CLIB4CLgAEgCLIh3iLIB3iLIBMAAIh4CLIB4CLgACaCLIh3iLIB3iLIBMAAIh4CLIB4CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh4iLIB4iLIBLAAIh3CLIB3CLgAjzCLIh3iLIB3iLIBLAAIh3CLIB3CLgAl5CLIh3iLIB3iLIBLAAIh3CLIB3CLgAn+CLIh4iLIB4iLIBMAAIh4CLIB4CLg");
	this.shape_17.setTransform(63.1,14);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8AF8F3").s().p("AHoCLIh3iLIB3iLIBMAAIh4CLIB4CLgAFjCLIh4iLIB4iLIBLAAIh3CLIB3CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBLAAIh3CLIB3CLgAgrCLIh4iLIB4iLIBJAAIh1CLIB1CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh3iLIB3iLIBLAAIh3CLIB3CLgAm7CLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_18.setTransform(56.4,14);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F5A75").s().p("AAVCLIh1iLIB1iLIBMAAIh2CLIB2CLg");
	this.shape_19.setTransform(116.5,14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AGmCLIh4iLIB4iLIBLAAIh3CLIB3CLgAEgCLIh3iLIB3iLIBLAAIh3CLIB3CLgACbCLIh3iLIB3iLIBLAAIh4CLIB4CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh3iLIB3iLIBMAAIh4CLIB4CLgAjzCLIh4iLIB4iLIBLAAIh3CLIB3CLgAl4CLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_20.setTransform(49.8,14);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1F5A75").s().p("ABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgrCLIh4iLIB4iLIBJAAIh2CLIB2CLg");
	this.shape_21.setTransform(109.8,14);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AFjCLIh3iLIB3iLIBLAAIh3CLIB3CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgrCLIh3iLIB3iLIBJAAIh1CLIB1CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_22.setTransform(43.1,14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AEgCLIh3iLIB3iLIBMAAIh4CLIB4CLgACbCLIh4iLIB4iLIBLAAIh3CLIB3CLgAAWCLIh1iLIB1iLIBLAAIh1CLIB1CLgAhuCLIh3iLIB3iLIBLAAIh3CLIB3CLgAjzCLIh4iLIB4iLIBMAAIh4CLIB4CLg");
	this.shape_23.setTransform(36.4,14);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1F5A75").s().p("ADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh2iLIB2iLIBMAAIh4CLIB4CLgAgrCLIh4iLIB4iLIBJAAIh1CLIB1CLgAixCLIh3iLIB3iLIBLAAIh3CLIB3CLg");
	this.shape_24.setTransform(96.5,14);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("ADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgrCLIh4iLIB4iLIBJAAIh1CLIB1CLgAiwCLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_25.setTransform(29.8,14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1F5A75").s().p("AEgCLIh3iLIB3iLIBMAAIh4CLIB4CLgACbCLIh4iLIB4iLIBLAAIh4CLIB4CLgAAVCLIh1iLIB1iLIBMAAIh2CLIB2CLgAhuCLIh3iLIB3iLIBLAAIh3CLIB3CLgAj0CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_26.setTransform(89.8,14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1F5A75").s().p("AFjCLIh3iLIB3iLIBLAAIh3CLIB3CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBMAAIh4CLIB4CLgAgsCLIh3iLIB3iLIBKAAIh2CLIB2CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh4iLIB4iLIBLAAIh3CLIB3CLg");
	this.shape_27.setTransform(83.1,14);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("ABYCLIh1iLIB1iLIBLAAIh3CLIB3CLgAgrCLIh4iLIB4iLIBKAAIh2CLIB2CLg");
	this.shape_28.setTransform(16.4,14);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1F5A75").s().p("AGlCLIh3iLIB3iLIBMAAIh4CLIB4CLgAEgCLIh4iLIB4iLIBMAAIh4CLIB4CLgACbCLIh4iLIB4iLIBLAAIh3CLIB3CLgAAVCLIh1iLIB1iLIBLAAIh1CLIB1CLgAhvCLIh2iLIB2iLIBMAAIh4CLIB4CLgAj0CLIh3iLIB3iLIBMAAIh4CLIB4CLgAl5CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_29.setTransform(76.5,14);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AAWCLIh2iLIB2iLIBLAAIh1CLIB1CLg");
	this.shape_30.setTransform(9.8,14);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1F5A75").s().p("AHoCLIh3iLIB3iLIBMAAIh4CLIB4CLgAFjCLIh4iLIB4iLIBLAAIh4CLIB4CLgADdCLIh3iLIB3iLIBMAAIh4CLIB4CLgABYCLIh1iLIB1iLIBLAAIh3CLIB3CLgAgsCLIh3iLIB3iLIBKAAIh2CLIB2CLgAixCLIh3iLIB3iLIBMAAIh4CLIB4CLgAk2CLIh3iLIB3iLIBLAAIh3CLIB3CLgAm8CLIh3iLIB3iLIBMAAIh4CLIB4CLg");
	this.shape_31.setTransform(69.8,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:103.1}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12,p:{x:23.1}},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_12,p:{x:103.1}},{t:this.shape_22}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_5,p:{x:23.1}}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.2,28);


(lib.process_head_phase_item = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F5A75").ss(3,1,0,3).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("AgwAxQgVgVAAgcQAAgcAVgUQAVgVAbAAQAdAAAUAVQAVAUAAAcQAAAcgVAVQgUAVgdAAQgbAAgVgVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(31,90,117,0.498)").s().p("AhGBGQgcgdAAgpQAAgoAcgeQAegcAoAAQAoAAAeAcQAeAegBAoQABApgeAdQgeAegogBQgoABgegegAgwgwQgVAUAAAcQAAAcAVAVQAVAVAbAAQAdAAAUgVQAVgVAAgcQAAgcgVgUQgUgVgdAAQgbAAgVAVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6AF36").s().p("AgwAxQgVgVAAgcQAAgcAVgUQAVgVAbAAQAdAAAUAVQAVAUAAAcQAAAcgVAVQgUAVgdAAQgbAAgVgVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-11.5,23,23);


(lib.process_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape.setTransform(-11.3,-13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_1.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_2.setTransform(-15.3,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_3.setTransform(-17.5,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#205872").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_4.setTransform(-18,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#205872").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_5.setTransform(-16.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#205872").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_6.setTransform(-13.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_7.setTransform(-9,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_8.setTransform(3.2,17.6,1,1,-154.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_9.setTransform(8.4,15.6,1,1,-154.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_10.setTransform(12.6,11.9,1,1,-154.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_11.setTransform(16.1,6.8,1,1,150);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_12.setTransform(17.6,1.3,1,1,150);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_13.setTransform(16.9,-4.4,1,1,150);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#205872").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_14.setTransform(14.3,-9.8,1,1,150);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#205872").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_15.setTransform(10.5,-14,1,1,150);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#205872").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_16.setTransform(5.6,-16.6,1,1,150);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_17.setTransform(0.1,-17.5,1,1,150);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#205872").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_18.setTransform(-5.7,-16.5,1,1,150);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_19.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_20.setTransform(-9,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_21.setTransform(-13.5,12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_22.setTransform(-16.8,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_23.setTransform(-18,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_24.setTransform(-17.5,-4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_25.setTransform(-15.3,-9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_26.setTransform(-11.3,-13.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_27.setTransform(-5.7,-16.5,1,1,150);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_28.setTransform(0.1,-17.5,1,1,150);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_29.setTransform(5.6,-16.6,1,1,150);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_30.setTransform(10.5,-14,1,1,150);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_31.setTransform(14.3,-9.8,1,1,150);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_32.setTransform(16.9,-4.4,1,1,150);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_33.setTransform(17.6,1.3,1,1,150);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_34.setTransform(16.1,6.8,1,1,150);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_35.setTransform(16.9,-4.4,1,1,150);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_36.setTransform(17.6,1.3,1,1,150);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_37.setTransform(16.1,6.8,1,1,150);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1F5A75").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_38.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1F5A75").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_39.setTransform(-9,15.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1F5A75").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_40.setTransform(-13.5,12.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1F5A75").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_41.setTransform(-16.8,7.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1F5A75").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_42.setTransform(-18,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1F5A75").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_43.setTransform(-17.5,-4.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1F5A75").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_44.setTransform(-15.3,-9.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1F5A75").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_45.setTransform(-11.3,-13.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1F5A75").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_46.setTransform(-5.7,-16.5,1,1,150);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F5A75").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_47.setTransform(0.1,-17.5,1,1,150);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1F5A75").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_48.setTransform(5.6,-16.6,1,1,150);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1F5A75").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_49.setTransform(10.5,-14,1,1,150);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1F5A75").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_50.setTransform(14.3,-9.8,1,1,150);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1F5A75").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_51.setTransform(16.9,-4.4,1,1,150);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1F5A75").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_52.setTransform(17.6,1.3,1,1,150);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1F5A75").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_53.setTransform(16.1,6.8,1,1,150);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1F5A75").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_54.setTransform(16.9,-4.4,1,1,150);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1F5A75").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_55.setTransform(17.6,1.3,1,1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_7,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_1,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]}).to({state:[{t:this.shape_18},{t:this.shape_7,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_1,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_11},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_20,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_19,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_21,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_22,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_23,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_24,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_36},{t:this.shape_37},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_25,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_37},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_26,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_27},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_19,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_21,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_22,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_23,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_52,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_51,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_52,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_53},{t:this.shape_24,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_54},{t:this.shape_52,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_53},{t:this.shape_51,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_25,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).to({state:[{t:this.shape_46},{t:this.shape_47},{t:this.shape_48},{t:this.shape_49},{t:this.shape_50},{t:this.shape_54},{t:this.shape_55},{t:this.shape_53},{t:this.shape_51,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_52,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_26,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_39},{t:this.shape_40},{t:this.shape_41},{t:this.shape_42},{t:this.shape_43},{t:this.shape_44},{t:this.shape_38},{t:this.shape_45}]},1).wait(1));

	// 图层 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#8AF8F3").ss(2,1,1).p("AB4AAQAAAygjAjQgRARgTAIQgXAKgaAAQgZAAgXgKQgTgJgRgQQgjgjAAgyQAAgxAjgjQAjgjAxAAQA0AAAhAjQAjAjAAAxg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8AF8F3").s().p("AgJAmQgQgEgIgPQgJgNAFgPQACgIAFgGQAFgGAHgEQAOgJAOAFQAOADAIALIACAEQAJAPgFAOQgEAQgPAIQgJAGgKAAIgJgCg");
	this.shape_57.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-19.1,39.5,38.8);


(lib.process_bar_track = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("EggVAAmIAAhLMBArAAAIAABLg");
	this.shape.setTransform(207,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414,7.7);


(lib.track2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#31464B").s().p("AGzAoIAthPIGVAAIgtBPgAgDAoIArhPIGVAAIgtBPgAm7AoIAthPIGTAAIgrBPgAt0AoIAthPIGVAAIgtBPg");
	this.shape.setTransform(88.5,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#31464B").s().p("ADXAoIAthPIGVAAIgtBPgAjfAoIAthPIGTAAIgtBPgAqXAoIAthPIGVAAIgtBPg");
	this.shape_1.setTransform(110.5,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AjgAoIAthPIGUAAIgtBPg");
	this.shape_2.setTransform(22.5,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#31464B").s().p("AgDAoIArhPIGVAAIgtBPgAm7AoIAthPIGTAAIgrBPg");
	this.shape_3.setTransform(132.5,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8AF8F3").s().p("AgDAoIArhPIGVAAIgtBPgAm8AoIAthPIGUAAIgsBPg");
	this.shape_4.setTransform(44.5,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#31464B").s().p("AjfAoIAthPIGTAAIgtBPg");
	this.shape_5.setTransform(154.5,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8AF8F3").s().p("ADXAoIAthPIGVAAIgtBPgAjfAoIAthPIGTAAIgtBPgAqYAoIAthPIGVAAIgtBPg");
	this.shape_6.setTransform(66.5,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AF8F3").s().p("AGzAoIAthPIGVAAIgtBPgAgDAoIArhPIGVAAIgtBPgAm7AoIAthPIGTAAIgrBPgAt0AoIAthPIGVAAIgtBPg");
	this.shape_7.setTransform(88.5,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},9).to({state:[{t:this.shape_4},{t:this.shape_3}]},10).to({state:[{t:this.shape_6},{t:this.shape_5}]},10).to({state:[{t:this.shape_7}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,8);


(lib.track = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6A6D76").s().p("AnzAoIAAhPIPmAAIAABPg");
	this.shape.setTransform(50,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,8);


(lib.p2_output_item_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("A79AoIAAhPMA37AAAIAABPg");
	this.shape.setTransform(179.1,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,358.1,8);


(lib.map_pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.cycle_progress_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AgXgkIAegIIARBSIgYAHg");
	this.shape.setTransform(101.9,13,2.887,2.887);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("AgaghIAAgBIAGgCIAUgHIADAAIAAABIAYBOIgZAJg");
	this.shape_1.setTransform(91.8,16,2.887,2.887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5A75").s().p("AAGAsIgjhKIAQgHIANgGIAeBNIAAAAIgYALg");
	this.shape_2.setTransform(82,19.7,2.887,2.887);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F5A75").s().p("AAKAsIgqhHIAcgQIAlBLIgWAMg");
	this.shape_3.setTransform(72.6,24.4,2.887,2.887);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5A75").s().p("AAOArIgxhDIAbgSIArBGIgVAPg");
	this.shape_4.setTransform(63.6,29.9,2.887,2.887);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F5A75").s().p("AglgUIAAgBIAFgEIAUgQIABABIAxBBIgUARg");
	this.shape_5.setTransform(55.2,36.2,2.887,2.887);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F5A75").s().p("AgmgQIgBAAIAVgVIACgCIABABIA3A8IgTASg");
	this.shape_6.setTransform(47.3,43.2,2.887,2.887);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F5A75").s().p("AgogMIgBAAIAVgaIA+A4IgSAVg");
	this.shape_7.setTransform(40.2,50.9,2.887,2.887);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F5A75").s().p("AAbAkIhFgtIASgaIBDAxIgQAWg");
	this.shape_8.setTransform(33.7,59.3,2.887,2.887);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F5A75").s().p("AAeAhIhJglIAAgBIAQgcIBHAsIgNAWIAAABIgBgBg");
	this.shape_9.setTransform(28,68.1,2.887,2.887);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F5A75").s().p("AAhAfIhMgfIANgeIBLAlIgMAYg");
	this.shape_10.setTransform(23.2,77.6,2.887,2.887);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F5A75").s().p("AAjAcIhPgaIALgdIBOAeIgJAZg");
	this.shape_11.setTransform(19.2,87.2,2.887,2.887);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F5A75").s().p("AgrAGIgBAAIAHgaIABgEIABAAIBPAYIgGAYg");
	this.shape_12.setTransform(16.1,97.4,2.887,2.887);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F5A75").s().p("AgrAKIAAAAIAFgbIABgDIABAAIBQARIgEAYg");
	this.shape_13.setTransform(14,107.7,2.887,2.887);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F5A75").s().p("AgqAOIAAgHIACgUIAAgDIABAAIBSAJIgCAYg");
	this.shape_14.setTransform(12.8,118.1,2.887,2.887);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F5A75").s().p("AgqgPIBVACIAAARIAAAHIgBAAIgLABIhIAEg");
	this.shape_15.setTransform(12.4,129.4,2.887,2.887);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F5A75").s().p("AgrgMIBUgGIADAYIgBABIhSAMg");
	this.shape_16.setTransform(13,140.2,2.887,2.887);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F5A75").s().p("AgsgIIBUgNIADARIABAHIAAAAIhRATg");
	this.shape_17.setTransform(14.6,150.6,2.887,2.887);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F5A75").s().p("AgjAaIgCgGIgGgUIgBgEIABAAIBQgUIAIAYIhPAag");
	this.shape_18.setTransform(17.1,160.9,2.887,2.887);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F5A75").s().p("AgrABIAAgBIABAAIBNgcIAKAYIhMAgIgBABg");
	this.shape_19.setTransform(20.4,170.9,2.887,2.887);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AgrABIAAgBIABAAIBNgcIAKAYIhMAgIgBABg");
	this.shape_20.setTransform(20.4,170.9,2.887,2.887);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("AgjAaIgCgGIgGgUIgBgEIABAAIBQgUIAIAYIhPAag");
	this.shape_21.setTransform(17.1,160.9,2.887,2.887);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AgsgIIBUgNIADARIABAHIAAAAIhRATg");
	this.shape_22.setTransform(14.6,150.6,2.887,2.887);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AgrgMIBUgGIADAYIgBABIhSAMg");
	this.shape_23.setTransform(13,140.2,2.887,2.887);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AgqgPIBVACIAAARIAAAHIgBAAIgLABIhIAEg");
	this.shape_24.setTransform(12.4,129.4,2.887,2.887);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AgqAOIAAgHIACgUIAAgDIABAAIBSAJIgCAYg");
	this.shape_25.setTransform(12.8,118.1,2.887,2.887);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AgrAKIAAAAIAFgbIABgDIABAAIBQARIgEAYg");
	this.shape_26.setTransform(14,107.7,2.887,2.887);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AgrAGIgBAAIAHgaIABgEIABAAIBPAYIgGAYg");
	this.shape_27.setTransform(16.1,97.4,2.887,2.887);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AAjAcIhPgaIALgdIBOAeIgJAZg");
	this.shape_28.setTransform(19.2,87.2,2.887,2.887);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AAhAfIhMgfIANgeIBLAlIgMAYg");
	this.shape_29.setTransform(23.2,77.6,2.887,2.887);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AAeAhIhJglIAAgBIAQgcIBHAsIgNAWIAAABIgBgBg");
	this.shape_30.setTransform(28,68.1,2.887,2.887);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AAbAkIhFgtIASgaIBDAxIgQAWg");
	this.shape_31.setTransform(33.7,59.3,2.887,2.887);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8AF8F3").s().p("AgogMIgBAAIAVgaIA+A4IgSAVg");
	this.shape_32.setTransform(40.2,50.9,2.887,2.887);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AF8F3").s().p("AgmgQIgBAAIAVgVIACgCIABABIA3A8IgTASg");
	this.shape_33.setTransform(47.3,43.2,2.887,2.887);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8AF8F3").s().p("AglgUIAAgBIAFgEIAUgQIABABIAxBBIgUARg");
	this.shape_34.setTransform(55.2,36.2,2.887,2.887);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AAOArIgxhDIAbgSIArBGIgVAPg");
	this.shape_35.setTransform(63.6,29.9,2.887,2.887);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AAKAsIgqhHIAcgQIAlBLIgWAMg");
	this.shape_36.setTransform(72.6,24.4,2.887,2.887);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AF8F3").s().p("AAGAsIgjhKIAQgHIANgGIAeBNIAAAAIgYALg");
	this.shape_37.setTransform(82,19.7,2.887,2.887);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8AF8F3").s().p("AgaghIAAgBIAGgCIAUgHIADAAIAAABIAYBOIgZAJg");
	this.shape_38.setTransform(91.8,16,2.887,2.887);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8AF8F3").s().p("AgXgkIAegIIARBSIgYAHg");
	this.shape_39.setTransform(101.9,13,2.887,2.887);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_35},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_35},{t:this.shape_36},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_38},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_26},{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32},{t:this.shape_33},{t:this.shape_34},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_38},{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109,179.4);


(lib.cycle_inside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("AgOC+QgygEgqgdIAIgJQAnAbAvADQAuAEAsgVQBDghAYhGQAYhEgghCQghhDhGgYQhEgYhCAgQhCAggZBFQgYBDAfBCIgLAGQgihHAbhIQAahKBGgiQBIgjBIAaQBLAaAjBHQAiBIgaBIQgaBLhHAjQgnATgrAAIgPgBg");
	this.shape.setTransform(0.2,-0.5,2.887,2.887);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("AgRgHIAYgHIAEAAIAAAAIAHASIgcALg");
	this.shape_1.setTransform(-63.6,20.1,2.887,2.887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5A75").s().p("AgQgJIAdgEIABABIADATIgdAHQgCgIgCgPg");
	this.shape_2.setTransform(-65.8,11,2.887,2.887);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F5A75").s().p("AgPgLIAPAAIALABIADAAIABAAQgBAKACAKIgeACg");
	this.shape_3.setTransform(-66.6,1.5,2.887,2.887);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5A75").s().p("AgQALIADgXIAZAEIAEABIABABIgDATg");
	this.shape_4.setTransform(-66.2,-8.2,2.887,2.887);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F5A75").s().p("AgRAJIAHgXIAbAKIABAAIgFASIgBABg");
	this.shape_5.setTransform(-64.4,-17.5,2.887,2.887);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F5A75").s().p("AAKARIgcgMIAKgUIAbANIgIAPIgBAEg");
	this.shape_6.setTransform(-61.4,-26.3,2.887,2.887);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F5A75").s().p("AAIARIgagOIAKgPIADgFIAYARIgKAPIgBADg");
	this.shape_7.setTransform(-57.1,-34.6,2.887,2.887);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F5A75").s().p("AAFASIgXgSIALgNIAFgEIAVASIgMAQIgCABg");
	this.shape_8.setTransform(-51.7,-42.3,2.887,2.887);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F5A75").s().p("AACATIgUgUIAOgNIAEgEIAAACIATAUIgPAOIgBABIgBAAg");
	this.shape_9.setTransform(-45.4,-49.2,2.887,2.887);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1F5A75").s().p("AAAATIgRgXIASgOIARAZIgRALIgBABIAAAAg");
	this.shape_10.setTransform(-38.1,-55,2.887,2.887);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1F5A75").s().p("AgQgHIAVgLIAMAaIgBABIgQAKg");
	this.shape_11.setTransform(-30,-59.7,2.887,2.887);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1F5A75").s().p("AgPgJIAWgIIAIAcIAAABIgSAGg");
	this.shape_12.setTransform(-21.3,-63.3,2.887,2.887);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F5A75").s().p("AgFAQIgBgCIgHgaIARgDIAGgBIAAACIAEAbIgTAEg");
	this.shape_13.setTransform(-12.3,-65.5,2.887,2.887);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F5A75").s().p("AgIAQIAAgBIgBgCIgCgbIAXgBIAAAeIgRABg");
	this.shape_14.setTransform(-2.9,-66.6,2.887,2.887);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1F5A75").s().p("AgKAOIgCgBIABgDIABgZIARABIAGABIAAACIgFAcIgSgDg");
	this.shape_15.setTransform(6.9,-66.3,2.887,2.887);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1F5A75").s().p("AgMANQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAABAAIAFgdIAXAGIgJAdg");
	this.shape_16.setTransform(16.2,-64.8,2.887,2.887);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1F5A75").s().p("AgNALQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIAKgcIAVAKIAAABIgNAag");
	this.shape_17.setTransform(25.1,-61.9,2.887,2.887);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1F5A75").s().p("AgRAIIAPgaIAPAKIAEACQABAAgBABIgBACIgQAWg");
	this.shape_18.setTransform(33.5,-57.8,2.887,2.887);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F5A75").s().p("AgBATIgRgNIASgYIATAPIgTAWIAAAAIgBAAg");
	this.shape_19.setTransform(41.3,-52.7,2.887,2.887);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AiACxQgVgJgMgGIgGgEIgBAAIAFgIIAQAIIAVAJIApAKQAtAHAqgMQArgNAhgaQAkgdAVgoQAVgoADgqQADgtgPgsIgJgVIgLgUIgNgSIgNgPIgBgBIAHgGIABAAIAJALIANARIAWAoIAHAVQAHAWACAXQAEAsgNApQgOAsgcAhQgQATgRANIgTAOIgVALQgRAKgbAHIgUAFIgXACIgNAAQglAAgjgMg");
	this.shape_20.setTransform(16,10.1,2.887,2.887);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#31464B").s().p("AhDDVQgrgCgpgQIghgQIAIgOIAiARQAQAGAYAFQAtAIArgJQATgEAXgJQAUgJAOgJIASgNIAOgLQAPgNANgSQAUgaAHgUIALgeIAHgeIACgUIAAgRIgBgXIgEgXQgFgWgKgVQgJgVgLgRQgMgQgOgPIgMALIgGgFIATgUIACgDIABAAQAOAMAPATIANATIAUApIAHAVQAHAXACAXIAAAYIgBAXIgCARQgCAKgDAJQgKAlgWAkQgYAkgmAcQgfAWgiAMQglANgoAAIgIAAg");
	this.shape_21.setTransform(17.6,9.7,2.887,2.887);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6AF36").s().p("AhEBEIAAAAIgNgQIgCgBIAAgBIgRgYIgBgBIgDgEIgGgKICEhLIACgBIA7giIACgBIABABIAMAQIAMAOIguA2IAAAAIgNAOIhVBkIgBACgAgxAKQgKABgIAHQgFAGgBAJQgBAJAIAKQAHAHAKABQAKABAIgHIABgBQAHgIABgLQAAgLgIgIQgHgGgKAAIgCABg");
	this.shape_22.setTransform(-54.3,46.2,2.887,2.887);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AhpFGQgsgFgsgTQglgPgfgYIAYggQAjAaApAPQAvAQArAAQAXABATgDIAMgCIAAAAIgEgTQAAgBAGAAIAJgCQAKgCAKgEIAVgHQATgIAWgNQAXgOAPgPQAhgeAWgnIABgBIAQAKQAVgnAIgmQAFgXACgSIAAgEIADAAIAOABIABgaQgBgVgEgWQgHgsgWgsQgIgQgQgYQgQgVgMgMQgMgMgQgOIgEgCIAAAAIgJAMIgCABIgVgQQgagPgPgGQgpgSglgEIgMgCIADgkIAAgDIASACIAUADIAUAFQArAMAiAUQATALASAOQASANARASIAQARIAOATIANATIAMAVQAHALAEALIAIAUQAJAbADAOQAKArgDAvQgDAugPAqQgOAogZAlQgZAlgjAdQgUAQgTAMIgpAWQglAQgoAHQgYAEgcAAQgTAAgWgCgAATEKQgLAEgJACIAGAjIAAACQAQgEATgGIgNgjgAApECIANAhIABACIAggQIgSgggABTDsQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAUAfIAdgVIgXgdgACKC/IgTATIAZAcQAMgLANgOIgagYIgCgBIgDADgACXCwIAcAXIABABIAMgQIAJgNIgggUQgJAOgJALg");
	this.shape_23.setTransform(19.2,0.2,2.887,2.887);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AhACtIgMgrQgEgVgCgXQgBgXABgXQADgnAMgjQAPgtAagnQAYgkAfgcQAPgOARgLIAWAhQgRAMgPANIgXAYIgSgQIgBgBIgLAPQgRAXgIAPIgRAiQgQAngGAsIAAABIAZADQgCAUABAVQAAAUADARQADAUAGAUIAQAnQAAABAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIgjARQgLgWgEgNg");
	this.shape_24.setTransform(-70.8,-18.7,2.887,2.887);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F6AF36").s().p("Ag8FSQgrgIgqgTQgogTgjgdQgjgegaglQgJgMgFgKQgGgJgHgPIACgBIgCABIgNgeQgGgQgFgTQgLguAAgqQABgtAMgtQAOgsAVglQAYgoAfgeQAdgdAlgWQAWgNAVgIQAYgKAUgGQAngKAkgBQAqgBAnAIQAhAHAiAOIAcAOIAgATQAWAPAZAYIANAPIARATIAVAgQAKAQAHAPQAJASAFARQAHASAFAYQAFAUABAZQADAegEAfQgEAkgJAcQgMAkgRAfQgJARgPAUIgSAWIgdAdQgSARgTAMIgpAYQgRAIgbAJQgnAOgqADIgaABQgeAAgegGgAgwlNQgtAGgtAUQgoASgfAaIgbAXIgIAJQgPAPgNATQgbAmgPAnQgQAqgFAtQgFAvAIAqQAFAZAFASIAMAfIAHAQIAAABIAQAdQAKAQALAOQAcAlAlAbQAmAcAqAQQAnAQAuAGQAsAEArgGQAogGApgRQAMgFAegQQATgMATgQQAcgVAXgdQAbghASgpQAOgeAIglQAHgfABgfIgDg1QgDgXgGgUIgMglQgEgLgLgWQgIgPgMgRIgbgjQgPgRgbgXQgYgTgZgNIgggPIgWgIQgVgIgXgEQgagFgSAAIgTgBQgXAAgZAEg");
	this.shape_25.setTransform(0,0,2.887,2.887);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F6AF36").s().p("AhOAgIgCgCIgKgQQAQgKAPgFQAcgMAPgEQArgOApgBIAXAAIgBASIAAAEIgCAAIgUAAQgsABgoANQgUAHgWAKIgRAKIgDACIAAgBg");
	this.shape_26.setTransform(-23,-85.5,2.887,2.887);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F6AF36").s().p("AgpBMIAAgBIAEgYQAEgUAHgRIAPgiIAJgRIAbgpIARAOIgBACQgIAJgFAIQgOAUgJATIgUA5IgFAcg");
	this.shape_27.setTransform(-75.3,-34,2.887,2.887);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-99.4,198.9,198.8);


(lib.frame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AF8F3").s().p("AgKAxIAAhhIAVAAIAAAFIgPAAIAABXIAPAAIAAAFg");
	this.shape_5.setTransform(0,0,3.824,3.824);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-18.8,9,37.7);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,90,117,0.498)").s().p("AEVEJIAAiyIglg/IAAg0IAzAAIAAhdIgzAAIAAhNIg1AAIgVgUIhjAAIglAUIkZAAIhUhDIBpAAIAAAXIEVAAIAAgXIDBAAIBgBFIAAAoIgOAAIAAGlg");
	this.shape.setTransform(33.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,53.2);


(lib.scan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(0,255,255,0.4)"],[0.435,1],0,-25,0,25).s().p("ArsD6IAAnzIXZAAIAAHzg");
	this.shape.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-50,150,50);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(31,90,117,0.498)").s().p("AjDJ1IADgCIgNAAIAAACIgzAAIADgCIgUAAIgDACIiSAAIAAgCIlyAAIAAxvICmh4IWKAAIAAQNIj4C0IACAAIg4AmIoqAAIgDACg");
	this.shape_1.setTransform(120,63);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.7,0,158.6,125.9);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,90,117,0.498)").s().p("Ar/A7IBhhEIRgAAIAAgBIBkhJIDaAAIAABXI2QAAIhvBQg");
	this.shape.setTransform(117.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.7,0,153.6,16.9);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(138,248,243,0.498)").s().p("AjsARIAygiIGnAAIgyAig");
	this.shape.setTransform(23.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.6,3.6);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(138,248,243,0.8)").s().p("AjaAKIAegTIGXAAIgeATg");
	this.shape.setTransform(21.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.8,2.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AkyAFIAPgJIJWAAIgPAJg");
	this.shape.setTransform(30.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.5,1.1);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(31,90,117,0.498)").s().p("AxVF4IAArvMAirAAAIAALvg");
	this.shape_1.setTransform(111.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.1,75.2);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AgQj8IAhAjIAAGzIghAig");
	this.shape_1.setTransform(1.7,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.4,50.6);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6AF36").s().p("AgJB4IAAjvIASgUIAAEXg");
	this.shape_1.setTransform(1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,28.1);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AxiGEIAAsHMAjFAAAIAAMHgAPZFrIAMAMIBxAAIAAinIgMgNIAAitIAMgMIAAibIgMgNIAAjMIh2AAIgMgMIknAAIgNAMIlmAAIgNgMInBAAIgNAMIj5AAIgNgMIigAAIgNAMIidAAIgNgMIjoAAIgNAMIhJAAIAAAfIgNAMIAACdIANANIAAD1IgNANIAAEKIElAAIAMgMIGNAAIANAMIHcAAIANgMIFvAAIANAMIG+AAIANgMg");
	this.shape_1.setTransform(112.3,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.7,77.7);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.text = new cjs.Text("EFFICIENT . INTELLIGENT . SECURE", "12px 'Microsoft YaHei'", "#F6AF36");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 264;
	this.text.setTransform(79.1,57.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 2
	this.text_1 = new cjs.Text("现金卡H.A.S", "bold 24px 'Microsoft YaHei'", "#F6AF36");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 50;
	this.text_1.lineWidth = 300;
	this.text_1.setTransform(79,15.5);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8AF8F3").ss(2,1,0,3).p("ALujvIAAg8Ig8AAALuDwIAAA8Ig8AAArtjvIAAg8IA8AAArtDwIAAA8IA8AA");
	this.shape.setTransform(80,35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1D495D").ss(2,1,0,3).p("AsfldIY/AAIAAK7I4/AAg");
	this.shape_1.setTransform(80,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(29,73,93,0.498)").s().p("AsfFeIAAq7IY/AAIAAK7g");
	this.shape_2.setTransform(80,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,162,72);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEEE").s().p("Ap9LEQgDgFAAgKQAAgHABgEQABgDADgDQADgCADAAIAGABIADAEIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAp5KpQgDADAAAJQAAAIACAEQACADADAAQAEAAACgDQACgEAAgIQAAgJgCgDQgCgDgEAAQgDAAgBADgAqZLEQgDgFAAgKQAAgHABgEQABgDADgDQADgCADAAIAGABIADAEIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAqVKpQgDADAAAJQAAAIACAEQACADADAAQAEAAACgDQACgEAAgIQAAgJgCgDQgCgDgEAAQgDAAgBADgAq1LEQgDgCAAgFIAEgBIADAGQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQADAAADgCQACgDAAgDQAAgDgCgCQgCgCgDAAIgDAAIAAgDIABAAIAFgBQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgFAAQABgFADgCQADgCAEgBIAFACQADABABADQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIgCAEQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIAFADQABACAAAEQAAAEgDAEQgEADgFAAQgEAAgEgDgArRLEQgDgDAAgFQAAgDACgDQABgCAEgBQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgDQADgCAEgBQAFAAADAEQADACAAAEIgBAFIgEACQADABACACQABADAAADQAAAFgDADQgDADgFAAQgGAAgDgDgArOK3QgCACAAADIABAEIADADIAEABQADAAACgCQACgCAAgEQAAgDgCgCQgCgCgEAAQgDAAgCACgArNKoQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIABgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBABgArkLGIAAgcIgEADIgFADIAAgFIAHgDIAEgGIACAAIAAAkgAqZKCQgDgFAAgKQAAgGABgEQABgEADgDQADgBADAAIAGABIADADIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAqVJnQgDADAAAJQAAAJACACQACADADABQAEgBACgDQACgCAAgJQAAgJgCgDQgCgDgEAAQgDAAgBADgAq1KCQgDgFAAgKQAAgGABgEQABgEADgDQADgBADAAIAGABIADADIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAqxJnQgDADAAAJQAAAJACACQACADADABQAEgBACgDQACgCAAgJQAAgJgCgDQgCgDgEAAQgDAAgBADgArRKDQgDgEAAgEIAEAAIADAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQADgBADgCQACgCAAgDQAAgDgCgCQgCgCgDAAIgDABIAAgEIABAAIAFgCQACgBAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgFAAQABgEADgDQADgDAEABIAFABQADABABACQABABAAABQAAAAAAABQABAAAAABQAAAAAAABIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAFADQABADAAADQAAAFgDADQgEADgFAAQgEAAgEgCgArtKDQgDgEAAgEIAEAAIADAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQADgBADgCQACgCAAgDQAAgDgCgCQgCgCgDAAIgDABIAAgEIABAAIAFgCQACgBAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgFAAQABgEADgDQADgDAEABIAFABQADABABACQABABAAABQAAAAAAABQABAAAAABQAAAAAAABIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAFADQABADAAADQAAAFgDADQgEADgFAAQgEAAgEgCgAqwJBQgEgDgCgEQgCgEAAgFQAAgGACgFQADgEADgBQAEgDAFAAQAGAAADADQAEADABAFIgEABQgCgFgCgBQgCgCgEAAQgEAAgDACQgDACgBAEIgBAHIABAHQACAEADABQACACAEAAQAEAAACgCQADgDABgEIAFABQgCAGgDADQgEADgGAAQgGAAgDgCgArIJDIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNI1IAHAAIACgJIgHAAgArkJDIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpI1IAHAAIACgJIgHAAgAoSJDIAAggIgMAAIAAgEIAdAAIAAAEIgMAAIAAAggAooJDIAAgkIAFAAIAAAkgApNJDIAAgkIAMAAIAHAAIAFADQADACABAEQACADAAAGIgBAGIgDAGIgDADIgEACIgGABgApII+IAHAAIAGgBIADgBIADgFIABgGQAAgHgCgCQgCgEgDgBIgGAAIgHAAgApuJDIAAgkIAaAAIAAAEIgWAAIAAALIAUAAIAAAEIgUAAIAAAMIAWAAIAAAFgAp5JDIgEgIIgEgFIgCgCIgCgBIgDAAIgGAAIAAAQIgEAAIAAgkIAQAAIAHABQACAAACADQABACAAAEQAAAEgCACQgDACgFABIADACIAEAFIAGAKgAqOIuIALAAIAFAAIACgDIABgCQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgEgBIgMAAgAjIHDQAKgGADgGQADgGAAgJIgIAAIgEAAIgCgBIAjAAIADgDIAEAEIgPAAIAAATQAAADAEABIAFAAQAAAAABgBQABAAAAAAQABgBAAAAQAAgBAAAAIABgIIABAAIAAAHQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAQgCADgEAAIgIAAQgGAAAAgEIAAgVIgHAAQgBAMgEAGQgEAFgKAEgAoCG/IAAAAIAIAAIAAgBIAAgNIgNAAIgFABIgCgCIAUAAIAAgIIAFACIgCACIAAAEIADAAIACgCIADADIgIAAIAAAOQAAADgEABQAAgCgHgCgAoSGuIgEAGIgEAFIgDgCIAFgEIAGgGIAAgXIAFADIgCACIAAAgIAAAHIgDABIAAgVgAo3G7IAAgGIgRAAIgEABIgCgCIAJAAIgBgOIAEACIALAAIAAgKIgMAAIgEAGIgGAGIgBgBIAHgIQADgGACgGIAEADIgBABIgEAEIAaAAIADgCIAEADIgSAAIAAAKIAIAAIADgDIAEAFIgPAAIAAAKIANAAIADgDIAEAEIgUAAIAAAIIAAAFIgDABIAAgIgApCG0IALAAIAAgKIgLAAgArQG/IAAgBIAFABIADgBIAAgCIAAggIAAgGIAEACIgBACIAAAjQAAAFgFABQAAgCgGgCgAjyG8IAAgWQgEAIgEADIAAgBIAJgQIAEgLIAEAEIgCABIgFAJIADABIgCACIAAAXIABAEIgEACIAAgHgAnCHCIgDgDIgGgDIgHAEQgFACgHABIAAgBIAIgCQAFgCAEgDQgFgCgFgBIAEgHIgHAAIgCABIgBgCIAKAAIADgIIgIAAIgCABIgBgCIAQAAIACgDIABgGIgLAAIgEABIgCgCIANAAIAIAAIACgCIADADIgJAAIAEADIgCABIgEAFIAHAAIADgCIADADIgSAAIADADIgBABIgDAEIAOAAIACgCIAEADIgIAAIgFAJIAGADIAEACIAAACIAAABIgBABIgCgBgAnUG3IAIACIAEgIIgIAAIgEAGgAnoG/IAAgBIAFABQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgOIgGAEIgCgDIAIgDIAAgLIgGAAIgCgBIAIAAIAAgMIAEADIgBABIAAAIIACAAIACgDIAEAEIgIAAIAAAKIAFgCIABAAIgGAEIAAAQQAAADgEACQAAgCgFgCgArvG+IAMgCIAAgKIgHAAIgDABIgBgCIALAAIAAgJIgIACIgCgEQADAAADgDQADgEABgEIgFAAIgEAAIgCgBIAUAAIACgDIAEAEIgOAAIAEACIgFAEIgGAFIAPAAIgEgFIAAgBQAJAFAAACIgBAEIgBABIAAgBIgCgEIgJABIADACIgBABIAAAGIAFAAIADgDIADAEIgLAAIAAAKIALgDIAAABQgWAGgCACgAmdHBQgGAAgDgCQgDgBgDgCIgDgDQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgFAFIgCgCIAIgGIAAgRIgCAAIgFABIgBgCIAHAAIACgCIADADIgCABIAAAQIAFAEQADACAGAAIALAAIALAAIAAABQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAIgPAAgAjiHAQgEABgCgCQgCgCAAgDQABgDAFgJIALgRIgKAAIgFAAIgBgBIAQAAIACgCIAEADIgCABQgIAJgFAJQgFAJAAADQAAACAHAAIAMAAIACgBQABgCAAgJIABAAIABAHQAAAEACABQgCACgEAAgAkTG8QgDgFAAgKQAAgGABgEQABgEADgDQADgBADAAIAGAAIADAEIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAkPGhQgDADAAAJQAAAJACACQACADADABQAEgBACgDQACgCAAgJQAAgJgCgDQgCgDgEAAQgDAAgBADgAkvG8QgDgFAAgKQAAgGABgEQABgEADgDQADgBADAAIAGAAIADAEIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAkrGhQgDADAAAJQAAAJACACQACADADABQAEgBACgDQACgCAAgJQAAgJgCgDQgCgDgEAAQgDAAgBADgAlLG9QgDgEAAgEIAEAAIADAFQAAAAABABQAAAAABAAQAAAAABAAQABABAAAAQADgBADgCQACgCAAgDQAAgDgCgCQgCgCgDAAIgDABIAAgEIABAAIAFgCQACgBAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgFAAQABgEADgDQADgDAEABIAFABQADABABACQABABAAABQAAAAAAABQABAAAAABQAAAAAAABIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAFADQABADAAADQAAAFgDADQgEADgFAAQgEAAgEgCgAlnG8QgDgDAAgFQAAgEACgCQABgCAEgBQgDgBgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEADgDQADgDAEABQAFAAADACQADADAAAEIgBAEIgEADQADABACACQABADAAAEQAAAEgDADQgDADgFAAQgGAAgDgDgAlkGvQgCACAAADIABAEIADACIAEACQADgBACgCQACgCAAgCQAAgEgCgCQgCgCgEAAQgDAAgCACgAljGgQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIABgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAQAAABgBAAgApnG8QgDgFAAgKQAAgGABgEQABgEADgDQADgBADAAIAGAAIADAEIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgApjGhQgDADAAAJQAAAJACACQACADADABQAEgBACgDQACgCAAgJQAAgJgCgDQgCgDgEAAQgDAAgBADgAqfG8QgDgFAAgKQAAgGABgEQABgEADgDQADgBADAAIAGAAIADAEIACAFIABAJQAAAGgBAEQgBAEgDACQgDACgEAAQgFAAgDgDgAqbGhQgDADAAAJQAAAJACACQACADADABQAEgBACgDQACgCAAgJQAAgJgCgDQgCgDgEAAQgDAAgBADgAl6G/IAAgcIgEACIgFADIAAgEIAHgFIAEgEIACAAIAAAkgAqHG/IABgDIADgFIAFgGIAIgHQACgDAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgDAAQgEAAgBACQgCACAAADIgFAAQABgFADgDQADgDAFABQAFAAADACQADADAAAEIgBAEQgBADgCACIgHAHIgFAEIgCACIASAAIAAAFgAq/G/IABgDIADgFIAFgGIAIgHQACgDAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgCgCgDAAQgEAAgBACQgCACAAADIgFAAQABgFADgDQADgDAFABQAFAAADACQADADAAAEIgBAEQgBADgCACIgHAHIgFAEIgCACIASAAIAAAFgAmYGnIgKAAQAAANgIAGIgBAAQAHgIgBgMIAAgMIADABIAJgBQAFgBACgCIADAEIgCAAIgRABIAAAKIARAAIACgCIAEADIgLAAIABAUIgDABIAAgVgAoFG5QAAgCgDgDIABgBIAFAEIAAACIgBADIgBAAIgBgDgArRGqIAAgOIAEACIgCACIAAASIAAAFIgCABIAAgOgAoNGvQAHgDAGgEQAGgEADgGIgNAAIgCACIAEADIABACIgBACIgBAAIgBgBQAAgCgCgDIgHAGIAAgBIAHgJIADgIIAFAEIgCAAIgDAEIAMAAIACgCIADADIgCABIgGAHIgHAFQgFADgHABgAoYGmQAAgCgDgFIAAAAIAGAFIABACIgBACIgBABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAgBgAnSGlIgDgGIABAAIAFAEIAAABIgBACIgBABIgBgCgAmwGdIgEgFIABgBIAFAEIABACIgBACIgBABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBgAnMGdIgBgCIgEgFIABgBIAEAEIABABIAAACIgBABgAjAGbIAZAAIADgDIAEADIgaAAIgFABgArIF9IACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNFvIAHAAIACgJIgHAAgArkF9IACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpFvIAHAAIACgJIgHAAgAoeF9IAAgPIgOgVIAGAAIAHALIAEAFIAEgGIAHgKIAFAAIgOAVIAAAPgAoxF9IgEgMIgPAAIgEAMIgFAAIANgkIAGAAIAOAkgAo/FkIgEAKIAMAAIgEgKIgCgHIgCAHgAprF9IAAgkIAOAAIAFAAIAEACIADADIABAFQAAAFgCADQgDADgIAAIgJAAIAAAPgApmFpIAJAAQAFAAACgBQACgCAAgDQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgCIgEAAIgJAAgAp4F9IAAgkIAFAAIAAAkgAqVF9IAAgkIAFAAIAAAfIARAAIAAAFgAqeF9IgEgMIgPAAIgEAMIgFAAIANgkIAGAAIAOAkgAqsFkIgEAKIAMAAIgEgKIgCgHIgCAHgAmoEBQgDgCAAgFIAFABQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABAAQABABAAAAQAEAAABgCQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIABgFQgDADgEABQgGAAgDgFQgDgDAAgGQAAgEACgCIAEgGQACgBAEAAQAEAAADADIAAgDIAEAAIAAAXQAAAGgBACQgBADgDACQgDABgEAAQgEAAgDgCgAmlDkQgCADAAAEQAAAFACACQACADADAAQADAAACgDQACgCAAgFQAAgEgCgDQgCgDgDAAQgDAAgCADgAl1D9IACgBIABgDIgCAAIAAgGIAFAAIAAAGIgBAEIgDADgAlKD2QgDgEAAgHQAAgGAEgEQADgDAFAAQAFAAAEADQADAEAAAGQAAAFgBADQgCADgDACIgGABQgFAAgEgDgAlGDkQgDACAAAFQAAAGADACQACADADAAQADAAADgDQACgCAAgGQAAgFgCgCQgDgDgDAAQgDAAgCADgAmND3QgCgCgBgEIAEgBIACAEQABAAAAABQABAAAAAAQABAAAAAAQABABABAAIAEgCIACgDIgBgCIgFgBIgHgDIgDgCIAAgDIAAgEIACgCIADgCIAEAAIAFABQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAIABAFIgEAAIgCgEIgEgBIgEABQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAACIACAAIAEACIAGACIADACIABAEIgBAEIgEADIgFABQgFAAgDgCgApDD2QgDgEAAgHQAAgGAEgEQADgDAFAAQAFAAAEADQADAEAAAGQAAAFgBADQgCADgDACIgGABQgFAAgEgDgAo/DkQgDACAAAFQAAAGADACQACADADAAQADAAADgDQACgCAAgGQAAgFgCgCQgDgDgDAAQgDAAgCADgApPD4IgCgCIgBgFIAAgPIgDAAIAAgEIADAAIAAgGIAFgCIAAAIIAEAAIAAAEIgEAAIAAAPIAAACIABABIABAAIACAAIABAFIgEAAIgDgBgAptD2QgDgEAAgGQAAgHADgEQAEgDAFAAQAFAAAEADQADAEAAAGIAAACIgTAAQAAAEACACQACADADAAQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAIACgEIAFAAQgBAEgDADQgDACgFAAQgFAAgEgDgAppDkQgCABAAAEIAOAAQAAgDgBgCQgCgDgEAAQgDAAgCADgAq1D2QgDgEAAgGQAAgHADgEQADgDAGAAQAFAAADADQADAEAAAGIAAACIgTAAQAAAEADACQACADADAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIADgEIAEAAQgBAEgDADQgDACgEAAQgGAAgDgDgAqxDkQgCABgBAEIAPAAQAAgDgCgCQgCgDgDAAQgDAAgCADgArCD4IgCgCIAAgFIAAgPIgDAAIAAgEIADAAIAAgGIAEgCIAAAIIAFAAIAAAEIgFAAIAAAPIAAACIABABIACAAIACAAIAAAFIgDAAIgEgBgAkmD5IAAggIgMAAIAAgEIAdAAIAAAEIgMAAIAAAggAlYD5IAAgkIAFAAIAAAkgAm1D5IAAgRIgBgDIgCgDIgDAAIgFACQgCACAAAEIAAAPIgEAAIAAgbIAEAAIAAAEQADgEAFAAIAFABIADACIABAEIAAADIAAARgAnRD5IAAgbIAEAAIAAAbgAncD5IAAgRQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgDABIgDADIgBAEIAAAPIgEAAIAAgkIAEAAIAAAMQAEgDAEAAIAFABIADADIABAGIAAARgAoCD5IAAggIgMAAIAAgEIAcAAIAAAEIgMAAIAAAggAonD5IAAgXIgEAAIAAgEIAEAAIAAgCIAAgEIACgDIAFgBIAEABIgBADIgCAAIgDABIgBADIAAACIAFAAIAAAEIgFAAIAAAXgAp6D5IAAgRIAAgDIgCgDIgDAAIgFACQgCACAAAEIAAAPIgEAAIAAgbIAEAAIAAAEQACgEAGAAIAEABIADACIABAEIABADIAAARgAqbD5IAAgbIAEAAIAAAEQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABAAIADgBIAEABIgBAFIgEgCIgCACIgCACIgBAFIAAAOgArQD5IAAgRIgBgDIgCgDIgDAAIgFACQgCACAAAEIAAAPIgEAAIAAgbIAEAAIAAAEQADgEAFAAIAFABIADACIABAEIAAADIAAARgAruD5IAAgkIAFAAIAAAkgAnRDaIAAgFIAEAAIAAAFgAoMC1QgDgDgCgEQgCgEAAgFQAAgGACgFQACgDAEgCQAEgDAFAAQAFAAAEADQADADACAFIgFABQgBgFgDgBQgCgCgDAAQgFAAgCACQgDACgBAEIgBAHIABAHQABAEADABQADACADAAQAEAAADgCQADgDABgEIAEABQgBAGgEADQgEADgFAAQgGAAgEgCgArIC3IACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNCpIAHAAIACgJIgHAAgArkC3IACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpCpIAHAAIACgJIgHAAgAnuC3IAAgkIAaAAIAAAEIgVAAIAAALIAUAAIAAAEIgUAAIAAAMIAWAAIAAAFgAofC3IgSgdIAAAdIgFAAIAAgkIAFAAIATAcIAAgcIAEAAIAAAkgAo/C3IgEgMIgPAAIgEAMIgFAAIANgkIAGAAIAOAkgApNCeIgEAKIAMAAIgEgKIgCgIIgCAIgAp0C3IAAgkIAFAAIAAAfIASAAIAAAFgAp9C3IgEgMIgPAAIgEAMIgFAAIAOgkIAFAAIAPAkgAqLCeIgDAKIAMAAIgEgKIgDgIIgCAIgAq3C3IAAgkIAOAAQAEAAACABIAEADIACAFIgCAEIgDADIAFAEQABACAAADIgBAFIgCADIgEACIgGABgAqyCyIAJAAIADAAIADgBIACgCIABgDIgBgDIgDgCIgGgBIgIAAgAqyChIAIAAIAEAAIADgBIABgDIgBgEIgCgCIgGAAIgHAAgAlBA0IAAgBIAFAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgXIgeAAIAAAcIgDABIAAgRIAAgPIADACIATAAIADgIIAEACQgCAAgEAGIAJAAIACgCIADACIgCABIAAAYQABAEgFABQAAgCgFgBgAmSA2QAKgEAFgFQAEgFABgFIgNAAIgFAAIgCgBIAVAAIAAgLIgMAAIgEABIgCgCIAWAAIADgHIACgGIAFAEIgDABIgGAIIALAAIACgDIAEAEIgTAAIAAALIAOAAIADgDIAEAEIgTAAQACAFAEAEQAFAGAIABIAAABQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABQgFgDgFgEQgEgFgCgIIgCAAQgBAHgGAGQgGAEgJADgAm3AzIAAgBIAHABQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgDIgJAAIgEABIgCgCIAPAAIAAgEIgPAAIgFAAIgBgCIAVAAIAAgEIgJAAIgEAAIgCgBIAPAAIAAgFIgKAAIAAACIgCABIAAgGIAAgGIADACIAJAAIAAgFIgNAAIgFABIgCgCIAUAAIAAgGIAFADIgCABIAAACIANAAIADgCIAEADIgUAAIAAAFIAKAAIACgCIADACIgCACIAAAFIgDACIAAgCIgKAAIAAAFIAKAAIABgCIAEACIgCABIAAAEIACAAIADgDIADAFIgIAAIAAADIAAAEIgDABIAAgDIgKAAIAAAGQAAADgEABQgBgCgGgCgAmsAsIAKAAIAAgEIgKAAgAmsAmIAKAAIAAgEIgKAAgAmsAbIAKAAIAAgFIgKAAgAm5AbIAKAAIAAgFIgKAAgAnsA2QAFgCAEgDIAHgHQgDgFgBgGQgCgGgBgIIgBAAIgCAAIgCgCIAVAAIACgBIADACIgCACQgCALgCAEIgFAJIAHAGIAJADIAAABQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAIgHgEIgGgHQgEAFgEADIgJAEgAnfAeIAFAKIAEgKIADgNIgPAAIADANgAnvAuIAAgVIgHAJIgBAAQAEgFADgHIAFgMIAEADIgCABIgFAKIADABIgBABIAAAWIAAAFIgDACIAAgJgAoTAqIAAgRQgIALgMAIIgBgBQAHgFAGgGQAGgIAEgJIgQAAIgEAAIgCgBIAlAAIADgEIAEAFIgTAAIgDAIIADACIgCAAIAAATIAAAJIgDACIAAgNgAqKA2QAPgCAGgHIgMgDIAFgKIgMAAIgCABIgBgCIAPAAIACgIIAFACIgCABIgCAFIATAAIADgDIAEAEIgLAAIgHAMIAMAFQADACAAABIgBACIgDgCQgEgDgIgDQgEAEgGACQgHACgHABgAp+ApIALACQADgEADgHIgNAAIgEAJgArfA2QAGgDADgFQADgGAAgFIgFAAIgFAAIgCgBIAMAAIAAgKIgEAAIgEAAIgCgBIANAAQADgHACgHIAEAEIgCAAIgGAKIAFAAIADgDIADAEIgMAAIAAAKIAIAAIACgDIAEAEIgNAAQABAGAEAEQAEAFAEABIAAABQgBAAgBABQgBAAAAAAQgBAAAAAAQAAABAAAAQgEgDgDgGQgCgEgBgHQAAAIgEAFQgEAFgGADgAriArQgKAEgCACIgCgEIAEgBIAAgdIgCABIgCgBIARAAIACgDIADADIgFAAIAAAbIAEgCIABABIgFABIAAAIIAAADIgDACIAAgMgArpAsIAHgCIAAgHIgHAAgArpAiIAHAAIAAgJIgHAAgArpAZIAHAAIAAgKIgHAAgAqeAzIAAgBIAFAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAggIggAAIAAAlIgDACIAAgXIAAgTIADACIAfAAIACgDIADADIgCABIAAAiQABADgFACQAAgCgFgBgApYAzIATAAIAAgKIgHAAIgFAAIgBgBIANAAIAAgKIgGAAIgFABIgBgCIgJAFIAAAAQAHgFAFgGQAFgGADgIIAFADIgCABQACAEAGAFQAGAFAIABIAAABQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAAAABIgJgGIADAEIgMAAIAAAKIAIAAIACgDIAEAEIgOAAIAAAKIANAAIADgCIAEAEIgkAAIgFAAgAlRArIAAgIIADACIAKAAIABgCIADACIgBACIAAAKIgDABIAAgDIgKAAIAAADIgDABIAAgIgAlOAuIAKAAIAAgIIgKAAgAqpAsQAEgGADgHIgGgJIABgBIAGAHIADgKIAEADIgDAEIgCAGIAEAFIABAEIgBACIgBAAIgBgCIgDgHQgEAHgFAEgAq2ArQADgGADgHIgGgJIABAAIAGAGQACgDAAgGIAEADIgBABIgDAHIADAFIABAEIgBACIgBABQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIgCgGQgDAGgFAFgAoAAnQgCgEgKgJIABgBIAOALIABADIgBACIgBABIgCgDgAlXAlQAGgFACgFIADADIgEADIgHAFgAlAAiQgBgCgFgDIAAgBQAIADABABIAAACIgBABIAAABIgCgCgAqIAZIAAgBIABgBQACgDABgEIABAAIAAACIAdAAIACgCIAEAEQgDAAgEAFIgBAAIACgFIgdAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABIgCAAIgCAAgAlRAXQgBgDgCgDIAAAAQAGADAAACIgBACIgBABIgBgCgAmCASQgBgEgEgEIABAAIAGAEQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAIgBACIgBACQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBgBgArWASQgBgEgCgEIABAAIAEAEIABADIgBACIgBACIgBgDgAp1AQQgBgDgCgDIAAgBIAFAEIABACIgBACIgBABIgBgCgAlfAPIAVAAIgDgFIABgBIAEADIABACIgBABIAOAAIADgCIADADIglAAIgFABgAnUgQQgEgCgCgEQgCgEAAgFQAAgJAFgFQAFgFAHAAQAFAAAEADQAEACACAEQACAEAAAGQAAAFgCAFQgCAEgEACQgEACgFAAQgFAAgEgDgAnTgrQgEAEAAAIQAAAGAEAFQADADAFAAQAGAAADgDQAEgFAAgGQAAgFgCgDQgBgDgDgCQgDgCgEAAQgFAAgDADgApHgPQgDgDgCgEQgCgEAAgFQAAgGACgFQACgEAEgBQAEgDAFAAQAFAAAEADQADADACAFIgFABQgBgFgDgBQgCgCgDAAQgFAAgCACQgDACgBAEIgBAHIABAHQABAEADABQADACADAAQAEAAADgCQADgDABgEIAEABQgBAGgEADQgEADgFAAQgGAAgEgCgAprgPQgDgCgBgCQgCgEAAgFIAAgVIAFAAIAAAVIABAGQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQACACADAAQAFAAACgCQADgDAAgGIAAgVIAEAAIAAAVIgBAIQgBADgDACQgDACgGAAQgFAAgDgCgArIgNIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNgbIAHAAIACgJIgHAAgArkgNIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpgbIAHAAIACgJIgHAAgAmcgNIgTgdIAAAdIgEAAIAAgkIAEAAIATAcIAAgcIAFAAIAAAkgAnogNIAAgkIAFAAIAAAkgAn+gNIAAggIgMAAIAAgEIAcAAIAAAEIgMAAIAAAggAoRgNIgEgMIgPAAIgEAMIgFAAIAOgkIAFAAIAPAkgAofgmIgDAKIAMAAIgEgKIgDgIIgCAIgAqVgNIAAgkIAMAAIAHAAIAFADQADACABAEQACADAAAGIgBAGIgDAGIgDADIgEACIgGABgAqQgSIAHAAIAGgBIADgBIADgFIABgGQAAgHgCgCQgCgEgDgBIgGAAIgHAAgAq2gNIAAgkIAaAAIAAAEIgWAAIAAALIAUAAIAAAEIgUAAIAAAMIAWAAIAAAFgABqiRIAAAAIAGAAIABgBIAAgKIgOAAIgFAAIgCgBIAVAAIAAgGIgMAAIgFAAIgBgBIAWAAIADgCIADADIgHAAIAAAGIADAAIACgDIAEAEIgJAAIAAALQAAADgEABQAAgBgGgDgABXiWIAAgNIgIAGIAAgBIAGgGIAGgHIACgGIAEAEIgDACIgEAFIAAAYIgDABIAAgJgAA3iRIAAAAIAIAAIAAgBIAAgNIgNAAIgFABIgCgCIAUAAIAAgIIAFACIgCACIAAAEIADAAIACgCIADADIgIAAIAAAOQAAADgEABQAAgCgHgCgAAniiIgEAGIgEAFIgDgDIAFgDIAGgGIAAgXIAFADIgCACIAAAgIAAAHIgDABIAAgVgAheiaIAAgLIACACIAIAAIACgCIADACIgCABIAAAMQABAEgFABQAAgCgFgBIAAgBIAGABQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgMIgJAAIAAAVIgCABIAAgNgAnribIgLACIAAAAQANgDAJgHIgGgIQgGAGgGAEIAAgBIAIgIIAEgIIAEADIgBABIgCACIANAAIACgCIADADIgCABIgIAHQAIAFAMABIAAAAQAAAAgBABQgBAAAAAAQgBABAAAAQAAAAAAABQgKgCgIgGQgHAFgEACIABAAIASAAIABgBIADACIgBABIAAAKIgDACIAAgDIgSAAIAAACIgDABIAAgOgAnoiRIASAAIAAgJIgSAAgAniioIAEAEIAGgHIgOAAIAEADgArciRIAAAAIAHAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgOIgFAAIgFABIgBgCIALAAIAAgHIgBAAIgFAAIgCgBIANAAIACgCIADADIgHAAIAAAHIAGAAIADgCIADADIgMAAIAAAOIgBADIgEACQgBgDgFgBgArtikIAAgUIACACIAIAAIACgCIACADIgBAAIgHALQAGAFAAACIABAEQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgEACQAAgCgEgBIAAgBIAEAAIACgBQAAAAABgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgEgFgFIAFgLIgIAAIAAAnIgCABIAAgXgAhDiOQAPgCAGgHIgMgDIAFgKIgMAAIgCABIgBgCIAPAAIACgIIAFACIgCABIgCAFIATAAIADgDIAEAEIgLAAIgHAMIAMAFQADACAAABIgBACIgDgCQgEgDgIgDQgEAEgGACQgHACgHABgAg3ibIALACQADgEADgHIgNAAIgEAJgAi+iSIAAgBIAHABQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgZIgLAAQgEAFgEAEIAAAAIAGgMIADgJIAEADIgFAIIALAAIACgDIADADIgCACIgBAaIgCADIgEADQgBgEgFgBgAkNiOQAIgFAEgGQAFgGABgJQACgJgBgJIAGADIgCACQACAKACAHQADAHAFAFQAFAFAGABIAAABQgEABgCACQgFgEgEgFIgFgLQgCgFgBgKIgDAPQgCAHgFAFQgEAFgJAEgAkgiRIAAgBIAHABIAAgBIAAgSIgJAAQgBAKgKAGIAAgBQAHgGABgJIgIAAIAAAWIgDABIAAgNIAAgMIADABIAIAAIAAgHIgHAAIgEABIgCgCIAYAAIADgCIADADIgOAAIAAAHIAJAAIACgCIADADIgCABIAAARIgBADIgDACQgCgDgEgBgAk/iOQAIgIAAgQIgGAHIgCgDIAIgFIAAgPIADACIAOAAIAAgCIgDgEIABgBIAEADIABACIgCACIANAAIACgCIADADIghAAIAAAQIgDALQgBAGgGAFgAl0iRIAAgBIAGAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgLIgNAAIABAPIgDABIAAgQIgNAAQgBALgHAHIgBAAQAEgHABgGQACgGAAgLIgBgOIADACIAcAAIACgDIADADIgCACIAAAiQAAAFgEABQgBgDgFgBgAl6igIANAAIAAgKIgNAAgAmJigIANAAIAAgKIgNAAIAAAKgAl6irIANAAIAAgLIgNAAgAmJirIANAAIAAgLIgNAAgAmmiSIAAAAIAIAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgeIAAgIIAEADIgCABIAAAkQABAFgFABQAAgEgIgBgAm2iXIAAgMQgGAIgIAFIAAAAQAKgKADgLIgHAAIgEABIgCgBIAOAAIAAgKIgMABIAAgBIANgCQAFgCACgCIADAFIgJABIAAAKIAGAAIACgDIAEADIgMAAIAAAGQAJADAAABIAAACIAAACIgBABIgBgDIgHgFIAAAPIABAGIgEACIABgKgAqqiOQAHgDACgDQADgFAAgFIABgMIADACIgBACQAAAJgCAEQgBAFgDADQgDACgGACgAjXigIAAgSIADACIACAAIACgLIAEADQgCABgDAHIAGAAIACgCIADADIgCABIAAAeIgCABIAAgDIgKAAIAAADIgDABIAAgSgAjUiTIAKAAIAAgPIgKAAgAjUijIAKAAIAAgMIgKAAgAqUiPIgCgEIgFgGIAAAAIAIAGIABADIAAABIgBABIgBgBgAoBiQQgBgDgEgFIABAAIAFAEQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBACIgBABIgBgCgAoNiRIgCgHIAAAAIAFAFIABACIgBACIgBABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAgBgAoXiRIgCgHIAAAAIAFAGIAAABIgBACIgBABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBgAojiPIgBAAIAAgBIADgDIACgFIABAAQAAAHgCABIgCACIgBgBgAo/iPIgKgBQgDgBgCgCIgEgEIgDADIgDADIgCgCQACgDAFgCIAAgQIgBAAIgFAAIgBgCIAHAAIABgBIAEACIgCABIAAAQIAFAFQADACAJAAIATgBIAAABQgEABAAACIgPgBgApziWIAAgHIACABIAIAAIABAAQgHgEgDgFIgGAAQgFAGgGADIAIAAIABgCIADADIgBABIAAAKIgDABIAAgCIgHAAIAAACIgDABIAAgHIAAgGIgHABIAAAAIAJgFIAIgGIgJAAIgFABIgCgCIAQAAIAEgGIADACIgDAEIAMAAQgBgDgDgCIAAAAIAFABIABABIgBADIAEAAIADgDIAEAEIgSAAQADADAFACQAEACAHABIAAAAQgEAAAAADIgDgBIAAALIgDABIAAgCIgJAAIAAACIgCABIAAgIgApxiTIAJAAIAAgIIgJAAgAqCiTIAHAAIAAgIIgHAAgAq9iRQADAAAUgDIAAABIgVAFgAgRiRIARAAIAAgKIgFAAIgFAAIgBgBIALAAIAAgKIgEAAIgFABIgBgCIgJAFIAAgBQAHgEAFgGQAFgGACgIIAEADIgCABQACAEAGAFQAGAFAIABIAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIgJgGIADAEIgMAAIAAAKIAIAAIACgDIAEAEIgOAAIAAAKIANAAIADgCIAEAEIgiAAIgFAAgAipiRIAVAAIAAgOIgHAAIgFAAIgBgBIANAAIAAgMIgMAAQgEAIgEADIAAAAIAGgLIADgLIAFACQgCABgDAHIALAAIAAgOIAFADIgCABIAAAKIALAAIADgEIAEAFIgSAAIAAAMIAJAAIADgDIAEAEIgQAAIAAAOIAOAAIAEgDIADAEIgmAAIgFABgAhwiaIgBgLIADACIAHAAIABgCIADACIgBABIAAAQIgCABIAAgEIgIAAIAAAEIgDABIABgKgAhuiWIAIAAIAAgMIgIAAgAlciQIAAgBIADgBIABgFIgCAAIgBgCIAAgBIABgCIADgBIACACIABABIgBADIgDAFIgDACgArkiRIAGgGIAEgGIADADIgFAEQgDAEgEACgArIiSIgDgFIgEgEIAAgBIAHAFIADADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgBAAIgBgBgApHiaIgBgJIADABIAOAAIACgBIACACIgBABIAAAMIgDABIAAgCIgOAAIAAACIgDABIABgIgApFiXIAOAAIAAgDIgOAAgApFicIAOAAIAAgEIgOAAgABmiVIgDgGIAAAAQAFACAAABIABAEIgBABIgBAAIgBgCgAA0iXQAAgCgDgDIABgBIAFAEIAAACIgBADIgBAAIgBgDgAq5ibIAAgHIADACIAKAAIACgCIACADIgBABIAAAIIgDABIAAgBIgLAAIAAAAIgCACIAAgHgAq3iYIALAAIAAgCIgLAAgAq3icIALAAIAAgDIgLAAgAkeiZQgBgCgEgFIABAAIAGAFIABACIgBACIgBABIgBgDgAmmioIAAgMIAEACIgCABIAAARIABAGIgDABIAAgPgAqkijIAAgNIADACIADAAIABgIIgDAAIgFABIgBgCIAQAAIACgDIADAEIgJAAIgDAIIAHAAIACgCIACADIgBABIAAAKIAAAIIgCABIAAgUIgNAAIAAATIgCABIAAgKgAonibIAVAAIAAgFIgLAAIgEAAIgCgCIARAAIAAgGIgMAAIAAACIgDABIAAgTIADACIAaAAIACgCIADADIgCABIAAANIgDACIAAgDIgMAAIAAAGIAKAAIACgCIAEAEIgQAAIAAAFIANAAIADgDIAEAEIgkAAIgFABgAoQipIAMAAIAAgMIgMAAgAoeipIAMAAIAAgMIgMAAgAi/ifQAAgDgDgEIAAgBIAGAFIABACIgBADIgBABQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBgAAsihQAHgDAGgEQAGgEADgGIgNAAIgCACIAEADIABACIgBACIgBAAIgBgBIgCgFIgHAGIAAgBIAHgJIADgIIAFAEIgCAAIgDAEIAMAAIACgCIADADIgCABIgGAHIgHAFQgFADgHABgAq7iqIAAgIIADACIAOAAIACgCIADADIgCABIAAALIgCAAIAAgBIgQAAIAAABIgCABIAAgIgAq5ilIAQAAIAAgKIgQAAgApLirIAAgIIADABIAFAAIAAgDIgFAAIgEABIgCgBIALAAIAAgGIAEACIgCABIAAADIAFAAIAAgGIAEACIgBABIAAADIAGAAIACgDIADADIgLAAIAAADIAFAAIACgBIACACIgBABIAAAMIgDABIAAgCIgUAAIAAABIgDABIAAgIgAo5imIAFAAIAAgFIgFAAgApBimIAFAAIAAgFIgFAAgApIimIAFAAIAAgFIgFAAgAo5isIAFAAIAAgEIgFAAgApBisIAFAAIAAgEIgFAAgApIisIAFAAIAAgEIgFAAgApBiyIAFAAIAAgDIgFAAgAh3ilQAIgDAFgHQAGgGACgGIAEADIgCACQAEAFAGADQAFADAIABIAAABQgEAAgBADIgLgHQgEgDgEgGQgEAGgFAEQgFAFgIADgAB0ioIgPAAIAAABIgDABIABgJIgBgJIADABIAOAAIACgCIADADIgCABIABANIgDACgABliqIAPAAIAAgFIgPAAgABlixIAPAAIAAgFIgPAAgAq2iqIAAgEIADACIAEAAIACgCIACACIgCABIABADIgCACIAAgCIgFAAIAAABIgDABIAAgEgAqzipIAFAAIAAgCIgFAAgAriinQAEgDAEgFIAGgMIADADIgBABIAHAIQADACAFACIAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAIgHgGIgGgIIgGAIQgDAFgGADgAAhiqQAAgCgDgFIAAAAIAGAFIABACIgBACIgBABQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAgBgAhriqIAOAAIADgCIADADIgOAAIgFAAgAk8irIgCgGIAAAAIAEADQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgBABIgBABIgBgCgAoOiqQAEgHAAgDIAEADIgBAAIgHAHgAqFixIAAgHIACABIAIAAIABgBIADACIgBABIAAAKIgDAAIAAgCIgIAAIAAACIgCABIAAgHgAqDiuIAIAAIAAgHIgIAAgAhBirIAAgBIABgBQACgDABgEIABAAIAAACIAdAAIACgCIAEAEQgDAAgEAFIgBAAIACgFIgdAAQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAABIgCAAIgCAAgAoYisIgEgHIABgBIAEAEIABADIAAACIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgApyiyIAAgGIACABIAIAAIABgBIADACIgBABIAAAJIgDABIAAgCIgIAAIAAACIgCAAIAAgHgApwiuIAIAAIAAgHIgIAAgABPisIAIgIIAEgHIAEAEIgEACIgFAFQgDADgDACgAnzisIgCgBIACgCQACgDAAgDIABAAIAAACIAhAAIACgCIADAEQgCAAgFAFIgBgBIADgFIghAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgCABIAAAAgApTiyIgEgGIABgBIAFAEQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgBACIgBABIgBgCgAgui0QgBgDgCgDIAAgBIAFAEIABACIgBACIgBABIgBgCgAq+i1IANAAIgBgCIgCgEIAAAAIAEADIABABIgBACIAGAAIACgCIADADIgSAAIgFABgAngi1IgEgFIAAgBIAGADIABACIAAABIgBABIgCgBgApqjWQgEgCgCgEQgCgEAAgFQAAgJAEgFQAFgFAIAAQAFAAAEADQAEACACAEQACAEAAAGQAAAFgCAFQgCAEgFACQgEACgEAAQgFAAgEgDgApqjxQgDAEAAAIQAAAGADAFQAEADAFAAQAFAAAEgDQADgFAAgGQAAgFgBgDQgCgDgDgCQgDgCgDAAQgFAAgEADgArIjTIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNjhIAHAAIACgJIgHAAgArkjTIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpjhIAHAAIACgJIgHAAgAm6jTIAAgPIgOgVIAGAAIAHALIAEAFIAEgGIAHgKIAFAAIgOAVIAAAPgAnajTIAAggIgMAAIAAgEIAdAAIAAAEIgMAAIAAAggAntjTIgFgIIgDgFIgDgCIgCgBIgDAAIgFAAIAAAQIgFAAIAAgkIAQAAIAHABQADAAABADQACACAAAEQAAAEgDACQgCACgFABIADACIADAFIAHAKgAoCjoIAKAAIAFAAIADgDIABgCQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgBgEgBIgLAAgAoojTIAAgkIAaAAIAAAEIgWAAIAAALIAUAAIAAAEIgUAAIAAAMIAWAAIAAAFgApKjTIAAgkIAOAAIAFAAIAEACIADADIABAFQAAAFgCADQgDADgIAAIgJAAIAAAPgApFjnIAJAAQAFAAACgBQACgCAAgDQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgCIgEAAIgJAAgAp7jTIgFgIIgDgFIgDgCIgCgBIgDAAIgFAAIAAAQIgFAAIAAgkIAQAAIAHABQADAAABADQACACAAAEQAAAEgDACQgCACgFABIADACIADAFIAHAKgAqQjoIAKAAIAFAAIADgDIABgCQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgBgEgBIgLAAgAq2jTIAAgkIANAAIAGAAIAEACIADADIABAFQAAAFgDADQgDADgHAAIgKAAIAAAPgAqyjnIAKAAQAEAAACgBQACgCAAgDQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgCIgFAAIgJAAgAhUlTIgFgEIgJgFIAAgBIAJADIAGgJIgLAAIgBACIgDgDIABgBIACgGIgEAAIgFABIgCgCIALAAIACgIIgEAAIgFABIgBgCIAKAAIABgLIAFACIgCACIgBAHIAIAAIADgDIADAEIgPAAIgBAIIAMAAIADgDIADAEIgSAAIgCAHIALAAIACgDIAEAEQgCAAgDADIgGAHIAGACIABACIgBACIgBABIgBgBgAhuldIAAgTIgJALIgBAAIAHgMQAEgGACgJIAFADIgDACIgDAIIACABIgBABIAAAUIAAAJIgEABIABgKgAjHlTQAJgEAGgIQgDgHAAgKIgEAJIgBAAIAEgOIACgLIAEADIgBABIgDAJIAHAAIACgCIAEADIgEAAQgBAMgEAIQAEAGAFABIAAAAQgBABgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIgGgJQgGAHgKADgAi3lgQADgJAAgJIgGAAQAAAKADAIgAjVlbIAAgQIgGAHIAAgBIADgFIAEgHIACgEIADACQgBABgCADIAAAbIgDABIAAgIgAkZluQgIAPgNAIIAAgBQAMgKAHgQIgMAAIgFABIgBgCIAUAAIAAgOIAFADIgCACIAAAJIAOAAIADgDIAEAEIgTAAQAFAQAOAFIAAABQgDABgBACQgNgKgDgPIgBAAIAAAeIgDABIAAgbgAmqlXIAAgBIAHABQABAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAIAAgZIgIAAIgEABIgCgBIAOAAIgBgPIAFADIgCABIAAALIADAAIACgDIAEADIgJAAIAAAaQABADgFACQAAgCgHgCgAoolUQAKgEAEgGQAEgGACgJIgNAAIgFABIgCgCIAUAAIABgNIgLAAIgFAAIgBgBIAfAAIADgEIAEAFIgSAAIgBANIAOAAIADgEIAFAFIgSAAIAAAUQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIAIAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAIABgIIABAAQgBAJAEAAQgCAEgFgBIgLAAQgEAAAAgDIAAgVIgBAAQgCAKgEAGQgFAGgMAEgAnMlTQgCAAgDgDQgEgCgDgEIgHAEIgJADIgBgBQAJgDAGgFIgCgLIgIAAIgBABIgDgBIAMgBIgBgIIgFAAIgBABIgCgBIAIgBIAAgOIAFADIgCABIAAAKIAJgBIACgDIAEAEIgPABIABAHIAJgBIACgDIAEAEIgPABQAAAGACAEQAEgEADgFIADAEIgCAAIgHAHQADAFAFACIADgJIABAAIgBAIIABAEIAAAAIgBABIgBAAgAlClaQgHAFgKACIAAgBQAJgCAHgHQgEgFgCgIIgCAAIgCgCIAKAAIAAgIIgGAAIgCABIgBgCIAJAAIAAgMIAFADIgCACIAAAHIAHAAIACgDIAEAEIgNAAIAAAIIAFAAIACgCIADADIgCABQgDAKgFAEIAGAEQAEABAEAAIAAABQgBABgBAAQAAAAgBAAQAAABgBAAQAAABAAAAQgHgCgFgFgAlCleQAFgGACgGIgNAAQACAHAEAFgAlelXIAAgBIAGABQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgPQgGADgBACIgCgEIAJgDIAAgKIgFAAIgDABIgBgCIAJAAIAAgMIAFADIgCABIAAAIIACAAIADgDIADAEIgIAAIAAAKIAHgEIAAACIgHADIAAASQAAADgEABQAAgCgGgCgAmAlUQAHgDAEgDQADgEAAgGIAAgMIAFACIgCACQAAAJgBAEQgBAEgEADQgEADgHACgAmRlUQAIgFAEgEQAEgFADgGIADADIgCACQgEAGgFAEQgEADgHADgAm5lXIAAAAIAFAAIABgBIAAgMIgBAAQgDAGgEAEIgJAGIAAgBQAEgCADgFIAGgIIgHAAIgFABIgBgCIAFAAIAAgWIADABIACAAIACgHIAEADQgCAAgDAEIAGAAIACgBIADACIgCABIAAAgQAAAEgEABQAAgCgFgCgAm8llIAJAAIAAgGIgJAAgAm8lsIAJAAIAAgGIgJAAgAm8lyIAJAAIAAgHIgJAAgApSlUIAKgDQAEgCAEgEQAEgDACgGQACgGgBgUIAFADIgBABIgBARIgCAJIAHAFQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABIAAACIgBABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgDgFgGQgEAGgHADQgGAEgJABgAqhlYIAAgBIAHABQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgZIgLAAQgEAFgEAEIAAAAIAGgMIADgJIAEADIgFAIIALAAIACgDIADADIgCACIgBAaIgCADIgEADQgBgEgFgBgAralfIgBgKIADABIANAAIACgBIADABIgBACIAAANIAAAEIgDABIAAgDIgOAAIAAACIgDACIABgMgArYlYIAOAAIAAgHIgOAAgArYlgIAOAAIAAgHIgOAAgArulXIAAAAIAGAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgNIgGAEIAAABIgDgEIAJgDIAAgKIgCAAIgFAAIgCgCIAJAAIAAgMIAFADIgCACIAAAHIACAAIADgCIADAEIgIAAIAAAJIAGgEIABAAIgHAFIAAARQAAAEgEABQAAgCgGgCgAlnlVIgDgDIgGgGIABgBIAJAGIABACIgBACIAAABIgBgBgAqMlUQAJgHACgNIAFADIgCACIgCADQAEAEAGADIAAgQIgOAAIgFABIgCgBIAkAAIADgDIAEADIgTAAIAAAHIAKAAIACgDIAEAFIgQAAIAAAIIAKABIAKgBIAAABQgDAAgBADQgLAAgFgCIgIgDIgFgGQgEAIgHADgAq6lmIAAgSIADACIACAAIACgLIAEADQgCABgDAHIAGAAIACgCIADADIgCABIAAAeIgCABIAAgDIgKAAIAAADIgDABIAAgSgAq3lZIAKAAIAAgPIgKAAgAq3lpIAKAAIAAgMIgKAAgAgplUIgLAAQgFAAAAgDIAAgJIAFABIgCACIAAAFQAAAAAAABQAAAAAAABQABAAAAAAQABAAABAAIAKAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIABgFIABAAIAAAFIACABQgCADgDAAIgCAAgAiolXIAUAAIAAgIIgIAAIgEABIgCgBIAOAAIAAgHIAFACIgCACIAAADIAJAAIADgDIAEADIgQAAIAAAIIANAAIADgCIAEAEIgkAAIgFAAgAjQlVQADgEAAgDIABgHIAAgFIADACIAEAAIACgCIACACIgBABIAAAHIAGgEIAAABIgHAJIgCgDIABgEIAAgGIgFAAIgBAJQgCAEgEADgAhDlXIAAAAIABgCQACgCACgEIABAAIgCAHIgCACIgBAAIgBgBgAjxlaQgCgEgGgDIAAgBQAFAAACACIAEADIABADQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABIgCAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBgAn2laIAJgCIALgCIAAABIgNAEIgFACgAgelZIgEgHIAAAAIAHAEIAAACIgBACIgBABIgBgCgApVldIABgDIAAgUIAAgJIAFACIgCABIAAAbIAOgKIABABIgLAJIgFAGgAgtlcIgFgFIABgBIAFADIABABIAAACIgBACIgBgCgAmSldQAEgGACgGIAEABQgCABgCAEQgCADgEAEgAl6lpIAAgNIADACIAEAAIABgIIgFAAIgEABIgCgCIATAAIACgDIAEAEIgLAAIgDAIIAIAAIACgDIADADIgCABIAAAMIAAAHIgCABIAAgUIgOAAIAAAUIgDABIAAgLgAmHluIgEAAIgFABIgCgCIAGAAIAAgHIgBgFIAEACIgBABIAAAJIAEAAIAAgLIAAgHIAEACIgCACIAAAFIADAAIACgCIADAEIgIAAIAAAHIAEAAIACgCIADADIgLAAIADADIgBABIAAAKIgDABgAhFlfQAEgGABgFIABgIIAAgJIADABIASAAIAAgHIAEACIgCABIABAEIAJAAIADgCIADADIgPAAQAAAIADAFIADgGIACgEIAEADIgCABIgGAJQADADAFADIABgHIABAAIAAAEQAAABAAABQAAABAAAAQAAABABAAQAAABAAAAIAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgFgCIgGgGQgEAEgFADIgBAAIAJgIIgDgHIgBgJIgSAAQAAAKgCAFQgBAFgGAGgAn1lkQADAAACgEIAFgIIgEABIgEADIgDgEQADAAACgFIAFgLIAEADIgEADIgGAKIAIAAIAEgIIADADIgFAFIgIAMIAMgCIAAAAIgIADIgGADgAioliQAIgHABgJIgCAAIgFAAIgCgBIAJAAIAAgIIgDAAIgCAAIgCgBIASAAIADgDIADAEIgGAAIAAAIIACAAIACgDIAEAEIgIAAIAAAGIAAAGIgDABIAAgHIAAgGIgGAAQAAALgKAFgAidlzIAGAAIAAgIIgGAAgAmpllQgBgDgCgEIAAAAIAFAEQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIgBADIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAgBgAqillQAAgDgDgEIAAgBIAGAFIABACIgBADIgBABQgBAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBgAg5lpIAAgHIADABIAHAAIACgBIACACIgBACIAAAGIgDACIAAgCIgHAAIAAABIgDACIAAgGgAg2loIAHAAIAAgFIgHAAgAiKlnIAAgBIAGAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgRIgBgGIAEADIgBABIAAAUQABAEgFACQAAgDgGgBgAjPlsIALAAIACgCIADADIgKAAIgEABgAiKl0IgBgHIAEABIgBABIAAANIgDABIABgJgAptlvIgRAAIAAACIgDABIABgJIgBgLIAEACIAQAAIACgCIADADIgCABIAAAOIgDACgAp+lwIARAAIAAgGIgRAAgAp+l3IARAAIAAgFIgRAAgArblxIAAgPIAFACIgCACIAAAHIAIgEIAGgEIADADIgGACIgLAEIAAADQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAIALAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgGIABAAIAAAFQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAQgBADgDABIgPAAIgBAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQAAAAAAgCgApFlyIgEgJIAAAAQAIAGAAACIgBADIgBABQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAgBgAjClyIgJAAIgBACIgCgCIABgBIAAgIIADABIgBABIAAAHIADAAIAAgOIAEACIgBABIAAALIADAAIAAgJIADABIgBABIAAAIIgCABgAg7lzIAMAAIACgCIADADIgMAAIgEAAgAjbl0IAFgHIACgFIAEADIgEADIgGAGgAkLl3QgCgDgEgDIAAAAIAHACQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAIgBACIgBABIgBgCgAnSl4IgFgFIAAgBIAHADIABABIgBACIgBABgAgil7IgCgFIAAgBIAEADIABACIAAABIgBABIAAAAIgCgBgAp+mcQgEgCgCgEQgCgEAAgFQAAgJAEgFQAFgFAIAAQAFAAAEADQAEACACAEQACAEAAAGQAAAFgCAFQgCAEgFACQgEACgEAAQgFAAgEgDgAp+m3QgDAEAAAIQAAAGADAFQAEADAFAAQAFAAAEgDQADgFAAgGQAAgFgBgDQgCgDgDgCQgDgCgDAAQgFAAgEADgArImZIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNmnIAHAAIACgJIgHAAgArkmZIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgDIAIAAIACgLIADAAIgCALIAIAAIACgLIAEAAIgCALIAEAAIAAADIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpmnIAHAAIACgJIgHAAgAojmZIgMgSIgGAFIAAANIgFAAIAAgkIAFAAIAAASIARgSIAHAAIgPAOIAQAWgApEmZIgFgIIgDgFIgDgCIgCgBIgDAAIgFAAIAAAQIgFAAIAAgkIAQAAIAHABQADAAABADQACACAAAEQAAAEgDACQgCACgFABIADACIADAFIAHAKgApZmuIAKAAIAFAAIADgCIABgDQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQgCgCgEAAIgLAAgAqamZIgIgcIgBgEIgBAEIgHAcIgFAAIgKgkIAFAAIAGAXIABAHIACgGIAHgYIAFAAIAFASIADAMIACgIIAGgWIAEAAIgJAkgAJOooIgGAAIgFABIgCgCIANAAIAAgIIgDAAIgFABIgBgCIAJAAIAAgHIgDAAIgFAAIgCgCIANAAQAEgGABgGIAEADQgCABgCADIgEAFIAGAAIACgCIAEAEIgNAAIAAAHIAGAAIACgDIADAEIgLAAIAAAIIAIAAIADgDIADAEIgOAAIAAAOIgDABIAAgPgAI6owQgDAIgFAFIAAgBQAFgIADgNIgBAAIgFAAIgCgCIAIAAIAAgMIAEADIgBABIAAAIIACAAIACgCIAEAEIgIAAIAAAEIAFAEIABACIAAACIgBABIgCgCIgDgFIAAAPIAAAKIgDABIAAgXgAEloZQAEgEADgHQADgGAAgFIABgKIgBgJIADABQALgDADgCIAEAEQgDgBgPADIAAAKIANAAIACgCIAEADIgIAAIAAAUIAAAGIgDACIAAgLIAAgRIgIAAQABASgOAKgAEXoZQADgGABgGQACgFgBgLIAAgNIADABIAHgCIAEgDIAEAEIgPACIAAAIIAJAAIACgBIADACIgCABIAAAMIgDABIAAgDIgJAAQAAALgIAIgAEfotIAJAAIAAgKIgJAAgADloaQAKgEAEgGQAEgGACgJIgNAAIgFABIgCgCIAUAAIABgNIgLAAIgFAAIgBgBIAfAAIADgEIAEAFIgSAAIgBANIAOAAIADgDIAFAEIgSAAIAAAUQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIAIAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAIABgIIABAAQgBAJAEAAQgCAEgFgBIgLAAQgEAAAAgDIAAgVIgBAAQgCAKgEAGQgFAGgMAEgAC/odIAAgBIAHABQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgRIAAgHIADABIALgKIgYAAIgFABIgCgCIAfAAIADgCIADAEQgEAAgMAKIABAAIgCABIAAAYQAAADgFACQABgDgIgBgABWohIAAgUIgHAIIAAgBQAEgGADgHIADgMIAFADIgDAEIgDAHIABABIgBABIAAAUIAAAJIgDABIABgIgAghoZQAGgDACgEQADgFABgDIAAgOIAAgMIADABIAGAAIABgBIACACIgBABIAAAgIgBADIgDACQAAgCgFgBIAAgBIAFAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAgMIgHAAQAAAHgDAFQgEAEgHADgAgTouIAHAAIAAgJIgHAAgAgTo3IAHAAIAAgJIgHAAgAgsouQgEAIgEADIAAAAQADgEABgFIAEgIIgCAAIgFAAIgBgBIAIAAIAAgRIAEACIgCACIAAAKIAFgJIADADIgCAAIgGAHIAAACIADAAIACgCIACADIgHAAIAAAEQAFACAAABIAAACIgBABIgBgCIgDgEIAAARIABAFIgDABIAAgVgAhaoZQAHgBADgEQADgDACgEIgHAAIgFAAIgBgBIANAAIAAgGIgEAAIAAABIgDACIAAgJIAAgIIADACIAOAAIABgCIADACIgBABIAAAMIgDACIAAgDIgHAAIAAAGIAJAAIADgDIAEAEIgPAAIAGAGQADACAFAAIAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABQgIgDgEgJIgBAAQgDALgOABgAhPotIAOAAIAAgFIgOAAgAhPozIAOAAIAAgEIgOAAgAheoxQgDAHgFAFIAAAAQAGgKACgLIgFAAIgCABIgBgCIAIAAIAAgMIAEADIgCABIAAAIIADAAIACgDIADAEIgIAAIAAAFIAGAEIABACIAAACIgBABIgCgDIgEgFIABAaIgDABIAAgYgAi1otQgIAOgNAEIAAAAQAMgHAHgNIgNAAIgEAAIgCgBIAVAAIAAgNIgLAAIgFABIgBgCIARAAIAAgJIAFADIgCABIAAAFIAMAAIADgDIAEAEIgTAAIAAANIAEAAQAEgGACgGIAEAEIgCAAIgHAIIAJAAIADgEIAEAFIgTAAQAHAMANAEIAAABQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgLgFgFgNIgBAAIAAAVIgDABIAAgUgAkUodIAAAAIAIAAIAAgBIAAgNIgNAAIgFABIgCgCIAUAAIAAgIIAFACIgCACIAAAEIADAAIACgCIADADIgIAAIAAAOQAAADgEABQAAgCgHgCgAkkouIgEAGIgEAFIgDgDIAFgDIAGgGIAAgXIAFADIgCACIAAAgIAAAHIgDABIAAgVgAldovIAAgVIADABIAHAAIACgBIACACIgBABIgFALIAEAGIACAFIgBAFQgBADgEAAQAAgCgEgCIAAAAIAEAAIACgBIABgDIAAgDIgEgIIADgLIgHAAIAAAeIAAAJIgDABIAAgWgAq9oaQAIgBAGgDQAGgDACgHIgQAAIgEABIgCgCIAWAAIABgIIABgJIAEACIgBABIgCAOIAMAAIADgDIAEAEIgTAAIgBADQAJADADACQAEABAAADQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgDgCQgDgEgKgFQgDAFgFACQgGADgJABgArloZQAKgGAEgGQADgHAAgQIAFACIgCACQAAAPgFAGQgEAGgLAEgAIeodIAAgBIAHAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAgBAAAAIAAgiIgfAAIAAAoIgDABIAAgLIAAgYIAAgJIADACIAfAAIABgCIADADIgBABIAAAiQAAAEgFACQAAgCgHgCgAGtoaQACgEABgFIACgKIAEACQgCAAgBAGQACADAEACIAAgPIgEAAIgFAAIgCgBIARAAIADgCIADADIgKAAIAAAHIAEAAIACgCIADADIgJAAIAAAIQAEACAKAAIARgBIAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQgRABgFgBQgFgBgDgCQgDgBgDgFQgCAIgEADgAGYoeIAAgBIAGABQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAggIgLAAIgEABIgCgCIARAAIACgCIADACIgCACIAAAgQAAAFgFABQAAgEgGgBgAGBotIgBgRIAFADIgCACIAAAeIgDACIABgUgABhojIAAgMIgGAHIgBgBQAEgEACgEIAEgJIADACIgEAFIATAAIACgDIADAEIgNAAIAAAGIAGAAIACgCIADADIgLAAIAAAFIAGAAIACgBIADADIgLAAIAAAHIAJAAIACgDIADADIgZAAIAAADIgDABIABgKgABjodIAJAAIAAgHIgJAAgABjomIAJAAIAAgFIgJAAgABjosIAJAAIAAgGIgJAAgAiYoZQADgHABgGIABgKIADABIgBADIgBAGIAFAEIAAgSIgGAAIgEABIgBgCIAKAAIAAgIIgDAAIgEABIgCgCIAJAAIAAgIIAEACIgBABIAAAFIADAAIACgCIAEADIgJAAIAAAIIAEAAIADgCIADADIgMAAIAEACIgCABIAAAGIAEAAIACgDIAEAEIgKAAIAAAKQAHADAJAAIARAAIAAAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgOAAQgIAAgFgDQgGgDgDgFQgDAJgDADgAj8oZQADgHABgGIABgKIADABIgBADIgBAGIAFAEIAAgSIgGAAIgEABIgBgCIAKAAIAAgIIgDAAIgEABIgCgCIAJAAIAAgIIAEACIgBABIAAAFIADAAIACgCIAEADIgJAAIAAAIIAEAAIADgCIADADIgMAAIAEACIgCABIAAAGIAEAAIACgDIAEAEIgKAAIAAAKQAHADAJAAIARAAIAAAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgOAAQgIAAgFgDQgGgDgDgFQgDAJgDADgAl1ojIAAgKIAEACIgCABIABAPIgDACIAAgKgAmQoaQAHgCAEgEQADgEABgJQgGAFgKACIAAAAQANgFAFgKIgIAAIAAACIgCABIAAgJIAAgKIADACIAWAAIACgCIADADIgCABIAAANIgCACIAAgDIgIAAQAEAGAEABIALADIAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAABgBABIgJgFQgEgDgDgGIgEAAQgCAFgDACIAEACIgCABQgBAKgEADQgEADgIACgAl6o2IALAAIAAgFIgLAAgAmHo2IALAAIAAgFIgLAAgAl6o9IALAAIAAgFIgLAAgAmHo9IALAAIAAgFIgLAAgAmnoeIAAgBIAHABQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgZIgLAAQgEAFgEAEIAAAAIAGgMIADgJIAEADIgFAIIALAAIACgDIADADIgCACIgBAaIgCADIgEADQgBgEgFgBgAnXodIAAgBIAHAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAgiIgQAAIgFABIgBgBIAVAAIACgCIADACIgCABIAAAhIgBADIgDADQgCgDgEgBgAo9ojIAAgKIAEACIgCABIABAPIgDACIAAgKgApYoaQAHgCAEgEQADgEABgJQgGAFgKACIAAAAQANgFAFgKIgIAAIAAACIgCABIAAgJIAAgKIADACIAWAAIACgCIADADIgCABIAAANIgCACIAAgDIgIAAQAEAGAEABIALADIAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBABAAABIgJgFQgEgDgDgGIgEAAQgCAFgDACIAEACIgCABQgBAKgEADQgEADgIACgApCo2IALAAIAAgFIgLAAgApPo2IALAAIAAgFIgLAAgApCo9IALAAIAAgFIgLAAgApPo9IALAAIAAgFIgLAAgAlNodIABgCIAAglIADACIANAAIACgDIADADIgCABIAAARIgDABIAAgBIgIAAIADAJQAFgDAEgFIADADQgDAAgIAGQADAFAEACIAGABIAAABQgDAAgBACQgFgCgEgFQgEgGgCgIIgDAAIAAASIAHgEIAAAAQgGAFgCADgAlJoxIANAAIAAgIIgNAAgAlJo6IANAAIAAgHIgNAAgAnAosIAAgSIADACIACAAIACgLIAEADQgCABgDAHIAGAAIACgCIADADIgCABIAAAeIgCABIAAgDIgKAAIAAADIgDABIAAgSgAm9ofIAKAAIAAgPIgKAAgAm9ovIAKAAIAAgMIgKAAgAnyotIAAgTIAEACIgBABIAAAcIAAAGIgDABIAAgTgAqGocIABgBIAAgZIgBAAIgFABIgBgCIAHAAIAAgFIAAgGIAFACIgCABIAAAIIAJAAIAAgIIAAgHIAEADIgBABIAAALIALAAIAAgJIgBgGIAFACIgCACIAAALIAEAAIADgDIAEAEIgLAAIAAAQIAAACIgCACIAAgEIgLAAIAAADIgDABIAAgEIAAgQIgJAAIAAAZIAcAAIADgCIAEADIgjAAIgBACgAp2onIALAAIAAgPIgLAAgArOoaQgDAAAAgEIAAgQIAEACIgBACIAAALQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAEAAQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIABgHIAAAAIABAGQAAAAAAABQAAABAAAAQAAABABAAQAAAAABAAQgBABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAgAFLodIATAAIAAgKIgHAAIgFAAIgBgBIANAAIAAgKIgGAAIgFABIgBgCIgJAFIAAgBQAHgEAFgGQAFgGADgIIAFADIgCABQACAEAGAFQAGAFAIABIAAABQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIgJgGIADAEIgMAAIAAAKIAIAAIACgDIAEAEIgOAAIAAAKIANAAIADgCIAEAEIgkAAIgFAAgAA4obIgJgCIgGgDIgDgDQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABIgDADIgDgDIAIgEIAAgRIgCAAIgEABIgCgCIAIAAIABgBIADACIgBABIAAAQIAFAEQADABAGABIALAAIAKAAIAAAAQgEABAAACIgPAAgAoTocQgGgBgFgGQgEACgDAFIgDgDIAHgEQADgBAIgJIANgNIgWAAIgFABIgCgCIAdAAIACgDIAEAFQgDAAgDADIgTASQADAFAGABIAKAAIAPgBIAAABQgEABgBACIgUgBgACBodIAVAAIAAgOIgHAAIgFAAIgBgBIANAAIAAgMIgMAAQgEAIgEADIAAAAIAGgLIADgLIAFACQgCABgDAHIALAAIAAgOIAFADIgCABIAAAKIALAAIADgEIAEAFIgSAAIAAAMIAJAAIADgDIAEAEIgQAAIAAAOIAOAAIAEgDIADAEIgmAAIgFABgAHjocIAAgBIADgBIABgFIgCAAIgBgCIAAgBIABgCIADgBIACACIABABIgBADIgDAFIgDACgAAAocIAAgBIADgBIABgFIgCAAIgBgCIAAgBIABgCIADgBIACACIABABIgBADIgDAFIgDACgAHCofQAGgDACgEQACgDAAgFIABgKIAEACIgCABIgBAMQgBADgDADQgCADgGACgAgjooIgBgJIADABIACAAIAAgJIgEABIgCgCIAGAAIAAgNIAEACIgCABIAAAKIACAAIABgDIADAEIgGAAIAAAJIACAAIABgCIACADIgBAAIAAAMIgCABIAAgCIgGAAIAAAEIgDACIABgKgAgholIAGAAIAAgKIgGAAgAiCofQAHgEAEgGQgCgGAAgLIgFAAIAAARIAEgEIABABIgGAHIgDgCIABgCIAAgUIADACIAFAAIgBgLIAFACIgCACIAAAHIAGAAIADgDIADAEIgMAAQAAAIACAGIAEgLIAEACIgDAFIgEAHIAFAEIACgHIABAAIAAAHIAAAEIAAABIAAABIgDgCQgCgBgEgFQgFAFgHAEgAjmofQAHgEAEgGQgCgGAAgLIgFAAIAAARIAEgEIABABIgGAHIgDgCIABgCIAAgUIADACIAFAAIgBgLIAFACIgCACIAAAHIAGAAIADgDIADAEIgMAAQAAAIACAGIAEgLIAEACIgDAFIgEAHIAFAEIACgHIABAAIAAAHIAAAEIAAABIAAABIgDgCQgCgBgEgFQgFAFgHAEgArwoiIAHgDIAAgNIgEAAIgCgCIAGAAIAAgMIAAAAIgFAAIgCgBIAMAAIADgCIADADIgIAAIAAAMIACAAIACgCIADAEIgHAAIAAAMIAHgCIAAABQgMAGgDADgAHWoiQgCgDgFgDIAAgBIAJAEIAAACIAAADIgBABIgBgDgAkXojQAAgDgDgCIABgBIAFAEIAAACIgBADIgBAAIgBgDgABCojIgDgEIgFgFQgGAHgIADIgBAAQAKgGADgGIgJgIIAAAAIALAHQADgGABgFIgNAAIgEAAIgCgCIAYAAIADgDIADAFIgIAAQgCAHgDAFIAHAHQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBADIgCgCgAnnouIAAgMIACACIAKAAIACgCIADACIgCABIAAATIgDACIAAgDIgKAAIAAACIgCABIAAgMgAnlomIAKAAIAAgJIgKAAgAnlovIAKAAIAAgIIgKAAgAIPosIgBgJIADACIAMAAIABgCIADADIgBABIAAAHIAAAFIgDABIAAgDIgMAAIAAACIgDABIABgIgAIRooIAMAAIAAgKIgMAAgAGKouIAAgJIACACIALAAIABgCIAEACIgCABIAAAJIAAAFIgDACIAAgDIgLAAIAAACIgCABIAAgKgAGMooIALAAIAAgMIgLAAgArco2IAAgOIACACIAPAAIABgCIADACIgBABIAAAWIgDACIAAgYIgPAAIAAAZIgCABIAAgPgAmoorQAAgDgDgEIAAgBIAGAFIABACIgBADIgBABQgBAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBgAHGozIAAgLIADACIACAAIABgFIgCAAIgFAAIgCgCIARAAIADgCIADAEIgLAAIgDAFIAIAAIABgCIADADIgBABIAAAJIAAAGIgDACIAAgSIgLAAIAAAQIgDACIAAgKgAqyosIgFgGIABAAQAFABABACIABACIAAACIgBACQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAgBgAkfotQAHgDAGgEQAGgEADgGIgNAAIgCACIAEADIABACIgBACIgBAAIgBgBIgCgFIgHAGIAAgBIAHgJIADgIIAFAEIgCAAIgDAEIAMAAIACgCIADADIgCABIgGAHIgHAFQgFADgHABgAi9o0QgBgDgEgDIABgBQAFACABACIABACIgBACIgBACIgBgDgAqto0QgBgCgDgDIAAgBIAGADIABACIgBADIgBABIgBgDgAGzo7IAAgJIACABIAJAAIABgCIADADIgBABIAAANIgDACIAAgDIgJAAIAAACIgCABIAAgJgAG1o2IAJAAIAAgFIgJAAgAG1o8IAJAAIAAgGIgJAAgAkqo2QAAgCgDgFIAAAAIAGAFIABACIgBACIgBABQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAgBgABto1QgBgCgCgDIAAgBIAFADIABACIgBABIgBABIgBgBgAq8o3IABgBQACgEABgEIABAAIAAACIAgAAIACgCIAEAFQgDAAgFAEIAAAAIADgFIghAAIAAAFQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCgBgAgwo3QAAgBAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgCgHIAAAAQAFAEAAACQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABIgBAAgAILo6IATAAIACgDIAEAEIgUAAIgEAAgAB2o7IgTAAIgBABIgDgCIACgCIgBgHIAFACIgCACIAAAEIAIAAIAAgKIAEACIgBACIAAAGIAIAAIAAgHIAEACIgBABIAAAHIgDABgAhOo/IgHAAIgCgBIAJAAIgBgHIAFADIgCABIAAADIAHAAIAAgHIAEADIgCABIAAADIAEAAIADgCIADADIgKAAIAAAEIgCABIAAgFIgHAAIAAAEIgDACIABgGgAJKo+IgEgHIAAgBIAHAFIAAACIgBACIgBABIgBgCgAGHo+IgEgIIABAAIAFAEIACACIgBACIgBABIgCgBgAAko/IgDgHIAFAEIACACIgBADIgCAAIgBgCgAhxo+IgEgFIABAAIAEACIABABIgBACIgBABIAAgBgAjVo+IgEgFIABAAIAEACIABABIgBACIgBABIAAgBgAnro/IgEgHIABAAIAFAEIABACIgBACIgBABQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAoTo/IgFgGIABgBIAGAFIABABIgBACIgBABQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAA4pAIgDgGIAAAAIAFAEIABACIgBACIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAqnpAIgEgHIABAAIAFADIABADIgBACIgBABIgBgCgAJDpbQAFgCAEgDQADgCADgEQACgFABgHIAAgLIgBgKIAGADIgCACIAAANQAAAGgCAHIAHAFQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCACQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAgBAAAAQgBgEgEgEQgFAJgOAEgAmgpbIgCgDIgRACIgJABIgBgDQACgCAEgFIAFgHIgJAAIgFAAIgBgBIAhAAIADgDIAEAEIgXAAIADACIgCAAQgHAIgEAEIAXgBIgHgHIABgBIAJAFQADADAAACIgBABIgBACIgBgBgAH/pbQADgEABgFQACgFAAgHIAAgQIADACIALAAIAAgLIAFACIgCACIAAACIALAAIACgCIADAEIgQAAIAAADIARAAIACgCIADADQgDAAgEAFIAAAAIACgFIgUAAIgLAAIAAAQQAAAFgCAEQgCAFgFAEgAHBpuIgOAAIAAACIgDACIABgKIgBgLIADACIAOAAIAAgMIAEACIgBACIAAAIIANAAIACgDIADADIgBACIAAALIAAAEIgDACIAAgEIgOAAIAAASIgDABIAAgTgAHEpvIAOAAIAAgNIgOAAgAGzpvIAOAAIAAgNIgOAAgAGJpeIAAgBIAGABIABgCIAAgKIgJAAIAAACIgCABIAAgMIADACIATAAIABgCIADADIgCABIABAHIgDABIAAgDIgIAAIAAALQAAADgEABQAAgCgGgBgAGHprIAUAAIAAgFIgUAAgAFlpfIAAgCIAGACQADAAABgEIABgRIgEAAQgCALgGAFQgGAGgIADIgBgBQAIgDAFgGQAFgGACgJIgEAAQgCAFgDAEQgDAGgIADIAAgBQAEgDAEgEQADgEABgGIgEAAIgCABIgCgDIACAAIAOgNIgMAAIgCAAIgCgCIAQAAIACgCIADADIgCABIgPAOIATAAIACgCIADADIgCABIgCARQAAAEgCACIgEABQgBgCgFgCgAB+peIAAgBIAFABQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAgBIAAgWIgeAAIAAAcIgDABIAAgRIAAgPIADACIATAAIADgIIAEACQgCABgEAFIAJAAIACgCIADADIgCABIAAAXQABAEgFABQAAgCgFgBgAg9pkIAAgaIgDAAQgEAIgEAEIgBgBQAFgGACgGIAEgKIAEADIgCABIgDAGIAPAAIADgCIADADIgQAAIAAALIAIAAIADgDIADAFIgOAAIAAAJIAKAAIACgDIAEAEIgQAAIAAAGIAAAFIgDABIAAgJgAhOplIAAgTIgIAKIAAgBIAGgJIAEgJIACgIIAEADIgCABIgFALIADACIgBABIAAAUIAAAHIgDABIAAgKgAi2phIgRAAIAAAFIgDABIAAgKIAAgKIADABIAHAAIAAgIIgHAAIgEAAIgCgBIANAAIAAgKIgLABIAAgBIAOgDQAFgBADgCIADAEIgFABIgGABIAAAKIAKAAIACgDIAEAEIgQAAIAAAIIAHAAIACgBIADACIgCACIAAAHIAAAIIgDABgAjHpiIARAAIAAgLIgRAAgAlxpcQAKgEAEgGQAEgGACgJIgNAAIgFAAIgCgBIAUAAIABgNIgLAAIgFABIgBgDIAfAAIADgDIAEAFIgSAAIgBANIAOAAIADgDIAFAEIgSAAIAAATQAAABAAABQABAAAAAAQAAABABAAQABAAAAAAIAIAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIABgHIABAAQgBAJAEAAQgCADgFAAIgLAAQgEAAAAgDIAAgVIgBAAQgCAKgEAGQgFAGgMAEgAntpwQgEAFgFADIAAAAIAIgJIAGgLIgHAAIgFABIgCgCIAOAAIACgCIADADIgCABIgFAHQAFACABACIABACIgBABIAAABIgCgBIgEgFIAAAWIgDABIAAgVgAoopbIAMgFQAFgDACgHIgNAAIgFAAIgBgBIATAAIABgGIAFADIgCAAIgBADIARAAIADgDIADAEIgUAAQADAEAFADQAFADAIACIAAAAQgEAAgBADQgHgDgEgEQgEgFgCgDIgCAAQgCAHgFAEQgFADgKABgAqppvQgIAOgNAFIAAgBQAMgHAHgNIgNAAIgEABIgCgDIAVAAIAAgMIgLAAIgFABIgBgCIARAAIAAgJIAFACIgCACIAAAFIAMAAIADgCIAEADIgTAAIAAAMIAEAAQAEgFACgGIAEAEIgCAAIgHAHIAJAAIADgDIAEAFIgTAAQAHAMANADIAAABQgBAAgBABQgBAAAAAAQgBAAAAABQgBAAAAABQgLgHgFgMIgBAAIAAAVIgDABIAAgUgArbpwQgHALgNAGIgBAAQAMgIAHgMIgLAAIgFAAIgCgCIAUAAIAAgJIgIAAIgFAAIgCgBIAPAAIAAgKIAFADIgCABIAAAGIAJAAIACgDIAEAEIgPAAIAAAKIANAAIADgDIAEAEIgSAAQAHANAMADIAAABQgDAAgBADQgMgIgEgMIgBAAIAAAXIgDABIAAgVgALUpzIgGAIQgDAEgEADIAAgBIAHgJIAFgKIgHAAIgCABIgBgCIALAAIAAgJIgKABIAAgBIALgCIAHgEIADAEIgJACIAAAJIAFAAIACgDIADAEIgKAAIAAAEQAIACAAACIABACIAAACIgBAAIgBgBIgHgGIABAWIgEACIABgYgAKyplIAAgKIAEACIgCABIABAQIgDABIAAgKgAKXpcQAHgCAEgEQADgDABgKQgGAFgKADIAAgBQANgFAFgJIgIAAIAAABIgCABIAAgKIAAgJIADACIAWAAIACgCIADACIgCACIAAANIgCABIAAgBIgIAAQAEAEAEADIALACIAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAABgBAAIgJgEQgEgDgDgFIgEAAQgCAEgDADIAEABIgCABQgBAKgEADQgEADgIACgAKtp3IALAAIAAgHIgLAAgAKgp3IALAAIAAgHIgLAAgAKtp/IALAAIAAgFIgLAAgAKgp/IALAAIAAgFIgLAAgAIypfIAAgCIAGACQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAgNIgGAEIgCgDIAIgEIAAgLIgEAAIgDABIgBgCIAIAAIAAgLIAFADIgCABIAAAHIADAAIACgCIADADIgIAAIAAAKIAHgDIAAAAIgHAFIAAAQQAAAEgEACQAAgDgGgBgApapcQAIgFAEgGQAFgGABgJQACgJgBgJIAGACIgCADQACAJACAIQADAHAFAFQAFAFAGABIAAABQgEAAgCADQgFgEgEgFIgFgKQgCgGgBgKIgDAQQgCAGgFAFQgEAFgJAEgApvpgIAAgBIAHABQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIABgaIgLAAQgEAHgEADIAAAAIAGgMIADgJIAEACIgFAIIALAAIACgCIADADIgCABIgBAaIgCAFIgEACQgBgEgFgBgAJppeIABgBIAAgYIgBAAIgFAAIgBgCIAHAAIAAgFIAAgGIAFACIgCACIAAAHIAJAAIAAgIIAAgHIAEACIgBACIAAALIALAAIAAgIIgBgHIAFACIgCABIAAAMIAEAAIADgDIAEAFIgLAAIAAAPIAAADIgCABIAAgEIgLAAIAAADIgDABIAAgDIAAgQIgJAAIAAAZIAcAAIADgEIAEAFIgjAAIgBABgAJ5ppIALAAIAAgOIgLAAgAAtpcQAJgGACgNIAFACIgCACIgCADQAEAEAGACIAAgOIgOAAIgFAAIgCgBIAkAAIADgEIAEAFIgTAAIAAAGIAKAAIACgDIAEAFIgQAAIAAAHIAKACIAKgBIAAABQgDAAgBADQgLgBgFgBIgIgEIgFgFQgEAIgHADgAqIpuIAAgSIADACIACAAIACgLIAEADQgCABgDAHIAGAAIACgCIADADIgCABIAAAeIgCACIAAgFIgKAAIAAAEIgDABIAAgSgAqFpiIAKAAIAAgNIgKAAgAqFpwIAKAAIAAgNIgKAAgAGipdQgDgEgIgFIABAAIAKAEQABABAAAAQABABAAAAQABAAAAABQAAAAAAABIgBACIgCgBgAkkpcQgGAAABgGIAAgUIAEACIgBACIAAAKQAHgGADgGIAEAFIgDAAIgLAIIAAAEQAAACAAAAQAAABAAAAQABABAAAAQABAAAAAAIAJAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIAAgGIABAAIAAAFQAAABABABQAAAAAAABQAAAAABAAQAAABABAAQgCADgDAAgAIGpeIAMAAIAAgQIAFABIgCACIAAANIAGAAIAAgQIAFACIgCABIAAAIIAEgEIAEgGIADADIgBAAIgKAIIAAAEIAHAAIADgEIAEAFIghAAIgEAAgAF6pdIAJgGIAFgEIADADIgCAAIgFADIgJAEgAjWpdIgBgCIABgDIAAgDIgBgCIgDgBIAAgCIAEABIACgCIAGgRIABAAIgFAUQgBACAAADIAAAGIgBAAIgCAAgAkNpfIAVAAIAAgOIgHAAIgFAAIgBgBIANAAIAAgMIgMAAQgEAIgEAEIAAAAIAGgMIADgLIAFADQgCABgDAFIALAAIAAgNIAFACIgCACIAAAJIALAAIADgDIAEAFIgSAAIAAAMIAJAAIADgDIAEAEIgQAAIAAAOIAOAAIAEgDIADAFIgmAAIgFAAgAk4phQAAAAAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgRIgDAAIgDABIgCgCIAIAAIABgCIADADIgCABIAAASIAJgIIABABQgJAKgBADgAHipdIAAgBIADgDIABgEIgCAAIgBgBIAAgCIABgDIADAAIACABIABADIgBACIgDAFIgDADgAEWpfIAQAAIAAghIAAgIIAEADIgBACIAAAkIAIAAIAAghIgBgIIAFADIgCACIAAAcQAIgLADgLIAEADIgCABQgHAOgGAFIAAAHIAKAAIADgEIAEAFIgoAAIgFABgACRpfIAQAAIAAghIAAgIIAEADIgBACIAAAkIAIAAIAAghIgBgIIAFADIgCACIAAAcQAIgLADgLIAEADIgCABQgHAOgGAFIAAAHIAKAAIADgEIAEAFIgoAAIgFABgAAWpeIgJgBQgDgCgDgCIgDgCIgDACIgBAFIgDgDIAGgFIAAgQIgCAAIgDAAIgBgBIAFAAIACgCIADADIgCAAIAAAQQACACAEABQADACAGAAIALAAIAKgBIAAABQgEABAAADIgPgBgAggpdIAAgBIADgDIABgEIgCAAIgBgBIAAgCIABgDIADAAIACABIABADIgBACIgDAFIgDADgAmOpdIAAgBIADgDIABgEIgCAAIgBgBIAAgCIABgDIADAAIACABIABADIgBACIgDAFIgDADgADkphIAVAAIAAgfIgMAAIgEAAIgCgBIAgAAIADgEIAEAFIgSAAIAAAfIANAAIAEgDIAEAFIgmAAIgFABgADOpiQgCgEgGgEIAAAAQAFABACABIAEADIABADQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgCABQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBgAiIphIAVAAIAAgfIgMAAIgEAAIgCgBIAgAAIADgEIAEAFIgSAAIAAAfIANAAIAEgDIAEAFIgmAAIgFABgAiepiQgCgEgGgEIAAAAQAFABACABIAEADIABADQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIgCABQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBgAnnphIAOAAIAAgUIgEAAIgFABIgCgCIALAAIgBgSIAFADIgCABIAAAOIAHAAIACgCIADADIgMAAIAAAUIAIAAIADgCIAEAEIgYAAIgFABgABupnIAAgHIADABIAKAAIABgCIADACIgBABIAAAKIgDABIAAgCIgKAAIAAACIgDACIAAgIgABxpkIAKAAIAAgIIgKAAgALipzIgBgQIADACIAKAAIACgCIADADIgCABIAAAcIgDABIAAgEIgKAAIAAAEIgDABIABgSgALkpnIAKAAIAAgZIgKAAgAINpiIgBgDIgDgHIAAgBIAGAHIABACIgBACIgBAAIgBAAgAFIplIAIgDIAAgRIgCAAIgEABIgCgCIAIAAIAAgGIAAgIIAFACIgCACIAAAKIADAAIACgCIADADIgIAAIAAAPIAIgDIAAABQgOAIgDACgAJEplQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgQIgBgMIAFADIgCABIAAAZIAJgHIABAAIgGAGIgEAGgAAVp4QgGAIgIAGIgBgBQAIgHAEgHIAFgJIgJAAIgDAAIgCgCIAYAAIACgCIAEAEIgPAAIADACIgCAAIgDAGIACACIgBABIAAATIgDACIABgWgAEfprQgBgFgGgMIABgBQAJANAAACQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAIgCACQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBgACaprQgBgFgGgMIABgBQAJANAAACQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAIgCACQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBgApwptQAAgDgDgFIAAAAIAGAFIABACIgBADIgBABQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBgAAjptIgDgEIgGgFIABAAIAIAEQADACAAACIAAACIgBABIgCgCgABoptQAGgFACgFIADADIgEADIgHAFgAB/pvQgBgDgFgDIAAgBQAIACABABIAAADIgBACIAAAAIgCgBgAonpuQAHgDAEgEIAHgHIgLAAIgFABIgCgCIAVAAIAAgIIAAgEIAFACIgCACIAAAIIADAAIAHgKIAEADIgCABIgIAGIAKAAIADgDIADAEIgUAAIAAACIAOAEIADACIAAACIAAACIgBAAIgDgCQgDgDgKgEIAAAHIgDABIAAgLIgIAIQgFAEgIACgAIXpvQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAgDIgHABIgCABIgCgCIALAAIgBgHIAFADIgCABIAAADIAIgBIACgCIAEADIgOAAIAAACQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAABIALAAIACgCIABgDIABAAIAAACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAABABQgBAAAAAAQAAABgBAAQgBAAAAAAQgBABAAAAgAnEpwQAGgEAGgGQAGgHADgIIAEADIgCABQADAFAGAEQAGAEAIACIAAAAQgEABgBACQgEgBgFgEQgGgFgEgGIgJALQgGAFgHAEgAkypxQAFgGAEgGQADgFACgHIAFADIgCABQAGAMAJAEIAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAABgBAAQgJgIgDgJQgGAMgKAHgAjWp1IgFgFIABgBQAHADAAACQAAABAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBABIgBgDgAqxp2QgBgCgEgFIABAAQAFACABACIABACIgBACIgBABIgBgCgAF6p2IAYAAQgBgCgDgCIABAAIAEABIABACIgBABIANAAIAEgCIADADIgmAAIgFABgABMp2IgRAAIAAABIgDABIABgKIgBgKIAEACIAQAAIACgCIADADIgCABIAAAOIgDACgAA7p4IARAAIAAgGIgRAAgAA7p/IARAAIAAgGIgRAAgAm6p2IASAAIACgCIAEADIgSAAIgEABgAGEqAIAAgIIADACIAUAAIACgCIADADIgBABIAAAFIAAAFIgDABIAAgCIgVAAIAAACIgDABIAAgIgAGHp8IAVAAIAAgEIgVAAgAGHqBIAVAAIAAgEIgVAAgAJOp9IgEgIIABAAIAFAFIABADIgBABIAAACIgBABIgBgEgABup7QgBgCgCgDIAAgBQAGADAAABIgBADIgBABIgBgCgAjSqAIgEgGIAAgBQAGADAAACIABACIgBABIgBABQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgAk2qAIgDgGIABgBIAEAEQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBACIgBABQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBgAoaqAIgGgGIABgBIAGAEQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIgBACIgBABIgBgCgAADqBIgDgGIAAgBIAEADIACAEIgBABIgBABIgBgCgAnsqBQAAgDgDgDIABgBIAFAEIAAACIAAACIgCAAIgBgBgABgqCIAVAAIgDgGIABgBIAEADIABABIgBADIAOAAIADgDIADAEIglAAIgFABgApqqkQgEgCgCgEQgCgEAAgFQAAgJAEgFQAFgFAIAAQAFAAAEACQAEADACAEQACAFAAAEQAAAGgCAEQgCAEgFADQgEACgEAAQgFAAgEgDgApqq/QgDAEAAAIQAAAGADAEQAEAEAFAAQAFAAAEgEQADgDAAgIQAAgEgBgDQgCgEgDgBQgDgCgDAAQgFAAgEADgArIqhIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgEIAIAAIACgKIADAAIgCAKIAIAAIACgKIAEAAIgCAKIAEAAIAAAEIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArNqvIAHAAIACgJIgHAAgArkqhIACgLIgIAAIgCALIgEAAIACgLIgEAAIAAgDIAFAAIACgJIgHAAIAAgEIAIAAIACgKIADAAIgCAKIAIAAIACgKIAEAAIgCAKIAEAAIAAAEIgFAAIgCAJIAHAAIAAADIgIAAIgCALgArpqvIAHAAIACgJIgHAAgAoBqiIAAgkIAaAAIAAAFIgWAAIAAALIAUAAIAAAEIgUAAIAAANIAWAAIAAADgAoeqiIAAgkIAFAAIAAAhIASAAIAAADgAorqiIAAgkIAFAAIAAAkgApKqiIAAgkIAYAAIAAAFIgTAAIAAALIARAAIAAAEIgRAAIAAAQgAp7qiIgFgHIgDgFIgDgCIgCgBIgDgBIgFAAIAAAQIgFAAIAAgkIAQAAIAHABQADABABADQACACAAADQAAAEgDADQgCADgFAAIADACIADAFIAHAJgAqQq2IAKAAIAFAAIADgCIABgEQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBAAQgCgCgEAAIgLAAgAq2qiIAAgkIANAAIAGABIAEABIADAEIABAFQAAAFgDADQgDADgHAAIgKAAIAAAOgAqyq1IAKAAQAEABACgCQACgCAAgDQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgBIgFgBIgJAAg");
	this.shape.setTransform(77.6,74);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,2.9,151,142.3);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEEE").s().p("AAVDeQgEADgGAAQgGAAgEgDQgDgDgDgFQgDgFABgGQgBgHADgFQADgFADgDQAEgCAGAAQAGAAAFACQAEADADAFQACAFAAAHQAAAFgBAEQgCAFgDADIAHAEIgBAEQgFgCgFgEgAABC+QgCAEgBAJQABAIACAFQADAEAHAAIAGgBIgGgCIABgFQAFACAEACQAFgEAAgJQAAgFgCgEQgCgEgDgCQgEgDgEAAQgGAAgEAFgABsDeQgEgEgBgFIAGgBQAAAFADACQACACADAAQAEAAADgDQACgDAAgDQAAgEgCgCQgDgDgDAAIgEABIABgFIABAAIAFgBQADgCAAgEQAAgDgCgCQgCgCgDAAQgDAAgCACQgCACAAAEIgGgBQABgFAEgDQADgDAFAAQAEAAADACQACABACADQACACgBADQABADgCACQgCADgCABQADABACADQACACAAAFQAAAFgEAEQgDAEgHAAQgFAAgEgDgACuDdQgDgGAAgMQgBgIACgEQACgFACgCQAEgDAEAAQAEAAACACQADABACADIADAGIABAKQgBAIgBAEQgCAFgDACQgDADgFAAQgFAAgFgEgACzC9QgDADAAALQAAALADADQACAEADAAQAEAAACgEQADgDAAgLQAAgLgDgDQgCgEgEAAQgDAAgCAEgACNDdQgEgGAAgMQAAgIABgEQACgFADgCQADgDAFAAQADAAADACQADABACADIACAGIABAKQAAAIgCAEQgBAFgDACQgEADgEAAQgGAAgEgEgACRC9QgCADAAALQAAALACADQADAEADAAQADAAADgEQADgDAAgLQAAgLgDgDQgDgEgDAAQgDAAgDAEgAjkDeQgEgDgCgFQgDgFAAgGQAAgKAGgGQAFgGAKAAQAGAAAEACQAFADADAFQACAFAAAHQAAAGgCAGQgDAFgFACQgFADgFAAQgGAAgGgDgAjjC+QgEAEAAAJQAAAIAEAFQAEAEAHAAQAGAAAEgEQAEgFAAgIQAAgFgCgEQgCgEgDgCQgDgDgEAAQgHAAgEAFgABGDgIAAgDIADgGIAIgHQAGgFADgEQACgDAAgDQAAgDgCgCQgDgDgDAAQgEAAgCADQgCACgBAEIgEAAQAAgHADgDQAEgDAGAAQAHAAADAEQAEADAAAFIgBAFIgEAFIgIAIIgGAFIgDADIAWAAIAAAFgAAoDgIAAgGIAGAAIAAAGgAgtDgIAAgrIAfAAIAAAFIgaAAIAAAOIAYAAIAAAFIgYAAIAAAOIAbAAIAAAFgAg6DgIgGgJIgEgGIgCgCIgEgCIgDAAIgGAAIAAATIgGAAIAAgrIAUAAIAIABQADACACADQACACAAAEQgBAFgDADQgCADgHABIAEACIAEAGIAIALgAhTDIIAMAAIAGgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBABAAIABgEQAAgDgCgCQgCgCgFAAIgOAAgAh5DgIgWghIAAAhIgGAAIAAgrIAGAAIAWAiIAAgiIAGAAIAAArgAigDgIgFgNIgSAAIgEANIgHAAIARgrIAGAAIASArgAixDCIgEANIAOAAIgEgMIgDgJIgDAIgAkNDgIAAgrIAFAAIAAAmIAWAAIAAAFgAAoDHIAAgGIAGAAIAAAGgAD6CMQgDgEgBgFIAGAAQAAAEACACQACACAEAAQADAAADgDQADgDAAgFQAAgEgDgDQgCgDgEAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABIgDADIgFgBIAEgWIAVAAIAAAFIgRAAIgCALQAEgCAEAAQAGAAAEAEQADAEAAAGQABAGgEAEQgEAFgHAAQgGAAgEgDgADZCLQgEgEgBgFQABgEACgDQACgDADgBIgEgDQgCgDAAgDQAAgEADgEQAEgDAGAAQAFAAADADQAEAEAAAEQAAADgCADQgBACgDABQADABACADQACADABAEQAAAFgEAEQgEAEgGAAQgHAAgDgEgADcB8QgCACAAAEIABAEIADAEIAFABQADAAADgDQACgCAAgEQAAgEgCgCQgDgDgDAAQgFAAgCADgADdBpQgCACAAADQAAADACACQADACADAAQACAAADgCQACgCAAgDQAAgDgCgCQgDgCgCAAQgDAAgDACgAC3CMQgDgDAAgFIAFAAQABADACACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAEgBIADgDIACgFIABgHIAAgBQgBADgDABQgDACgEAAQgFAAgEgEQgDgEAAgGQAAgHAEgEQAEgEAFAAQAFAAADACQAEADACAEQABAEAAAIQAAAIgBAFQgCAFgEACQgEADgEAAQgFAAgEgDgAC7BqQgDADAAAFQAAAEADACQADADADAAQADAAADgDQADgCgBgFQABgEgDgDQgDgDgDAAQgDAAgDADgAB/CPIAMgsIAEAAIgNAsgABkCLQgEgGgBgMQAAgIACgEQABgFADgCQAEgDAFAAQADAAADACQACABACADIACAGIACAKQAAAIgCAEQgBAFgDACQgEADgEAAQgGAAgEgEgABnBrQgCADAAALQAAALACADQADAEAEAAQADAAADgEQACgDAAgLQAAgLgCgDQgDgEgDAAQgEAAgDAEgACgCOIAAghIgFADIgGADIAAgFIAIgFIAFgGIADAAIAAArgABMCOIAAghIgEADIgGADIAAgFIAIgFIAFgGIADAAIAAArgAAgCOIAAgGIAGAAIAAAGgAAECOIAAgSIgOgZIAHAAIAGANIAFAIIAEgIIAJgNIAHAAIgRAZIAAASgAgQCOIgGgNIgSAAIgEANIgGAAIARgrIAGAAIARArgAghBwIgFANIAPAAIgEgMIgEgJIgCAIgAhZCOIAAgrIAPAAIAHABQAFABACACQAEADABAEQACAFAAAGIgBAIIgEAGIgDAEIgGADIgHAAgAhTCJIAJAAIAGgBIAFgCQACgCABgDQABgEAAgFQAAgGgCgEQgCgEgEgBIgHgBIgJAAgAhoCOIAAgUIgWAAIAAAUIgGAAIAAgrIAGAAIAAASIAWAAIAAgSIAGAAIAAArgAieCOIAAgmIgOAAIAAgFIAiAAIAAAFIgOAAIAAAmgAi2COIgFgJIgFgGIgCgCIgDgCIgDAAIgGAAIAAATIgHAAIAAgrIAUAAIAIABQAEACACADQABACAAAEQAAAFgDADQgDADgGABIAEACIAEAGIAHALgAjOB2IALAAIAHgBQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgEQAAgDgCgCQgCgCgFAAIgNAAgAjkCOIAAgrIAGAAIAAArgAkNCOIAAgrIAQAAQAFAAADACQADABACADQABACAAADIgBAFQgCADgDABQAEACACACQACADAAAEQAAADgBACQgBADgCABIgFADIgGAAgAkICJIAMAAIADAAIADgBIADgDIABgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgHgBIgKAAgAkIB1IAKAAIAFAAIADgCIABgEIgBgEIgDgCIgGgBIgJAAgAAgB1IAAgGIAGAAIAAAGgAhrA6QgEgEgBgFIAGgBQAAAFADACQACACADAAQAEAAACgDQADgDAAgDQAAgEgDgCQgCgDgDAAIgEABIAAgFIACAAIAFgBQADgCAAgEQAAgDgCgCQgCgCgDAAQgDAAgCACQgCACAAAEIgGgBQABgFAEgDQADgDAFAAQADAAADACQAEABABADQACACgBADQABADgCACQgBADgEABQAFABABADQACACAAAFQAAAFgDAEQgEAEgHAAQgGAAgDgDgAhKA5QgEgGAAgMQAAgIABgEQACgFADgCQADgDAFAAQADAAADACQADABACADIACAGIABAKQAAAIgBAEQgCAFgDACQgDADgFAAQgGAAgEgEgAhGAZQgCADAAALQAAALACADQADAEADAAQADAAADgEQACgDAAgLQAAgLgCgDQgDgEgDAAQgDAAgDAEgAjcA6QgFgCgDgGQgDgFAAgGQAAgGADgGQADgFAFgDQAFgCAGAAQAFAAADABQAFACABACIAEAHIgFACIgDgFQgBgCgDgBQgDgCgDAAQgDAAgDACQgEABgBACIgDAEQgBAEAAAFQAAAFACAEQABAEAFACQADACAEAAIAHgCQAEgBACgCIAAgIIgNAAIAAgFIASAAIAAAQIgIAFQgEACgGAAQgGAAgFgDgAiNA8IAAgGIAGAAIAAAGgAi3A8IAAgrIAgAAIAAAFIgaAAIAAAOIAYAAIAAAFIgYAAIAAAOIAbAAIAAAFgAjwA8IgFgNIgSAAIgEANIgHAAIARgrIAGAAIASArgAkBAeIgEANIAOAAIgEgMIgDgJIgDAIgAiNAjIAAgGIAGAAIAAAGgAkEgWQgFgCgCgGQgDgFAAgGQAAgGADgGQACgFAFgDQAFgCAGAAQAFAAAEABQADACADACIADAHIgGACIgCgFQgBgCgDgBQgCgCgEAAQgEAAgDACQgDABgBACIgDAEQgBAEgBAFQAAAFACAEQADAEADACQAEACAEAAIAIgCQADgBACgCIAAgIIgNAAIAAgFIASAAIAAAQIgIAFQgFACgFAAQgFAAgGgDgACPgUIAAgrIAfAAIAAAFIgaAAIAAAOIAYAAIAAAFIgYAAIAAAOIAbAAIAAAFgABtgUIAAgrIAGAAIAAAmIAVAAIAAAFgABigUIgFgNIgSAAIgEANIgGAAIAQgrIAGAAIARArgABSgyIgFANIAPAAIgFgMIgDgJIgCAIgAA3gUIAAgkIgNAkIgFAAIgMgkIAAAkIgGAAIAAgrIAJAAIAJAfIACAGIADgHIALgeIAHAAIAAArgAgLgUIAAgGIAGAAIAAAGgAgYgUIgHgJIgDgGIgDgCIgDgCIgDAAIgHAAIAAATIgGAAIAAgrIAUAAIAJABQADACABADQACACAAAEQAAAFgDADQgDADgGABIADACIAFAGIAIALgAgygsIAMAAIAGgBQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgEQAAgDgCgCQgCgCgFAAIgOAAgAhggUIAAgrIAgAAIAAAFIgZAAIAAAOIAXAAIAAAFIgXAAIAAAOIAaAAIAAAFgAiLgUIAAgrIAPAAIAIABQAEABACACQADADACAEQACAFgBAGIgBAIIgCAGIgFAEIgEADIgHAAgAiFgZIAJAAIAHgBIADgCQACgCABgDQACgEAAgFQAAgGgDgEQgCgEgDgBIgHgBIgJAAgAibgUIgWghIAAAhIgGAAIAAgrIAGAAIAXAiIAAgiIAFAAIAAArgAjegUIAAgrIAfAAIAAAFIgZAAIAAAOIAXAAIAAAFIgXAAIAAAOIAaAAIAAAFgAgLgtIAAgGIAGAAIAAAGgACghcQgDgCgBgFIAGABIABADQADACADAAQADAAACgCQACgBABgDIABgHQgEAEgFAAQgGAAgEgEQgDgFgBgGQABgFABgEQACgDADgDQADgCAEAAQAGAAADAFIAAgEIAFAAIAAAbQAAAHgBADQgCADgEACQgDACgEAAQgGAAgDgDgACjh+QgCADAAAFQAAAGACADQACADAFAAQADAAACgDQADgDAAgGQAAgFgDgDQgCgDgDAAQgEAAgDADgAAAhaIAAgFIABABIACgBIACgBIACgEIABgCIgLgfIAEAAIAHASIACAHIACgHIAHgSIAFAAIgMAgIgDAHIgDAEIgFABIgBgBgABchoQgDgCAAgEIABgEIACgDIAEgCIAFgBIAJgBIAAgCQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgCgCgEAAQgEAAgBABQgCABgCAEIgEgBIACgFQABgCAEgBQADgCADAAIAHABIADADIADADIAAAFIAAAHIAAAKIACADIgGAAIgBgEIgGAEIgFABQgGAAgCgDgABlhzIgEABIgCABIgBADQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAIAGgBQACgCACgCIAAgFIAAgCIgJACgAgghoQgDgCAAgEIABgEIADgDIAEgCIAEgBIAKgBIAAgCQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBAAQgBgCgFAAQgEAAgBABQgCABgBAEIgFgBIACgFQACgCADgBQADgCAEAAIAGABIAEADIACADIAAAFIAAAHIABAKIABADIgGAAIgBgEIgFAEIgGABQgFAAgDgDgAgWhzIgEABIgDABIAAADQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAGgBQACgCABgCIABgFIAAgCIgJACgAg+hoQgEgEAAgGIAGgBQAAAFABACQABABABAAQAAAAABAAQAAABABAAQAAAAABAAIAEgBIACgDIAAgFIAAgeIAGAAIAAAeQAAAFgBADQgCADgCABQgDACgDAAQgHAAgCgDgACQhmIAAgTIAAgEIgDgDIgEgBQgDAAgDACQgCACAAAGIAAARIgFAAIAAgfIAEAAIAAAFQAEgGAGAAIAGABIADADIACAEIAAAFIAAATgABNhmIAAgfIAFAAIAAAfgAAshmIAAgrIAFAAIAAAmIAWAAIAAAFgAhfhmIAAgGIAHAAIAAAGgAiHhmIAAgrIAfAAIAAAFIgaAAIAAAOIAYAAIAAAFIgYAAIAAAOIAbAAIAAAFgAiWhmIAAgkIgMAkIgGAAIgMgkIAAAkIgFAAIAAgrIAIAAIAKAfIACAGIADgHIAKgeIAIAAIAAArgAjEhmIgGgNIgSAAIgEANIgGAAIARgrIAGAAIARArgAjViEIgFANIAPAAIgEgMIgEgJIgCAIgAjxhmIgXghIAAAhIgFAAIAAgrIAGAAIAXAiIAAgiIAFAAIAAArgAhfh/IAAgGIAHAAIAAAGgABNiLIAAgGIAFAAIAAAGgAAai6QgFgEAAgFIAGgBQAAAFACACQACACAEAAQAEAAACgDQADgDAAgDQAAgEgDgCQgCgDgEAAIgEABIABgFIABAAIAGgBQACgCAAgEQAAgDgCgCQgBgCgDAAQgEAAgCACQgCACAAAEIgGgBQABgFAEgDQADgDAGAAQADAAADACQADABACADQABACAAADQAAADgBACQgCADgDABQAEABACADQACACAAAFQAAAFgEAEQgEAEgGAAQgGAAgDgDgAgoi6QgEgEAAgFIAFgBQABAFADACQACACACAAQAFAAACgDQADgDgBgDQABgEgDgCQgCgDgEAAIgDABIAAgFIABAAIAGgBQACgCAAgEQAAgDgBgCQgDgCgDAAQgCAAgCACQgCACgBAEIgFgBQABgFADgDQAEgDAEAAQAEAAADACQADABABADQACACAAADQAAADgCACQgBADgDABQAEABACADQACACAAAFQAAAFgEAEQgEAEgHAAQgFAAgEgDgAhqi6QgFgEAAgFIAGgBQAAAFACACQADACADAAQAEAAACgDQACgDABgDQgBgEgCgCQgCgDgEAAIgEABIABgFIABAAIAGgBQADgCAAgEQgBgDgCgCQgCgCgCAAQgDAAgDACQgCACAAAEIgGgBQABgFAEgDQAEgDAFAAQADAAADACQADABABADQACACAAADQAAADgCACQgBADgDABQAEABACADQACACAAAFQAAAFgEAEQgEAEgGAAQgGAAgDgDgABmi4IAAghIgEADIgGADIAAgFIAIgFIAEgGIAEAAIAAArgAA2i4IABgDIADgGIAHgHQAHgFACgEQACgDAAgDQAAgDgCgCQgCgDgEAAQgDAAgCADQgCACgBAEIgFAAQAAgHAEgDQAEgDAGAAQAGAAAEAEQADADAAAFIgBAFIgEAFIgHAIIgGAFIgDADIAVAAIAAAFgAAEi4IAAgKIgQAAIAAgFIARgcIAFAAIAAAcIAGAAIAAAFIgGAAIAAAKgAgHjHIALAAIAAgTgAhOi4IABgDIADgGIAHgHQAHgFACgEQACgDAAgDQAAgDgCgCQgCgDgDAAQgEAAgCADQgCACgBAEIgFAAQABgHADgDQAEgDAGAAQAGAAAEAEQADADAAAFIgBAFIgDAFIgIAIIgHAFIgCADIAVAAIAAAFgAiCi4IAAghIgFADIgFADIAAgFIAIgFIAEgGIAEAAIAAArgAiyi4IAAgDIADgGIAHgHQAHgFADgEQACgDAAgDQAAgDgCgCQgDgDgDAAQgDAAgDADQgCACgBAEIgEAAQAAgHADgDQAEgDAGAAQAHAAADAEQADADABAFIgBAFIgEAFIgIAIIgGAFIgCADIAVAAIAAAFgAjQi4IAAgGIAGAAIAAAGgAj8i4IAAgrIAOAAIAIABQAEABADACQADADABAEQACAFAAAGIgBAIIgDAGIgEAEIgFADIgHAAgAj3i9IAJAAIAHgBIAEgCQACgCABgDQABgEABgFQgBgGgCgEQgCgEgEgBIgHgBIgJAAgAkMi4IAAgrIAGAAIAAArgAjQjRIAAgGIAGAAIAAAGg");
	this.shape.setTransform(29.5,25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,3.1,55,45.7);


(lib.mock_user_pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.user();
	this.instance.setTransform(-18,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-18,36,36);


(lib.card_cycle_glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FFFF","rgba(255,255,255,0)"],[0.255,0.655],0,0,0,0,0,21.1).s().p("AgxDBQhQgUgshJQgohFAYhPQAThVBJgpQBFgoBOAUQBQAYAsBFQAoBJgYBPQgTBRhJApQgsAdgxAAQgZAAgdgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20.2,40,40.5);


(lib.card_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape.setTransform(-11.3,-13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_1.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_2.setTransform(-15.3,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_3.setTransform(-17.5,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#205872").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_4.setTransform(-18,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#205872").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_5.setTransform(-16.8,7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#205872").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_6.setTransform(-13.5,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_7.setTransform(-9,15.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_8.setTransform(3.2,17.6,1,1,-154.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_9.setTransform(8.4,15.6,1,1,-154.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_10.setTransform(12.6,11.9,1,1,-154.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#205872").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_11.setTransform(16.1,6.8,1,1,150);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#205872").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_12.setTransform(17.6,1.3,1,1,150);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205872").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_13.setTransform(16.9,-4.4,1,1,150);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#205872").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_14.setTransform(14.3,-9.8,1,1,150);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#205872").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_15.setTransform(10.5,-14,1,1,150);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#205872").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_16.setTransform(5.6,-16.6,1,1,150);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#205872").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_17.setTransform(0.1,-17.5,1,1,150);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#205872").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_18.setTransform(-5.7,-16.5,1,1,150);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_19.setTransform(-3.3,17.5,1,1,-18.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_20.setTransform(-9,15.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AF8F3").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_21.setTransform(-13.5,12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8AF8F3").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_22.setTransform(-16.8,7.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AF8F3").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_23.setTransform(-18,1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_24.setTransform(-17.5,-4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_25.setTransform(-15.3,-9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_26.setTransform(-11.3,-13.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8AF8F3").s().p("AgFASIgSgEIgBgBIALgiIAOAEIAZADIgCAkg");
	this.shape_27.setTransform(-5.7,-16.5,1,1,150);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AF8F3").s().p("AANAaIgGgCIgjgWIAXgcIAFAEIAKAHIARAJIACAAIgOAhg");
	this.shape_28.setTransform(0.1,-17.5,1,1,150);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8AF8F3").s().p("AgFASIgXgZIAegVIAMAQIAKAKIAEACIABABIgZAcg");
	this.shape_29.setTransform(5.6,-16.6,1,1,150);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8AF8F3").s().p("AgGAaIgGgMIgKgXIgCgFIgBgDIAjgKIAPAiIABACIgfATg");
	this.shape_30.setTransform(10.5,-14,1,1,150);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AF8F3").s().p("AgTAAIAAgYIAkACIgBAOIABAHQAAAIADALIgjAHQgDgMgBgNg");
	this.shape_31.setTransform(14.3,-9.8,1,1,150);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_32.setTransform(16.9,-4.4,1,1,150);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_33.setTransform(17.6,1.3,1,1,150);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_34.setTransform(16.1,6.8,1,1,150);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8AF8F3").s().p("AgWAWIAEgXIAIgXIABgCIAgAPIgEALIgGAag");
	this.shape_35.setTransform(16.9,-4.4,1,1,150);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8AF8F3").s().p("AgbANIAXgjIAEgGIAcAZIgEADIgJALIgKASg");
	this.shape_36.setTransform(17.6,1.3,1,1,150);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AF8F3").s().p("AgcACIAMgJIAagUIATAeIgRAMIgGAFIgDACIgEAGg");
	this.shape_37.setTransform(16.1,6.8,1,1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_7,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_1,p:{rotation:-18.7,x:-3.3,y:17.5}},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]}).to({state:[{t:this.shape_18},{t:this.shape_7,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_1,p:{rotation:0,x:-9,y:15.6}},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_6,p:{rotation:0,x:-13.5,y:12.1}},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_5,p:{rotation:0,x:-16.8,y:7.4}},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_4,p:{rotation:0,x:-18,y:1.6}},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_3,p:{rotation:0,x:-17.5,y:-4.4}},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_9,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_2,p:{rotation:0,x:-15.3,y:-9.7}},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_11},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_8,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape,p:{rotation:0,x:-11.3,y:-13.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_1,p:{rotation:150,x:0.1,y:-17.5}},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_6,p:{rotation:150,x:5.6,y:-16.6}},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_5,p:{rotation:150,x:10.5,y:-14}},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_4,p:{rotation:150,x:14.3,y:-9.8}},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_10,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_9,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_8,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_32,p:{rotation:150,x:16.9,y:-4.4}},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_3,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_33,p:{rotation:150,x:17.6,y:1.3}},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_2,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_34,p:{rotation:150,x:16.1,y:6.8}},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).to({state:[{t:this.shape_27},{t:this.shape_28},{t:this.shape_29},{t:this.shape_30},{t:this.shape_31},{t:this.shape_35},{t:this.shape_36},{t:this.shape_37},{t:this.shape_32,p:{rotation:-154.3,x:12.6,y:11.9}},{t:this.shape_33,p:{rotation:-154.3,x:8.4,y:15.6}},{t:this.shape_34,p:{rotation:-154.3,x:3.2,y:17.6}},{t:this.shape_20},{t:this.shape_21},{t:this.shape_22},{t:this.shape_23},{t:this.shape_24},{t:this.shape_25},{t:this.shape_19},{t:this.shape_26}]},1).wait(1));

	// 图层 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDAA3B").s().p("AgoDcIAAgJIAOgBQAQgCASgGQAJgDAOgGIAYgNQAagQAUgWQALgLAIgMQAJgOAGgMQALgZAGgYQAEgTAAgSIAAgMIgBgRQgCgTgGgTQgGgSgIgRIgQgbQgMgPgNgNQgRgSgZgNQgHgFgSgIQgNgGgPgEQgagHggABQgeACgWAHQgUAGgPAHIgLAHIgFgIIANgHQAOgHAWgGQAWgIAfgBQAggCAeAIQAPAEANAGQAQAHALAGQAZAOASATQANAMANARIAQAcQAJARAGAUQAHAWABARIABAHIABAYQgBAVgEARQgFAZgMAaQgJAPgHALQgMARgHAIQgVAXgbARIgZANIgZAJQgSAHgRABIgKACg");
	this.shape_38.setTransform(5.1,0.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDAA3B").s().p("AgTBOQgggJgRgdQgRgdAIgeQAJghAdgQQAdgRAeAIQAhAJAQAdQARAdgIAeQgJAggdARQgTAMgVAAQgJAAgKgDgAgig7QgZAPgHAcQgHAaAOAYQAPAZAcAIQAaAHAZgOQAZgPAHgcQAHgagOgZQgPgZgcgHQgJgCgIAAQgRAAgRAJgAgGAbQgLgDgGgKQgGgKADgKQADgLAKgGQAKgGAKADQALADAGAKQAGAKgDAKQgDALgKAGQgHAEgHAAIgGgBgAgLgUQgJAFgCAKQgDAIAFAJQAFAJAKACQAIADAJgFQAJgFACgKQADgIgFgJQgFgJgKgDIgGgBQgFAAgGAEg");
	this.shape_39.setTransform(-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-21.8,41.7,44);


(lib.boardai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("Ag+ApIAAhSIB8AAIAAAoIhJAAIAAAqg");
	this.shape.setTransform(6.3,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AAMApIAAgqIhJAAIAAgoIB8AAIAABSg");
	this.shape_1.setTransform(189.5,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("Ag9ApIAAgnIBJAAIAAgqIAzAAIAABRg");
	this.shape_2.setTransform(189.5,295.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("Ag+ApIAAhRIAzAAIAAAqIBJAAIAAAng");
	this.shape_3.setTransform(6.3,295.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(32,88,114,0.498)").s().p("AvSXbMAAAgu2IelAAMAAAAu2g");
	this.shape_4.setTransform(97.9,150);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.8,300);


(lib.pic_holder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.scan = new lib.scan();
	this.scan.setTransform(0,-75);

	this.timeline.addTween(cjs.Tween.get(this.scan).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(0.5,1,1).p("AJYpXICWAAIAACWIAACWIAACWIAACVIAACWIAACWIAACWIAACWAHCpXICWAAIAAiWICWAAIAACWAHCpXIAAiWICWAAACWpXICWAAIAAiWICWAAAAApXICWAAIAAiWICWAAAAApXIAAiWICWAAAEskrIAAiWICWAAICWAAICWAAAAAnBICWAAICWAAIAAiWICWAAAAAkrIAAiWIAAiWACWkrIAAiWIAAiWAAAkrICWAAICWAAICWAAIAAiWIAAiWAAAiVICWAAICWAAIAAiWAAAiVIAAiWACWiVIAAiWAJYkrIAAiWIAAiWAHCkrICWAAICWAAAHCiVICWAAICWAAAJYiVIAAiWAHCiVIAAiWAEsiVICWAAAkrpXICWAAIAAiWICVAAAkrpXIAAiWICWAAApXpXICWAAIAAiWICWAAArtpXICWAAIAAiWICWAAArtpXIAAiWICWAAApXnBICWAAICWAAIAAiWAnBkrIAAiWIAAiWICWAAApXkrIAAiWIAAiWApXkrICWAAICWAAIAAiWICWAAIAAiWICVAAArtkrIAAiWICWAAApXiVICWAAIAAiWArtiVICWAAIAAiWArtkrICWAAArtiVIAAiWAkriVICWAAIAAiWIAAiWICVAAAkriVIAAiWICWAAICVAAAnBiVICWAAArtnBIAAiWAiVCWIAAiWIAAiVICVAAAkrCWIAAiWICWAAICVAAICWAAICWAAICWAAICWAAICWAAAkrHCIAAiWICWAAIAAiWICVAAIAAiWIAAiVAiVHCIAAiWICVAAIAAiWICWAAIAAiWIAAiVAkrHCICWAAICVAAICWAAIAAiWICWAAIAAiWIAAiWIAAiVAkrEsIAAiWICWAAApXAAICWAAICWAAIAAiVAnBCWIAAiWIAAiVApXCWIAAiWIAAiVApXCWICWAAICWAAArtCWIAAiWICWAAArtHCIAAiWICWAAICWAAIAAiWApXHCICWAAIAAiWICWAAApXHCIAAiWIAAiWArtCWICWAAArtHCICWAAArtEsIAAiWApXJYICWAAIAAiWICWAAAnBLuIAAiWICWAAICWAAIAAiWArtJYICWAAIAAiWApXLuIiWAAIAAiWIAAiWApXLuIAAiWAnBLuIiWAAAiVLuIAAiWICVAAICWAAICWAAIAAiWIAAiWICWAAIAAiWIAAiWIAAiVAkrLuIAAiWIAAiWAiVLuIiWAAIiWAAAJYCWIAAiWIAAiVAHCCWICWAAICWAAAHCHCICWAAIAAiWIAAiWAHCHCIAAiWICWAAICWAAAJYHCICWAAAAAHCIAAiWICWAAIAAiWICWAAICWAAACWHCICWAAICWAAAAALuIAAiWIAAiWACWLuIAAiWIAAiWAEsLuIAAiWICWAAICWAAICWAAIAACWIiWAAIAAiWIAAiWAEsLuIiWAAIiWAAIiVAAAHCLuIAAiWIAAiWAJYLuIiWAAIiWAAArtAAIAAiV");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArsLtIAA3ZIXZAAIAAXZg");

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-125,152,201);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.CompoundPath();
	this.instance.setTransform(11.6,11.3,1,1,0,0,0,9.6,9.6);

	this.instance_1 = new lib.Path_7();
	this.instance_1.setTransform(18.2,17.7,1,1,0,0,0,4.7,4.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgcAgQAQgKAKgSQAIgQAAgVIgCgOIAYgEIABASQAAAbgMAVQgNAXgTAOg");
	this.shape.setTransform(19.1,14.8);

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(2.3,11.3,1,1,0,0,0,2.3,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AgTAsQgWgcAAgkQAAghATgbIATAOQgPAVAAAZQAAAbASAXQAPAVAbAHIgFAXQgjgJgVgcg");
	this.shape_1.setTransform(5.4,13.5);

	this.instance_3 = new lib.Path_4_1();
	this.instance_3.setTransform(16.3,3.5,1,1,0,0,0,3.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AhBALQAPgQAVgKQAVgKAWAAQAbAAAZANIgMATQgUgJgUABQglAAgYAbg");
	this.shape_2.setTransform(10.1,3.5);

	this.instance_4 = new lib.Group();
	this.instance_4.setTransform(11.6,11.3,1,1,0,0,0,8.8,8.7);

	this.instance_5 = new lib.Group_1_1();
	this.instance_5.setTransform(12.2,9.6,1,1,0,0,0,8.5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1},{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,22.4);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AggAAIAAAAIBBAAIAAABg");
	this.shape.setTransform(3.3,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AgXAWIAugsIABABIguAsg");
	this.shape_1.setTransform(7.1,26.2);

	this.instance = new lib.Path_2_3();
	this.instance.setTransform(7.6,7.1,1,1,0,0,0,2.4,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AgIAfIAQg+IACABIgRA9g");
	this.shape_2.setTransform(20.6,3.9);

	this.instance_1 = new lib.Path_4_2();
	this.instance_1.setTransform(22.9,4.7,1,1,0,0,0,1.6,3);

	this.instance_2 = new lib.Path_5_0();
	this.instance_2.setTransform(21.8,4.2,1,1,0,0,0,1.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AgRAcIAhg3IABABIggA2g");
	this.shape_3.setTransform(23.9,5.3);

	this.instance_3 = new lib.Path_7_0();
	this.instance_3.setTransform(28.7,10.4,1,1,0,0,0,3,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8AF8F3").s().p("AgUgYIABgBIAoAyIgBABg");
	this.shape_4.setTransform(8.4,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AF8F3").s().p("AgVAYIApgwIACABIgqAwg");
	this.shape_5.setTransform(25.8,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8AF8F3").s().p("AgXAWIAugsIABABIguAsg");
	this.shape_6.setTransform(26.6,7.5);

	this.instance_4 = new lib.Path_11();
	this.instance_4.setTransform(27.3,8.4,1,1,0,0,0,2.6,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AF8F3").s().p("AgaARIA1gjIABACIg1Ajg");
	this.shape_7.setTransform(28.1,9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8AF8F3").s().p("AgKgeIACAAIATA9IgBAAg");
	this.shape_8.setTransform(12.5,4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8AF8F3").s().p("AgHgeIABgBIAOA/IgBAAg");
	this.shape_9.setTransform(13.6,3.7);

	this.instance_5 = new lib.Path_15();
	this.instance_5.setTransform(11.4,4.5,1,1,0,0,0,1.4,3.1);

	this.instance_6 = new lib.Path_16();
	this.instance_6.setTransform(10.4,5,1,1,0,0,0,1.7,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8AF8F3").s().p("AgRgaIABgBIAjA1IgCABg");
	this.shape_10.setTransform(9.4,5.6);

	this.instance_7 = new lib.Path_18();
	this.instance_7.setTransform(18.4,3.4,1,1,0,0,0,0.5,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8AF8F3").s().p("AgGAgIALg/IACAAIgLA/g");
	this.shape_11.setTransform(19.5,3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8AF8F3").s().p("AAEAhIgIhAIABAAIAIBAg");
	this.shape_12.setTransform(14.8,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8AF8F3").s().p("AAAAhIAAhBIABAAIgBBBg");
	this.shape_13.setTransform(17.2,3.3);

	this.instance_8 = new lib.Path_22();
	this.instance_8.setTransform(16,3.3,1,1,0,0,0,0.3,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_7},{t:this.shape_10},{t:this.instance_6},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_4},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_3},{t:this.shape_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.6,28.5);


(lib.top_left_cycle_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path_57();
	this.instance.setTransform(-0.8,0.1,2.187,2.187,0,0,180,25.3,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,-54.4,99.6,87.4);


(lib.frame_light1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.mc1 = new lib.light1();
	this.mc1.setTransform(-41,-176.7,1,1,177.5,0,0,0,239.4);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// 图层 1
	this.mc2 = new lib.light1();
	this.mc2.setTransform(107.5,57,1,1,0,0,0,73.5,119.7);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-176.7,369.1,353.4);


(lib.block6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Group_5();
	this.instance.setTransform(0.1,3.3,1,1,33.5,0,0,51.1,25.2);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AAKAiQjth+kPADIgBgqQAAgMgVgPIgUgNIgEhvIAegNQAggQAJgOQE+AEEVCUQD2CECrDbQgGAbAMAyIheA6QgKgFgMgEQgYgIgKAGIgoAYQiMi3jNhtg");
	this.shape.setTransform(5.4,1,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-52.6,113.2,105.3);


(lib.block5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Group_6();
	this.instance.setTransform(-0.1,-0.1,1,1,33.5,0,0,9.8,57);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AgLIqQgBgMgCgMQgFgZgKgFIgpgWQBjjygYkCIiogeQgTiOg/iCIB8h4IgPgZIAjgWQAKgGAEgaIABgYIBcg6IAaATQAdATARABQCQEBAVEmQAUErhyEXQgRAEgZAUIgWATg");
	this.shape.setTransform(-2.6,-2.2,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-53,79.3,106.2);


(lib.block4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Group_1();
	this.instance.setTransform(0.4,0,1,1,33.5,0,0,47.5,31.8);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AnZFmIgagJIgFhvQAKgGAKgIQATgRAAgMIgCgxIgsACIAdiiQCNgUCCg/IB4B6QB+hEBohmQBqhoBLiEIAlAUQALAFAXgJQALgFAKgGIBiA0IgDAgQgCAkAIAPQibECj+ClQjzCgkkAoQgNgMgdgMg");
	this.shape.setTransform(0.3,5.3,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-52.8,121.6,105.7);


(lib.block3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Group_2();
	this.instance.setTransform(-0.1,-3.1,1,1,33.5,0,0,50.8,25.7);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AF36").s().p("Ag0ADIBlg+IAEB3g");
	this.shape.setTransform(-8.1,0.8,1,1,30.3,0,0,4.8,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5A75").s().p("Ah5CuQj2iDirjcQAEgRgFgfIgFgcIBeg7IAWAJQAYAJAKgHIAogYQCNC4DMBsQDtB+EPgDIABAqQAAAMAVAPQAKAIAKAFIAEBvIgeANQggAQgJAOQk8gDkXiVg");
	this.shape_1.setTransform(-5.4,-1.1,1,1,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.6,-52.6,113.2,105.3);


(lib.block2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Group_3();
	this.instance.setTransform(-2.6,0,1,1,0,0,0,9.6,56.6);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgfJLQgegTgRgBQiQkCgUklQgVksBzkWQAbgIAlgjIBgA0IADAYQAEAZALAFIApAWQhjDzAXEAICoAfQAUCOA/CBIh8B5IAPAZIgkAWQgKAGgDAaQgCAMABAMIhcA6QgMgJgOgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-60.6,49.3,121.4);


(lib.block1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Group_4();
	this.instance.setTransform(3.4,5.1,1,1,0,0,0,47.1,31.8);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5A75").s().p("AlkFqQgKgFgYAJIgVALIhig0QADgPAAgRQACglgHgOQCakCD9ilQD1igEjgoQAVATAvAOIAFBvQgKAGgKAIQgTARABAMIABAxIAtgBIgeChQiQAViAA+Ih3h6Qh+BEhoBmQhrBohKCEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-38.2,102.6,76.5);


(lib.result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.label = new cjs.Text("审核通过", "bold 42px 'Microsoft YaHei'", "#8AF8F3");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 57;
	this.label.lineWidth = 236;
	this.label.setTransform(982.8,77);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// 图层 1
	this.frame1 = new lib.result_frame1();
	this.frame1.setTransform(0.1,0);
	this.frame1.alpha = 0.801;

	this.frame2 = new lib.result_frame2();
	this.frame2.setTransform(0.1,168);
	this.frame2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frame2},{t:this.frame1}]}).wait(1));

	// 图层 2
	this.bg = new lib.result_bg();
	this.bg.setTransform(984.8,101,1,1,0,0,0,984.8,101);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,1970.7,202);


(lib.p4_tags = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.tag11 = new lib.p4_tag_item();
	this.tag11.setTransform(595,291,1,1,0,0,0,165,17);

	this.tag12 = new lib.p4_tag_item();
	this.tag12.setTransform(850,170,1,1,0,0,0,165,17);

	this.tag10 = new lib.p4_tag_item();
	this.tag10.setTransform(649,224,1,1,0,0,0,165,17);

	this.tag7 = new lib.p4_tag_item();
	this.tag7.setTransform(535,155,1,1,0,0,0,165,17);

	this.tag9 = new lib.p4_tag_item();
	this.tag9.setTransform(722,96,1,1,0,0,0,165,17);

	this.tag8 = new lib.p4_tag_item();
	this.tag8.setTransform(639,33,1,1,0,0,0,165,17);

	this.tag6 = new lib.p4_tag_item();
	this.tag6.setTransform(392,384,1,1,0,0,0,165,17);

	this.tag2 = new lib.p4_tag_item();
	this.tag2.setTransform(221,330,1,1,0,0,0,165,17);

	this.tag5 = new lib.p4_tag_item();
	this.tag5.setTransform(301,251,1,1,0,0,0,165,17);

	this.tag1 = new lib.p4_tag_item();
	this.tag1.setTransform(250,125,1,1,0,0,0,165,17);

	this.tag4 = new lib.p4_tag_item();
	this.tag4.setTransform(368,71,1,1,0,0,0,165,17);

	this.tag3 = new lib.p4_tag_item();
	this.tag3.setTransform(272,17,1,1,0,0,0,165,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tag3},{t:this.tag4},{t:this.tag1},{t:this.tag5},{t:this.tag2},{t:this.tag6},{t:this.tag8},{t:this.tag9},{t:this.tag7},{t:this.tag10},{t:this.tag12},{t:this.tag11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55,-1,842,403);


(lib.p4_site_line_animate2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.p4_site_line_cycle();
	this.instance.setTransform(-27.5,143,0.429,0.429);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.89,scaleY:0.89,x:-53.9,y:93.5,alpha:0.891},8).to({scaleX:1,scaleY:1,x:-23.4,y:47.7,alpha:1},8).to({x:26.5},7).to({scaleX:1,scaleY:1,x:54.5,y:-0.8},8).to({x:29.1,y:-50.3},8).to({scaleX:0.89,scaleY:0.89,x:54,y:-93.5,alpha:0.801},7).to({scaleX:0.43,scaleY:0.43,x:27.5,y:-143,alpha:0},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,140,6,6);


(lib.p4_site_line_animate1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.p4_site_line_cycle();
	this.instance.setTransform(-110,143,0.429,0.429);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.69,scaleY:0.69,x:-136.5,y:93.6,alpha:0.535},8).to({scaleX:0.92,scaleY:0.92,x:-111.5,y:50.3,alpha:1},7).to({scaleX:0.94,scaleY:0.94,x:-137,y:0.9},8).to({scaleX:0.96,scaleY:0.96,x:-109,y:-47.6},8).to({scaleX:0.98,scaleY:0.98,x:-53.4,y:-50.3},8).to({scaleX:0.69,scaleY:0.69,x:-30,y:-99.7,alpha:0.465},8).to({scaleX:0.43,scaleY:0.43,x:-55,y:-143,alpha:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113,140,6,6);


(lib.p3_progress2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("100%", "12px 'Microsoft YaHei'", "#6A6D76");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 18;
	this.label.lineWidth = 38;
	this.label.setTransform(34.7,154.1,0.8,0.8);

	this.bar = new lib.p3_cube_progress1();
	this.bar.setTransform(27.4,81,1,1,0,0,0,7,71);
	this.bar.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,149,33.5,20.9);


(lib.p3_progress1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.label = new cjs.Text("100%", "12px 'Microsoft YaHei'", "#6A6D76");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 18;
	this.label.lineWidth = 38;
	this.label.setTransform(34.7,154.1,0.8,0.8);

	this.text = new cjs.Text("MICRO SERVICE PROCESSING", "12px 'Microsoft YaHei'", "#6A6D76");
	this.text.lineHeight = 18;
	this.text.lineWidth = 186;
	this.text.setTransform(3,150,0.7,0.7,-90);

	this.bar = new lib.p3_cube_progress1();
	this.bar.setTransform(27.4,81,1,1,0,0,0,7,71);
	this.bar.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.text},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,17,34.9,153);


(lib.p3_cube_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p3_cube_info_item7();
	this.instance.setTransform(90,305.5,1,1,0,0,0,98,38.7);

	this.instance_1 = new lib.p3_cube_info_item6();
	this.instance_1.setTransform(156.6,286.3,1,1,0,0,0,98,38.7);

	this.instance_2 = new lib.p3_cube_info_item5();
	this.instance_2.setTransform(-50.6,244.1);

	this.instance_3 = new lib.p3_cube_info_item4();
	this.instance_3.setTransform(176.5,271.8,1,1,0,0,0,98,38.7);

	this.instance_4 = new lib.p3_cube_info_item3();
	this.instance_4.setTransform(57.5,58.2,1,1,0,0,0,98,38.7);

	this.instance_5 = new lib.p3_cube_info_item2();
	this.instance_5.setTransform(138.5,78.8,1,1,0,0,0,98,38.7);

	this.instance_6 = new lib.p3_cube_info_item1();
	this.instance_6.setTransform(98,38.7,1,1,0,0,0,98,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.1,0,475.2,353);


(lib.p3_cube = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p3_cube_block_outside();
	this.instance.setTransform(80,80);

	this.instance_1 = new lib.p3_cube_block_outside();
	this.instance_1.setTransform(60,70);

	this.instance_2 = new lib.p3_cube_block_outside();
	this.instance_2.setTransform(40,60);

	this.instance_3 = new lib.p3_cube_block_outside();
	this.instance_3.setTransform(20,50);

	this.instance_4 = new lib.p3_cube_block_outside();
	this.instance_4.setTransform(0,40);

	this.instance_5 = new lib.p3_cube_block_outside();
	this.instance_5.setTransform(100,70);

	this.instance_6 = new lib.p3_cube_block_outside();
	this.instance_6.setTransform(80,60);

	this.instance_7 = new lib.p3_cube_block_outside();
	this.instance_7.setTransform(60,50);

	this.instance_8 = new lib.p3_cube_block_outside();
	this.instance_8.setTransform(40,40);

	this.instance_9 = new lib.p3_cube_block_outside();
	this.instance_9.setTransform(20,30);

	this.instance_10 = new lib.p3_cube_block_outside();
	this.instance_10.setTransform(120,60);

	this.instance_11 = new lib.p3_cube_block_outside();
	this.instance_11.setTransform(100,50);

	this.instance_12 = new lib.p3_cube_block_outside();
	this.instance_12.setTransform(80,40);

	this.instance_13 = new lib.p3_cube_block_outside();
	this.instance_13.setTransform(60,30);

	this.instance_14 = new lib.p3_cube_block_outside();
	this.instance_14.setTransform(40,20);

	this.instance_15 = new lib.p3_cube_block_outside();
	this.instance_15.setTransform(140,50);

	this.instance_16 = new lib.p3_cube_block_outside();
	this.instance_16.setTransform(120,40);

	this.instance_17 = new lib.p3_cube_block_outside();
	this.instance_17.setTransform(100,30);

	this.instance_18 = new lib.p3_cube_block_outside();
	this.instance_18.setTransform(80,20);

	this.instance_19 = new lib.p3_cube_block_outside();
	this.instance_19.setTransform(60,10);

	this.instance_20 = new lib.p3_cube_block_outside();
	this.instance_20.setTransform(160,40);

	this.instance_21 = new lib.p3_cube_block_outside();
	this.instance_21.setTransform(140,30);

	this.instance_22 = new lib.p3_cube_block_outside();
	this.instance_22.setTransform(120,20);

	this.instance_23 = new lib.p3_cube_block_outside();
	this.instance_23.setTransform(100,10);

	this.instance_24 = new lib.p3_cube_block_outside();
	this.instance_24.setTransform(80,0);

	this.instance_25 = new lib.p3_cube_block_outside();
	this.instance_25.setTransform(80,100);

	this.instance_26 = new lib.p3_cube_block_outside();
	this.instance_26.setTransform(60,90);

	this.instance_27 = new lib.p3_cube_block_outside();
	this.instance_27.setTransform(40,80);

	this.instance_28 = new lib.p3_cube_block_outside();
	this.instance_28.setTransform(20,70);

	this.instance_29 = new lib.p3_cube_block_outside();
	this.instance_29.setTransform(0,60);

	this.instance_30 = new lib.p3_cube_block_outside();
	this.instance_30.setTransform(100,90);

	this.instance_31 = new lib.p3_cube_block();
	this.instance_31.setTransform(80,80);

	this.instance_32 = new lib.p3_cube_block();
	this.instance_32.setTransform(60,70);

	this.instance_33 = new lib.p3_cube_block();
	this.instance_33.setTransform(40,60);

	this.instance_34 = new lib.p3_cube_block();
	this.instance_34.setTransform(20,50);

	this.instance_35 = new lib.p3_cube_block_outside();
	this.instance_35.setTransform(120,80);

	this.instance_36 = new lib.p3_cube_block();
	this.instance_36.setTransform(100,70);

	this.instance_37 = new lib.p3_cube_block();
	this.instance_37.setTransform(80,60);

	this.instance_38 = new lib.p3_cube_block();
	this.instance_38.setTransform(60,50);

	this.instance_39 = new lib.p3_cube_block();
	this.instance_39.setTransform(40,40);

	this.instance_40 = new lib.p3_cube_block_outside();
	this.instance_40.setTransform(140,70);

	this.instance_41 = new lib.p3_cube_block();
	this.instance_41.setTransform(120,60);

	this.instance_42 = new lib.p3_cube_block();
	this.instance_42.setTransform(100,50);

	this.instance_43 = new lib.p3_cube_block();
	this.instance_43.setTransform(80,40);

	this.instance_44 = new lib.p3_cube_block();
	this.instance_44.setTransform(60,30);

	this.instance_45 = new lib.p3_cube_block_outside();
	this.instance_45.setTransform(160,60);

	this.instance_46 = new lib.p3_cube_block();
	this.instance_46.setTransform(140,50);

	this.instance_47 = new lib.p3_cube_block();
	this.instance_47.setTransform(120,40);

	this.instance_48 = new lib.p3_cube_block();
	this.instance_48.setTransform(100,30);

	this.instance_49 = new lib.p3_cube_block();
	this.instance_49.setTransform(80,20);

	this.instance_50 = new lib.p3_cube_block_outside();
	this.instance_50.setTransform(80,120);

	this.instance_51 = new lib.p3_cube_block_outside();
	this.instance_51.setTransform(60,110);

	this.instance_52 = new lib.p3_cube_block_outside();
	this.instance_52.setTransform(40,100);

	this.instance_53 = new lib.p3_cube_block_outside();
	this.instance_53.setTransform(20,90);

	this.instance_54 = new lib.p3_cube_block_outside();
	this.instance_54.setTransform(0,80);

	this.instance_55 = new lib.p3_cube_block_outside();
	this.instance_55.setTransform(100,110);

	this.instance_56 = new lib.p3_cube_block();
	this.instance_56.setTransform(80,100);

	this.instance_57 = new lib.p3_cube_block();
	this.instance_57.setTransform(60,90);

	this.instance_58 = new lib.p3_cube_block();
	this.instance_58.setTransform(40,80);

	this.instance_59 = new lib.p3_cube_block();
	this.instance_59.setTransform(20,70);

	this.instance_60 = new lib.p3_cube_block_outside();
	this.instance_60.setTransform(120,100);

	this.instance_61 = new lib.p3_cube_block();
	this.instance_61.setTransform(100,90);

	this.instance_62 = new lib.p3_cube_block();
	this.instance_62.setTransform(80,80);

	this.instance_63 = new lib.p3_cube_block();
	this.instance_63.setTransform(60,70);

	this.instance_64 = new lib.p3_cube_block();
	this.instance_64.setTransform(40,60);

	this.instance_65 = new lib.p3_cube_block_outside();
	this.instance_65.setTransform(140,90);

	this.instance_66 = new lib.p3_cube_block();
	this.instance_66.setTransform(120,80);

	this.instance_67 = new lib.p3_cube_block();
	this.instance_67.setTransform(100,70);

	this.instance_68 = new lib.p3_cube_block();
	this.instance_68.setTransform(80,60);

	this.instance_69 = new lib.p3_cube_block();
	this.instance_69.setTransform(60,50);

	this.instance_70 = new lib.p3_cube_block_outside();
	this.instance_70.setTransform(160,80);

	this.instance_71 = new lib.p3_cube_block();
	this.instance_71.setTransform(140,70);

	this.instance_72 = new lib.p3_cube_block();
	this.instance_72.setTransform(120,60);

	this.instance_73 = new lib.p3_cube_block();
	this.instance_73.setTransform(100,50);

	this.instance_74 = new lib.p3_cube_block();
	this.instance_74.setTransform(80,40);

	this.instance_75 = new lib.p3_cube_block_outside();
	this.instance_75.setTransform(80,140);

	this.instance_76 = new lib.p3_cube_block_outside();
	this.instance_76.setTransform(60,130);

	this.instance_77 = new lib.p3_cube_block_outside();
	this.instance_77.setTransform(40,120);

	this.instance_78 = new lib.p3_cube_block_outside();
	this.instance_78.setTransform(20,110);

	this.instance_79 = new lib.p3_cube_block_outside();
	this.instance_79.setTransform(0,100);

	this.instance_80 = new lib.p3_cube_block_outside();
	this.instance_80.setTransform(100,130);

	this.instance_81 = new lib.p3_cube_block();
	this.instance_81.setTransform(80,120);

	this.instance_82 = new lib.p3_cube_block();
	this.instance_82.setTransform(60,110);

	this.instance_83 = new lib.p3_cube_block();
	this.instance_83.setTransform(40,100);

	this.instance_84 = new lib.p3_cube_block();
	this.instance_84.setTransform(20,90);

	this.instance_85 = new lib.p3_cube_block_outside();
	this.instance_85.setTransform(120,120);

	this.instance_86 = new lib.p3_cube_block();
	this.instance_86.setTransform(100,110);

	this.instance_87 = new lib.p3_cube_block();
	this.instance_87.setTransform(80,100);

	this.instance_88 = new lib.p3_cube_block();
	this.instance_88.setTransform(60,90);

	this.instance_89 = new lib.p3_cube_block();
	this.instance_89.setTransform(40,80);

	this.instance_90 = new lib.p3_cube_block_outside();
	this.instance_90.setTransform(140,110);

	this.instance_91 = new lib.p3_cube_block();
	this.instance_91.setTransform(120,100);

	this.instance_92 = new lib.p3_cube_block();
	this.instance_92.setTransform(100,90);

	this.instance_93 = new lib.p3_cube_block();
	this.instance_93.setTransform(80,80);

	this.instance_94 = new lib.p3_cube_block();
	this.instance_94.setTransform(60,70);

	this.instance_95 = new lib.p3_cube_block_outside();
	this.instance_95.setTransform(160,100);

	this.instance_96 = new lib.p3_cube_block();
	this.instance_96.setTransform(140,90);

	this.instance_97 = new lib.p3_cube_block();
	this.instance_97.setTransform(120,80);

	this.instance_98 = new lib.p3_cube_block();
	this.instance_98.setTransform(100,70);

	this.instance_99 = new lib.p3_cube_block();
	this.instance_99.setTransform(80,60);

	this.instance_100 = new lib.p3_cube_block_outside();
	this.instance_100.setTransform(80,160);

	this.instance_101 = new lib.p3_cube_block_outside();
	this.instance_101.setTransform(60,150);

	this.instance_102 = new lib.p3_cube_block_outside();
	this.instance_102.setTransform(40,140);

	this.instance_103 = new lib.p3_cube_block_outside();
	this.instance_103.setTransform(20,130);

	this.instance_104 = new lib.p3_cube_block_outside();
	this.instance_104.setTransform(0,120);

	this.instance_105 = new lib.p3_cube_block_outside();
	this.instance_105.setTransform(100,150);

	this.instance_106 = new lib.p3_cube_block();
	this.instance_106.setTransform(80,140);

	this.instance_107 = new lib.p3_cube_block();
	this.instance_107.setTransform(60,130);

	this.instance_108 = new lib.p3_cube_block();
	this.instance_108.setTransform(40,120);

	this.instance_109 = new lib.p3_cube_block();
	this.instance_109.setTransform(20,110);

	this.instance_110 = new lib.p3_cube_block_outside();
	this.instance_110.setTransform(120,140);

	this.instance_111 = new lib.p3_cube_block();
	this.instance_111.setTransform(100,130);

	this.instance_112 = new lib.p3_cube_block();
	this.instance_112.setTransform(80,120);

	this.instance_113 = new lib.p3_cube_block();
	this.instance_113.setTransform(60,110);

	this.instance_114 = new lib.p3_cube_block();
	this.instance_114.setTransform(40,100);

	this.instance_115 = new lib.p3_cube_block_outside();
	this.instance_115.setTransform(140,130);

	this.instance_116 = new lib.p3_cube_block();
	this.instance_116.setTransform(120,120);

	this.instance_117 = new lib.p3_cube_block();
	this.instance_117.setTransform(100,110);

	this.instance_118 = new lib.p3_cube_block();
	this.instance_118.setTransform(80,100);

	this.instance_119 = new lib.p3_cube_block();
	this.instance_119.setTransform(60,90);

	this.instance_120 = new lib.p3_cube_block_outside();
	this.instance_120.setTransform(160,120);

	this.instance_121 = new lib.p3_cube_block();
	this.instance_121.setTransform(140,110);

	this.instance_122 = new lib.p3_cube_block();
	this.instance_122.setTransform(120,100);

	this.instance_123 = new lib.p3_cube_block();
	this.instance_123.setTransform(100,90);

	this.instance_124 = new lib.p3_cube_block();
	this.instance_124.setTransform(80,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,201,201);


(lib.process2_output_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.bar = new lib.p2_output_item_bar();
	this.bar.setTransform(45,8.9);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	// 图层 1
	this.label = new cjs.Text("家庭", "16px 'Microsoft YaHei'", "#CCCCCC");
	this.label.name = "label";
	this.label.lineHeight = 23;
	this.label.lineWidth = 448;

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.1,26);


(lib.process2_output_holder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.txt = new lib.process2_output_txt();
	this.txt.setTransform(226.1,11,1,1,0,0,0,226.1,11);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452.1,26);


(lib.martic_output = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.cusor = new lib.p2_output_cusor();
	this.cusor.setTransform(22,38,1,0.889,0,0,0,1,9);

	this.done = new lib.p2_done_text();
	this.done.setTransform(243.1,143.6,1,1,0,0,0,100.2,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.done},{t:this.cusor}]}).wait(1));

	// 图层 5
	this.cycle = new lib.process2_output_cycle();
	this.cycle.setTransform(465.4,305.6,0.76,0.759,0,0,0,-0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cycle).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkFAWuMAAAgtbMBILAAAMAAAAp7IlbAAIAADgg");
	mask.setTransform(247.9,163.3);

	// 图层 3
	this.holder = new lib.process2_output_holder();
	this.holder.setTransform(247.1,165.8,1,1,0,0,0,226.1,143.8);

	this.holder.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.holder).wait(1));

	// 图层 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(496.9,46.6,2.189,2.189,0,0,0,1,14.1);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(495.4,55.4,2.189,2.189,0,0,0,1.7,25.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("EgmZAZ1MAAAgzpMBMzAAAMAAAAzpgEAhsAY/IAbAbID3AAIAAjVIgbgcIAAl6IAbgcIAAlQIgbgcIAAl6IAbgcIAAlVIgbgbIAApRIAbgbIAAlYIgbgbIAAnAIkBAAIgbgbIqGAAIgbAbIsRAAIgbgbIvaAAIgcAbIoiAAIgbgbIlfAAIgcAbIlZAAIgbgbIn9AAIgbAbIihAAIAABDIgbAcIAAFXIAbAcIAAIdIgbAcIAAGKIAbAbIAAIcIgbAbIAAOfIAbAcIAAD2IJlAAIAbgbINlAAIAbAbIQWAAIAbgbIMkAAIAcAbIPRAAIAbgbg");
	this.shape.setTransform(245.8,165.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib.Path_2_5();
	this.instance_2.setTransform(2.9,2.8,2.189,4.362);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.1,330.8);


(lib.process1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 8
	this.text = new cjs.Text("工作", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 156;
	this.text.setTransform(99,480);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 7
	this.text_1 = new cjs.Text("学历", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 156;
	this.text_1.setTransform(99,428);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// 图层 6
	this.text_2 = new cjs.Text("婚姻状况", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 156;
	this.text_2.setTransform(99,376);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// 图层 5
	this.text_3 = new cjs.Text("年龄", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 156;
	this.text_3.setTransform(99,324);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// 图层 4
	this.text_4 = new cjs.Text("性别", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 26;
	this.text_4.lineWidth = 156;
	this.text_4.setTransform(99,272);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

	// 图层 3
	this.text_5 = new cjs.Text("实名信息", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 26;
	this.text_5.lineWidth = 156;
	this.text_5.setTransform(99,220);

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(1));

	// 图层 2
	this.text_6 = new cjs.Text("手机号", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 26;
	this.text_6.lineWidth = 156;
	this.text_6.setTransform(99,166.9);

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(1));

	// 图层 9
	this.instance = new lib.tag();
	this.instance.setTransform(261.1,529.7);

	this.instance_1 = new lib.tag();
	this.instance_1.setTransform(430,460.2);

	this.instance_2 = new lib.tag();
	this.instance_2.setTransform(493,500.2);

	this.instance_3 = new lib.tag();
	this.instance_3.setTransform(619.1,471.3);

	this.instance_4 = new lib.tag();
	this.instance_4.setTransform(292.1,449.7);

	this.instance_5 = new lib.tag();
	this.instance_5.setTransform(493,403.6);

	this.instance_6 = new lib.tag();
	this.instance_6.setTransform(234.1,408.2);

	this.instance_7 = new lib.tag();
	this.instance_7.setTransform(701.2,382.6);

	this.instance_8 = new lib.tag();
	this.instance_8.setTransform(622.7,337.8);

	this.instance_9 = new lib.tag();
	this.instance_9.setTransform(349.1,350.3);

	this.instance_10 = new lib.tag();
	this.instance_10.setTransform(274.1,289.3);

	this.instance_11 = new lib.tag();
	this.instance_11.setTransform(514.2,309.1);

	this.instance_12 = new lib.tag();
	this.instance_12.setTransform(643.2,266.1);

	this.instance_13 = new lib.tag();
	this.instance_13.setTransform(497.1,213);

	this.instance_14 = new lib.tag();
	this.instance_14.setTransform(394.1,266.1);

	this.instance_15 = new lib.tag();
	this.instance_15.setTransform(268,232.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 1
	this.line = new lib.line_animate1();
	this.line.setTransform(399.6,337.6,1,1,0,0,0,482.6,337.6);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-1,866.8,544.6);


(lib.process_phase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.item4 = new lib.phase_item();
	this.item4.setTransform(80,128,1,1,0,0,0,80,14);

	this.item3 = new lib.phase_item();
	this.item3.setTransform(100,90,1,1,0,0,0,80,14);

	this.item2 = new lib.phase_item();
	this.item2.setTransform(120,52,1,1,0,0,0,80,14);

	this.item1 = new lib.phase_item();
	this.item1.setTransform(140,14,1,1,0,0,0,80,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,222,144);


(lib.process_bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.track = new lib.process_bar_track();
	this.track.setTransform(3,6.9,1,1,0,0,0,0,3.9);

	this.timeline.addTween(cjs.Tween.get(this.track).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1F5A75").ss(2,1,1).p("EggzgBFMBBnAAAIAACLMhBnAAAg");
	this.shape.setTransform(210,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,422,16);


(lib.bar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.label = new cjs.Text("PERFORMENCE MONIT", "10px 'Microsoft YaHei'", "#6A6D76");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 15;
	this.label.lineWidth = 176;
	this.label.setTransform(88,-16);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// 图层 1
	this.instance = new lib.track2();
	this.instance.setTransform(88.5,3,1,0.75,0,0,0,88.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,180,22);


(lib.bar_tiny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.track();
	this.instance.setTransform(0,5,0.01,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,8);


(lib.bar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("CACHE", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text.textAlign = "right";
	this.text.lineHeight = 12;
	this.text.lineWidth = 32;
	this.text.setTransform(31.8,79.8);

	this.text_1 = new cjs.Text("CLIENT", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 32;
	this.text_1.setTransform(31.8,69.8);

	this.text_2 = new cjs.Text("TPS", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 12;
	this.text_2.lineWidth = 32;
	this.text_2.setTransform(31.8,59.8);

	this.text_3 = new cjs.Text("TCP/IP", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 12;
	this.text_3.lineWidth = 32;
	this.text_3.setTransform(31.8,49.8);

	this.text_4 = new cjs.Text("LOAD", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 12;
	this.text_4.lineWidth = 32;
	this.text_4.setTransform(31.8,39.5);

	this.text_5 = new cjs.Text("WRITE", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 12;
	this.text_5.lineWidth = 32;
	this.text_5.setTransform(31.8,29.5);

	this.text_6 = new cjs.Text("READ", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 12;
	this.text_6.lineWidth = 32;
	this.text_6.setTransform(31.8,19.5);

	this.text_7 = new cjs.Text("MEM", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 12;
	this.text_7.lineWidth = 32;
	this.text_7.setTransform(31.8,10.3);

	this.text_8 = new cjs.Text("CPU", "8px 'Microsoft YaHei'", "#6A6D76");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 12;
	this.text_8.lineWidth = 32;
	this.text_8.setTransform(31.8,0);

	this.bar8 = new lib.bar_tiny();
	this.bar8.setTransform(37.3,88,1,1,0,0,0,0.5,5);

	this.bar7 = new lib.bar_tiny();
	this.bar7.setTransform(37.3,78,1,1,0,0,0,0.5,5);

	this.bar6 = new lib.bar_tiny();
	this.bar6.setTransform(37.3,68,1,1,0,0,0,0.5,5);

	this.bar5 = new lib.bar_tiny();
	this.bar5.setTransform(37.3,58,1,1,0,0,0,0.5,5);

	this.bar4 = new lib.bar_tiny();
	this.bar4.setTransform(37.3,48,1,1,0,0,0,0.5,5);

	this.bar3 = new lib.bar_tiny();
	this.bar3.setTransform(37.3,38,1,1,0,0,0,0.5,5);

	this.bar2 = new lib.bar_tiny();
	this.bar2.setTransform(37.3,28,1,1,0,0,0,0.5,5);

	this.bar1 = new lib.bar_tiny();
	this.bar1.setTransform(37.3,18,1,1,0,0,0,0.5,5);

	this.bar0 = new lib.bar_tiny();
	this.bar0.setTransform(37.3,8,1,1,0,0,0,0.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar0},{t:this.bar1},{t:this.bar2},{t:this.bar3},{t:this.bar4},{t:this.bar5},{t:this.bar6},{t:this.bar7},{t:this.bar8},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,111.7);


(lib.性能监控1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.title = new lib.bar2();
	this.title.setTransform(51.8,-7,1,1,0,0,0,88.5,4);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// 图层 4
	this.monit = new lib.bar();
	this.monit.setTransform(-17.8,45,1,1,0,0,0,18.9,47.9);

	this.timeline.addTween(cjs.Tween.get(this.monit).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-27,180,135.7);


(lib.pin_single_animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.map_pin();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:3.34,scaleY:3.34,alpha:0},39,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.pin_animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.map_pin();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// 图层 8
	this.instance_1 = new lib.pin_single_animate("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(21));

	// 图层 3
	this.instance_2 = new lib.pin_single_animate("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(41));

	// 图层 2
	this.instance_3 = new lib.pin_single_animate("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},40).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.cycle_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.label = new cjs.Text("78%", "bold 32px 'Microsoft YaHei'", "#00FFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 44;
	this.label.lineWidth = 100;
	this.label.setTransform(134,106);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// cycle_inside
	this.inside = new lib.cycle_inside();
	this.inside.setTransform(133.3,131.8);

	this.timeline.addTween(cjs.Tween.get(this.inside).wait(1));

	// cycle_progress_bar
	this.progress_bar = new lib.cycle_progress_bar();
	this.progress_bar.setTransform(57.8,94.1,1,1,0,0,0,54.5,89.7);

	this.timeline.addTween(cjs.Tween.get(this.progress_bar).wait(1));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AC1EBIALgiIAIghQAIgqgCgsQgCgtgNgsQgOgrgYgpQgYgngigiQggghgngXQgkgWgsgOQgVgHgZgEQgTgEgYgBQgggDgjAFIgBgFIAAgCIAAgBIAUgCQAUgBAZABQAyADAnAMIAqAPQAVAKASAKQAoAXAgAfQAiAhAZAnQAaAnAPAsQAPAsADAtQAEAsgHAsQgFAlgNAjIgDAJg");
	this.shape.setTransform(181.8,96.4,2.887,2.887);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#31464C").s().p("AiqEpQgJgXgFgVQgHgVgEgYQgDgPgDgdQgDgsAFgxQAFgrAPgsQANgnAXgrQAXgoAegjQAPgRARgRQAVgSAPgMQAVgQAQgLIAngWQAngTAwgNIAtgKIARBrIAAABIgIABQgQADgUAGQgqAMghAUQgpAWggAgQgdAegXAmQgYAmgNApQgOAtgBAtQgCAtAJAoQAHAnARAjIAEAJIhiAwgABkkqQgaAJgRAJIgpAXQgVAPgOALQgUAPgQAQQgiAhgaAlQgbAngQAoQgRAlgKAqQgJAsgBAtQgCAtAJAvQAIAtARAqIAJAVIBWgoQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgQgjgIgkQgKgvACgtQACgtAMgpQAMgnAWgnQAVglAfghQAMgOAUgRQAUgPASgLIA+gfIA9gQQABAAAAgBIAAgBIgRhcQgsAIghANg");
	this.shape_1.setTransform(58.8,95,2.887,2.887);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#31464B").s().p("AioGFIgngSIgngYQglgYghgkQgfghgTghIgQgfIAtgWIAAAAIAMAWQAMAVAMAQQAKANAQARQAhAiAnAYQAlAXAuAOQApANAxABQAsACAsgLQAtgKAqgWQApgWAjghQAiggAYgmQAWgjANgqQAOgqADgmQADgrgHgvQgFgagHgTIgIgXIgUgrIgNgUQgPgXgMgOQgdgigmgaQgXgQgRgIIgrgSQgSgHgbgGQgZgFgPgBQgmgEgjAFIgBAAIgCgNIAHgBQAWgCAWABQAXAAAVADIAtAKQAtAMAmAWQAoAXAgAfQAjAhAYAnQAYAoAPAuQAMAqADAsQABAPgBAWIgFAsQgGAngRAnIAYAKIAAgBIAFgMQAIgVAFgTQAGgXADgXIADgpIgBgmQgEgugNgpQgNgtgZgpQgZgpggggQghghgmgYQgmgXgrgPQgsgPgvgFQgngEgqAGIgBgNIAxgDQAcABAQACQAXADAVAFQArAJApAUQAoATAkAcQAlAdAcAkQAeAmAUArQAVAtAJArQAKAtgBArQgBApgKAtQgGAZgHASIgPAlIgigQIgLAVQgJAQgJANQgYAjggAdQgkAhgoAUQgRAJgRAHQgSAIgYAGQgsAMguAAQgrABgogKIgjgJIgQgGIgNAhIgBACIAAAAIgDgBg");
	this.shape_2.setTransform(139.2,127.8,2.887,2.887);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,240.5);


(lib.title_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.frame_1();
	this.instance.setTransform(95.6,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},9,cjs.Ease.get(1)).to({x:95.6},10,cjs.Ease.get(1)).wait(1));

	// 图层 1
	this.instance_1 = new lib.frame_1();
	this.instance_1.setTransform(-95.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0},9,cjs.Ease.get(1)).to({x:-95.7},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,-18.8,200.3,37.7);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvSIrIAAxVIelAAIAARVg");
	mask.setTransform(-146,82);

	// log
	this.log = new cjs.Text("", "10px 'Microsoft YaHei'", "#6A6D76");
	this.log.name = "log";
	this.log.lineHeight = 15;
	this.log.lineWidth = 192;
	this.log.setTransform(-244,31);

	this.log.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.log).wait(1));

	// title
	this.title = new cjs.Text("PROCESS", "bold 26px 'Microsoft YaHei'", "#8AF8F3");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 36;
	this.title.lineWidth = 195;
	this.title.setTransform(-159.8,-17);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// 图层 5
	this.title_frame = new lib.title_frame();
	this.title_frame.setTransform(-158.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.title_frame).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("AgEAoIAAhPIAIAAIAABPg");
	this.shape.setTransform(175.1,107.9,3.903,3.903,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8AF8F3").s().p("AgDAoIAAhPIAHAAIAABPg");
	this.shape_1.setTransform(175.1,113.7,3.903,3.903,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8AF8F3").s().p("AicATIAAglIE5AAIAAAlg");
	this.shape_2.setTransform(175.1,119.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8AF8F3").s().p("AgEAoIAAhPIAIAAIAABPg");
	this.shape_3.setTransform(175.1,125.1,3.903,3.903,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8AF8F3").s().p("AiBAIIAAgQIEDAAIAAAQg");
	this.shape_4.setTransform(249.1,-20.4,3.903,3.903,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6A6D76").s().p("AJfUyIAAgzI51AAIAAjEIK+AAID2iPIDeAAIAADFIFbAAIAAjFIEoAAIAAjJIBOhVIAAl7IhOiRIAAxUIEZlgIAAG+IhYAAIAAQrIBYAAIAAMAIkNF7gAwDTsIZ1AAIAAAzICPAAIEEltIAArnIhYAAIAAxWIBYAAIAAluIjyEuIAARJIBPCOIAAGJIhPBWIAADVIkoAAIAADFImCAAIAAjFIjFAAIj4CPIqvAAg");
	this.shape_5.setTransform(145.2,15.1);

	this.instance = new lib.Path_5();
	this.instance.setTransform(145.2,16,3.903,3.903,90,0,0,33.6,26.6);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.5,-118,511.2,266.2);


(lib.simple_panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path();
	this.instance.setTransform(88.8,3.6,1,1,0,0,180,30.7,0.5);
	this.instance.alpha = 0.59;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(56.7,3.7,1,1,0,0,180,21.9,1.1);
	this.instance_1.alpha = 0.59;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(29.3,3.6,1,1,0,0,180,23.7,1.8);
	this.instance_2.alpha = 0.59;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(97.1,8.4,1,1,0,0,180,96.9,8.4);
	this.instance_3.alpha = 0.59;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(138,248,243,0.8)").s().p("AhXARIAxghIB+AAIgxAhg");
	this.shape.setTransform(79.5,131.8,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(138,248,243,0.8)").s().p("AhXARIAxghIB+AAIgxAhg");
	this.shape_1.setTransform(58.6,131.8,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(138,248,243,0.8)").s().p("AhXARIAxghIB+AAIgxAhg");
	this.shape_2.setTransform(121.2,131.8,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(138,248,243,0.8)").s().p("AhXARIAxghIB+AAIgxAhg");
	this.shape_3.setTransform(100.4,131.8,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(1,0,0,0.6)").s().p("AorJKIjbidIAAv2IV7AAICSBnIAAQsg");
	this.shape_4.setTransform(78.7,71.1);

	this.instance_4 = new lib.Path_5_2();
	this.instance_4.setTransform(99.6,73.4,1,1,0,0,180,99.7,63);
	this.instance_4.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,158.9,136.3);


(lib.messageai2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.CompoundPath_1_1();
	this.instance.setTransform(112.3,38.9,1,1,0,0,0,112.3,38.9);

	this.instance_1 = new lib.Path_2_5();
	this.instance_1.setTransform(112.4,38.9,1,1,0,0,0,111.1,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.7,77.7);


(lib.card_pic_holder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.mock = new lib.mock_user_pic();

	this.timeline.addTween(cjs.Tween.get(this.mock).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,90,117,0.498)").s().p("AkqErIAApVIJVAAIAAJVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.card_panel2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.cycle = new lib.card_cycle();
	this.cycle.setTransform(35.3,270.7);

	this.timeline.addTween(cjs.Tween.get(this.cycle).wait(1));

	// 图层 7
	this.cycle_glow = new lib.card_cycle_glow();
	this.cycle_glow.setTransform(35.1,270.7);

	this.timeline.addTween(cjs.Tween.get(this.cycle_glow).wait(1));

	// text1
	this.txt1 = new lib.txt1();
	this.txt1.setTransform(139.5,50.6,1,1,0,0,0,50,35.6);

	this.txt2 = new lib.txt2();
	this.txt2.setTransform(98,194.9,1,1,0,0,0,83,100.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt2},{t:this.txt1}]}).wait(1));

	// text_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AokEIIAAoQIRKAAIAAIQg");
	mask.setTransform(137.5,267.1);

	// text_animate
	this.txt3 = new cjs.Text("ID: 213234321\nNAME: Jay Liang\nGENDER: MALE\nAGE: 30\nBIRTHDAY: 10/1985\nLOAN REQ: 2300", "4px 'Arial'", "#999999");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "right";
	this.txt3.lineHeight = 6;
	this.txt3.lineWidth = 106;
	this.txt3.setTransform(188.5,240.6);

	this.txt3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	// 图层 3
	this.picHolder = new lib.card_pic_holder();
	this.picHolder.setTransform(48.7,49);

	this.timeline.addTween(cjs.Tween.get(this.picHolder).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AF8F3").s().p("Ak/FAIAAp+IJ/AAIAAJ+gAkqEsIJVAAIAApXIpVAAg");
	this.shape.setTransform(48.6,49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 4
	this.instance = new lib.boardai("synched",0);
	this.instance.setTransform(97.9,79.9,1,1,0,0,0,97.9,79.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.8,300);


(lib.user_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.phase4 = new lib.process_head_phase_item();
	this.phase4.setTransform(113.9,-53.7);

	this.phase3 = new lib.process_head_phase_item();
	this.phase3.setTransform(98,-78.6);

	this.phase2 = new lib.process_head_phase_item();
	this.phase2.setTransform(77.4,-99);

	this.phase1 = new lib.process_head_phase_item();
	this.phase1.setTransform(52,-115);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.phase1},{t:this.phase2},{t:this.phase3},{t:this.phase4}]}).wait(1));

	// 图层 5
	this.profile6 = new lib.profile_6();
	this.profile6.setTransform(-267.2,111.6);

	this.profile5 = new lib.profile_5();
	this.profile5.setTransform(-223,30.4);

	this.profile4 = new lib.profile_4();
	this.profile4.setTransform(-242.2,-16.2);

	this.profile3 = new lib.profile_3();
	this.profile3.setTransform(-152.5,-28,1,1,0,0,0,88.1,37.8);

	this.profile2 = new lib.profile_2();
	this.profile2.setTransform(-208.5,-77.4,1,1,0,0,0,88.1,37.8);

	this.profile1 = new lib.profile_1();
	this.profile1.setTransform(-181.1,-104.9,1,1,0,0,0,102.9,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.profile1},{t:this.profile2},{t:this.profile3},{t:this.profile4},{t:this.profile5},{t:this.profile6}]}).wait(1));

	// 图层 1
	this.core = new lib.core();

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1));

	// 图层 10
	this.inside_1 = new lib.inside_1();
	this.inside_1.setTransform(-0.1,0,1,1,0,0,0,-6.3,0);

	this.timeline.addTween(cjs.Tween.get(this.inside_1).wait(1));

	// 图层 11
	this.inside_2 = new lib.inside_2();

	this.timeline.addTween(cjs.Tween.get(this.inside_2).wait(1));

	// 图层 9
	this.inside_3 = new lib.inside_3();

	this.timeline.addTween(cjs.Tween.get(this.inside_3).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(27,27,27,0.6)"],[0.569,0.953],0,0,0,0,0,68.7).s().p("AnfHgQjIjHAAkZQAAkYDIjHQDHjIEYAAQEaAADGDIQDIDHAAEYQAAEZjIDHQjGDIkaAAQkYAAjHjIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 6
	this.instance = new lib.core_frame();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnfHgQjIjGAAkaQAAkZDIjFQDHjJEYAAQEaAADGDJQDIDFAAEZQAAEajIDGQjGDIkaAAQkYAAjHjIg");

	// 图层 4
	this.picHolder = new lib.pic_holder();

	this.picHolder.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.picHolder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.8,-156.3,428.2,267.9);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Path_56();
	this.instance.setTransform(6.3,9.6,1,1,0,0,0,2.5,1.8);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(7.4,9.1,1,1,0,0,0,1.8,1.6);

	this.instance_2 = new lib.Path_2_4();
	this.instance_2.setTransform(5.9,5.6,1,1,0,0,0,1.1,1.1);

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(6.7,4.3,1,1,0,0,0,0.8,0.8);

	this.instance_4 = new lib.Path_4_3();
	this.instance_4.setTransform(9.1,2.8,1,1,0,0,0,0.7,0.9);

	this.instance_5 = new lib.Path_5_1();
	this.instance_5.setTransform(10.6,2.5,1,1,0,0,0,0.8,1.2);

	this.instance_6 = new lib.Path_6_0();
	this.instance_6.setTransform(11.9,2.1,1,1,0,0,0,0.7,1.3);

	this.instance_7 = new lib.Path_7_1();
	this.instance_7.setTransform(13.1,1.2,1,1,0,0,0,0.5,0.8);

	this.instance_8 = new lib.Path_8();
	this.instance_8.setTransform(14.5,0.4,1,1,0,0,0,0.4,0.3);

	this.instance_9 = new lib.Path_9();
	this.instance_9.setTransform(5.8,10.7,1,1,0,0,0,2.4,1.5);

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(5.3,11.7,1,1,0,0,0,2.5,1.3);

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.setTransform(4.7,12.7,1,1,0,0,0,2.6,1.1);

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(4.8,13.9,1,1,0,0,0,2.3,0.8);

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(4.6,15,1,1,0,0,0,2.4,0.6);

	this.instance_14 = new lib.Path_14();
	this.instance_14.setTransform(3.8,16,1,1,0,0,0,3,0.4);

	this.instance_15 = new lib.Path_15_0();
	this.instance_15.setTransform(3.7,18.3,1,1,0,0,0,3,0.3);

	this.instance_16 = new lib.Path_16_0();
	this.instance_16.setTransform(4.1,19.4,1,1,0,0,0,2.8,0.5);

	this.instance_17 = new lib.Path_17();
	this.instance_17.setTransform(4.7,20.4,1,1,0,0,0,2.4,0.7);

	this.instance_18 = new lib.Path_18_0();
	this.instance_18.setTransform(5,21.4,1,1,0,0,0,2.3,0.8);

	this.instance_19 = new lib.Path_19();
	this.instance_19.setTransform(5.3,22.4,1,1,0,0,0,2.2,1);

	this.instance_20 = new lib.Path_20();
	this.instance_20.setTransform(5.6,23.6,1,1,0,0,0,2.4,1.4);

	this.instance_21 = new lib.Path_21();
	this.instance_21.setTransform(5.9,24.8,1,1,0,0,0,2.5,1.8);

	this.instance_22 = new lib.Path_22_0();
	this.instance_22.setTransform(6.8,25.4,1,1,0,0,0,2,1.7);

	this.instance_23 = new lib.Path_23();
	this.instance_23.setTransform(8.4,27,1,1,0,0,0,1.8,2);

	this.instance_24 = new lib.Path_24();
	this.instance_24.setTransform(9.4,27.6,1,1,0,0,0,1.5,2);

	this.instance_25 = new lib.Path_25();
	this.instance_25.setTransform(10.3,28.1,1,1,0,0,0,1.3,2);

	this.instance_26 = new lib.Path_26();
	this.instance_26.setTransform(9.5,31.8,1,1,0,0,0,0.8,1.2);

	this.instance_27 = new lib.Path_27();
	this.instance_27.setTransform(13.5,33.3,1,1,0,0,0,0.6,1.3);

	this.instance_28 = new lib.Path_28();
	this.instance_28.setTransform(14.9,33.5,1,1,0,0,0,0.5,1.3);

	this.instance_29 = new lib.Path_29();
	this.instance_29.setTransform(17.7,33.5,1,1,0,0,0,0.4,1.2);

	this.instance_30 = new lib.Path_30();
	this.instance_30.setTransform(20.5,33.2,1,1,0,0,0,0.6,1.3);

	this.instance_31 = new lib.Path_31();
	this.instance_31.setTransform(23.2,32.3,1,1,0,0,0,0.8,1.2);

	this.instance_32 = new lib.Path_32();
	this.instance_32.setTransform(24.4,31.7,1,1,0,0,0,0.8,1.2);

	this.instance_33 = new lib.Path_33();
	this.instance_33.setTransform(27.9,29.2,1,1,0,0,0,1.1,1.1);

	this.instance_34 = new lib.Path_34();
	this.instance_34.setTransform(28.9,28.3,1,1,0,0,0,1.1,1.1);

	this.instance_35 = new lib.Path_35();
	this.instance_35.setTransform(29.8,27.2,1,1,0,0,0,1.2,1);

	this.instance_36 = new lib.Path_36();
	this.instance_36.setTransform(32.4,22.2,1,1,0,0,0,1.3,0.7);

	this.instance_37 = new lib.Path_37();
	this.instance_37.setTransform(32.9,19.4,1,1,0,0,0,1.2,0.5);

	this.instance_38 = new lib.Path_38();
	this.instance_38.setTransform(33,16.6,1,1,0,0,0,1.2,0.4);

	this.instance_39 = new lib.Path_39();
	this.instance_39.setTransform(32.3,12.4,1,1,0,0,0,1.3,0.7);

	this.instance_40 = new lib.Path_40();
	this.instance_40.setTransform(31.9,9.4,1,1,0,0,0,0.4,0.4);

	this.instance_41 = new lib.Path_41();
	this.instance_41.setTransform(30.7,8.4,1,1,0,0,0,0.8,0.7);

	this.instance_42 = new lib.Path_42();
	this.instance_42.setTransform(30.2,6.9,1,1,0,0,0,0.5,0.5);

	this.instance_43 = new lib.Path_43();
	this.instance_43.setTransform(29.3,5.7,1,1,0,0,0,0.4,0.4);

	this.instance_44 = new lib.Path_44();
	this.instance_44.setTransform(28,5.1,1,1,0,0,0,0.8,0.8);

	this.instance_45 = new lib.Path_45();
	this.instance_45.setTransform(24.3,7.3,1,1,0,0,0,1.5,2);

	this.instance_46 = new lib.Path_46();
	this.instance_46.setTransform(25.4,3.7,1,1,0,0,0,0.9,1.2);

	this.instance_47 = new lib.Path_47();
	this.instance_47.setTransform(24.7,2.1,1,1,0,0,0,0.4,0.3);

	this.instance_48 = new lib.Path_48();
	this.instance_48.setTransform(23,2.1,1,1,0,0,0,0.6,0.9);

	this.instance_49 = new lib.Path_49();
	this.instance_49.setTransform(21.8,1.4,1,1,0,0,0,0.5,0.7);

	this.instance_50 = new lib.Path_50();
	this.instance_50.setTransform(20.3,1.2,1,1,0,0,0,0.5,0.9);

	this.instance_51 = new lib.Path_51();
	this.instance_51.setTransform(18.8,1.1,1,1,0,0,0,0.4,1);

	this.instance_52 = new lib.Path_52();
	this.instance_52.setTransform(17.5,0.6,1,1,0,0,0,0.4,0.6);

	this.instance_53 = new lib.Path_53();
	this.instance_53.setTransform(16,1.2,1,1,0,0,0,0.4,1.2);

	this.instance_54 = new lib.Group_0();
	this.instance_54.setTransform(15.8,14.9,1,1,0,0,0,15.8,14.3);

	this.instance_55 = new lib.Path_54();
	this.instance_55.setTransform(16.8,17.4,1,1,0,0,0,4.7,4.7);

	this.instance_56 = new lib.Path_55();
	this.instance_56.setTransform(16.5,16.7,1,1,0,0,0,14,13.9);

	this.instance_57 = new lib.Group_1_0();
	this.instance_57.setTransform(16.9,17.3,1,1,0,0,0,11.4,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,34.8);


(lib.top_left_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cycle
	this.core = new lib.Group_1_2();
	this.core.setTransform(0,0,2.187,2.187,0,0,180,16.9,17.4);

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1));

	// 图层 2
	this.instance = new lib.CompoundPath_0();
	this.instance.setTransform(-0.2,-0.1,2.187,2.187,0,0,180,18.3,18.2);

	this.instance_1 = new lib.CompoundPath_1();
	this.instance_1.setTransform(-0.1,0,2.187,2.187,0,0,180,22.7,22.5);

	this.instance_2 = new lib.CompoundPath_2();
	this.instance_2.setTransform(0,-0.1,2.187,2.187,0,0,180,22.1,22.2);
	this.instance_2.alpha = 0.59;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 3
	this.frame = new lib.top_left_cycle_frame();
	this.frame.setTransform(0.7,0);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// cycle_shadow
	this.shadow = new lib.Path_6();
	this.shadow.setTransform(0.1,0,2.187,2.187,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-58.1,116,116.2);


(lib.frame_block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc1
	this.mc1 = new lib.block1();
	this.mc1.setTransform(0.2,-117.1,1,1,33.5,0,0,-3.5,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.mc1).to({y:-149.7},4,cjs.Ease.get(1)).wait(30).to({y:-117.1},5,cjs.Ease.get(1)).wait(21));

	// mc2
	this.mc2 = new lib.block2();
	this.mc2.setTransform(-102,-58.8,1,1,33.5,0,0,-11.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(2).to({x:-130.2,y:-75.1},4,cjs.Ease.get(1)).wait(32).to({x:-102,y:-58.8},5,cjs.Ease.get(1)).wait(17));

	// mc3
	this.mc3 = new lib.block3();
	this.mc3.setTransform(-102.3,59,1,1,0,0,0,-12.4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.mc3).wait(6).to({x:-130.1,y:75},4,cjs.Ease.get(1)).wait(41).to({x:-102.3,y:59},5,cjs.Ease.get(1)).wait(4));

	// mc4
	this.mc4 = new lib.block4();
	this.mc4.setTransform(0.1,118.4,1,1,0,0,0,0.4,14.4);

	this.timeline.addTween(cjs.Tween.get(this.mc4).wait(4).to({y:150},4,cjs.Ease.get(1)).wait(35).to({y:118.4},5,cjs.Ease.get(1)).wait(12));

	// mc5
	this.mc5 = new lib.block5();
	this.mc5.setTransform(102,58.8,1,1,0,0,0,8,4);

	this.timeline.addTween(cjs.Tween.get(this.mc5).wait(8).to({x:129.9,y:75},4,cjs.Ease.get(1)).wait(35).to({x:102,y:58.8},5,cjs.Ease.get(1)).wait(8));

	// mc6
	this.mc6 = new lib.block6();
	this.mc6.setTransform(101.6,-58.7,1,1,0,0,0,12.8,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.mc6).wait(10).to({x:130.3,y:-75.1},4,cjs.Ease.get(1)).wait(39).to({x:101.6,y:-58.7},5,cjs.Ease.get(1)).wait(2));

	// mc7
	this.mc7 = new lib.block_inside_1();
	this.mc7.setTransform(-52.1,-90.1,1,1,0,0,0,-11.2,-19.3);

	this.timeline.addTween(cjs.Tween.get(this.mc7).wait(8).to({x:-62.9,y:-108.8},4,cjs.Ease.get(1)).wait(24).to({x:-52.1,y:-90.1},5,cjs.Ease.get(1)).wait(19));

	// mc8
	this.mc8 = new lib.block_inside_2();
	this.mc8.setTransform(-91.1,52.6,1,1,0,0,0,-19.6,12.1);

	this.timeline.addTween(cjs.Tween.get(this.mc8).wait(10).to({x:-108.7,y:63.3},4,cjs.Ease.get(1)).wait(27).to({x:-91.1,y:52.6},5,cjs.Ease.get(1)).wait(14));

	// mc9
	this.mc9 = new lib.block_inside_3();
	this.mc9.setTransform(52.2,90.4,1,1,0,0,0,12.4,19.3);

	this.timeline.addTween(cjs.Tween.get(this.mc9).wait(12).to({x:62.9,y:109},4,cjs.Ease.get(1)).wait(29).to({x:52.2,y:90.4},5,cjs.Ease.get(1)).wait(10));

	// mc10
	this.mc10 = new lib.block_inside_4();
	this.mc10.setTransform(90.2,-52,1,1,0,0,0,19.8,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.mc10).wait(14).to({x:109,y:-62.9},4,cjs.Ease.get(1)).wait(31).to({x:90.2,y:-52},5,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151,-169.3,302,326.2);


(lib.p4_sites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJBVmIj3mtID3muIHvAAID4GuIj4GtgAwvVmIj4mtID4muIHvAAID3GuIj3GtgAV6OJIj4mtID4mtIHvAAID3GuIj3GsgAj2OJIj4mtID4mtIHtAAID4GuIj4GsgA9oOJIj3mtID3mtIHvAAID4GuIj4GsgAJBGtIj3mtID3msIHvAAID4GsIj4GtgAwvGtIj4mtID4msIHvAAID3GsIj3GtgAV6guIj4mtID4mtIHvAAID3GtIj3GtgAj2guIj4mtID4mtIHtAAID4GtIj4GtgA9oguIj3mtID3mtIHvAAID4GtIj4GtgAJBoKIj3muID3mtIHvAAID4GuIj4GtgAwvoKIj4muID4mtIHvAAID3GuIj3Gtg");

	// 图层 7
	this.scan = new lib.scan();
	this.scan.setTransform(-297.1,-148.5,2.024,1.901,-90,0,0,75,0);
	this.scan.alpha = 0.801;

	this.scan.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.scan).wait(1));

	// a1
	this.animate1 = new lib.p4_site_line_animate1();
	this.animate1.setTransform(0,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.animate1).wait(1));

	// a2
	this.animate2 = new lib.p4_site_line_animate2();
	this.animate2.setTransform(82.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.animate2).wait(1));

	// 图层 1
	this.instance = new lib.p4_site_item();
	this.instance.setTransform(165,47.3);

	this.instance_1 = new lib.p4_site_item();
	this.instance_1.setTransform(165,-48);

	this.instance_2 = new lib.p4_site_item();
	this.instance_2.setTransform(82.5,-95.6);

	this.instance_3 = new lib.p4_site_item();
	this.instance_3.setTransform(82.5,95);

	this.instance_4 = new lib.p4_site_item();
	this.instance_4.setTransform(82.5,-0.3);

	this.instance_5 = new lib.p4_site_item();
	this.instance_5.setTransform(0,47.3);

	this.instance_6 = new lib.p4_site_item();
	this.instance_6.setTransform(0,-48);

	this.instance_7 = new lib.p4_site_item();
	this.instance_7.setTransform(-82.5,-95.6);

	this.instance_8 = new lib.p4_site_item();
	this.instance_8.setTransform(-82.5,95);

	this.instance_9 = new lib.p4_site_item();
	this.instance_9.setTransform(-82.5,-0.3);

	this.instance_10 = new lib.p4_site_item();
	this.instance_10.setTransform(-165,47.3);

	this.instance_11 = new lib.p4_site_item();
	this.instance_11.setTransform(-165,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.5,-143.8,441,289.4);


(lib.process3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.txt_item = new lib.p3_txt_item();
	this.txt_item.setTransform(-310.1,285,1,1,0,0,0,8,175.9);

	this.timeline.addTween(cjs.Tween.get(this.txt_item).wait(1));

	// cube_info
	this.cube_info = new lib.p3_cube_info();
	this.cube_info.setTransform(279.1,265.3,1,1,0,0,0,98,38.7);

	this.timeline.addTween(cjs.Tween.get(this.cube_info).wait(1));

	// cube_progress1
	this.cube_progress2 = new lib.p3_progress2();
	this.cube_progress2.setTransform(1.3,403.4,1,1,0,0,0,20.4,93.5);

	this.cube_progress1 = new lib.p3_progress1();
	this.cube_progress1.setTransform(-35.1,393.9,1,1,0,0,0,18.9,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cube_progress1},{t:this.cube_progress2}]}).wait(1));

	// cube
	this.cube = new lib.p3_cube();
	this.cube.setTransform(184.1,391,1,1,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get(this.cube).wait(1));

	// 图层 1
	this.line = new lib.line_animate3();
	this.line.setTransform(399.6,337.6,1,1,0,0,0,482.6,337.6);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.1,76,1086.6,503.5);


(lib.p2_chart9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart9();
	this.instance.setTransform(10,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.265,2.663);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284.2,207);


(lib.p2_chart8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart8();
	this.instance.setTransform(11,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.341,2.341);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.3,181.9);


(lib.p2_chart7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,0.89,2.986);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,232);


(lib.p2_chart6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart6();
	this.instance.setTransform(4,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.39,2.832);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.2,220.1);


(lib.p2_chart5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.265,3.114);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,284.2,242);


(lib.p2_chart4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart4();
	this.instance.setTransform(10,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.154,3.025);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.5,259.2,249);


(lib.p2_chart3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1,2.246);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.7,174.5);


(lib.p2_chart2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart2();
	this.instance.setTransform(12,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.073,2.51);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241.2,195.1);


(lib.p2_chart1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.chart1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.messageai2("synched",0);
	this.instance_1.setTransform(0,0,1.187,2.889);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.7,224.5);


(lib.process_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.process_cycle = new lib.process_cycle();
	this.process_cycle.setTransform(2.7,158.3,0.608,0.608,0,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.process_cycle).wait(1));

	// bar
	this.process_bar = new lib.process_bar();
	this.process_bar.setTransform(232.4,158.3,1,1,0,0,0,210,7);

	this.timeline.addTween(cjs.Tween.get(this.process_bar).wait(1));

	// bar_label
	this.text = new cjs.Text("%", "bold 14px 'Microsoft YaHei'", "#CCCCCC");
	this.text.lineHeight = 20;
	this.text.lineWidth = 18;
	this.text.setTransform(477.4,148.6);

	this.progress_label = new cjs.Text("100", "bold 14px 'Microsoft YaHei'", "#CCCCCC");
	this.progress_label.name = "progress_label";
	this.progress_label.textAlign = "right";
	this.progress_label.lineHeight = 20;
	this.progress_label.lineWidth = 29;
	this.progress_label.setTransform(474.4,148.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.progress_label},{t:this.text}]}).wait(1));

	// title
	this.title = new cjs.Text("单一维度验证", "bold 24px 'Microsoft YaHei'", "#8AF8F3");
	this.title.name = "title";
	this.title.lineHeight = 34;
	this.title.lineWidth = 435;
	this.title.setTransform(20,108);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(27,27,27,0)","rgba(138,248,243,0.8)"],[0,1],454.9,-1.6,-425.3,1.5).s().p("EBI0ACMIjvkWICXAAIDvEWgEBEIACMIjvkWICXAAIDvEWgEA/cACMIjvkWICXAAIDvEWgEA6wACMIjvkWICXAAIDvEWgEA2EACMIjvkWICXAAIDvEWgEAxYACMIjvkWICXAAIDvEWgEAssACMIjvkWICXAAIDvEWgEAoAACMIjvkWICXAAIDvEWgEAjUACMIjvkWICXAAIDvEWgAeoCMIjvkWICXAAIDvEWgAZ8CMIjvkWICXAAIDvEWgAVQCMIjvkWICXAAIDvEWgAQkCMIjvkWICXAAIDvEWgAL4CMIjvkWICXAAIDvEWgAHMCMIjvkWICXAAIDvEWgACgCMIjtkWICVAAIDvEWgAiKCMIjvkWICXAAIDtEWgAm2CMIjvkWICXAAIDvEWgAriCMIjvkWICXAAIDvEWgAwOCMIjvkWICXAAIDvEWgA06CMIjvkWICXAAIDvEWgA5mCMIjvkWICXAAIDvEWgA+SCMIjvkWICXAAIDvEWgEgi+ACMIjvkWICXAAIDvEWgEgnqACMIjvkWICXAAIDvEWgEgsWACMIjvkWICXAAIDvEWgEgxCACMIjvkWICXAAIDvEWgEg1uACMIjvkWICXAAIDvEWgEg6aACMIjvkWICXAAIDvEWgEg/GACMIjvkWICXAAIDvEWgEhDyACMIjvkWICXAAIDvEWgEhIeACMIisjJICXAAICsDJg");
	this.shape.setTransform(487.8,186.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,108,979,92.5);


(lib.map_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuAQmIlmkDIAA57MAj3AAAIDvCpIAAbVg");
	mask.setTransform(128,106.2);

	// 图层 4
	this.scan = new lib.scan();
	this.scan.setTransform(0,117,1.36,1,-90);

	this.scan.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.scan).wait(1));

	// 图层 3
	this.pin = new lib.pin_animate();
	this.pin.setTransform(175.8,112.9);

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// 图层 1
	this.instance = new lib.map();
	this.instance.setTransform(4.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.simple_panel();
	this.instance_1.setTransform(163.2,111.6,1.638,1.638,0,0,0,99.6,68.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,260.3,223.3);


(lib.top_left_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// time
	this.time = new lib.top_left_time();
	this.time.setTransform(153.3,65.4,1,1,0,0,0,113.3,15.4);

	this.timeline.addTween(cjs.Tween.get(this.time).wait(1));

	// cycle
	this.cycle = new lib.top_left_cycle();
	this.cycle.setTransform(450.4,86.2,1,1,0,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.cycle).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3EACE2").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKgAgSgSQgIAIAAAKQAAALAIAIQAIAIAKAAQALAAAIgIQAIgIAAgLQAAgKgIgIQgIgIgLAAQgKAAgIAIg");
	this.shape.setTransform(450.1,86.3,1.843,1.843,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EACE2").s().p("AhqCCIDPkIIAGAHIjNEGQgEgDgEgCg");
	this.shape_1.setTransform(427.2,56.8,1.843,1.843,0,0,180);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(238.9,20.4,1.843,1.843,0,0,180,120.6,10.7);
	this.instance.alpha = 0.59;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6DC8EB").s().p("AoQBwIglg0II9AAIA+hGIy9AAIhHhlICpAAIAhAvIK+AAIAhgvIXUAAIgdAlI1UAAIgSAXISmAAIiCCjgAoNBrIVqAAIB6iZIylAAIAZgiIVVAAIAUgaI3FAAIgiAvIrEAAIghgvIicAAIA/BaITGAAIhGBQIo2AAg");
	this.shape_2.setTransform(224.1,20.7,1.843,1.843,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3EACE2").s().p("AqDAFIgDgJIUNAAIgHAJg");
	this.shape_3.setTransform(289.1,32.8,1.843,1.843,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 6
	this.txt5 = new cjs.Text("0\n1\n2\n3\n4", "bold 10px 'Utsaah'", "#3EACE2");
	this.txt5.name = "txt5";
	this.txt5.textAlign = "center";
	this.txt5.lineHeight = 8;
	this.txt5.lineWidth = 10;
	this.txt5.setTransform(42.3,231.5);

	this.txt4 = new cjs.Text("01", "bold 10px 'Utsaah'", "#3EACE2");
	this.txt4.name = "txt4";
	this.txt4.textAlign = "center";
	this.txt4.lineHeight = 13;
	this.txt4.lineWidth = 10;
	this.txt4.setTransform(42.3,199.3);

	this.txt3 = new cjs.Text("01", "bold 10px 'Utsaah'", "#3EACE2");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 13;
	this.txt3.lineWidth = 10;
	this.txt3.setTransform(42.3,176.3);

	this.txt2 = new cjs.Text("01", "bold 10px 'Utsaah'", "#3EACE2");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 13;
	this.txt2.lineWidth = 10;
	this.txt2.setTransform(42.3,152.7);

	this.txt1 = new cjs.Text("01", "bold 10px 'Utsaah'", "#3EACE2");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 13;
	this.txt1.lineWidth = 10;
	this.txt1.setTransform(42.3,129.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt1},{t:this.txt2},{t:this.txt3},{t:this.txt4},{t:this.txt5}]}).wait(1));

	// 图层 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3EACE2").s().p("AgYAfIAvg9IACABIguA8g");
	this.shape_4.setTransform(30.6,270.2,2.066,2.066,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3EACE2").s().p("AgWAeIgCAAIAvg8IACABIgvA8g");
	this.shape_5.setTransform(30.5,190.9,2.066,2.066,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3EACE2").s().p("AgkBwIAAjgIBJAAIAADggAgiBuIBFAAIAAjcIhFAAg");
	this.shape_6.setTransform(43.1,253.4,2.066,2.066,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3EACE2").s().p("AgGAHIAAgFIAIAAIAAgIIAFAAIAAANg");
	this.shape_7.setTransform(37.7,274.3,2.066,2.066,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3EACE2").s().p("AgGAHIAAgNIAFAAIAAAIIAIAAIAAAFg");
	this.shape_8.setTransform(48.4,274.3,2.066,2.066,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3EACE2").s().p("AgGAHIAAgNIANAAIAAAGIgIAAIAAAHg");
	this.shape_9.setTransform(48.4,232.4,2.066,2.066,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3EACE2").s().p("AACAHIAAgHIgIAAIAAgGIANAAIAAANg");
	this.shape_10.setTransform(37.7,232.4,2.066,2.066,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3EACE2").s().p("AgkAlIAAhJIBJAAIAABJgAgiAjIBFAAIAAhFIhFAAg");
	this.shape_11.setTransform(43.1,205,2.066,2.066,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3EACE2").s().p("AgGAHIAAgFIAIAAIAAgIIAFAAIAAANg");
	this.shape_12.setTransform(37.7,210.4,2.066,2.066,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3EACE2").s().p("AgGAHIAAgNIAFAAIAAAIIAIAAIAAAFg");
	this.shape_13.setTransform(48.4,210.4,2.066,2.066,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3EACE2").s().p("AgGAHIAAgNIANAAIAAAFIgIAAIAAAIg");
	this.shape_14.setTransform(48.4,199.6,2.066,2.066,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3EACE2").s().p("AACAHIAAgIIgIAAIAAgFIANAAIAAANg");
	this.shape_15.setTransform(37.7,199.6,2.066,2.066,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3EACE2").s().p("AgWAdIgCAAIAvg7IABABIguA8g");
	this.shape_16.setTransform(30.5,167.8,2.066,2.066,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3EACE2").s().p("AgkAlIAAhJIBJAAIAABJgAgiAjIBFAAIAAhFIhFAAg");
	this.shape_17.setTransform(43.1,181.8,2.066,2.066,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3EACE2").s().p("AgGAHIAAgFIAIAAIAAgIIAFAAIAAANg");
	this.shape_18.setTransform(37.7,187.2,2.066,2.066,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3EACE2").s().p("AgGAHIAAgNIAFAAIAAAIIAIAAIAAAFg");
	this.shape_19.setTransform(48.4,187.2,2.066,2.066,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3EACE2").s().p("AgGAHIAAgNIANAAIAAAGIgIAAIAAAHg");
	this.shape_20.setTransform(48.4,176.4,2.066,2.066,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3EACE2").s().p("AACAHIAAgHIgIAAIAAgGIANAAIAAANg");
	this.shape_21.setTransform(37.7,176.4,2.066,2.066,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3EACE2").s().p("AgWAeIgCAAIAvg8IACACIgvA7g");
	this.shape_22.setTransform(30.5,144.3,2.066,2.066,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3EACE2").s().p("AgkAlIAAhJIBJAAIAABJgAgiAjIBFAAIAAhFIhFAAg");
	this.shape_23.setTransform(43.1,158.3,2.066,2.066,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3EACE2").s().p("AgGAHIAAgFIAIAAIAAgIIAFAAIAAANg");
	this.shape_24.setTransform(37.7,163.7,2.066,2.066,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3EACE2").s().p("AgGAHIAAgNIAFAAIAAAIIAIAAIAAAFg");
	this.shape_25.setTransform(48.4,163.7,2.066,2.066,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3EACE2").s().p("AgGAHIAAgNIANAAIAAAGIgIAAIAAAHg");
	this.shape_26.setTransform(48.4,153,2.066,2.066,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3EACE2").s().p("AACAHIAAgHIgIAAIAAgGIANAAIAAANg");
	this.shape_27.setTransform(37.7,153,2.066,2.066,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3EACE2").s().p("AgWAeIgCAAIAvg8IABABIguA8g");
	this.shape_28.setTransform(30.5,121,2.066,2.066,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3EACE2").s().p("AgkAlIAAhJIBJAAIAABJgAgiAjIBFAAIAAhFIhFAAg");
	this.shape_29.setTransform(43.1,134.9,2.066,2.066,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3EACE2").s().p("AgGAHIAAgFIAIAAIAAgIIAFAAIAAANg");
	this.shape_30.setTransform(37.7,140.3,2.066,2.066,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3EACE2").s().p("AgGAHIAAgNIAFAAIAAAIIAIAAIAAAFg");
	this.shape_31.setTransform(48.4,140.3,2.066,2.066,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3EACE2").s().p("AgGAHIAAgNIANAAIAAAFIgIAAIAAAIg");
	this.shape_32.setTransform(48.4,129.5,2.066,2.066,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3EACE2").s().p("AACAHIAAgIIgIAAIAAgFIANAAIAAANg");
	this.shape_33.setTransform(37.7,129.5,2.066,2.066,0,0,180);

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(12.8,138.8,2.066,2.066,0,0,180,6,61.7);
	this.instance_1.alpha = 0.59;

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(4.9,115.8,2.066,2.066,0,0,180,1.1,32.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6DC8EB").s().p("Ag9JwIAAgnIAagiIAAlRIAAAAIgaAhIAAgqIAagiIAAhHIAAAAIgaAhIAAgqIAagiIAAhFIAAAAIgaAfIAAgoIAaghIAAhIIAAAAIgaAhIAAgqIAaghIAAhIIAAAAIgaAhIAAkBIB7ifIAAA1IhlCDIAAAtIBliDIAABRIghAqIAAJmIAhgqIAAAeIgyA/IAAq3IgVAfIAAPAIgzBBgAggDVIAAFTIgaAiIAAAfIAug7IAAvAIAbglIAAK2IAsg4IAAgWIghAqIAApuIAhgqIAAhIIhkCDIAAg2IBkiDIAAgtIh1CYIAAD5IAXgdIADADIAABJIgaAiIAAAhIAXgdIADADIAABJIgaAiIAAAfIAXgbIADADIAABHIgaAiIAAAhIAXgdIADADIAABJIgaAiIAAAhIAXgdg");
	this.shape_34.setTransform(12.9,139.1,2.066,2.066,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.instance_2},{t:this.instance_1},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// 图层 3
	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(150.5,14.5,1.843,1.843,0,0,180,68.5,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508.1,285.3);


(lib.score_cycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// label
	this.label = new cjs.Text("57", "bold 52px 'Microsoft YaHei'", "#F6AF36");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 71;
	this.label.lineWidth = 100;
	this.label.setTransform(-2,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// core
	this.core = new lib.core_1();
	this.core.setTransform(-0.3,-0.8,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1));

	// frame_block
	this.frame_block = new lib.frame_block();
	this.frame_block.setTransform(0,-0.7,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get(this.frame_block).wait(1));

	// frame_light
	this.frame_light = new lib.frame_light1();
	this.frame_light.setTransform(-0.1,0.1,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.frame_light).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEgPHQDAg7CZiAQCTh7BbirQBbirAVjAQAUjEg6jAQg7jAiAiZQh7iUirhbQirhbi/gUQjFgVjAA7Qi9A5iXB9QiWB8hdCvQheCugSDDQgTDAA5C9IgMAEQg6jAATjDQATjFBfiwQBeixCZh+QCYh+DAg6QDCg7DHAVQDCAUCtBcQCtBdB9CVQCCCbA7DCQA7DDgVDHQgVDBhcCuQhcCtiVB9QibCBjDA8g");
	mask.setTransform(-0.5,-3.7);

	// frame
	this.frame = new lib.frame();
	this.frame.setTransform(-0.2,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.frame).wait(1));

	// outside
	this.outside = new lib.outside();
	this.outside.setTransform(0,-0.5,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get(this.outside).wait(1));

	// info
	this.time = new cjs.Text("TIME COST: 30.235", "12px 'Microsoft YaHei'", "#6A6D76");
	this.time.name = "time";
	this.time.lineHeight = 18;
	this.time.lineWidth = 136;
	this.time.setTransform(-218.8,-149.3);

	this.text = new cjs.Text("SCORE EVALUATION", "12px 'Microsoft YaHei'", "#6A6D76");
	this.text.lineHeight = 18;
	this.text.lineWidth = 136;
	this.text.setTransform(-218.8,-167.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.time}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.8,-167.2,364.3,302.6);


(lib.process4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left
	this.sites = new lib.p4_sites();
	this.sites.setTransform(-265.7,423.8);

	this.timeline.addTween(cjs.Tween.get(this.sites).wait(1));

	// 图层 15
	this.tags = new lib.p4_tags();
	this.tags.setTransform(247,226.1,1,1,0,0,0,165,17);

	this.timeline.addTween(cjs.Tween.get(this.tags).wait(1));

	// 图层 1
	this.tag_line = new lib.p4_tag_line_animate();
	this.tag_line.setTransform(58.4,424,1,1,0,0,0,46.4,0);

	this.line = new lib.line_animate4();
	this.line.setTransform(399.6,337.6,1,1,0,0,0,482.6,337.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.line},{t:this.tag_line}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-657.9,114,1636.9,497.1);


(lib.process2_charts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.c9 = new lib.p2_chart9();
	this.c9.setTransform(255.1,440.1,1,1,0,0,0,130,91);

	this.c8 = new lib.p2_chart8();
	this.c8.setTransform(448.2,333.1,1,1,0,0,0,140,82.5);

	this.c7 = new lib.p2_chart7();
	this.c7.setTransform(141.1,257.6,1,1,0,0,0,100,113.5);

	this.c6 = new lib.p2_chart6();
	this.c6.setTransform(366.2,154.1,1,1,0,0,0,150,103.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c6},{t:this.c7},{t:this.c8},{t:this.c9}]}).wait(1));

	// 图层 1
	this.c4 = new lib.p2_chart4();
	this.c4.setTransform(501.1,477.3,1,1,0,0,0,120,124.5);

	this.c5 = new lib.p2_chart5();
	this.c5.setTransform(269.1,428,1,1,0,0,0,140,119);

	this.c2 = new lib.p2_chart2();
	this.c2.setTransform(444.1,258.1,1,1,0,0,0,110,81);

	this.c1 = new lib.p2_chart1();
	this.c1.setTransform(347.1,110.5,1,1,0,0,0,130,110.5);

	this.c3 = new lib.p2_chart3();
	this.c3.setTransform(140,288,1,1,0,0,0,140,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c3},{t:this.c1},{t:this.c2},{t:this.c5},{t:this.c4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640.2,594.3);


(lib.process2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 12
	this.text = new cjs.Text("工作", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 156;
	this.text.setTransform(99,616);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// 图层 11
	this.text_1 = new cjs.Text("社交", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 156;
	this.text_1.setTransform(99,564);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// 图层 10
	this.text_2 = new cjs.Text("学历", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 156;
	this.text_2.setTransform(99,512);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// 图层 8
	this.text_3 = new cjs.Text("消费", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 156;
	this.text_3.setTransform(99,460);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1));

	// 图层 7
	this.text_4 = new cjs.Text("投资", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 26;
	this.text_4.lineWidth = 156;
	this.text_4.setTransform(99,408);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1));

	// 图层 6
	this.text_5 = new cjs.Text("金融", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 26;
	this.text_5.lineWidth = 156;
	this.text_5.setTransform(99,356);

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(1));

	// 图层 5
	this.text_6 = new cjs.Text("出行", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 26;
	this.text_6.lineWidth = 156;
	this.text_6.setTransform(99,304);

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(1));

	// 图层 4
	this.text_7 = new cjs.Text("通讯", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 26;
	this.text_7.lineWidth = 156;
	this.text_7.setTransform(99,252);

	this.timeline.addTween(cjs.Tween.get(this.text_7).wait(1));

	// 图层 3
	this.text_8 = new cjs.Text("家庭", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 26;
	this.text_8.lineWidth = 156;
	this.text_8.setTransform(99,200);

	this.timeline.addTween(cjs.Tween.get(this.text_8).wait(1));

	// 图层 2
	this.text_9 = new cjs.Text("身份", "18px 'Microsoft YaHei'", "#8AF8F3");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 26;
	this.text_9.lineWidth = 156;
	this.text_9.setTransform(99,146.9);

	this.timeline.addTween(cjs.Tween.get(this.text_9).wait(1));

	// 图层 14
	this.charts = new lib.process2_charts();
	this.charts.setTransform(-280.6,383.9,1,1,0,0,0,310.5,300.9);

	this.timeline.addTween(cjs.Tween.get(this.charts).wait(1));

	// 图层 9
	this.output = new lib.martic_output();
	this.output.setTransform(326.1,243.1,1,1,0,0,0,114,38.9);

	this.timeline.addTween(cjs.Tween.get(this.output).wait(1));

	// 图层 1
	this.line = new lib.line_animate2();
	this.line.setTransform(399.6,337.6,1,1,0,0,0,482.6,337.6);

	this.timeline.addTween(cjs.Tween.get(this.line).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-591.1,38,1378.1,639.3);


// stage content:
(lib.HAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.result = new lib.result();
	this.result.setTransform(-24.8,439);

	this.timeline.addTween(cjs.Tween.get(this.result).wait(1));

	// score
	this.score_cycle = new lib.score_cycle();
	this.score_cycle.setTransform(1228.3,308.8,1,1,0,0,0,0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.score_cycle).wait(1));

	// user
	this.user_cycle = new lib.user_cycle();
	this.user_cycle.setTransform(828.2,308.1);

	this.timeline.addTween(cjs.Tween.get(this.user_cycle).wait(1));

	// card
	this.card_panel = new lib.card_panel2();
	this.card_panel.setTransform(170.1,208.2);

	this.timeline.addTween(cjs.Tween.get(this.card_panel).wait(1));

	// process_phase
	this.process_phase = new lib.process_phase();
	this.process_phase.setTransform(1470,411,1,1,0,0,0,110,71);

	this.timeline.addTween(cjs.Tween.get(this.process_phase).wait(1));

	// process_head
	this.process_head = new lib.process_head();
	this.process_head.setTransform(1873.9,93.3,1,1,0,0,0,480,46.5);

	this.timeline.addTween(cjs.Tween.get(this.process_head).wait(1));

	// link
	this.link = new lib.process_link();
	this.link.setTransform(1012.1,304.3,1,1,0,0,0,63.1,14);
	this.link.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.link).wait(1));

	// process1
	this.process1 = new lib.process1();
	this.process1.setTransform(1214.4,690.7,1,1,0,0,0,441.1,337.6);

	this.timeline.addTween(cjs.Tween.get(this.process1).wait(1));

	// process2
	this.process2 = new lib.process2();
	this.process2.setTransform(1214.4,690.7,1,1,0,0,0,441.1,337.6);

	this.timeline.addTween(cjs.Tween.get(this.process2).wait(1));

	// process3
	this.process3 = new lib.process3();
	this.process3.setTransform(1214.4,690.7,1,1,0,0,0,441.1,337.6);

	this.timeline.addTween(cjs.Tween.get(this.process3).wait(1));

	// 图层 2
	this.instance = new lib.logo();
	this.instance.setTransform(1833,31,1,1,0,0,0,80,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// static
	this.top_left = new lib.top_left_frame();
	this.top_left.setTransform(254.5,72.6,1,1,0,0,0,249.5,67.6);

	this.map = new lib.map_1();
	this.map.setTransform(127,943.4,1,1,0,0,0,120,93);

	this.cycle_big_board = new lib.board();
	this.cycle_big_board.setTransform(1662.4,927.5);

	this.cycle_big = new lib.cycle_big();
	this.cycle_big.setTransform(1750.5,912.8,1,1,0,0,0,125,120.3);

	this.performance = new lib.性能监控1();
	this.performance.setTransform(43.8,783,1,1,0,0,0,0.5,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.performance},{t:this.cycle_big},{t:this.cycle_big_board},{t:this.map},{t:this.top_left}]}).wait(1));

	// process4
	this.process4 = new lib.process4();
	this.process4.setTransform(1214.4,690.7,1,1,0,0,0,441.1,337.6);

	this.timeline.addTween(cjs.Tween.get(this.process4).wait(1));

	// top_info
	this.top_info = new lib.top_info();
	this.top_info.setTransform(960,30,1,1,0,0,0,960,30);

	this.timeline.addTween(cjs.Tween.get(this.top_info).wait(1));

	// 图层 4
	this.instance_1 = new lib.bg_1();
	this.instance_1.setTransform(960,540,1,1,0,0,0,960,540);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(917,539,3031.5,1082);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;