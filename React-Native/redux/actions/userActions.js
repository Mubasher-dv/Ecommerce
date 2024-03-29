import { server } from "../store"
import axios from 'axios'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest",
        });

        //    Axios here

        const { data } = await axios.post(
            `${server}/user/login`,
            {
                email,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true
            }
        );

        dispatch({
            type: "loginSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error.response.data.message,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        });

        const { data } = await axios.get(
            `${server}/user/me`,
            {
                withCredentials: true
            }
        );

        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message,
        });
    }
};