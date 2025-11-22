const chessboard=document.querySelector(".chessboard");
const firstRow=`<div class="square"></div>`.repeat(8);
const secondRow=`<div class="square-rev"></div>`.repeat(8);
const completeRows=`${firstRow} ${secondRow}`.repeat(4);

chessboard.innerHTML=completeRows;

