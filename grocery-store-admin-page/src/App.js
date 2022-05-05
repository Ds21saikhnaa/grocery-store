import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Admin, Register } from "./pages";
import { useState } from "react";
import { UserContextPro } from "./ctx";
import { createContext } from "react";
import axios from "axios";
import { Add, Render } from "./components";
export const DataContext = createContext();
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
  const [catData, setcatData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //register
  const register = async () => {
    const b = await axios.post(`http://localhost:8080/register/`, {
      username: username,
      password: password,
    });
    console.log(b);
    setStat1(b.status);
  };
  //login
  const login = async () => {
    const a = await axios.post(`http://localhost:8080/login/`, {
      username: username,
      password: password,
    });
    await window.localStorage.setItem("token", a.data.token);
    setStat(a);
    const token = window.localStorage.getItem("token");
    setTok(token);
  };
  //get to category
  const getCat = async () => {
    const da = await axios.get(`http://localhost:8080/category/`);
    setcatData(da.data);
  };
  //add to category
  const addCat = async () => {
    await axios.post(`http://localhost:8080/category/`, {
      name: category,
    });
  };
  //add to data
  const fn = async () => {
    await axios.post(`http://localhost:8080/products/`, {
      name: name,
      category: cat,
      price: price,
      image: image,
      description: des,
    });
  };
  //get to data
  const get = async () => {
    const data = await axios.get(`http://localhost:8080/products/`);
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
      <UserContextPro>
        <DataContext.Provider value={{login,setUsername,setPassword,stat,register,stat1,id,fn,addCat,setCat,catData,
          setCategory,setName,setId,tok,setPrice,setImage,setDes,getCat,deleteData,flag,setFlag,get,edit, data,upData
          }}>
        <Routes>
          <Route
            path="/"
            element={
              <Login/>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Register/>
            }
          ></Route>
          <Route
            path="/admin"
            element={
              <Admin tok={tok}/>
            }
          />
          <Route path="/Products" element={
            <div className="container">
              <Add />
              <Render />
            </div>
          } />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
        </DataContext.Provider>
      </UserContextPro>
    </BrowserRouter>
  );
}
export default App;