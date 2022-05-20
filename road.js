// road class
class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x
    this.width = width
    this.laneCount = laneCount

    this.left = x - width / 2
    this.right = x + width / 2

    // infinitely long road
    const infinity = 1000000
    this.top = -infinity
    this.bottom = infinity

    // detect borders of road
    const topLeft = { x: this.left, y: this.top }
    const topRight = { x: this.left, y: this.top }
    const bottomLeft = { x: this.left, y: this.top }
    const bottomRight = { x: this.left, y: this.top }
    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ]
  }

  getLaneCenter(laneIndex) {
    const laneWidth = this.width / this.laneCount
    return (
      this.left +
      laneWidth / 2 +
      Math.min(laneIndex, this.laneCount - 1) * laneWidth
    )
  }

  //to draw the road
  draw(ctx) {
    ctx.lineWidth = 5
    ctx.strokeStyle = 'white'

    for (let index = 1; index <= this.laneCount - 1; index++) {
      //use linear interpolation to decide center of each lane
      const x = lerp(this.left, this.right, index / this.laneCount)

      //dash line in the middle
      ctx.setLineDash([20, 20]) // 20 px and 20 px break
      ctx.beginPath()
      ctx.moveTo(x, this.top)
      ctx.lineTo(x, this.bottom)
      ctx.stroke()
    }

    ctx.setLineDash([])
    this.borders.forEach((border) => {
      ctx.beginPath()
      ctx.moveTo(border[0].x, border[0].y)
      ctx.lineTo(border[1].x, border[1].y)
      ctx.stroke
    })
  }
}
