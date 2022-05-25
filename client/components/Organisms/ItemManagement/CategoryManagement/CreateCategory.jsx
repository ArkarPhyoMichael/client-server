import { useState } from "react";

const CreateCategory = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };
  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
      }}
      className="space-y-4 lg:space-y-6 ">
      <div className="grid grid-cols-1">
        <div className="">
          <div className="mb-3 ">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">
              Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="w-full form-input"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              required
              placeholder="Name"
            />
          </div>

          <div className="mb-3 ">
            <label className="block mb-2 text-sm font-medium" htmlFor="era">
              Slug <span className="text-rose-500">*</span>
            </label>
            <input
              id="slug"
              name="slug"
              className="w-full form-input"
              type="text"
              value={formData.slug}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              required
              placeholder="Slug"
            />
          </div>
        </div>
      </div>

      {/* BUtton */}

      <div className="flex items-center justify-end">
        <button className="px-4 py-2 text-indigo-400 border border-indigo-400 rounded-md shadow-lg">
          အတည်ပြုမည်
        </button>
      </div>
    </form>
  );
};

export default CreateCategory;
