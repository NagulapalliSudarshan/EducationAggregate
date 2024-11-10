import instance from "@/api/middleware";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext,useState } from "react";


export const AuthContext = createContext(null);

export default function AuthProvider({ children }){
    const [signinFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signupFormData, setSignUpFormData] = useState(initialSignUpFormData);

    async function handleRegisterUser(e){
        e.preventDefault();
        const { data } = await instance.post('/auth/register', {...signupFormData},{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(data)
    }

    return <AuthContext.Provider value={{ 
        signinFormData, 
        setSignInFormData, 
        signupFormData, 
        setSignUpFormData,
        handleRegisterUser
        }}
        >
        {children}
    </AuthContext.Provider>
}