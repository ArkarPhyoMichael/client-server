import React, { useCallback, useEffect, useState } from "react";
import { DashboardWrapper } from "../../../components/modules/dashboardWrapper";
import { GalleryListComponent, galleryProp } from "../../../components/organisms/Galleries";
import { API } from "../../../services";

export const GalleryList: React.FC = () => {
  const [gallries, setGallries] = useState<galleryProp[]>()
   const getGalleries = useCallback(
     () => {
       API.get("/gallery/all").then(res=>{
         if(res.data && res.data.statusCode===200){
           const repsonse:galleryProp[] =res.data.data;
           setGallries(repsonse)
         }
       }).catch(err=>{
         console.log(err)
       })
     },
     [],
   )

   useEffect(() => {
     getGalleries()
   }, [getGalleries])
   
   
  return (
    <DashboardWrapper>
       <div>
       {
         gallries && <GalleryListComponent gallries={gallries} getGalleries={getGalleries} />
       }
       </div>
    </DashboardWrapper>
  );
};
