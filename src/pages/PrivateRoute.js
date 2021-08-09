import React from 'react'
import { Route, Redirect } from 'react-router'
import { useUserContext } from '../context/user_context'


const PrivateRoute = ({ children, ...rest }) => {
    const { myUser } = useUserContext()
    // console.log(children, rest)

    return (
        
        <Route  {...rest} render={() => {
            return myUser ? children : <Redirect to="/" />
        }} >

        </Route>
    )
}

export default PrivateRoute
