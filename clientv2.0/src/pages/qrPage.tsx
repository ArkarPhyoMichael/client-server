import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { galleryProp } from "../components/organisms/Galleries";
import { API } from "../services";

export const QrPage: React.FC = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState<galleryProp>();
  const getGallery = useCallback(() => {
    API.get(`/gallery/${id}`)
      .then((res) => {
        const response: galleryProp = res.data.data;
        setGallery(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    getGallery();
  }, [getGallery]);

  return (
    <>
      {gallery && (
        <div className="fixed w-full h-screen">
          <div className="">
            <div className="flex justify-center items-center content-center">
                <img src={gallery.img[0].path} className="w-auto h-80" alt={gallery.name} />
            </div>
          </div>
          <div className="absolute bottom-0 w-full overflow-y-auto text-white bg-slate-800 h-1/2 rounded-t-3xl">
            <div className="w-1/2 h-1 mx-auto mt-3 bg-white rounded-full " />
            <div className="p-5 mt-3 ">
              <h1 className="text-2xl ">{gallery.name}</h1>
              <div className="mt-6 space-y-9">
                <p className="">{gallery.description}</p>

                <div className="">
                  <div className="flex items-center mt-5 space-x-4">
                    <p>{gallery.era}</p>
                  </div>
                  <div className="flex items-center mt-5 space-x-4">
                    {gallery.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
