export const ProductCard=({name,category,price,stock})=>{
    return(
        <div>
            <p>Name:{name}</p>
            <p>category:{category}</p>
            <p>price:{price}</p>
            <p>stock:{stock}</p>
            <hr />
        </div>
    )
}