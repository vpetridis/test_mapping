import React from "react";
import Item from "./Item";
import imageData from "./ImageData";

export default function App() {
    const allItems = imageData.map((image) => 
     <Item key={image.id} imageData={image} />
    );
    const slicedItems = allItems.slice(2,4);
    return <div>{slicedItems} </div>;
}
