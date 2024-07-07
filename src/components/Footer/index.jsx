import styles from './Footer.module.css'
import { MdEmail } from "react-icons/md";
import { PiHeadsetFill } from "react-icons/pi";
import corebiz from '../../assets/createbyCorebiz.png'
import vtex from '../../assets/powerVtex.png'

export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.localization}>
                <h2>Localização</h2>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
                   Alphavile SP <br />
                   brasil@corebiz.ag <br />
                   +55 11 3090 1039</p>
            </div>

            <div className={styles.contact}>
                <button><MdEmail />ENTRE EM CONTATO</button>
                <button><PiHeadsetFill />FALE COM O NOSSO <br />CONSULTOR ONLINE</button>
            </div>

            <div className={styles.creators}>
                <img src={corebiz} alt="Criado pela corebiz" />
                <img src={vtex} alt="Logo da vtex" />
            </div>
        </div>
    )
}