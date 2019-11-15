export interface Alumno{
    id: string;
    nombre: string;
    edad?: number;
    genero?: string;
    idProfesor?: string[];
    idNota?: string[];
}