import FeatureToggle from "components/FeatureToggle";
import ViewOutlet from "components/ViewOutlet";
import ViewSelector from "components/ViewSelector";

function App() {
  return (
    <>
      <ViewOutlet />
      <div className="fixed bottom-8 left-0 w-[100vw] flex justify-center">
        <div className="bg-gray-900 rounded-full py-2 px-6 flex items-center gap-4 shadow-md border border-gray-700">
          <ViewSelector />
          <div className="h-6 border-l border-gray-600"></div>
          <FeatureToggle />
        </div>
      </div>
    </>
  );
}

export default App;
