import "../App.css";
import { DataGrid } from "@mui/x-data-grid";
export const SeeToList = ({
  data,
  name,
  id,
  cat,
  price,
  des,
  catData,
  image,
}) => {
  const onClick = (title) => {
    id(title[0]);
    name(title[1]);
    // cat(title[2]);
    price(title[2]);
    // des(title[4]);
    image(title[3]);
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
  data.map((el, key) =>
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
        {/* {data.map((el, key) => (
                <div className="goods" key={key} >
                    <p >id:{el.id}</p>
                    <p>price:{el.price}</p>
                    <p>name:{el.name}</p>
                    <p>dis:{el.description}</p>
                    <p>cat:{el.category}</p>
                    <div>
                        <img src={el.image} height="100px" width="100px"></img>
                    </div>
                    <button onClick={()=>{onClick([el.name, el.id, el.category,el.price,el.description,el.image])}}>editor</button>
                </div>
            ))} */}
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
