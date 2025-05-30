import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { TbEyeSearch } from "react-icons/tb";
import EditModal from '../../Pages/Teachers/EditModal/EditModal';

export default function Table() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleAddClick = () => {
        navigate('/teachers/add');
    };

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <section className='teachers'>
            <div className="container">
                <div className="mentors">
                    <div className="mentors__header">
                        <h2 className="mentors__title">Менторы</h2>
                        <button className="button" onClick={handleAddClick}>Добавить</button>
                    </div>

                    <table className="mentors__table">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Имя</th>
                                <th>Телефон</th>
                                <th>Курс</th>
                                <th>ID (пример)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Воронина Маргарита</td>
                                <td>500-00-00-00</td>
                                <td>Английский язык</td>
                                <td>12345678</td>
                                <td className="mentors__actions">
                                    <button className="mentors__action-btn"><TbEyeSearch title="Смотреть" /></button>
                                    <button className="mentors__action-btn" onClick={handleOpen}><BiEditAlt title="Редактировать" /></button>
                                    <button className="mentors__action-btn"><MdDeleteForever title="Удалить" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                        <Pagination count={10} color="primary" />
                    </div>

                    {/* Модалка */}
                    <EditModal open={isOpen} handleClose={handleClose} />
                </div>
            </div>
        </section>
    );
}
