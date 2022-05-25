import React from "react";

export const GalleryCarousel = ({gallery})=>{
    return(
        <div>

            <pre>{JSON.stringify(gallery.img,null,2)}</pre>
        </div>
    )
}