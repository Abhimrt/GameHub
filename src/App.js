import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')

    const box = 20
    const cwidth = 30 * box
    const cheight = 30 * box

    canvas.width = cwidth
    canvas.height = cheight

    
    // Event Listeners
    
    window.addEventListener("keypress", (e) => {
      let value  = box
      if (e.key === "a" || e.key === "A") {
        if (velocity.x != value) {
          velocity.x = -value;
          velocity.y = 0;
        }
      } else if (e.key === "d" || e.key === "D") {
        if (velocity.x != -value) {
          velocity.x = value;
          velocity.y = 0;
        }
      } else if (e.key === "W" || e.key === "w") {
        if (velocity.y != value) {
          velocity.x = 0;
          velocity.y = -value;
        }
      } else if (e.key === "S" || e.key === "s") {
        if (velocity.y != -value) {
          velocity.x = 0;
          velocity.y = value;
        }
      }
      init()
    })

    // Objects
    class Object {
      constructor(x, y,dx,dy,color) {
        this.x = x * box
        this.y = y * box
        this.color = color
        this.dx = dx
        this.dy = dy
      }

      draw() {
        //background
        c.beginPath()
        c.rect(0, 0, cwidth, cheight)
        c.fillStyle = "black"
        c.fill()
        c.closePath()
        // snake
        c.beginPath()
        c.rect(this.x, this.y, box, box)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
      }

      update() {
        if("lime"===this.color){
          // moving the snake
          this.y+=this.dy;
          this.x+=this.dx;
          objpos.x=this.x/box;
          objpos.y=this.y/box;
          //snake eating food 
          if(
            (objpos.x === fooddata.x) &&
            (objpos.y === fooddata.y) 
            ){
            updatefood()
          }
          // game over conditions
          if(  objpos.x<0 
            || objpos.x == cwidth/box 
            || objpos.y<0 
            || objpos.y == cheight/box
            ){
            this.gameover();
          }
          for (let i = 1; i<snakelength.length-1; i++) {
            if(snakelength[i][0]===objpos.x*box && snakelength[i][1]===objpos.y*box){
              this.gameover();
            }
          }
      }
        this.draw()
      }

      gameover(){
        c.clearRect(0, 0, canvas.width, canvas.height)
            this.x =10*box
            this.y = 10*box
            this.dx = 0
            this.dy = 0
            snakelength = [[]]
            velocity.x = 0
            velocity.y = 0
            alert("game over")
      }
    }// object over

    // -start- object data ============================
    let objpos ={
      x:10,
      y:10
    }
    let velocity ={
      x:0,
      y:0
    }
    
    // -over- object data ============================

    // -start- food data ============================
    let fooddata = {
      x: randomnum(0, cwidth/box-1),
      y: randomnum(0, cheight/box-1)
    }
    let snakelength=[[]]
    const updatefood = () => {
      snakelength.push([fooddata.x*box, fooddata.y*box])
      fooddata.x = randomnum(0, cwidth/box-1)
      fooddata.y = randomnum(0, cheight/box-1)
    }
    const food = ()=>{
      c.beginPath()
      c.rect(fooddata.x*box, fooddata.y*box, box, box)
      c.fillStyle = "red"
      c.fill()
      c.closePath()
      requestAnimationFrame(food)
      // game over
     
    }
    food();
    // -over- food data ============================


    // Implementation
    let object
    
    function init() {
      object = new Object(objpos.x,objpos.y,velocity.x,velocity.y, "lime")
     
    }

    // Animation Loop
    function animate() {
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 100);
      c.clearRect(0, 0, canvas.width, canvas.height)
      object.update();
      /// for snake length 
      for (let i = snakelength.length-1; i > 0; i--) {
        snakelength[i]=snakelength[i-1];
      }
      if(snakelength.length){
        snakelength[0]=[objpos.x*box,objpos.y*box]
      }
      snakelength.forEach(element => {
        c.beginPath()
        c.rect(element[0], element[1], box, box)
        c.fillStyle = "lime"
        c.fill()
        c.closePath()
      });

    }
    init()
    animate()
  }, [])


  // -start- extra function for help======================
  function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }
  // -over- extra function for help======================

  return <canvas />
}

export default App;
