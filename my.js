var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Render = Matter.Render;
var MouseConstraint = Matter.MouseConstraint;
var Event = Matter.Event;

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
    density:1,
    friction: 1,
    restitution: 0.01,
    frictionAir: 0.1,
    render:{
        fillstroke:'black',
        strokeStyle: 'blue',
        lineWidth: 30
    }
});
    

var boxB = Bodies.rectangle(((window.innerWidth)/2), 0 , 30, 30,{
});

var groundWidth = window.innerWidth;
var groundY = (window.innerHeight) / 2;

// isStatic:静的(完全固定)
var ground = Bodies.rectangle(40, groundY, groundWidth, 60, { isStatic: true });

var start = new Date();
var end = new Date();

Matter.Events.on(engine, "collisionStart ", function(){
    end = new Date();
    var ms = end.getTime() - start.getTime();

    if(ms >= 100)collisionSound();

    console.log(ms)
    start = new Date();
})

// 二つの箱(四角)と地面を追加
World.add(engine.world, [boxA,boxB, ground,mouseConstraint]);

// Matter.js エンジン起動
Engine.run(engine);
Render.run(render);

var supportTouch = 'ontouchend' in document;
var EVENTNAME_TOUCHEND = supportTouch ? 'touchend' : 'mouseup';

canvas.addEventListener(EVENTNAME_TOUCHEND,function(){
    var box = Bodies.rectangle(((window.innerWidth)/2), 0, 20, 20,{
        render:{
            fillstroke:'red',
            lineWidth:20
        }
    });
    World.add(engine.world,[box]);
    clickSound();
    start = new Date();
});




function clickSound(){
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease('A3', '10n');
}

function collisionSound(){
    var synth = new Tone.MembraneSynth().toMaster();
    synth.triggerAttackRelease('C3', '10n');
}




