import "../App.css";
import { DataContext } from "../App";
import { useContext } from "react";
// import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
export const SeeToList = () => {
  const { catData, setName, setPrice, data, setImage, setDes, id, } = useContext(DataContext)
  const onClick = (title) => {
    id(title[0]);
    setName(title[1]);
    // setCat(title[2]);
    setPrice(title[2]);
    // setDes(title[4]);
    setImage(title[3]);
    console.log(title[1]);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "Name",
      headerName: "name",
      width: 150,
      editable: true,
    },
    {
      field: "CatName",
      headerName: "Category name",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "price",
      width: 150,
      editable: true,
    },
    {
      field: "image",
      headerName: "image",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value}
          alt={params.value}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      ),
    },
    {
      field: "button",
      headerName: "button",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => {
            onClick(params.value);
          }}
        >
          edit
        </button>
      ),
    },
  ];
  let arr = [];
  data.map((el) =>
    arr.push({
      id: el.id,
      Name: el.name,
      CatName: el.category,
      image: el.image,
      price: `${el.price}$`,
      button: [el.id, el.name, el.category, el.image, el.price],
    })
  );
  const rows = arr;
  return (
    <>
      <div>
        <div className="goods">
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        {/*<button onClick={()=>{onClick([el.name, el.id, el.category,el.price,el.description,el.image])}}>editor</button>*/}
      </div>
      <div>
        <h3>category</h3>
        {catData.map((el, key) => (
          <div className="goods1" key={key}>
            <p>id={el.id}</p>
            <p>name:{el.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
