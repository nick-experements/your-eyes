function Monkey(x, y,img, speed, width){
    this.x = x;
    this.y = y;
    this.image = img;
    this.speed = speed;
    this.width = width;
    this.draw()
}
Monkey.prototype.draw = function(){
    var viewMonkey = '<img src="'+this.image+'"">';
    this.monkeyElement = $(viewMonkey);
    this.monkeyElement.css({
        position: "absolute", 
        left: this.x,
        top: this.y,
        width: this.width,
        height: 'auto', 
        transform: 'translate(-50%, -50%)',
        transition: '0.1s',
        transitionTimingFunction: 'linear',
        
    });
    $('body').append(this.monkeyElement);
}
Monkey.prototype.increeze = function () {
    this.width += this.speed;
    this.monkeyElement.css({
        width: this.width,
        height: 'auto'
    });
};
Monkey.prototype.small = function () {
    this.width -= this.speed;
    this.monkeyElement.css({
        width: this.width,
        height: 'auto'
    });
};
var monkey = new Monkey(window.innerWidth/2, window.innerHeight/2, 'img/monkey.jpg', 1, 50)
var wPressed = false
var sPressed = false
var keyActions = {
    87: 'w',
    83: 's',
}
$('body').keydown((event)=>{
    if(keyActions[event.keyCode] === 'w'){
        wPressed = true
    }
    if(keyActions[event.keyCode] === 's'){
        sPressed = true
    }
})
$('body').keyup((event)=>{
    if(keyActions[event.keyCode] === 'w'){
        wPressed = false;
    }
    if(keyActions[event.keyCode] === 's'){
        sPressed = false;
    }
})
setInterval(()=>{
    if(wPressed === true){
        monkey.increeze()
    }
    if(sPressed === true){
        monkey.small()
    }
})
