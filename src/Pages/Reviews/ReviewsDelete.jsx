import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default function ReviewsDelete({ open, handleClose, handleDelete }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    Удалить отзыв?
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Вы уверены, что хотите удалить этот отзыв? Это действие нельзя отменить.
                </Typography>
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                    <Button onClick={handleClose} variant="outlined">Отмена</Button>
                    <Button onClick={handleDelete} variant="contained" color="error">Удалить</Button>
                </div>
            </Box>
        </Modal>
    );
}
