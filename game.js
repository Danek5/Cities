var citiesList = [
/*     { name:"Litvínov", X: 312, Y: 128},
    { name:"Krnov", X: 1019 , Y: 262},
    { name:"Nový Jičín", X: 1076 , Y: 390 },
    { name:"Litoměřice", X: 406 , Y: 146 },
    { name:"Havlíčkův Brod", X: 659 , Y: 384},
    { name:"Chrudim", X: 693 , Y: 295},
    { name:"Český Těšín", X: 1182 , Y: 349},
    { name:"Hodonín", X: 917 , Y: 582 },
    { name:"Břeclav", X: 881 , Y: 604},
    { name:"Uherské Hradiště", X: 984 , Y: 527},
    { name:"Šumperk", X: 892 , Y: 291 },
    { name:"Vsetín", X: 1076 , Y: 454 },
    { name:"Orlová", X: 1151 , Y: 325 },
    { name:"Kroměříž", X: 970 , Y: 469},
    { name:"Trutnov", X: 708 , Y: 134 },
    { name:"Písek", X: 407 , Y: 462},
    { name:"Cheb", X: 99 , Y: 262 },
    { name:"Příbram", X: 381 , Y: 365},
    { name:"Kolín", X: 592 , Y: 274 },
    { name:"Znojmo", X: 732 , Y: 584},
    { name:"Tábor", X: 500 , Y: 432 },
    { name:"Třinec",X: 1189 , Y: 374},
    { name:"Třebíč", X: 713 , Y: 492},
    { name:"Česká Lípa", X: 473 , Y: 103 },
    { name:"Přerov", X: 978 , Y: 432 },
    { name:"Prostějov", X: 917 , Y: 421 },
    { name:"Mladá Boleslav", X: 543 , Y: 173 },
    { name:"Jablonec nad Nisou", X: 584 , Y: 94 },
    { name:"Chomutov", X: 277 , Y: 166 },
    { name:"Děčín", X: 423 , Y: 80 },
    { name:"Karlovy Vary", X: 179 , Y: 227},
    { name:"Karviná", X: 1163 , Y: 319 },
    { name:"Teplice", X: 345, Y: 116},
    { name:"Jihlava", X: 659 , Y: 442 },
    { name:"Frýdek-Místek", X: 1139 , Y: 362 },
    { name:"Opava", X: 1055 , Y: 299},
    { name:"Most", X: 318 , Y: 151 },
    { name:"Kladno", X: 402 , Y: 246 },
    { name:"Havířov", X: 1150 , Y: 341 },
    { name:"Zlín", X: 1011 , Y: 489 },
    { name:"Ústí nad Labem", X: 395 , Y: 107 },
    { name:"Pardubice", X: 691 , Y: 275},
    { name:"Hradec Králové", X: 704 , Y: 229 },
    { name:"České Budějovice", X: 463 , Y: 545 },
    { name:"Olomouc", X: 941 , Y: 392 },
    { name:"Liberec", X: 568 , Y: 79 },
    { name:"Plzeň", X: 270 , Y: 344 },
    { name:"Ostrava", X: 1122 , Y: 325 },
    { name:"Brno", X: 836, Y: 499 },
    { name:"Praha", X: 457, Y: 262  },

 */
    {name: 'Hradec Králové', X: 704, Y: 229},
    {name: 'Třinec', X: 1189, Y: 374},
    {name: 'Jihlava', X: 659, Y: 442}, 
    {name: 'Písek', X: 407, Y: 462}, 
    {name: 'Nový Jičín', X: 1076, Y: 390},
    {name: 'Plzeň', X: 270, Y: 344}, 
    {name: 'Tábor', X: 500, Y: 432}, 
    {name: 'Havlíčkův Brod', X: 659, Y: 384}, 
    {name: 'Krnov', X: 1019, Y: 262}, 
    {name: 'Praha', X: 457, Y: 262}, 
    {name: 'Děčín', X: 423, Y: 80}, 
    {name: 'Znojmo', X: 732, Y: 584}, 
    {name: 'Liberec', X: 568, Y: 79}, 
    {name: 'Karviná', X: 1163, Y: 319}, 
    {name: 'Litvínov', X: 312, Y: 128}, 
    {name: 'Brno', X: 836, Y: 499}, 
    {name: 'Kroměříž', X: 970, Y: 469}, 
    {name: 'Kladno', X: 402, Y: 246}, 
    {name: 'Šumperk', X: 892, Y: 291}, 
    {name: 'Hodonín', X: 917, Y: 582}, 
    {name: 'Jablonec nad Nisou', X: 584, Y: 94}, 
    {name: 'Olomouc', X: 941, Y: 392}, 
    {name: 'Chrudim', X: 693, Y: 295}, 
    {name: 'Přerov', X: 978, Y: 432}, 
    {name: 'Chomutov', X: 277, Y: 166}, 
    {name: 'Teplice', X: 345, Y: 116}, 
    {name: 'Příbram', X: 381, Y: 365}, 
    {name: 'České Budějovice', X: 463, Y: 545}, 
    {name: 'Pardubice', X: 691, Y: 275}, 
    {name: 'Břeclav', X: 881, Y: 604}, 
    {name: 'Zlín', X: 1011, Y: 489}, 
    {name: 'Český Těšín', X: 1182, Y: 349},
    {name: 'Ostrava', X: 1122, Y: 325},
    {name: 'Orlová', X: 1151, Y: 325}, 
    {name: 'Ústí nad Labem', X: 395, Y: 107}, 
    {name: 'Cheb', X: 99, Y: 262}, 
    {name: 'Frýdek-Místek', X: 1139, Y: 362}, 
    {name: 'Vsetín', X: 1076, Y: 454}, 
    {name: 'Havířov', X: 1150, Y: 341}, 
    {name: 'Třebíč', X: 713, Y: 492}, 
    {name: 'Karlovy Vary', X: 179, Y: 227},
    {name: 'Kolín', X: 592, Y: 274},
    {name: 'Mladá Boleslav', X: 543, Y: 173}, 
    {name: 'Uherské Hradiště', X: 984, Y: 527}, 
    {name: 'Trutnov', X: 708, Y: 134}, 
    {name: 'Česká Lípa', X: 473, Y: 103}, 
    {name: 'Prostějov', X: 917, Y: 421}, 
    {name: 'Most', X: 318, Y: 151}, 
    {name: 'Opava', X: 1055, Y: 299}, 
    {name: 'Litoměřice', X: 406, Y: 146},
]

