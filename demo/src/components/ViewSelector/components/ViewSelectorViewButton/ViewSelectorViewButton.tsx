import { PropsWithChildren } from "react";
import { useAppStore, View } from "store";

export function ViewSelectorViewButton({
  children,
  view,
}: PropsWithChildren<{ view: View }>) {
  const currentView = useAppStore((state) => state.view);
  const setView = useAppStore((state) => state.setView);

  return (
    <button
      onClick={() => setView(view)}
      className={`bg-gray-800 text-white rounded-full px-5 py-2 transition-colors duration-200 ${
        currentView === view ? "bg-gray-700 border border-gray-600" : ""
      } hover:bg-gray-700`}
    >
      {children}
    </button>
  );
}
