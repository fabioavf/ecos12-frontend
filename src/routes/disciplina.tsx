import { useEffect, useState } from 'react';
import instance from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Disciplina, DisciplinaReturn } from '../interface/disciplina';

function ShowDisciplina() {
    const [disciplina, setDisciplina] = useState<Disciplina>();

    const { codDisciplina } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        instance.get<DisciplinaReturn>(`/disciplina/${codDisciplina}`).then((response) => {
            setDisciplina(response.data.disciplina);
        });
    }, []);

    return (
        <>
            <main className='flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-slate-200 to-slate-500'>
                <div className='flex flex-col items-start gap-4 w-full max-w-4xl bg-white rounded shadow p-4'>
                    <div className='flex items-center gap-4'>
                        <button
                            className='px-1 text-blue-600 hover:scale-110 transition-all'
                            onClick={() => navigate(-1)}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2.5}
                                stroke='currentColor'
                                className='size-6'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                            </svg>
                        </button>
                        <h1 className='font-medium text-2xl'>
                            {disciplina?.codDisciplina} - {disciplina?.nome}
                        </h1>
                    </div>

                    <div className='flex gap-8'>
                        {disciplina?.preRequisitos && (
                            <p>
                                <strong>Pré-requisitos: </strong>
                                {disciplina.preRequisitos}
                            </p>
                        )}
                        {disciplina?.coRequisito && (
                            <p>
                                <strong>Co-requisito: </strong>
                                {disciplina.coRequisito}
                            </p>
                        )}
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-medium'>Ementa</h2>
                        <p>{disciplina?.ementa}</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-xl font-medium'>Carga horária</h2>
                        <p>{disciplina?.cargaHoraria} horas</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ShowDisciplina;
