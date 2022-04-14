import "./App.css";
import { Add, Render } from "./pages";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [tok, setTok] = useState("");
  const navigate = useNavigate();
  const fn = async () => {
    await axios.post(`http://localhost:8080/products`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  };
  const get = async () => {
    const data = await axios.get(`http://localhost:8080/products`);
    setData(data.data);
  };
  const deleteData = async () => {
    await axios.delete(`http://localhost:8080/products/${id}`);
  };
  const edit = async () => {
    await axios.patch(`http://localhost:8080/products/${id}`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  };
  const upData = async () => {
    await axios.put(`http://localhost:8080/products/${id}`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  };
  const token = window.localStorage.getItem("token");
  if (!token) navigate("/");
  useEffect(() => {
    const gettingToken = async () => {
      if (!token) navigate("/");
      else navigate("/admin");
    };
    gettingToken();
  }, [token]);

  return (
    <div className="container">
      <Add
        id={id}
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
        edit={edit}
        upData={upData}
      />
      <div className="App">
        <h3>datas</h3>
        <Render
          data={data}
          name={setName}
          id={setId}
          setPrice={setPrice}
          setImage={setImage}
          setDes={setDes}
          setCat={setCat}
        />
      </div>
    </div>
  );
}

export default App;
