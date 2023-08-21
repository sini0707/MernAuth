import { apiSlice } from "./apiSlice";
import { USER_AUTHENTICATION_URL } from '../utils/constants.js';

const USER_AUTH_URL = USER_AUTHENTICATION_URL;

export const usersApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        
        login: builder.mutation({
            
            query: (data) => ({
                url: USER_AUTH_URL,
                method: 'POST',
                body: data
            })

        })

    })

})


export const { useLoginMutation } = usersApiSlice;