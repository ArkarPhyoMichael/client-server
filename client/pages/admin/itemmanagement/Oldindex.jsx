import { CloudUploadIcon } from "@heroicons/react/outline";
import { useDropzone } from "react-dropzone";
import UiSelect from "../../../components/Atoms/forms/UiSelect";
import ManagementLayout, {
  ManagementHeader,
} from "../../../components/Templates/ManagementLayout";

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
    label: "blah blah",
    value: "3",
  },
];

const ItemManagement = () => {
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();
  return (
    <ManagementLayout routes={categoriesRoutes} title="Item Management">
      <ManagementHeader className={`text-indigo-500`}>
        Item Management
      </ManagementHeader>

      <div className="">
        <div className="">
          <form
            // onSubmit={(e) => {
            //   submitForm(e);
            // }}
            className="space-y-4 lg:space-y-6 ">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="">
                <div className="">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="name">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full form-input"
                    type="text"
                    // value={formData.name}
                    // onChange={(e) => {
                    //   setformData({ ...formData, [e.target.name]: e.target.value });
                    // }}
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="description">
                    Description<span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    // value={formData.rate}
                    // onChange={(e) => {
                    //   setformData({ ...formData, [e.target.name]: e.target.value });
                    // }}
                    name="description"
                    id="description"
                    className="w-full "
                    rows={5}
                    required
                  />
                </div>
                <div className="">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="era">
                    Era <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="era"
                    name="era"
                    className="w-full form-input"
                    type="text"
                    // value={formData.name}
                    // onChange={(e) => {
                    //   setformData({ ...formData, [e.target.name]: e.target.value });
                    // }}
                    required
                    placeholder="Era"
                  />
                </div>
                <div className="">
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
                    // value={formData.name}
                    // onChange={(e) => {
                    //   setformData({ ...formData, [e.target.name]: e.target.value });
                    // }}
                    required
                    placeholder="location"
                  />
                </div>
              </div>

              <div className="">
                <div className="">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="type">
                    Type <span className="text-rose-500">*</span>
                  </label>

                  <UiSelect
                    options={Types}
                    name="type"
                    id="type"
                    // formData={formData}
                    // setFromData={setformData}
                    optionLabel="label"
                    optionValue="value"
                    placeHolder="Type"
                  />
                </div>

                <div
                  {...getRootProps()}
                  className="px-4 py-10 border border-dashed rounded hover:border-blue-400">
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    "Drop the files here ... "
                  ) : (
                    <div className="flex flex-col items-center justify-center ">
                      <CloudUploadIcon className="w-10 h-10 mb-8 hover:text-blue-600" />
                      <p className="">
                        {`Drag 'n' drop some files here, or click to select files`}
                      </p>
                    </div>
                  )}
                </div>

                <div className="">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="description">
                    Category<span className="text-rose-500">*</span>
                  </label>
                  <UiSelect
                    options={Categories}
                    name="type"
                    id="type"
                    // formData={formData}
                    // setFromData={setformData}
                    optionLabel="label"
                    optionValue="value"
                    placeHolder="Type"
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
        </div>
      </div>
    </ManagementLayout>
  );
};

export default ItemManagement;
