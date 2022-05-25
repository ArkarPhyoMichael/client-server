//   $title: String!
//   $phone: String!
//   $logo: String!

//   $bio: String!
//   $address: String!

// title
// phone

const CreateCompany = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <label className="block mb-2 text-sm font-medium" htmlFor="title">
              Title<span className="ml-2 text-rose-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              // value={formData.name}
              // onChange={(e) => {
              //   setformData({ ...formData, [e.target.name]: e.target.value });
              // }}
              className="w-full form-input"
              type="text"
              required
            />
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="phoneNumber">
              Phone Number<span className="ml-2 text-rose-500">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              // value={formData.name}
              // onChange={(e) => {
              //   setformData({ ...formData, [e.target.name]: e.target.value });
              // }}
              className="w-full form-input"
              type="text"
              required
            />
          </div>
          <div className="">
            <label
              className="block mb-2 text-sm font-medium"
              htmlFor="phoneNumber">
              Phone Number<span className="ml-2 text-rose-500">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              // value={formData.name}
              // onChange={(e) => {
              //   setformData({ ...formData, [e.target.name]: e.target.value });
              // }}
              className="w-full form-input"
              type="text"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateCompany;
