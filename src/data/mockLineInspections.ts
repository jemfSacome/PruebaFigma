// DATOS MOCK: Inspecciones asignadas por línea
export const mockLineInspections: Record<string, any[]> = {
  'line-001': [
    { id: '1', codigo: 'VI-001', nombre: 'Visual general', procedimiento: 'PROC-VI-001', responsable: 'M. García', fechaPrev: '20/01/2026', estado: 'realizada' },
    { id: '2', codigo: 'PM-001', nombre: 'Medición de espesores', procedimiento: 'PROC-PM-001', responsable: 'P. López', fechaPrev: '22/01/2026', estado: 'realizada' },
    { id: '3', codigo: 'RX-001', nombre: 'Radiografía de soldaduras', procedimiento: 'PROC-RX-001', responsable: 'J. Pérez', fechaPrev: '25/01/2026', estado: 'realizada' },
    { id: '4', codigo: 'LP-001', nombre: 'Líquidos penetrantes', procedimiento: 'PROC-LP-001', responsable: 'M. García', fechaPrev: '28/01/2026', estado: 'realizada' },
    { id: '5', codigo: 'US-001', nombre: 'Ultrasonidos convencional', procedimiento: 'PROC-US-001', responsable: 'A. Martínez', fechaPrev: '30/01/2026', estado: 'realizada' },
    { id: '6', codigo: 'HD-001', nombre: 'Prueba hidrostática', procedimiento: 'PROC-HD-001', responsable: 'P. López', fechaPrev: '02/02/2026', estado: 'realizada' },
    { id: '7', codigo: 'VI-002', nombre: 'Inspección dimensional', procedimiento: 'PROC-VI-002', responsable: 'M. García', fechaPrev: '05/02/2026', estado: 'realizada' },
    { id: '8', codigo: 'PM-002', nombre: 'Control geométrico', procedimiento: 'PROC-PM-002', responsable: 'J. Pérez', fechaPrev: '08/02/2026', estado: 'realizada' },
    { id: '9', codigo: 'HD-003', nombre: 'Prueba de estanqueidad', procedimiento: 'PROC-HD-003', responsable: 'P. López', fechaPrev: '12/02/2026', estado: 'pendiente' },
    { id: '10', codigo: 'PM-003', nombre: 'Verificación de tolerancias', procedimiento: 'PROC-PM-003', responsable: 'A. Martínez', fechaPrev: '15/02/2026', estado: 'pendiente' },
    { id: '11', codigo: 'VI-003', nombre: 'Inspección final', procedimiento: 'PROC-VI-003', responsable: 'M. García', fechaPrev: '18/02/2026', estado: 'pendiente' },
    { id: '12', codigo: 'LP-002', nombre: 'Partículas magnéticas', procedimiento: 'PROC-LP-002', responsable: 'J. Pérez', fechaPrev: '10/02/2026', estado: 'con_problemas' },
  ],
  'line-002': [
    { id: '13', codigo: 'VI-001', nombre: 'Visual general', procedimiento: 'PROC-VI-001', responsable: 'J. Pérez', fechaPrev: '21/01/2026', estado: 'realizada' },
    { id: '14', codigo: 'PM-001', nombre: 'Medición de espesores', procedimiento: 'PROC-PM-001', responsable: 'M. García', fechaPrev: '23/01/2026', estado: 'realizada' },
  ],
};
