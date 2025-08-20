export interface TipoAmbiente {
  fechaCreacion: string;      // "2025-10-25"
  idValorParametro: number;   // 5
  nombre: string;             // "DESARROLLO"
  idParametro: number;        // 5
}

export interface Ambiente {
  idAmbiente: number;         // 2
  servidor: string;           // "10.10.2.11"
  lenguajeProgramacion: string; // "JAVA (Sprint BOOT)"
  baseDatos: string;          // "ORACLE"
  servirodBaseDatos: string;  // "10.2.2.2"
  idSistema: number;          // 1
  id_tipo_ambiente: number;   // 5
  tipo_ambiente: TipoAmbiente;
}

export interface Sistema {
  idSistema: number;          // 1
  nombre: string;             // "CUN (Operadores)"
  ambientes: Ambiente[];
}

