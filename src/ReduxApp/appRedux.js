const appConnection = function(currentState = { userName : "" } , action)
{
    switch (action.type) {
        case  "setName":
            return {...currentState , userName : action.payload}

        case  "Logout":
            return null
            
    
        default:
            return null
    }
}

export default appConnection;