import Box from "./components/Box";

function BoxView() {
  const boxes = [];

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 12; x++) {
      boxes.push(<Box key={JSON.stringify([x, y])} />);
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="grid grid-cols-12 gap-4 mx-auto max-w-[1000px]">
        {boxes}
      </div>
    </div>
  );
}

export default BoxView;
