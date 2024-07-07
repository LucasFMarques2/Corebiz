import { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name) {
            setError('Preencha com seu nome completo');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Preencha com um e-mail válido');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/newsletter', { email, name });
            console.log(response.data.message);
            setSuccess(true);
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Erro ao enviar a inscrição:', error);
            setError('Erro ao enviar a inscrição. Tente novamente mais tarde.');
        }
    };

    const handleNewRegistration = () => {
        setSuccess(false);
        setError('');
    };

    return (
        <div className={styles.form}>
            {!success ? (
                <>
                    <h2>Participe de nossas news com promoções e novidades!</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            required
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={error.includes('nome') ? styles.errorInput : ''}
                        />
                        <input
                            type="email"
                            required
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={error.includes('e-mail') ? styles.errorInput : ''}
                        />
                        <button type="submit">Eu quero!</button>
                    </form>
                </>
            ) : (
                <div className={styles.successMensage}> 
                    <h2>Seu e-mail foi cadastrado com sucesso!</h2>
                    <span>A partir de agora você receberá as novidades e ofertas exclusivas.</span>
                    <button onClick={handleNewRegistration}>Cadastrar novo e-mail</button>
                </div>
            )}
        </div>
    );
}
