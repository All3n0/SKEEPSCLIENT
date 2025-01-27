function Itemcard({item}) {
    return (
        <div className="itemcard">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.inspiration} Inspired</p>
            <p>{item.price} Ksh</p>
            <p>{item.size}</p>
            <button>Add to Cart</button>

        </div>
    );
}