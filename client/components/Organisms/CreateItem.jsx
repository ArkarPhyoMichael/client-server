import UiSelect from "../Atoms/forms/UiSelect";
import Iconx from "../Atoms/Icons/Iconx";
import { useDropzone } from "react-dropzone";
import { CloudUploadIcon } from "@heroicons/react/outline";
import { useState } from "react";
import axios from "axios";

const categoriesRoutes = [
  {
    src: "/admin/twoDManagement/",
    title: "Item Management",
    isAllow: true,
  },
  {
    src: "/admin/twoDManagement/",
    title: "Categories Management",
    isAllow: true,
  },
];

const Types = [
  {
    label: "သဲကျောက်",
    value: "1",
  },
  {
    label: "အုပ်ကျောက်",
    value: "2",
  },
  {
    label: "blah blah",
    value: "3",
  },
];
const Categories = [
  {
    label: "သဲကျောက်",
    value: "1",
  },
  {
    label: "အုပ်ကျောက်",
    value: "2",
  },
  {
    label: "ဘာသာရေးနှင့်ဆိုင်သော",
    value: "3",
  },
];

const CreateItem = ({ isModalOpen, setIsModalOpen, fetchData }) => {
  console.log("fetchData ==> ", fetchData);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({ noClick: false, noKeyboard: true });
  const files = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
  ));

  const [formData, setFormData] = useState({
    name: "",
    era: "",
    location: "",
    description: "",
    type: "",
    category: "",
    images: [],
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log("SubmitForm =>", formData);
    try {
      axios
        .post(
          "https://getform.io/f/eb50a137-0fab-4128-9933-6203573e74a4",
          formData
        )
        .then((response) => console.log(response));
      setIsModalOpen(false);
    } catch (error) {
      console.log("Form Submit Error", error);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
      }}
      className="space-y-4 lg:space-y-6 ">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
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
              Era <span className="text-rose-500">*</span>
            </label>
            <input
              id="era"
              name="era"
              className="w-full form-input"
              type="text"
              value={formData.era}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              required
              placeholder="Era"
            />
          </div>
          <div className="mb-3 ">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="location">
              Location <span className="text-rose-500">*</span>
            </label>
            <input
              id="location"
              name="location"
              className="w-full form-input"
              type="text"
              value={formData.location}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              required
              placeholder="location"
            />
          </div>
          <div className="mb-3 ">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="description">
              Description<span className="text-rose-500">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              name="description"
              id="description"
              className="w-full form-textarea"
              rows={5}
              required
            />
          </div>
        </div>

        <div className="">
          <div className="mb-3 ">
            <label className="block mb-2 text-sm font-medium" htmlFor="type">
              Type <span className="text-rose-500">*</span>
            </label>

            <UiSelect
              options={Types}
              name="type"
              id="type"
              formData={formData}
              setFromData={setFormData}
              optionLabel="label"
              optionValue="value"
              placeHolder="Type"
            />
          </div>
          <div className="mb-3 ">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="description">
              Category<span className="text-rose-500">*</span>
            </label>
            <UiSelect
              options={Categories}
              name="category"
              id="category"
              formData={formData}
              setFromData={setFormData}
              optionLabel="label"
              optionValue="value"
              placeHolder="Category"
            />
          </div>

          <div className="mb-3 ">
            <label className="block mb-2 text-sm font-medium" htmlFor="type">
              Images <span className="text-rose-500">*</span>
            </label>
            <div
              {...getRootProps()}
              className="px-4 py-8 mb-3 border border-dashed rounded group hover:border-blue-400">
              <input {...getInputProps()} />
              {isDragActive ? (
                "Drop the files here ... "
              ) : (
                <div className="flex flex-col items-center justify-center ">
                  <Iconx
                    icon="CloudUploadIcon"
                    className="w-10 h-10 mb-8 group-hover:text-blue-600"
                  />

                  <p className="">
                    {`Drag 'n' drop some files here, or `}
                    <button className="text-blue-700 underline group-hover:underline-offset-2">
                      click to select files
                    </button>
                  </p>
                </div>
              )}
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
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

export const getServerSideProps = async () => {
  try {
    const fetchData = await axios
      .get("https://getform.io/f/eb50a137-0fab-4128-9933-6203573e74a4")
      .then((res) => res.data);
    return {
      props: { fetchData },
    };
  } catch (error) {
    console.log("getServerSideProps Error ==> ", error);
  }
};

export default CreateItem;
