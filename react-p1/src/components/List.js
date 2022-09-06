import Item from "./Item"

function List() {
    return (
        <>
            <h1>Testing Fragments  -  LIST</h1>
            <ul>
                <Item brand="Nike" release ={1988}/>
                <Item brand="Adidas" release ={1982}/>
                <Item/>
            </ul>
        </>
    )
}

export default List