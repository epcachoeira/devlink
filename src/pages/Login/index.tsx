import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { FormEvent, useState } from "react"

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if(email === '' || password === '') {
            alert('Preencha todos os campos')
            return
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/admin', { replace: true })
            })
            .catch((err) => {
                console.log('Erro ao fazer Login')
                console.log(err)
            })

    }

    return (
        <div className="flex w-full h-screen flex-col items-center justify-center">
            <Link to='/'>
                <h1 className="mt-11 mb-7 text-white font-bold text-5xl">Dev
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-700
                                 bg-clip-text text-transparent">
                        Link
                    </span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail ..."
                />
                <Input
                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a sua senha ..."
                />

                <button 
                    type="submit"
                    className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>
            </form>
        </div>
    )
}