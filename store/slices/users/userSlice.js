import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    nombre: "",
    email: "",
    password: "",
    etapa: "",
    semana: 0,
    logeado: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.nombre = action.payload.nombre;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.etapa = action.payload.etapa;
            state.semana = action.payload.semana;
            state.logeado = action.payload.logeado;
        },
        logout: (state) => {
            state.nombre = "";
            state.email = "";
            state.password = "";
            state.etapa = "";
            state.semana = 0;
            state.logeado = false;
        },
    }
});

export const { login, logout } = userSlice.actions;