import Iconx from "../../components/Atoms/Icons/Iconx";
import { GalleryCarousel } from "../../components/Organisms/gallery/lightGallery";
import { API } from "../../services";


export default function Home({ gallery }) {
  return (
    <div className="fixed w-full h-screen">
     {
       gallery && 
       <>
       <div className="">
         <div className="flex justify-center">
           <GalleryCarousel gallery={gallery} />
         </div>
       </div>
       <div className="absolute bottom-0 w-full overflow-y-auto text-white bg-slate-800 h-1/2 rounded-t-3xl">
         <div className="w-1/2 h-1 mx-auto mt-3 bg-white rounded-full " />
         <div className="p-5 mt-3 ">
           <h1 className="text-2xl ">{gallery.name}</h1>
           <div className="mt-6 space-y-9">
             <p className="">
               {gallery.description}
             </p>

             <div className="">
               <div className="flex items-center mt-5 space-x-4">
                 <Iconx icon={`ClockIcon`} className="w-5 h-5 " />
                 <p>{gallery.era}</p>
               </div>
               <div className="flex items-center mt-5 space-x-4">
                 <Iconx icon={`LocationMarkerIcon`} className="w-5 h-5 " />
                 <p>{gallery.location}</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
     }
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await API.get(`/gallery/${id}`);

  return {
    props: {
      gallery: data.data,
    }, // will be passed to the page component as props
  };
}
