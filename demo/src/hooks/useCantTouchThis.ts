import { useEffect, useRef } from "react";
import canttouchthis from "canttouchthis";
import { useAppStore } from "store";

export function useCantTouchThis() {
  const isEnabled = useAppStore((state) => state.cantTouchThisEnabled);
  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || !isEnabled) {
      return;
    }

    return canttouchthis(element);
  }, [isEnabled]);

  return ref;
}
