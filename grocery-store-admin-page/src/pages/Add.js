import "../App.css";
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
  get
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
  const del = () => {
    deleteData()
  }
  const seeData = () => {
    get()
  }

  return (
    <div className="navBar">
      <div>ID input is here</div>
      <input onChange={eveId} placeholder="ID"></input>
      <div>data add</div>
      <input onChange={eveCat} placeholder="category"></input>
      <input onChange={eveName} placeholder="name"></input>
      <input onChange={evePrice} placeholder="price"></input>
      <input onChange={eveDes} placeholder="description"></input>
      <input onChange={eveImage} placeholder="image"></input>
      <button onClick={seeData}>see data</button>
      <button onClick={onclick}>Add data</button>
      <button onClick={del}>delete data</button>
    </div>
  );
};
