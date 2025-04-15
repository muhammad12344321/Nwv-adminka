import React from 'react';
import PropTypes from 'prop-types';
import foto from '../../assets/images/masha.jpg';

export default function Add({
    nameLabel,
    namePlaceholder,
    phoneLabel,
    phonePlaceholder,
    emailLabel,
    emailPlaceholder,
    dateLabel,
    paymentLabel,
    paymentPlaceholder,
    groupLabel,
    groupPlaceholder,
    uploadLabel,
    saveButtonText,
    avatarAlt
}) {
    return (
        <div className="add">
            <div className="add__wrapper">
                <div className="add__left">
                    <img
                        src={foto}
                        alt={avatarAlt}
                        className="add__avatar"
                    />
                    <input className="add__file" type="file" id="fileUpload" />
                    <label htmlFor="fileUpload" className="add__upload-btn">
                        {uploadLabel}
                    </label>
                </div>

                <div className="add__form">
                    <div className="form__group">
                        <label>{nameLabel}</label>
                        <input type="text" placeholder={namePlaceholder} />
                    </div>
                    <div className="form__group">
                        <label>{phoneLabel}</label>
                        <input type="text" placeholder={phonePlaceholder} />
                    </div>
                    <div className="form__group">
                        <label>{emailLabel}</label>
                        <input type="email" placeholder={emailPlaceholder} />
                    </div>
                    <div className="form__group">
                        <label>{dateLabel}</label>
                        <input type="date" />
                    </div>
                    <div className="form__group">
                        <label>{paymentLabel}</label>
                        <input type="text" placeholder={paymentPlaceholder} />
                    </div>
                    <div className="form__group">
                        <label>{groupLabel}</label>
                        <input type="number" placeholder={groupPlaceholder} />
                    </div>
                </div>
            </div>
            <div className="add__footer">
                <button className="add_btn">{saveButtonText}</button>
            </div>
        </div>
    );
}