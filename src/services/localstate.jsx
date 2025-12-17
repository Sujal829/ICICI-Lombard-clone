
const localstate={
    getlocatoken:()=>{
        return localStorage.getItem("token")
    },
    setlocaltoken:(obj)=>{
        localStorage.setItem("token",JSON.stringify(obj))
    },
    removelocaltoken:()=>{
        localStorage.removeItem("token")
    }

}

export default localstate