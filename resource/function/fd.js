
var ball = "";
var number = 0;
var maxNumber = 0;
var monster_max_ball = 100;
var stop_ball = 0;
var go_ball_stop = 1;
var speed = 30;
var die_pattern1 = 0;
var die_pattern2 = 0;
var die_pattern3 = 0;
var atP1 = setTimeout(function () { }, 1000);
var atP2 = setTimeout(function () { }, 1000);
var atP3 = setTimeout(function () { }, 1000);
var muh = 0;

function attack_pattern1() {

    die_pattern1 = 1;
    document.getElementById("die_patt1").style.left = 650 * Math.random() + 'px';
    document.getElementById("die_patt1").style.top = 600 * Math.random() + 'px';
    document.getElementById("die_patt1").style.display = "block";

    atP1 = setTimeout(function () {


        if (die_pattern1 == 1) {

            exit();

        } else {

        }

        document.getElementById("die_patt1").style.display = "none";
    }, 40000);


}


document.getElementById("die_patt1").onclick = function () {
    die_pattern1 = 0;
    document.getElementById("die_patt1").style.display = "none";
    cl = 1;
    for (var i = 0; i < 15; i++) {
        attack();
    }
    cl = 0;
}

document.getElementById("die_patt2").onmouseenter = function () {
    die_pattern2 = 1;

}
document.getElementById("die_patt2").onmousemove = function () {
    die_pattern2 = 1;

}
document.getElementById("die_patt2").onmouseleave = function () {
    die_pattern2 = 0;

}


function attack_pattern2() {

    die_pattern2 = 1;
    document.getElementById("die_patt2").style.left = (parseFloat(document.getElementById("character").style.left) - 50) + 'px';
    document.getElementById("die_patt2").style.top = (parseFloat(document.getElementById("character").style.top) - 50) + 'px';
    document.getElementById("die_patt2").style.display = "block";



    atP2 = setTimeout(function () {

        if (die_pattern2 == 0) {
            clearTimeout(atP2);
        }
        if (die_pattern2 == 1) {
            alert("»ç¸Á");
            exit();

        } else {

        }

        document.getElementById("die_patt2").style.display = "none";
    }, 1000);

}

function attack_pattern3() {
    var position = 350 * Math.random();
    document.getElementById("die_patt3").style.left = position + 'px';
    document.getElementById("die_patt3").style.top = 0 + 'px';
    document.getElementById("die_patt3").style.display = "block";
    die_pattern3 = 1;

    atP_test3 = setInterval(function () {
        //console.log((parseFloat(document.getElementById("character").style.left) - position));
    }, 300);
    atP3 = setTimeout(function () {

        if (die_pattern3 == 0) {
            clearTimeout(atP3);
        }
        if (die_pattern3 == 1 && (parseFloat(document.getElementById("character").style.left) - position) > 456 || (parseFloat(document.getElementById("character").style.left) - position) < 0) {

            exit();

        } else {

        }
        die_pattern3 = 0;
        document.getElementById("die_patt3").style.display = "none";
        clearInterval(atP_test3);
    }, 7800);
}




function func_ball() {
    if (go_ball_stop == 0) {
        //var god = setInterval(function(){
        delete_ball();
        go_ball();
    }
    else if (go_ball_stop == 1) {
        //clearInterval(god);
    }

    //},speed);
}

function add_ball() {


    if (maxNumber != monster_max_ball) {
        var tempMath = Math.random();
        if (iru == 1) {
            ball = "<img id=ball" + number + " src='./r/ball_3.gif' style='position:absolute; top:0px; left:" + 625 * tempMath + "px;'>"
        } else if (gud == 1) {
            ball = "<img id=ball" + number + " src='./r/ball_4.gif' style='position:absolute; top:0px; left:" + 625 * tempMath + "px;'>"
        } else if (muh == 1) {
            ball = "<img id=ball" + number + " src='./r/ball_6.gif' style='position:absolute; top:0px; left:" + 625 * tempMath + "px;'>"
        } else if (monster.id == 5) {
            ball = "<img id=ball" + number + " src='./r/ball_5.gif' style='position:absolute; top:0px; left:" + 625 * tempMath + "px;'>"
        } else {
            ball = "<img id=ball" + number + " src='./r/ball.gif' style='position:absolute; top:0px; left:" + 625 * tempMath + "px;'>"
        }
        document.getElementById("ball_table").innerHTML += ball;
        maxNumber++;
        number++;
    }

    /*
    delete_ball(tempMath);
    go_ball();
    go_ball_si=1;
    
    if(maxNumber>monster_max_ball){
        clearInterval(good);
        setInterval(function(){
            go_ball(); 
            delete_ball(tempMath);
        },speed);
    }
    */





}

