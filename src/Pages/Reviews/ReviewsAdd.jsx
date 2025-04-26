import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function ReviewsAdd() {
    const [formData, setFormData] = useState({ name: '', review: '' });
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/reviews/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Отзыв успешно добавлен');
                navigate('/reviews');
            } else {
                console.error('Ошибка при добавлении отзыва');
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        }
    };


    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
            <Typography variant="h5" gutterBottom>Добавить отзыв</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    name="name"
                    label="Имя"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    name="review"
                    label="Отзыв"
                    multiline
                    rows={4}
                    value={formData.review}
                    onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>Сохранить</Button>
            </form>
        </Box>
    );
}
