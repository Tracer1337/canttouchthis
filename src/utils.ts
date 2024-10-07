import Vector from "victor";

export function createReactiveVector(
  vector: Vector,
  onChange: () => void
): Vector {
  return new Proxy(vector, {
    set(target, property, value) {
      if (property === "x" || property === "y") {
        onChange();
      }
      // @ts-ignore
      target[property] = value;
      return true;
    },
  });
}

export function createRenderLoop(callback: (deltaTime: number) => void) {
  let shouldRender = true;
  let lastTime = performance.now();

  const render = () => {
    if (!shouldRender) {
      return;
    }
    const currentTime = performance.now();
    requestAnimationFrame(render);
    callback(currentTime - lastTime);
    lastTime = currentTime;
  };

  render();

  return () => {
    shouldRender = false;
  };
}
