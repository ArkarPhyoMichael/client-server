import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardWrapper } from "../../components/modules/dashboardWrapper";
import { API } from "../../services";

export const AdminDashboardPage: React.FC = () => {
    const navigate = useNavigate()
    const checkUser = useCallback(
      () => {
        API.get("/user/authenticated").then(res=>{
             if(res.data && res.data.statusCode===200){

             }
             else{
                 navigate("/signin")
             }
        })
        .catch(err=>{
            console.log(err)
        })
      },
      [navigate],
    )
    useEffect(() => {
        checkUser()
    }, [checkUser])
    
    
    return (
        <DashboardWrapper>
            <div>
                <h4>Admin dashboard home page</h4>
            </div>
        </DashboardWrapper>
    )
}