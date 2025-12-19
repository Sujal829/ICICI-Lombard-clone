import axios from "axios"

const useApi=()=>{
      const data = axios.get("http://localhost:5000/users")
      .then((res)=>res.data)
    return data
}
export default useApi 
