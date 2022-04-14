import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Admin, Register } from "./pages";
import { useEffect, useState } from "react";
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
  const [stat, setStat] = useState("");
  const [stat1, setStat1] = useState("");
  const [category, setCategory] = useState("");
  const [catData, setcatData] = useState([])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //register
  const register = async() => {
    const b = await axios.post(`http://localhost:8080/register`, {
      username: username,
      password: password,
    })
    console.log(b);
    setStat1(b.status);
  }
  //login
  const login = async () => {
    const a = await axios.post(`http://localhost:8080/login`, {
      username: username,
      password: password,
    });
    await window.localStorage.setItem("token", a.data.token);
    setStat(a.status);
    const token = window.localStorage.getItem("token");
    setTok(token)
  };
  //get to category
  const getCat = async () => {
    const da = await axios.get(`http://localhost:8080/category`)
    setcatData(da.data)
  }
  //add to category 
  const addCat = async () => {
    await axios.post(`http://localhost:8080/category`, {
      name:category,
    })
  }
  //add to data
  const fn = async () => {
    await axios.post(`http://localhost:8080/products`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  };
  //get to data
  const get = async () => {
    const data = await axios.get(`http://localhost:8080/products`);
    setData(data.data);
  };
  //delete to data
  const deleteData = async () => {
    await axios.delete(`http://localhost:8080/products/${id}`);
  };
  //edit to data
  const edit = async () => {
    await axios.patch(`http://localhost:8080/products/${id}`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  };
  //update to data
  const upData = async () => {
    await axios.put(`http://localhost:8080/products/${id}`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  }; 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login fn={login} setUsername={setUsername} setPassword={setPassword} stat={stat}/>}></Route>
          <Route path="/register" element={<Register fn={register} setUsername={setUsername} setPassword={setPassword} stat={stat1}/>}></Route>
          <Route path="/admin" element={<Admin
            id={id}
            addCat={addCat}
            fn={fn}
            setCat={setCat}
            catData={catData}
            setCategory={setCategory}
            setName={setName}
            setId={setId}
            tok={tok}
            setPrice={setPrice}
            setImage={setImage}
            setDes={setDes}
            getCat={getCat}
            deleteData={deleteData}
            flag={flag}
            setFlag={setFlag}
            get={get}
            edit={edit}
            data={data}
            upData={upData}
          />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
