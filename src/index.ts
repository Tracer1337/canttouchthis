import Vector from "victor";
import Mouse from "./mouse";
import ManagedElement from "./managedElement";
import { createRenderLoop } from "./utils";

function apply(element: HTMLElement): () => void {
  const managedElement = new ManagedElement(element);
  const mouse = new Mouse();

  const drag = 0.95;

  const destroyRenderLoop = createRenderLoop((dt) => {
    const force = new Vector(0, 0);
    force.add(getRepellingForce(managedElement, mouse));
    force.add(getAttractingForce(managedElement));
    force.multiplyScalar(drag);
    force.multiplyScalar(dt);
    managedElement.position.add(force);
  });

  return () => {
    managedElement.destroy();
    mouse.destroy();
    destroyRenderLoop();
  };
}

function getRepellingForce(
  managedElement: ManagedElement,
  mouse: Vector
): Vector {
  const position = managedElement.position.clone();
  mouse = mouse.clone();
  const r = mouse.subtract(position);
  const k = 10 ** 7;
  const mag = r.magnitude();
  const e = 1e-4;
  const mf = 10;
  const force = r.multiplyScalar(-(k / (mag ** 4 + e)));
  if (force.magnitude() > mf) {
    force.normalize().multiplyScalar(mf);
  }
  return force;
}

function getAttractingForce(managedElement: ManagedElement) {
  const origin = managedElement.origin.clone();
  const position = managedElement.position.clone();
  const k = 1e-4;
  const rac = origin.subtract(position);
  const force = rac.multiplyScalar(k * rac.magnitude());
  return force;
}

export default apply;
