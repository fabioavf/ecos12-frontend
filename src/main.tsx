import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShowGrade from './routes/grade.tsx';
import ShowDisciplina from './routes/disciplina.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/:idGrade',
        element: <ShowGrade />,
    },
    {
        path: '/disciplina/:codDisciplina',
        element: <ShowDisciplina />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
