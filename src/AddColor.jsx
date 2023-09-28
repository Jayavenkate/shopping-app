import { ColorBox } from "./ColorBox";

export function AddColor() {
  return (
    <div className="AddColor-container">
      <div className="header">
        <h1>Color Game</h1>
        <p className="para">Type valid color name and click on add color</p>
        <ColorBox />
      </div>
    </div>
  );
}
