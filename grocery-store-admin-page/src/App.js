import "./App.css";
import { Add, Render } from "./pages";
import { useState } from "react";
import axios from "axios";
function App() {
  const [cat, setCat] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [des, setDes] = useState("");
  const [id, setId] = useState(0);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);
  const fn = async () => {
    await axios.post(
      `http://localhost:8080/products`,(
        {
            name: name,
            category: cat,
            price: price,
            image: image,
            description: des,
        }
      )
    );
  };
  const get = async () => {
    const data = await axios.get(`http://localhost:8080/products`)
    setData(data.data)
  }
  const deleteData = async() =>{
    await axios.delete(`http://localhost:8080/products/${id}`)
  }
  return (
    <div className="container">
      <Add
        fn={fn}
        setCat={setCat}
        setName={setName}
        setId={setId}
        setPrice={setPrice}
        setImage={setImage}
        setDes={setDes}
        deleteData={deleteData}
        flag={flag}
        setFlag={setFlag}
        get={get}
      />
      <div className="App">
        <h3>datas</h3>
        <Render data={data}/>
      </div>
    </div>
  );
}

export default App;
