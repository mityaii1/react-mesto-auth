import React from 'react';
import success from '../images/success.svg';
import unsuccess from '../images/unsuccess.svg';

function InfoTooltip(props) {
    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close-icon transparent" onClick={props.onClose} type="button" aria-label="Закрыть">
                </button>
                <img className="popup__tool-tip-image" src={props.toolTipPopup.image ? success : unsuccess} alt="Картинка" />
                <p className="popup__tool-tip-text">{props.toolTipPopup.text}</p>
            </div>
        </section>
    )
}

export default InfoTooltip;