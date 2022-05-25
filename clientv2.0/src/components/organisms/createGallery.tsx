import React, {  } from "react";
import { categoryProp } from "./Categories";

interface createGalleryProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  categories:categoryProp[]
}
export const CreateGallery: React.FC<createGalleryProps> = ({
  formData,
  setFormData,
  categories
}) => {
 
  return (
    <div className="w-full max-w-screen-md bg-white px-2 py-2 flex flex-col space-y-2">
        <label htmlFor=""> အမျိုးအစားရွေးချယ်ရန်</label>
      <select
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        value={formData["categoryId"]}
        name="categoryId"
        id="categoryId"
      
        className="form-select w-full rounded-md"
        placeholder="အမည်ထည့်သွင်းရန်..."
        required
      >
          <option value="">........</option>
         {
             categories.map((c,i)=>(
                <option value={c.id}> {c.name} </option>
             ))
         }
      </select>
      <label htmlFor=""> အမည်</label>
      <input
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        value={formData["name"]}
        name="name"
        id="name"
        type="text"
        className="form-input w-full rounded-md"
        placeholder="အမည်ထည့်သွင်းရန်..."
        required
      />
      <label htmlFor=""> ပုံများ</label>
      <input
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.files ? e.target.files[0]:e.target.value });
        }}
        
        name="img"
        id="img"
        type="file"
        multiple={true}
        className="form-input w-full rounded-md"
        placeholder="အမျိုးအစားအမည်ထည့်သွင်းရန်..."
        required
      />
      <label htmlFor=""> ခောတ်</label>
      <input
        onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        
        name="era"
        id="era"
        type="text"
       
        className="form-input w-full rounded-md"
        placeholder="ခောတ်..."
        required
      />
      <label htmlFor=""> တည်နေရာ</label>
      <input
        onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        
        name="location"
        id="location"
        type="text"
       
        className="form-input w-full rounded-md"
        placeholder="တည်နေရာ..."
        required
      />
      <label htmlFor=""> ပစ္စည်းအမျိုးအစား</label>
      <input
       onChange={(e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }}
        
        name="type"
        id="type"
        type="text"
       
        className="form-input w-full rounded-md"
        placeholder="ပစ္စည်းအမျိုးအစား..."
        required
      />
      <label htmlFor=""> အကြောင်းအရာအသေးစိတ်</label>
      <textarea
         rows={5}
         onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        name="description"
        id="description"
      
       
        className="form-input w-full rounded-md"
        placeholder="အကြောင်းအရာအသေးစိတ်..."
        required
      />
    </div>
  );
};
