
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 30;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left -= 30;
        console.log("ok:" + this.left)
    }
}

var hero = new Hero('https://www.nhatbanaz.com/wp-content/uploads/ninja-pictures-21-2-477x620.png', 20, 30, 200);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }

    else {
        hero.moveLeft()
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();