import { apiSlice } from "./apiSlice";
import { ADMIN_AUTHENTICATION_URL, ADMIN_LOGOUT_URL, ADMIN_REGISTRATION_URL, ADMIN_PROFILE_URL, ADMIN_USERS_DATA_FETCH_URL } from '../utils/constants.js';



export const adminApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        
        adminLogin: builder.mutation({
            
            query: (data) => ({
                url: ADMIN_AUTHENTICATION_URL,
                method: 'POST',
                body: data
            })

        }),
        adminLogout: builder.mutation({
            
            query: () => ({
                url: ADMIN_LOGOUT_URL,
                method: 'POST'
            })

        }),
        adminRegister: builder.mutation({
            
            query: (data) => ({
                url: ADMIN_REGISTRATION_URL,
                method: 'POST',
                body: data
            })

        }),
        updateAdmin: builder.mutation({
            
            query: (data) => ({
                url: ADMIN_PROFILE_URL,
                method: 'PUT',
                body: data
            })

        }),
        getUsersData: builder.mutation({
            
            query: () => ({
                url: ADMIN_USERS_DATA_FETCH_URL,
                method: 'GET'
            })

        })

    })

})


export const { useAdminLoginMutation, useAdminLogoutMutation, useAdminRegisterMutation, useUpdateAdminMutation, useGetUsersDataMutation } = adminApiSlice;