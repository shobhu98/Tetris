canvas=document.getElementById('tetris');
ctx=canvas.getContext('2d');
W=canvas.width;
H=canvas.height;
 ctx.scale(20,20);
const area=creatematrix(20,30);


function grid1() {
    for (let i = 0; i <= W; i += 20)
    {
        ctx.strokeStyle = 'white';
        ctx.lineWidth=1;
    ctx.moveTo(i, 0);
    ctx.lineTo(i, H);
    ctx.stroke();
}

        for (let j = 0; j <= H; j += 20) {
            //  ctx.strokeWidth=4;
            ctx.strokeStyle = 'white';
            ctx.lineWidth=1;
            ctx.moveTo(0, j);
            ctx.lineTo(W, j);
            ctx.stroke();

        }

}

    


const matrix=[
    [0,0,0],
    [1,1,1],
    [0,1,0],
];
var x=0;


function drawMatrix(matrix,offset) {
    var y=0;

    for (let i = 0; i <matrix.length ; i++) {
        x=0;
        for (let j = 0; j <matrix[i].length ; j++) {
            if(matrix[i][j]!==0){
                ctx.fillStyle='red';

                ctx.fillRect(x+offset.x,y+offset.y,1,1);
                // ctx.strokeStyle='black';
                // ctx.fillRect(x+offset.x,y+offset.y,1,1);


                // ctx.lineWidth=3;

            }
            x+=1;


        }
        y+=1;

    }

}
function draw() {

 ctx.clearRect(0,0,W,H);
     drawMatrix(area,{x:0,y:0});

    drawMatrix(player.matrix,player.pos);




}
const  player={
    matrix:matrix,
    pos:{x:5,y:5},
};

let current_time=0;
let change_time=1000;
let lasttime=0;
function update(time=0) {
  //  console.log(player.pos.x,player.pos.y);

  const  prev=time-lasttime;

   // console.log(time);
    lasttime=time;
    current_time+=prev;
    if(current_time>change_time){
       vertical_change();
    }

    draw();

    //console.table();
   // grid1();
    requestAnimationFrame(update);

}
creatematrix(20,30);

update(0);

document.addEventListener('keydown',Keydown);


function Keydown(e) {
    if(e.key==='ArrowRight'){
        if(player.pos.x+3>19){

        }
        else {
            player.pos.x+=1;
        }

    }
    if(e.key==='ArrowLeft'){
        if(player.pos.x<1){
        }
        else {
            player.pos.x-=1;
        }

    }
    if(e.key==='ArrowDown'){
        vertical_change()



    }


}
function vertical_change() {
        player.pos.y+=1;
        if(collision()){
            player.pos.y--;
            merge();
            player.pos.y=0;
        }
        current_time=0;
}
function creatematrix(w,h) {
    const matrix1=[];
    while (h--){
        matrix1.push(new Array(w).fill(0));
    }
    //console.table(matrix1);
    return matrix1;



}
function collision() {
    n=area;
    m=player.matrix;
    for (let i = 0; i <m.length ; i++) {
        for (let j = 0; j <m[i].length ; j++) {
            if(m[i][j]!==0&&(player.pos.y===28)){
                return true;
            }
            else if(m[i][j]!==0&&area[i+player.pos.y][j+player.pos.x]===1){
                return true;
            }


        }

    }
    return false;

}



function merge(){
 m=player;
 n=area;
 t=0;
 y=0;
    for (let i = 0; i <m.matrix.length ; i++) {
        t=0;
        for (let j = 0; j <m.matrix[i].length ; j++) {

            if(m.matrix[i][j]!==0){
                n[y+player.pos.y][t+player.pos.x]=1;
            }
            t+=1;

        }
        y+=1;

    }
   console.table(n);


}


