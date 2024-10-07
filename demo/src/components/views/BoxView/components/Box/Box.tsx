import { useCantTouchThis } from "hooks/useCantTouchThis";

export function Box() {
  const ref = useCantTouchThis();

  return <div className="w-16 h-16 bg-purple-300 rounded" ref={ref}></div>;
}
