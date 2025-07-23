export interface Persona {
  id_persona: number;
  nombre: string;
  telefono: string;
  correo: string;
  direccion: string;
  numero_documento: string | null;
  fechaCreacion: Date;
  id_tipo_documento: number;
}
