import Vector from "victor";
import { createReactiveVector } from "./utils";

class ManagedElement {
  public origin: Vector;
  public position: Vector;
  private clonedElement: HTMLElement;
  private rect: DOMRect;

  constructor(private domElement: HTMLElement) {
    this.rect = domElement.getBoundingClientRect();
    this.origin = new Vector(
      this.rect.x + this.rect.width / 2 + window.scrollX,
      this.rect.y + this.rect.height / 2 + window.scrollY
    );
    this.position = createReactiveVector(this.origin.clone(), () =>
      this.handleUpdatePosition()
    );
    this.clonedElement = this.domElement.cloneNode(true) as HTMLElement;
    this.domElement.parentElement?.appendChild(this.clonedElement);
    this.domElement.style.visibility = "hidden";
    this.clonedElement.style.position = "absolute";
    this.clonedElement.style.top = "0";
    this.clonedElement.style.left = "0";
  }

  private handleUpdatePosition() {
    const newX = this.position.x - this.rect.width / 2;
    const newY = this.position.y - this.rect.height / 2;
    this.clonedElement.style.transform = `translate(${newX}px, ${newY}px)`;
  }

  public destroy() {
    this.domElement.parentElement?.removeChild(this.clonedElement);
    this.domElement.style.removeProperty("visibility");
  }
}

export default ManagedElement;
