import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
})

export const signUp = async (name: string, email: string, password: string) => {
    const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: `${process.env.BETTER_AUTH_URL}/main`,
    });
    if (error) {
        console.error("Error signing up:", error);
        return null;
    }
    return data;
}

export const signIn = async (email: string, password: string) => {
    const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: `${process.env.BETTER_AUTH_URL}/main`,
    });
    if (error) {
        console.error("Error signing in:", error);
        return null;
    }
    return data;
}

export const signOut = async () => {
    const { data, error } = await authClient.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return null;
    }
    return data;
}