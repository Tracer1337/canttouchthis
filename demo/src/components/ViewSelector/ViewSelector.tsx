import { View } from "store";
import ViewSelectorViewButton from "./components/ViewSelectorViewButton";

export function ViewSelector() {
  return (
    <>
      <ViewSelectorViewButton view={View.BOXES}>Boxes</ViewSelectorViewButton>
      <ViewSelectorViewButton view={View.WEBSITE}>
        Website
      </ViewSelectorViewButton>
    </>
  );
}
