export interface DisciplinaReturn {
    message: string;
    disciplina: Disciplina;
}

export interface Disciplina {
    _id: string;
    codDisciplina: string;
    nome: string;
    cargaHoraria: number;
    preRequisitos: string;
    coRequisito: string;
    ementa: string;
    curso_id: string;
}
