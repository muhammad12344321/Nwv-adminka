import React from 'react'
import Add from '../../Components/Add/Add'

export default function AddTeacher() {
    return (
        <section>
            <div className="container">
                <h2>Добавить учителя</h2>
                <Add
                    nameLabel="Ф.И.О *"
                    namePlaceholder="Masha opajonim"
                    phoneLabel="Номер телефона *"
                    phonePlaceholder="+998 90 000 0000"
                    emailLabel="Почта *"
                    emailPlaceholder="name@email.com"
                    dateLabel="Дата рождения *"
                    paymentLabel="Оплата *"
                    paymentPlaceholder="470 000с"
                    groupLabel="Группа *"
                    groupPlaceholder="1"
                    uploadLabel="Загрузить"
                    saveButtonText="Сохранить"
                    avatarAlt="Avatar"
                />
            </div>
        </section>
    )
}
