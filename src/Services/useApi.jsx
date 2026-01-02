import axios from "axios"

const useApi=async()=>{
      const data = await axios.get("http://localhost:5000/users")
      .then((res)=>res.data)
      .catch(er=> console.log(er));
    return data
}
export default useApi 
