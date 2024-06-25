export const loginStart = (userDetails)=>({

    type:"LOGIN_START"
     
})

export const loginSuccess = (user)=>({

    type:"LOGIN_SUCCESS",
    payload:user,
     
})


export const loginError = ()=>({

    type:"LOGIN_ERROR"
     
})

export const logout = ()=>({

    type:"LOGOUT"
     
})

export const UpdateStart = (userDetails)=>({

    type:"UPDATE_START"
     
})

export const UpdateSuccess = (user)=>({

    type:"UPDATE_SUCCESS",
    payload:user,
     
})


export const UpdateError = ()=>({

    type:"UPDATE_ERROR"
     
})

