import { SeeToList } from "../components";
export const Render = ({data, name, id,setPrice,setImage,setDes,setCat }) => {
    return(
        <div><SeeToList data={data} name={name} id={id} cat={setCat} des={setDes} price={setPrice} image={setImage}/></div>
    )
} 
