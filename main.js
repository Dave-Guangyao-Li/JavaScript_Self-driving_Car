const canvas = document.getElementById('myCanvas')
canvas.width = 200

const ctx = canvas.getContext('2d')
//road centered at half of width of canvas
const road = new Road(canvas.width / 2, canvas.width)
// put car on the lane
const car = new Car(road.getLaneCenter(1), 100, 30, 50)
car.draw(ctx)

animate()

function animate() {
  car.update()
  // resize the canvas, no trails will be left
  canvas.height = window.innerHeight

  ctx.save()
  ctx.translate(0, -car.y + canvas.height * 0.7)

  //draw road first, then car on top of it
  road.draw(ctx)
  car.draw(ctx)

  ctx.restore()

  requestAnimationFrame(animate)
}
