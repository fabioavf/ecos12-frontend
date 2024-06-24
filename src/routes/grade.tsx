import { useEffect, useState } from 'react';
import instance from '../axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Grade, GradeReturn } from '../interface/grade';

function ShowGrade() {
    const [grade, setGrade] = useState<Grade>();

    const { idGrade } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        instance.get<GradeReturn>(`/grade/${idGrade}`).then((response) => {
            setGrade(response.data.grade);
        });
    }, []);

    return (
        <>
            <main className='flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-slate-200 to-slate-500'>
                <div className='flex flex-col items-start gap-4 bg-white rounded shadow p-4 mx-16'>
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
                            <h1 className='font-medium text-2xl'>{grade?.curso}</h1>
                        </h1>
                    </div>

                    <div className='flex gap-4 overflow-x-scroll'>
                        {grade?.periodos.map((periodo) => (
                            <div key={periodo.idPeriodo} className='flex flex-col items-stretch gap-4'>
                                <h2 className='text-center'>{periodo.idPeriodo}</h2>
                                {periodo.disciplinas.map((disciplina) => (
                                    <a
                                        key={disciplina.codDisciplina}
                                        className='shadow p-2 rounded hover:scale-105 hover:text-blue-600 transition-all'
                                        href={`/disciplina/${disciplina.codDisciplina}`}
                                    >
                                        <h3 className='font-medium'>{disciplina.codDisciplina}</h3>
                                        <p className='text-xs text-wrap'>{disciplina.cargaHoraria} horas</p>
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default ShowGrade;
