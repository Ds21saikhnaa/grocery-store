import '../App.css'
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Add, Render } from "../components";
export const Admin = ({
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
    data,
    tok,
    addCat,
    getCat,
    catData,
    setCategory
}) => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    useEffect(() => {
        const gettingToken = async () => {
            if (!token){ 
                navigate("/");
            }
        };
        console.log(tok);
        gettingToken();
    }, [tok])
    return (
        <div className="container">
            <Add 
                addCat={addCat}
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
                getCat={getCat}
                setCategory={setCategory}
                />
            <div className="App">
                <Render
                catData={catData}
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
    )
} 
