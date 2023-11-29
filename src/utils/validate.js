


export const checkValidData=(email,password,name=null) =>{
   
     
    const isEmailValid=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
    const isPasswordValid=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    
    if(!isEmailValid) return "Email is not Valid"
    if(!isPasswordValid) return "Password is not Valid"

    return null

}


export const checkValidMoviveQuery =(query)=>{


   //To Do  Validation for empty spaces 
   if(/^\s*$/.test(query))
   return "Please Enter valid Movie name"
     

   //correction needed it is throwing error for spaces betweeen names 
    const queryCheck=/^[A-Za-z0-9,. ]+$/.test(query)
    if(!queryCheck)
      return "Please Enter valid Movie name"

    return null
}