import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { createContext,useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({children}){
    const [signinFormData, setSignInFormData] = useState(initialSignInFormData);
    const [signupFormData, setSignUpFormData] = useState(initialSignUpFormData);
    return <AuthContext.Provider value={{ 
        signinFormData, 
        setSignInFormData, 
        signupFormData, 
        setSignUpFormData }}>
        {children}
    </AuthContext.Provider>
}