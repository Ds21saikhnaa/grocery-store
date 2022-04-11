import '../App.css'
export const SeeToList = ({data}) => {
    return(
        <>
        {data.map((el, key) => (
            <div className="goods" key={key}>
                <p>id:{el.id}</p>
                <p>price:{el.price}</p>
                <p>name:{el.name}</p>
                <p>dis:{el.description}</p>
                <p>cat:{el.category}</p>
            </div>
        ))}
        </>
        
    )
} 
