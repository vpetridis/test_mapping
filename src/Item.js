import React from "react";

export default function Item(props) {
    const { thumbnailUrl, id, title, url } = props.imageData;

    return (
        <div className="item-container">
            <img src={thumbnailUrl} alt="" />
            <h1>{title}</h1>
            <a href={url}>Load more</a>
        </div>
    );
}
