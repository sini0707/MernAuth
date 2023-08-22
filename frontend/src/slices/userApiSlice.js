import { apiSlice } from "./apiSlice";
import { USER_AUTHENTICATION_URL, USER_LOGOUT_URL } from '../utils/constants.js';

const USER_AUTH_URL = USER_AUTHENTICATION_URL; 

export const usersApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        
        login: builder.mutation({
            
            query: (data) => ({
                url: USER_AUTH_URL,
                method: 'POST',
                body: data
            })

        }),
        logout: builder.mutation({
            
            query: () => ({
                url: USER_LOGOUT_URL,
                method: 'POST'
            })

        })

    })

})


export const { useLoginMutation, useLogoutMutation } = usersApiSlice;