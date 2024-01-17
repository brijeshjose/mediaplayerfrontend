import { commonAPI } from "./commonAPI"

import{serverUrl} from "./serverUrl"



export const ulpoadVideo = async(reqBody)=>{
 
    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)

}


export const getAllVideo =async ()=>{

    return await commonAPI("GET",`${serverUrl}/videos`,"")

}


export const getAVideo =async (id)=>{

    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")

}

export const deleteVideo =async (id)=>{

    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})

}

export const addToHistory= async(videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)

}

export const getAllHistory=async()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")

}


export const addCategory = async(reqBody)=>{
 
    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)

}

export const getAllCategory = async()=>{
 
    return await commonAPI("GET",`${serverUrl}/categories`,"")

}

export const deleteCategory = async(id)=>{
 
    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})

}

export const updateCategory = async(id,body)=>{
 
    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)

}
export const deleteHistory= async(id)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})

}