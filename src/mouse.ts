import Vector from "victor";

class Mouse extends Vector {
  constructor() {
    super(0, 0);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    document.addEventListener("mousemove", this.handleMouseMove);
  }

  private handleMouseMove(event: MouseEvent) {
    this.x = event.clientX + window.scrollX;
    this.y = event.clientY + window.scrollY;
  }

  public destroy() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }
}

export default Mouse;