var index = 0;
var blink = false;
var show = false;
var city = "";
var allCities = false;


document.onkeydown = function (e) {

    switch (e.code) {

        case 'ArrowLeft':
            deleteLocation();
            index--;
            renderText();
            break;

        case 'ArrowRight':
            deleteLocation();
            index++;
            renderText();
            break;

        case 'NumpadEnter':
        case 'KeyP':    
            showLocation();
            break;

        case 'Space':
            textBlinking();        
            break;    

        case 'KeyJ' :
            showName();
            break;

        case 'KeyM':
            showCities();
            break;        
    }
};

function renderText(){
    index = (index + 50) % 50;
    city = citiesList[index];

    if(document.getElementById("div")){
        const myNode = document.getElementById("div");
        myNode.innerHTML = '';        
    }

    for(var i = 0; i < city.name.length; i++){
        
        if(city.name[i] != " "){
            var elem = document.createElement("p");
            elem.className = "p";
            elem.style.color = "blanchedalmond";
            var node = document.createTextNode(city.name[i]);
            elem.appendChild(node);
            var element = document.getElementById("div");
            element.appendChild(elem);            
        }else{
            var elem = document.createElement("p");
            elem.className = "p";
            elem.style.visibility = "hidden";
            var node = document.createTextNode(city.name[i]);
            elem.appendChild(node);
            var element = document.getElementById("div");
            element.appendChild(elem);  
        }
    }
}

