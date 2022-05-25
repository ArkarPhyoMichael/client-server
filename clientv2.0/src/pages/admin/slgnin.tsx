import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { appSetting } from "../../config";
import { API } from "../../services";

export const SignInPage: React.FC = () => {
    const [formData, setformData] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate()
    const {addToast} = useToasts()

    const SubmitForm =(e:React.FormEvent)=>{
        e.preventDefault();
        try {
            const postData = new FormData();
            postData.append("email",formData.email);
            postData.append("password",formData.password);
            API.post("/user/login",postData).then(res=>{
              if(res.data && res.data.statusCode===200){
                  addToast(res.data.message,{appearance:'success',autoDismiss:true})
                  sessionStorage.setItem("accessToken",res.data.accessToken)
                    navigate("/admin")
              }
              else{
                addToast(res.data.message,{appearance:'warning',autoDismiss:true})
              }
            })
            .catch(err=>{
                addToast('fail',{appearance:'warning',autoDismiss:true})
            })
            .finally(()=>{
                console.log("done")
            })
        } catch (error) {
            
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src={appSetting.logo}
            alt="Workflow"
          />
        </div>
        <form onSubmit={(e)=>SubmitForm(e)} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                value={formData.email}
                onChange={(e)=>{setformData({...formData,[e.target.name]:e.target.value})}}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                value={formData.password}
                onChange={(e)=>{setformData({...formData,[e.target.name]:e.target.value})}}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div className="text-sm"></div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
