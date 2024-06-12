import axios from "axios";

export const api = axios.create({
    baseURL: ' https://api.openweathermap.org/data/2.5/weather',
})

export const api_key = '045f05f1fe4303314bc5b7e3ebc903fe'