import { useEffect, useState } from "react"
import data from '../../src/pages/Branches/Constants/branches.json'


function useBranches(){
    const [statelist,setstatelist]= useState();
    const [city,setcity] =useState();
    const [branches,setbranches] = useState();
    const [finalbranchdata , setfinalbranchdata] = useState()
    const getdata =()=>{
         const branchesdata =  data;
         setstatelist(branchesdata)
    }
    
    const filtercity = (state)=>{
          const filtercity = statelist?.filter((i)=>i.state == state);
          setcity(filtercity)
    }
    const filterbranches = (city)=>{
        const filterbranch = statelist?.filter((i)=>i.city==city);
        setbranches(filterbranch)
    }
    const selectedbranch = (selectedbranch)=>{
        const finalbranch = city?.filter((i)=>i.branchName==selectedbranch)
        setfinalbranchdata(finalbranch)
    }

    return {getdata , statelist , filtercity , city , filterbranches , branches ,selectedbranch , finalbranchdata }
}

export default useBranches