(function() {

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var MouseConstraint = Matter.MouseConstraint;

// Matter.js エンジン作成
var engine = Engine.create(document.body);

var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint);

// 二つの箱(四角)と地面を作る
var boxA = Bodies.rectangle(0, 0, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);

// isStatic:静的(完全固定)
var ground = Bodies.rectangle(40, 300, 600, 60, { isStatic: true });

// 二つの箱(四角)と地面を追加
World.add(engine.world, [boxA, boxB, ground]);

// Matter.js エンジン起動
Engine.run(engine);

})();