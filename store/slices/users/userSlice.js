import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    nombre: "",
    apellido: "",
    edad: 0,
    email: "",
    password: "",
    etapa: "",
    semana: 0,
    sexo: "",
    logeado: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.nombre = action.payload.nombre;
            state.apellido = action.payload.apellido;
            state.edad = action.payload.edad;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.etapa = action.payload.etapa;
            state.semana = action.payload.semana;
            state.sexo = action.payload.sexo;
            state.logeado = action.payload.logeado;
        },
        logout: (state) => {
            state.nombre = "";
            state.apellido = "";
            state.edad = 0;
            state.email = "";
            state.password = "";
            state.etapa = "";
            state.semana = 0;
            state.sexo = "",
            state.logeado = false;
        },
    }
});

export const { login, logout } = userSlice.actions;