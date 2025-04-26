import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import ReviewsDelete from './ReviewsDelete'; 

export default function ReviewsTable() {
    const navigate = useNavigate();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedReviewId, setSelectedReviewId] = useState(null);

    const reviews = [
        { id: 1, name: 'Иван', review: 'Отличный курс!' },
        { id: 2, name: 'Мария', review: 'Мне всё понравилось' }
    ];

    const handleDeleteClick = (id) => {
        setSelectedReviewId(id);
        setOpenDeleteModal(true); 
    };

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch(`/api/reviews/${selectedReviewId}/`, {
                method: 'DELETE'
            });
            if (response.ok) {
                alert('Отзыв удалён');
                // Тут можешь перезапросить отзывы
            } else {
                alert('Ошибка при удалении');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setOpenDeleteModal(false); 
        }
    };

    const handleAddClick = () => {
        navigate('/reviews/add');
    };

    return (
        <div className="reviews container">
            <div className="reviews__header">
                <h2 className="reviews__title">Отзывы</h2>
                <Button onClick={handleAddClick} variant="contained" startIcon={<AiOutlinePlus />}>
                    Добавить отзыв
                </Button>
            </div>

            <table className="reviews__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Отзыв</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.id}>
                            <td>{review.id}</td>
                            <td>{review.name}</td>
                            <td>{review.review}</td>
                            <td>
                                <Button color="error" onClick={() => handleDeleteClick(review.id)}>
                                    <MdDelete />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReviewsDelete
                open={openDeleteModal}
                handleClose={() => setOpenDeleteModal(false)}
                handleDelete={handleConfirmDelete}
            />
        </div>
    );
}
