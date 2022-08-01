import React, {
    createContext,
    useState,
    useContext,
    ReactNode

} from 'react';
import { api } from '../services/api';

// dados do usuario
interface User {
    id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
}

// o estado de autenticação
interface AuthState {
    token: string; //para que toda hora q o usuario se conectar a aplicação, gerar um token
    user: User;
}

// as credenciais
interface SignInCredentials {
    email: string;
    password: string;
}

// para o contexto, para compartilha os dados do usuario e compartilha a funcao do signin e irar retorna um promise de void
interface AuthContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode
}

// o contexto AuthContextData e do tipo (as) do AuthContextData
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// para provar ele recebe um children
function AuthProvider({children} : AuthProviderProps){

    //o estado para armazena os dados de autenticação eo dtipo de dado é o AuthState
    const [data, setData]= useState<AuthState>({} as AuthState);

    //irar recebe os parametros do email e senha
    async function signIn({email, password} : SignInCredentials){

        // requisição da API post da rota sessions
        const response = await api.post('sessions', {
            email,
            password,
        });

        // para desistrutura o token e o user
        const { token, user} = response.data;

        // valores por padrao do header, e irar acrescente em todas as requisições q quiser um cabecelho
        api.defaults.headers.authorization = `Bearer ${token}`;

        // para atualizar os dados do token e do user
        setData({token, user});

    }

    return (
        // provider os valores do usuario
        <AuthContext.Provider 
        value= {{
            user: data.user,
            signIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() : AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };