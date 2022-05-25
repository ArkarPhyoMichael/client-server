import React, { useCallback, useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { DashboardWrapper } from "../../../components/modules/dashboardWrapper";
import { categoryProp } from "../../../components/organisms/Categories";
import { CreateGallery } from "../../../components/organisms/createGallery";
import { API } from "../../../services";
interface formDataProps {
  name: string;
  categoryId:string;
  era:string;
  type:string;
  description:string;
  location:string;
  img:any
}
export const GalleryCreate: React.FC = () => {
  const [formData, setformData] = useState<formDataProps>({
    name: "",
    categoryId:"",
    era:"",
    type:"",
    description:"",
    location:"",
    img:null
  });
  const { addToast } = useToasts();
  const [categories, setCategories] = useState<categoryProp[]>()
    const getCategories = useCallback(
      () => {
         API.get("/category/all").then(res=>{
              if(res.data && res.data.statusCode===200){
                  const categoriesData:categoryProp[]= res.data.data;
                  setCategories(categoriesData)
              }
         })
         .catch(err=>{
             console.log(err)
         })
      },
      [],
    )
    useEffect(() => {
       getCategories()
    }, [getCategories])
  const SubmitForm = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const postData = new FormData();
      postData.append("categoryId", formData.categoryId);
      postData.append("name", formData.name);
      postData.append("era",formData.era);
      postData.append("type",formData.type);
      postData.append("description",formData.description);
      postData.append("location",formData.location)
      postData.append("img",formData.img)
      API.post("/gallery/create", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
        .then((res) => {
          if (res.data && res.data.statusCode === 200) {
            addToast(res.data.message, {
              appearance: "success",
              autoDismiss: true,
            });
          } else {
            addToast(res.data.message, {
              appearance: "warning",
              autoDismiss: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  console.log(formData);
  return (
    <DashboardWrapper title="Item အသစ်ထည့်ရန်">
      <form
        onSubmit={(e) => {
          SubmitForm(e);
        }}
        className="w-full max-w-screen-md space-y-4 px-2 py-2"
      >
         {
           categories && 
           <CreateGallery categories={categories} formData={formData} setFormData={setformData} />
         }
        <button
          type="submit"
          className="group relative w-full max-w-screen-sm mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          ပေါင်းထည့်ရန်
        </button>
      </form>
    </DashboardWrapper>
  );
};
