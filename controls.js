class Controls {
  constructor() {
    this.forward = false
    this.left = false
    this.right = false
    this.reverse = false

    this.#addKeyboardListeners()
  }
  // private method # to control the car and know when to release
  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          this.left = true
          break

        case 'ArrowRight':
          this.right = true
          break

        case 'ArrowUp':
          this.forward = true
          break
        case 'ArrowDown':
          this.reverse = true
          break
      }
    }
  }
}
