import Axios, { AxiosError, AxiosResponse } from "axios";
import { Store } from "redux";
import { appSetting } from "../config";

export const API = Axios.create({
  baseURL: appSetting.serverUrl,
  headers: {
    Authorization: sessionStorage.getItem("accessToken")
      ? `JWT ${sessionStorage.getItem("accessToken")}`
      : "",
  },
});


export const SetupInspector = (store:Store)=>{
    API.interceptors.request.use(config=>{
        document.body.classList.add("loading_indicator")
        return config
    },err=>{

        return Promise.reject(err)
    })

    API.interceptors.response.use((response:AxiosResponse)=>{
        document.body.classList.remove("loading_indicator");
        return response;
    },(err:AxiosError)=>{
        document.body.classList.remove("loading_indicator");
        if(err.response?.status===422 || err.response?.status===401){
            return err.response.data
        }
        
        return Promise.reject(err)
    })


}

