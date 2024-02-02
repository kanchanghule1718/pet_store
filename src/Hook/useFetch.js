import React, { useEffect, useState } from 'react'

export const useFetch=(url)=> {
    let[pets,setPets]=useState(null)
    let[isLoadind,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch(url)    
        .then(res=>res.json())
        .then(data=>{
        //Original_Array=data
        setPets(data)
        setLoading(false)
        })
        },[url])
  return (
    {pets,isLoadind}
  )
}
