import "../App.css";
import { Login } from "../pages";
import { Button } from "@mui/material";
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
  deleteData,
  get,
  edit,
  upData,
  id,
  addCat,
  getCat,
  setCategory,
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
  const eveAdd = (e) => {
    setCategory(e.target.value);
  };

  const eveImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async () => {
      await setImage(reader.result);
    };
  };
  // eveImage();
  const eveDes = (e) => {
    setDes(e.target.value);
  };
  const onclick = () => {
    fn();
    setFlag(!flag);
  };
  const del = () => {
    deleteData();
  };
  const seeData = () => {
    get();
  };
  const editData = () => {
    edit();
  };
  const upDatas = () => {
    upData();
  };
  const getc = () => {
    getCat();
  };
  const addc = () => {
    addCat();
  };

  return (
    <div className="navBar">
      <div>ID input is here</div>
      <input onChange={eveId} placeholder="ID" value={id}></input>
      <div>data add</div>
      <input onChange={eveCat} placeholder="category"></input>
      <input onChange={eveName} placeholder="name"></input>
      <input onChange={evePrice} placeholder="price"></input>
      <input onChange={eveDes} placeholder="description"></input>
      <input type="file" onChange={eveImage} placeholder="image"></input>
      <div>add to category</div>
      <input onChange={eveAdd} placeholder="add to category"></input>
      <button onClick={addc}>add category</button>
      <button onClick={seeData}>see data</button>
      <button onClick={getc}>see category</button>
      <button onClick={onclick}>Add data</button>
      <button onClick={editData}>edit data</button>
      <button onClick={upDatas}>update data</button>
      <button onClick={del}>delete data</button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};
