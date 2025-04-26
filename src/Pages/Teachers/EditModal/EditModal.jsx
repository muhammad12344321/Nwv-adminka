import React, { useRef, useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import foto from '../../../assets/images/masha.jpg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 2,
    width: 1200,
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

export default function EditModal({ open, handleClose }) {
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(foto);
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        birth_date: '',
        status: '',
        group: '',
        file: null,
    });

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) data.append(key, value);
        });

        try {
            const response = await fetch('/api/products/update/', {
                method: 'POST',
                body: data,
            });
            if (response.ok) {
                alert('Обновлён');
                handleClose();
            } else {
                alert('Ошибка при обновлении');
            }
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose} className="edit-modal">
            <Box sx={style}>
                <form onSubmit={handleSubmit} className="edit-form" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box className="edit-modal__box">
                        <div className="modal_wrapper">
                            <img src={imagePreview} alt="avatar" className="add__avatar" />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <Button onClick={handleButtonClick} className="add__upload-btn">
                                Изменить
                            </Button>
                        </div>

                        <div className="inputs">
                            <div className="input1">
                                <input type="text" name="full_name" placeholder="Введите имя" value={formData.full_name} onChange={handleChange} />
                                <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
                            </div>
                            <div className="input1">
                                <input type="text" name="phone_number" placeholder="Номер телефона" value={formData.phone_number} onChange={handleChange} />
                                <input type="text" name="status" placeholder="Оплата" value={formData.status} onChange={handleChange} />
                            </div>
                            <div className="input1">
                                <input type="email" name="email" placeholder="Почта" value={formData.email} onChange={handleChange} />
                                <input type="text" name="group" placeholder="Группа" value={formData.group} onChange={handleChange} />
                            </div>
                        </div>
                    </Box>

                    <Button type="submit" className="submit-btn" variant="contained">
                        Сохранить
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}
