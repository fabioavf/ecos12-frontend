import { useEffect, useState } from 'react';
import instance from '../axios';
import { Grade, GradesReturn } from '../interface/grades';

function Root() {
    const [grades, setGrades] = useState<Grade[]>();

    useEffect(() => {
        instance.get<GradesReturn>('/grades').then((response) => {
            setGrades(response.data.grades);
        });
    }, []);

    return (
        <>
            <main className='flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-slate-200 to-slate-500'>
                <div className='flex flex-col items-start gap-4 w-full max-w-lg bg-white rounded shadow p-4'>
                    <h1 className='font-medium text-2xl'>Grades disponíveis:</h1>

                    <ul className='flex flex-col gap-4 w-full'>
                        {grades?.map((grade) => (
                            <a
                                href={`/${grade.idGrade}`}
                                className='flex items-center justify-between w-full px-2 py-4 rounded font-medium shadow cursor-pointer hover:scale-105 transition-all hover:text-blue-700'
                                key={grade.idGrade}
                            >
                                <span>{grade.curso}</span>
                                <span>{grade.ano}</span>
                            </a>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Root;
