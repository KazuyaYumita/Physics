(function() {

var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

// Matter.js エンジン作成
var engine = Engine.create(document.body);

// 二つの箱(四角)と地面を作る
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);

// isStatic:静的(完全固定)
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// 二つの箱(四角)と地面を追加
World.add(engine.world, [boxA, boxB, ground]);

// Matter.js エンジン起動
Engine.run(engine);

})();