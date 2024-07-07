import { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name) {
            setError('O nome é obrigatório');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('O e-mail é inválido');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/newsletter', { email, name });
            console.log(response.data.message);
            setName('');
            setEmail('');
            setError(console.log('Inscrição realizada com sucesso!'));
        } catch (error) {
            console.error('Erro ao enviar a inscrição:', error);
            setError('Erro ao enviar a inscrição. Tente novamente mais tarde.');
        }
    };

    return (
        <div className={styles.form}>
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Eu quero!</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
}
