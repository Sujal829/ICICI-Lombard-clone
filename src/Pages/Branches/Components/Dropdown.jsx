import React, { useEffect } from 'react'
import useBranches from '../../../../hooks/BranchesFilter/useBranches'

function Dropdown() {
    const {getdata , statelist , filtercity , city , filterbranches , branches , selectedbranch , finalbranchdata} = useBranches();
    useEffect(()=>{
            getdata()
    },[getdata])
  return (
    <div>
      <form action="">
        <select name="" id="" onChange={(e)=>{filtercity(e.target.value); filterbranches(" "); selectedbranch(" ")}}>
            <option value="">Select State</option>
            {statelist?.map((i)=><option value={i.state} key={i.id}>{i.state}</option>)}
        </select>
        <select name="" id=""  onChange={(e)=>{filterbranches(e.target.value); selectedbranch(" ")}}>
            <option value="">Select City</option>
            {city?.map((i)=><option value={i.city} key={i.id}>{i.city}</option>)}
        </select>
        <select name="" id="" onChange={(e)=>selectedbranch(e.target.value)}>
            <option value="">Branches</option>
            {branches?.map((i)=><option value={i.branchName} key={i.id}>{i.branchName}</option>)}
        </select>
      </form>

      <div>{finalbranchdata?.map((i)=><p key={i.id}>Name:{i.branchName} Address :{i.address} Contact No: {i.contact}</p>)}</div>
    </div>
  )
}

export default Dropdown
