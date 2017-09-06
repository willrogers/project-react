
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var quarterMark = (canvas.width*0.25);
var halfMark = (canvas.width*0.5);
var threeQaurterMark = (canvas.width*0.75);

var pipSize = (canvas.width/200);

for(var i=0 ; i<canvas.width ; i+=pipSize){

    if(i==quarterMark){
        drawMarker(i);
        annotateMarker(i);

    } else if (i==halfMark){
        drawMarker(i);
        annotateMarker(i);

    } else if (i==threeQaurterMark){ 
        drawMarker(i);
        annotateMarker(i);

    } else {
        drawPip(i);
    }
}


function annotateMarker(i){
    ctx.fillText(""+(i*0.2)+"", i, 140);
};

function drawPip(pipLocation){
    ctx.beginPath();
    ctx.lineWidth="0.5";
    ctx.strokeStyle="#000000";
    ctx.moveTo(i, 100);
    ctx.lineTo(i, 130);
    ctx.stroke();
}

function drawMarker(markerLocation){
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.strokeStyle="#000000";
    ctx.moveTo(i, 50);
    ctx.lineTo(i, 130);
    ctx.stroke();
}


function updateNeedle(epicsVal){
    ctx.beginPath();
    ctx.lineWidth="3";
    ctx.strokeStyle="#ff0000";
    ctx.moveTo((epicsVal*5), 130);
    ctx.lineTo((epicsVal*5), 10);
    ctx.stroke();
}

updateNeedle(99);

