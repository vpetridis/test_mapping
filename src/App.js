import React from "react";
import Item from "./Item";
import imageData from "./ImageData";
import ItemList from "./ItemList";

export default function App() {
    const slicedItems = imageData.map((image) => (
        <Item key={image.id} imageData={image} />
    )).slice(2,4)
    const style={h1:{color:"blue"}}
    return (
      <div>
            <ItemList styles={{color:"green"}}/>
            {slicedItems}

        </div>
    );
}
