import { api } from ".."
import { path } from "../endPoint"



export const userlogin = async (loginData) => {
    const url = await api.post(path.UserLogin, loginData)
    return url?.data
}

export const getBatch = async () => {
    const url = await api.get(path.Batch)
    return url?.data
}

export const getRollNumberByBatch = async (batchId) => {
    const url = await api.get(path.GetRollNumberByBatch + batchId)
    return url?.data
}

// marg get name by rollNumber
export const getnamebyrollnumber = async (rollnumber) => {
    const url = await api.get(path.GetNameByRollNumber + rollnumber)
    return url?.data
}

export const contry = async () => {
    const url = await api.get(path.Country)
    return url?.data
}

export const commonType = async (countryName) => {
    const url = await api.get(path.CommonType + countryName)
    return url?.data
}

export const city = async (StateID) => {
    const url = await api.get(path.City + StateID)
    return url?.data
}

// ye delete krna hai
export const userprofile = async () => {
    const url = await api.get(path.UserProfile)
    return url?.data
}

export const useradvancesearch = async () => {
    const url = await api.get(path.UserAdvanceSearch)
    return url?.data
}

export const viewprofile = async (state) => {
    const url = await api.get(path.ViewProfile + state)
    return url?.data
}

export const userdashboard = async (state) => {
    const url = await api.get(path.UserDashboard + state)
    return url?.data
}

export const birhday = async () => {
    const url = await api.get(path.BirthDay)
    return url?.data
}

export const viewprofile2 = async (state) => {
    const url = await api.get(path.ViewProfile2 + state)
    return url?.data
}

export const userdetails = async (state) => {
    const url = await api.get(path.UserDetails + state)
    return url?.data
}

// search alumini
export const advancesearch = async () => {
    const url = await api.get(path.AdvanceSearch)
    return url?.data
}

//get employementList
export const getemployement = async () => {
    const url = await api.get(path.GetEmployeentList)
    return url?.data
}

//post employement List
export const postemployement = async (addData) => {
    const url = await api.post(path.GetEmployeentList , addData)
    return url?.data
}

//get business List
export const getbusinesslist = async () => {
    const url = await api.post(path.GetBusinessList)
    return url?.data
}


