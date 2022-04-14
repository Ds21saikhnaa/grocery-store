import { SeeToList } from "../components";
import '../App.css'
export const Render = ({
  data,
  name,
  id,
  setPrice,
  setImage,
  setDes,
  setCat,
  catData
}) => {
  return (
      <div className="row">
        <SeeToList
          data={data}
          name={name}
          id={id}
          cat={setCat}
          des={setDes}
          price={setPrice}
          catData={catData}
          image={setImage}
        />
      </div>
  );
};
