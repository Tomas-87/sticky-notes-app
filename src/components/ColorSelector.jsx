import { useColor } from "../context/ColorContext";

const ColorSelector = () => {
  const { color, changeColor } = useColor();

  const handleChangeColor = (e) => {
    changeColor(e.target.value);
  };

  return (
    <div>
      <label>Selecciona un color:</label>
      <input value={color} type="color" onChange={handleChangeColor} />
    </div>
  );
};

export default ColorSelector;
