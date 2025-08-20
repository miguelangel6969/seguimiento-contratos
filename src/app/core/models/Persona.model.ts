export interface Persona {
  id_persona?: number; // opcional para creación
  nombre: string;
  telefono: string;
  correo: string;
  direccion: string;
  numero_documento: string; // Unificado en camelCase
  fechaCreacion: Date;    // opcional al crear
  fecha_nacimiento: Date | null;
  idTipoDocumento: number;
  genera_factura: boolean | string | null;
  responsable_iva: boolean | string | null;

  // Solo para creación
  usuario?: string;
  clave?: string;
  idRoles?: number[];
}

