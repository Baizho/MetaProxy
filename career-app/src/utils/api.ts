// utils/api.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function signIn(data: { email: string; password: string }) {
    try {
        const response = await axios.post(`${API_URL}/auth/signin`, data);
        return response.data;
    } catch (error) {
        console.error("Sign-in error:", error);
        throw error;
    }
}

export async function registerUser(data: { name: string; email: string; password: string; role: string }) {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, data);
        return response.data;
    } catch (error) {
        console.error("Register error:", error);
        throw error;
    }
}