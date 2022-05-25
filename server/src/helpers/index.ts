import { compareSync, hashSync } from "bcrypt";
import {sign,verify} from 'jsonwebtoken'
import { JWT_SECRET } from "../config";
import { User } from "../types";
import path from "path";
import fs from "fs";
import {networkInterfaces} from 'os'
export const hashPassword = (password: string):string => {
  const hPassword = hashSync(password, 12);
  return hPassword;
};

export const comparePassword = (password:string,hPassword:string):boolean=>{
    const vertifyPassword = compareSync(password,hPassword);
    return vertifyPassword
}


export const signToken=(user:User)=>{
    const accessToken  = sign(user,JWT_SECRET,{expiresIn:"10d"});
    return accessToken;
}

export const verifyToken = (token:string)=>{
    const payloadUser = verify(token,JWT_SECRET);
    return payloadUser;
}


export const rootDir = path.join(__dirname + "..","..");

export const deleteFile = (filename: string) => {
  fs.unlink(path.join(rootDir, filename), err => {
    console.log(err);
  });
};

export const currentIP = ()=>{
  const nets = networkInterfaces();
  const cIp = Object.values(nets).flat().filter((item)=>!item?.internal && item?.family==="IPv4").find(Boolean)?.address;
  return cIp;
}



