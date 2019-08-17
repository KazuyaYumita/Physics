var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Render = Matter.Render;
var MouseConstraint = Matter.MouseConstraint;

var canvas = document.getElementById('canvas')
// Matter.js エンジン作成
var engine = Engine.create();

var mouseConstraint = MouseConstraint.create(engine);

var render = Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: '#FFF',
        wireframes: false,
        showAngleIndicator: false
    }
});


// 二つの箱(四角)と地面を作る

var boxA = Bodies.rectangle(450,300,80,80,{
    render:{
        fillstroke:'white',
        strokeStyle: 'blue',
        lineWidth: 30
    }
    
});
    

var boxB = Bodies.rectangle(450, 50, 80, 80,{
});

// isStatic:静的(完全固定)
var ground = Bodies.rectangle(40, 300, 600, 60, { isStatic: true });

// 二つの箱(四角)と地面を追加
World.add(engine.world, [boxA,boxB, ground,mouseConstraint]);

// Matter.js エンジン起動
Engine.run(engine);
Render.run(render);

var supportTouch = 'ontouchend' in document;
var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

canvas.addEventListener(EVENTNAME_TOUCHEND,function(){
    var box = Bodies.rectangle(200, 0, 20, 20,{
        render:{
            fillstroke:'red',
            lineWidth:20
        }
    });
    World.add(engine.world,[box]);
    tone();
});

function tone(){

    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease('A3', '10n');

}





