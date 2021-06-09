import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../../api'
import Error from '../Help/Error'
import Head from '../Help/Head'

const LoginPasswordLost = () => {
    const login = useForm()
    const {data, loading, error, request} = useFetch()
    

    

    async function handleSubmit(e){
        e.preventDefault()
        if(login.validate()){
            const {url, options} = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resertar')
            })
           const {json} = await request(url, options)
           console.log(json)
        }
        
    }
    return (
        <section className="animeLeft">
            <Head title="Perdeu a senha" />
            <h1 className="title">Perdeu a senha?</h1>
            {data ? ( <p style={{color: '#4c1'}}>Enviado com Sucesso!</p> 
            ) : (
            <form onSubmit={handleSubmit}>
                <Input label="Email / Usuario" type="text" name="email" {...login}/>
                {loading ? ( <Button>Enviando...</Button> ) : ( <Button>Enviar email</Button> )}
            </form>
            )}
            
            {<Error error={error} />}
        </section>
    )
}

export default LoginPasswordLost
