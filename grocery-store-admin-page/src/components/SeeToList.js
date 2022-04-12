import '../App.css'
export const SeeToList = ({data, name, id, cat, price, des, image}) => {
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
        {data.map((el, key) => (
            <div className="goods" key={key} onClick={()=>{onClick([el.name, el.id, el.category,el.price,el.description,el.image])}}>
                <p >id:{el.id}</p>
                <p>price:{el.price}</p>
                <p>name:{el.name}</p>
                <p>dis:{el.description}</p>
                <p>cat:{el.category}</p>
            </div>
        ))}
        </>
        
    )
} 
