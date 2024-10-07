import BoxView from "components/views/BoxView";
import WebsiteView from "components/views/WebsiteView";
import { useAppStore, View } from "store";

export function ViewOutlet() {
  const view = useAppStore((state) => state.view);

  switch (view) {
    case View.BOXES:
      return <BoxView />;
    case View.WEBSITE:
      return <WebsiteView />;
  }
}