function showName(){

    show ? show = false : show = true;
    var elem = document.getElementsByClassName("p");

    if(show){
        for(var i = 0; i < elem.length; i++){
            el = elem[i];
            el.style.color = "black";
        }
    }else{
        for(var i = 0; i < elem.length; i++){
            el = elem[i];
            el.style.color = "blanchedalmond";
        }
    }
}




function textBlinking() {
    
    var elem = document.getElementsByClassName("p");

    if (blink) {
        clearInterval(blinkInterval);
        for(var i = 0; i < elem.length; i++)    elem[i].style.color = "blanchedalmond";
    } else {

        blinkInterval = setInterval(function () {
            for(var i = 0; i < elem.length; i++)    elem[i].style.color = "blanchedalmond";

            randIndex = Math.round( Math.random() * (elem.length - 1) + 0 );
            el = elem[randIndex];
            el.style.color = "black";

        }, 150);
    }

    blink = !blink;
}

function showCities(){
    var element = document.getElementsByClassName("map");

    if(allCities){
        for(var i = 0; i < elem.length; i++)    ;
    }else{

        for(var i = 0; i < citiesList.length; i++){
            
            var elem = document.createElement("i");
            elem.className = "fa fa-circle";
            elem.style.position = "absolute";
            elem.style.fontSize = "10px"
            elem.style.left = (citiesList[i].X - 6).toString() + "px";
            elem.style.top = (citiesList[i].Y - 10).toString() + "px";
            elem.style.visibility = "visible" ;
            console.log(elem.top, elem.left, elem.className);
            element.appendChild(elem);
        }
    }

    allCities = !allCities;
}

function changeSize(){
    var circle = document.getElementById("circle");
    var dia = document.getElementById("diameter");

    if(circle && dia){
        var diameter = dia.valu
    }
    return diameter;
}

function showLocation(){
    var element = document.getElementById("map");  

    var circle = document.createElement("i");
    circle.className = "fa fa-circle";
    circle.style.position = "absolute";
    circle.style.opacity = 0.6;
    circle.style.fontSize = "60px";

    circle.style.left = (city.X - 8 - 15).toString() + "px";
    circle.style.top = (city.Y - 10 - 20).toString() + "px";
    circle.style.visibility = "visible";
    element.appendChild(circle);

}

function deleteLocation(){

    var el = document.getElementsByClassName("fa fa-circle");
    var elArray = Array.from(el);
    elArray.forEach(function(elem){
        elem.remove();
    });
}



function point_it(event){
	pos_x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("map").offsetLeft;
	pos_y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("map").offsetTop;
	document.getElementById("point").style.left = (pos_x - 8).toString() + "px";
	document.getElementById("point").style.top = (pos_y - 10).toString() + "px";
	document.getElementById("point").style.visibility = "visible" ;
	console.log("X:",pos_x,", Y:",pos_y );

    inArea(pos_x, pos_y);    
}

function inArea(pos_x, pos_y){

    var map = document.getElementById("map");
    var loc = map.getBoundingClientRect();
    var x = loc.x;
    var y = loc.y;
    
    var element = document.elementFromPoint(pos_x, pos_y);
    
    if(!map.isSameNode(element)){
        console.log("no contact");
        if(document.getElementById("circle")){
            console.log("found"); 
        }
    } 
}



function openGame() {
    window.location.href = "game.html";
}

function save(){
    var checkbox = document.getElementById('checkbox');
    sessionStorage.setItem('checkbox', checkbox.checked);
}

function load(){    
    var checked = JSON.parse(localStorage.getItem('checkbox'));
    document.getElementById("checkbox").checked = checked;
}


function changeImg(){
    var borders = document.querySelector('.checkbox').checked;

    if(borders){
        document.getElementById("img").src="mapa.png";
    }else{
        document.getElementById("img").src="mapa_s_kraji.png";
    }

}

