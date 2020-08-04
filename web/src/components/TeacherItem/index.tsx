import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/39173306?s=460&u=46eca4efc9f138b8aae65190033a3c297d1bfe96&v=4" alt="Fernando Oliveira" />
                <div>
                    <strong>Fernando Oliveira </strong>
                    <span> Programação Web</span>
                </div>
            </header>
            <p>
                Apaixonado por tecnologias de desenvolvimento web e mobile.
        </p>
            <footer>
                <p>
                    Preco/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );

}

export default TeacherItem;