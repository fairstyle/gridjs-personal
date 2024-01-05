export default {
  search: {
    placeholder: '🔍 Buscar...',
  },
  sort: {
    sortAsc: 'Ordenar la columna en orden ascendente',
    sortDesc: 'Ordenar la columna en orden descendente',
  },
  pagination: {
    previous: '⬅ ',
    next: '➡ ',
    navigate: (page, pages) => `Página ${page} de ${pages}`,
    page: (page) => `Página ${page}`,
    showing: '📋 Registros desde el',
    of: '|',
    to: 'al',
    results: 'registros',
  },
  loading: 'Cargando...',
  noRecordsFound: 'No se encontraron registros',
  error: 'Se produjo un error al recuperar datos',
};
