import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAppStore } from "store";

export function FeatureToggle() {
  const isEnabled = useAppStore((state) => state.cantTouchThisEnabled);
  const setIsEnabled = useAppStore((state) => state.setCantTouchThisEnabled);

  return (
    <button
      onClick={() => setIsEnabled(!isEnabled)}
      aria-pressed={isEnabled}
      className={`flex items-center justify-center px-5 py-2 rounded-full transition-colors duration-200 ${
        isEnabled ? "bg-green-600" : "bg-gray-700"
      } hover:${isEnabled ? "bg-green-500" : "bg-gray-600"}`}
    >
      {isEnabled ? (
        <>
          <CheckIcon className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold">Enabled</span>
        </>
      ) : (
        <>
          <XMarkIcon className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-semibold">Disabled</span>
        </>
      )}
    </button>
  );
}
