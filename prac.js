canvas=document.getElementById('tetris');
ctx=canvas.getContext('2d');
W=canvas.width;
H=canvas.height;
// ctx.scale(20,20);

for (let i = 0; i <=W ; i+=20) {

    for (let j = 0; j <=H ; j+=20) {
        ctx.strokeStyle='white';
        ctx.moveTo(i, 0);
        ctx.lineTo(i, H);
        ctx.stroke();
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
x=0;

function drawMatrix(matrix,offset) {
    var y=0;

    for (let i = 0; i <matrix.length ; i++) {
        x=0;
        for (let j = 0; j <matrix[i].length ; j++) {
            if(matrix[i][j]!==0){
                ctx.fillStyle='red';

                ctx.fillRect(x+offset.x,y+offset.y,20,20);
                // ctx.strokeStyle='black';
                // ctx.fillRect(x+offset.x,y+offset.y,1,1);


                // ctx.lineWidth=3;

            }
            x+=20;


        }
        y+=20;

    }

}

drawMatrix(matrix,{x:30,y:30});