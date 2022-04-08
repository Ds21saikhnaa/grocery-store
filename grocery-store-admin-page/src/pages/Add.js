import "../App.css";
import axios from "axios";
// import { AddToList } from "../components"
// <AddToList />
export const Add = ({
  setCat,
  setName,
  setId,
  setPrice,
  setImage,
  setDes,
  fn,
  flag,
  setFlag,
}) => {
  const eveCat = (e) => {
    setCat(e.target.value);
  };
  const eveName = (e) => {
    setName(e.target.value);
  };
  const eveId = (e) => {
    setId(e.target.value);
  };
  const evePrice = (e) => {
    setPrice(e.target.value);
  };

  const eveImage = (e) => {
    setImage(e.target.value);
  };
  const eveDes = (e) => {
    setDes(e.target.value);
  };
  const onclick = () => {
    fn();
    setFlag(!flag);
  };

  return (
    <div className="navBar">
      <input onChange={eveCat} placeholder="category"></input>
      <input onChange={eveName} placeholder="name"></input>
      <input onChange={evePrice} placeholder="price"></input>
      <input onChange={eveId} placeholder="ID"></input>
      <input onChange={eveDes} placeholder="description"></input>
      <input onChange={eveImage} placeholder="image"></input>
      <button onClick={onclick}>Add data</button>
    </div>
  );
};
