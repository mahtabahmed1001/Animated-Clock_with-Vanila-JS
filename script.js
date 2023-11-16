function clock(){
 const now=new Date();
 const canvas=document.getElementById('canvas');
 const ctx=canvas.getContext('2d');
 
 //setup of canvas
 ctx.save();
 ctx.clearRect(0, 0, 500, 500);
 ctx.translate(250, 250);
 ctx.rotate(-Math.PI / 2);

 // some default style
 ctx.strokeStyle='black';
 ctx.fillStyle='#f4f4f4';
 ctx.lineWidth=5;
 ctx.lineCap='round';

 //draw clock border
 ctx.save();
 ctx.beginPath();
 ctx.lineWidth=14;
 ctx.strokeStyle='#800000';
 ctx.arc(0,0,142,0, Math.PI *2, true);
 ctx.stroke();
 ctx.fill();
 ctx.restore();

 //draw Hour Mark
 ctx.save();
 for (let i=0; i<12; i++){
  ctx.beginPath();
  ctx.rotate(Math.PI/6);
  ctx.moveTo(100,0);
  ctx.lineTo(120,0);
  ctx.stroke();
 }
 ctx.restore();
  //draw minutes Mark
  ctx.save();
  for (let i=0; i<60; i++){
    if(i % 5 !==0){
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  
  }
 ctx.restore();

 //get Current TIme
    const hr= now.getHours() % 12;
    const minutes= now.getMinutes();
    const sec =now.getSeconds();

  //draw hour hand
  ctx.save();
  ctx.rotate((Math.PI/6)* hr + (Math.PI/360)* minutes + (Math.PI/21600) * sec);
  ctx.strokeStyle='#800000';
  ctx.lineWidth=12;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  //draw minitues hand
  ctx.save();
  ctx.rotate((Math.PI/30)* minutes + (Math.PI/1800) * sec);
  ctx.strokeStyle='#800000';
  ctx.lineWidth=10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.restore();

    //draw seconds hand
    ctx.save();
    ctx.rotate(sec * Math.PI/30);
    ctx.strokeStyle='#ff7f50';
    ctx.fillStyle='#ff7f50';
    ctx.lineWidth=6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0,0,10, 0, Math.PI*2, true);
    ctx.fill();
    ctx.restore();

 ctx.restore(); //restore the default state

 
requestAnimationFrame(clock);
}

requestAnimationFrame(clock);