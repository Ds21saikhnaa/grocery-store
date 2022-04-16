import '../App.css'
export const SeeToList = ({data, name, id, cat, price, des, catData, image}) => {
    const onClick = (title) => {
        name(title[0]);
        id(title[1])
        cat(title[2])
        price(title[3])
        des(title[4])
        image(title[5])
      };
    return(
        <>
        <div>
        <h3>datas</h3>
            {data.map((el, key) => (
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
            ))}
        </div>
        <div>
        <h3>category</h3>
            {catData.map((el,key) => (
                <div className='goods1' key={key}>
                    <p>id={el.id}</p>
                    <p>name:{el.name}</p>
                </div>
            ))
            }
        </div>

        </>
        
    )
} 
