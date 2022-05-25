import React from "react";
interface createCategoryProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}
export const CreateCategory: React.FC<createCategoryProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <div className="flex flex-col w-full max-w-screen-md px-2 py-2 space-y-2 bg-white">
      <label htmlFor=""> အမျိုးအစားအမည်</label>
      <input
        onChange={(e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        }}
        value={formData["name"]}
        name="name"
        id="name"
        type="text"
        className="w-full rounded-md form-input"
        placeholder="အမျိုးအစားအမည်ထည့်သွင်းရန်..."
        required
      />
      <label htmlFor=""> ရည်ညွန်းပုံ</label>
      <input
        onChange={(e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.files
              ? e.target.files[0]
              : e.target.value,
          });
        }}
        name="icon"
        id="icon"
        type="file"
        className="w-full rounded-md form-input"
        placeholder="အမျိုးအစားအမည်ထည့်သွင်းရန်..."
      />
    </div>
  );
};
