import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const userInfo = {
        email: 'a@b.com',
        password: 1234
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;