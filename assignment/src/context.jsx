import React, { useContext, useReducer } from "react";
import reducer from "./reducer"
const AppContext=React.createContext();
const intialState={
    name:"",
    image:""
}
const updateHomePage=()=>{
    return dispatch({
        type:'HOME_UPDATE',
        payload:{
            name:"Atul Technical",image:"https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?size=626&ext=jpg&ga=GA1.1.860250380.1713256139&semt=ais" 
        }
    })
}
const updateAboutPage=()=>{
    return dispatch({
        type:'ABOUT_UPDATE',
        payload:{
       name:"Contact",
            image:"https://img.freepik.com/premium-vector/young-man-working-laptop-home-vector-illustration-cartoon-style_1142-98890.jpg?size=626&ext=jpg&ga=GA1.1.860250380.1713256139&semt=ais" 
        }
    })
}
const AppProvider=({children})=>
{
    const [state,dispatch]=useReducer(reducer,intialState);
    const updateHomePage=()=>{
        return dispatch({
            type:'HOME_UPDATE',
            payload:{
                name:"Atul Technical",image:"https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?size=626&ext=jpg&ga=GA1.1.860250380.1713256139&semt=ais" 
            }
        })
    }
    const updateAboutPage=()=>{
        return dispatch({
            type:'ABOUT_UPDATE',
            payload:{
           name:"Contact",
                image:"https://img.freepik.com/premium-vector/young-man-working-laptop-home-vector-illustration-cartoon-style_1142-98890.jpg?size=626&ext=jpg&ga=GA1.1.860250380.1713256139&semt=ais" 
            }
        })
    }
return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>{children}</AppContext.Provider>
}
const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext};