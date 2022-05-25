import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { DashboardWrapper } from "../../../components/modules/dashboardWrapper";
import { CreateCategory } from "../../../components/organisms/CreateCategory";
import { API } from "../../../services";
interface formDataProps {
  name: string;
  icon: any;
}
export const CategoryCreate: React.FC = () => {
  const [formData, setformData] = useState<formDataProps>({
    name: "",
    icon:null,
  });
  const {addToast} = useToasts()

  const SubmitForm =(e:React.FormEvent)=>{
        try {
            e.preventDefault()
            const postData = new FormData();
            postData.append("icon",formData.icon);
            postData.append("name",formData.name)
            API.post('/category/create',formData, { headers: { 'content-type': 'multipart/form-data' } }).then(res=>{
               if(res.data && res.data.statusCode===200){
                   addToast(res.data.message,{appearance:'success',autoDismiss:true})
               }
               else{
                addToast(res.data.message,{appearance:'warning',autoDismiss:true})
               }
            })
            .catch(err=>{
                console.log(err)
            })
        } catch (error) {
            
        }
  }
   console.log(formData)
  return (
    <DashboardWrapper title="အမျိုးအစားအသစ်ထည့်သွင်းရန်">
      <form   onSubmit={(e)=>{SubmitForm(e)}} className="w-full max-w-screen-md space-y-4 px-2 py-2">
        <CreateCategory formData={formData} setFormData={setformData} />
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
