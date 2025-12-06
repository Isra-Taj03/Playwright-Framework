import CryptoJS from "crypto-js";
 import {test} from "@playwright/test"
import CommonUtils from "../../utils/CommonUtils";
 
//  test("encrypting.....",async({})=>{
// // const encryptUserName=CryptoJS.AES.encrypt("admin","wishinfinite").toString();
// //         console.log("EncrytedUserName: "+ encryptUserName);
// const encryptPassword=CryptoJS.AES.encrypt("password123","wishinfinite").toString();
//        console.log("Encryted Password: "+encryptPassword)
//  })
//  ;

test("dec",async({})=>{
    const commonUtilsObj = new CommonUtils();
        const decUserName = CryptoJS .AES.decrypt(process.env.API_USER_NAME!,"wishinfinite").toString(CryptoJS.enc.Utf8);
         const decPassword = CryptoJS .AES.decrypt(process.env.API_PASSWORD!,"wishinfinite").toString(CryptoJS.enc.Utf8);
        console.log("Decrypted UserName: "+decUserName+" Decypted Password: "+decPassword)

})

