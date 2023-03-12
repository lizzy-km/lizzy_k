import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();

 export const StateContextProvider = ({children}) => {

   

    const [product, setProduct]=useState([]);

    const [data,setData] = useState([])
    
    useEffect(()=>{
      fetchData()
    },[setProduct])
    
    
    
      const fetchData = async () =>{
        const api = await fetch('https://fakestoreapi.com/products')
        const data = await api.json();
        setData(data)
        setProduct(data);
        console.log(data)
    
    
    
      }

//  const[video,setVideo] = useState(series)

 const main={product,setProduct,data}

    return(
        <StateContext.Provider value={main} >
            {children}
        </StateContext.Provider>
    )
}