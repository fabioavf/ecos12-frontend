export interface GradeReturn {
    message: string;
    grade: Grade;
}

export interface Grade {
    _id: string;
    idGrade: string;
    curso: string;
    ano: number;
    periodos: Periodo[];
    curso_id: string;
}

export interface Periodo {
    idPeriodo: number;
    disciplinas: Disciplina[];
}

export interface Disciplina {
    codDisciplina: string;
    nome: string;
    cargaHoraria: number;
    preRequisitos: string;
    coRequisito: string;
    ementa: string;
}