function delete_ball(tempMath) {

    for (var i = 0; i < maxNumber; i++) {
        if (parseFloat(document.getElementById("ball" + Number(i)).style.top) > 800) {


            /*
            var removeball = document.getElementById("ball"+i);
            ball_table.removeChild(removeball);
            number=i;
            */

            ballV = 0;
            ballVx = Math.random() * 625;
            document.getElementById("ball" + Number(i)).style.top = ballV + 'px';
            document.getElementById("ball" + Number(i)).style.left = ballVx + 'px';
        }
    }
}

function delete_every_ball() {

    for (var i = 0; i < maxNumber; i++) {
        var removeball = document.getElementById("ball" + Number(i));
        ball_table.removeChild(removeball);

    }

    maxNumber = 0;
    number = 0;
    stop_ball = 1;
    go_ball_si = 0;
}


function go_ball() {

    for (var i = 0; i < maxNumber; i++) {
        var ballY = parseFloat(document.getElementById("ball" + Number(i)).style.top);
        ballY += 7;
        document.getElementById("ball" + Number(i)).style.top = ballY + 'px';
    }


}



function character_pos(e) {
    
    mouse_point_x = parseFloat(e.clientX);
    mouse_point_y = parseFloat(e.clientY);

    
    document.getElementById("character").style.left = event.clientX;
    document.getElementById("character").style.top = event.clientY;
    document.getElementById("mouse_cursor_t").style.left = (10 + parseFloat(event.clientX)) + 'px';
    document.getElementById("mouse_cursor_t").style.top = (10 + parseFloat(event.clientY)) + 'px';
    document.getElementById("damage").style.left = (parseFloat(event.clientX)) + 30 + 'px';
    document.getElementById("damage").style.top = (parseFloat(event.clientY)) + 30 + 'px';
    if (parseFloat(event.clientX) > 625 || parseFloat(event.clientY) > 800) {
        mp = 0;
    } else {
        mp = 1;
    }
    
}

function up_dieOr() {
    if (document.getElementById("dungeon").style.display == 'block') {
        for (var i = 0; i < maxNumber; i++) {
            var temp_ball_x = parseFloat(document.getElementById("ball" + i).style.left);
            var temp_ball_y = parseFloat(document.getElementById("ball" + i).style.top);
            if (mouse_point_x - temp_ball_x > 0 && mouse_point_x - temp_ball_x < 7.01 && mouse_point_y - temp_ball_y > 0 && mouse_point_y - temp_ball_y < 11.01) {

                exit();
                document.getElementById("lose").style.display = "block";
                setTimeout(function () {
                    document.getElementById("lose").style.display = "none";
                }, 1000);
                alert("Á×À½!");
                /*console.log("mX:" +mouse_point_x);
                console.log("mY:" +mouse_point_y);
                console.log("bX:" +temp_ball_x);
                console.log("bY:" +temp_ball_y);
            */
            }


        }


    }
}

/*
function dieOr(){
    if(document.getElementById("dungeon").style.display=='block'){
    for(var i=0; i<maxNumber; i++){
        if(parseFloat(event.clientX)>625||parseFloat(event.clientY)>800){
            mp=0;
        } else {
            mp=1;
        }
        var distanceX = Math.abs(parseFloat(document.getElementById("ball"+Number(i)).style.left) - parseFloat(document.getElementById("character").style.left));
        var distanceY = Math.abs(parseFloat(document.getElementById("ball"+Number(i)).style.top) - parseFloat(document.getElementById("character").style.top));
        var distance = Math.sqrt(Math.pow(distanceX,2)+Math.pow(distanceY,2));
        if(distance < 10){
            document.getElementById("character").style.display='none';
            exit();
        }
        
       } 
        
    }

    mouse_cur();

}
  */

function die_function() {
    if (muh == 1) {
        for (var i = 0; i < maxNumber; i++) {
            document.getElementById("ball" + i).onmouseenter = function () {
                exit();
                document.getElementById("lose").style.display = "block";
                setTimeout(function () {
                    document.getElementById("lose").style.display = "none";
                }, 1000);
            }
            document.getElementById("ball" + i).onmouseleave = function () {
                exit();
                document.getElementById("lose").style.display = "block";
                setTimeout(function () {
                    document.getElementById("lose").style.display = "none";
                }, 1000);
            }
            document.getElementById("ball" + i).onmouseover = function () {
                exit();
                document.getElementById("lose").style.display = "block";
                setTimeout(function () {
                    document.getElementById("lose").style.display = "none";
                }, 1000);
            }
            document.getElementById("ball" + i).onmouseout = function () {
                exit();
                document.getElementById("lose").style.display = "block";
                setTimeout(function () {
                    document.getElementById("lose").style.display = "none";
                }, 1000);
            }
            document.getElementById("ball" + i).onmousemove = function () {
                exit();
                document.getElementById("lose").style.display = "block";
                setTimeout(function () {
                    document.getElementById("lose").style.display = "none";
                }, 1000);
            }

        }
    }
}
