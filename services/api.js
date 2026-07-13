// Definición de la URL base según la instrucción del punto 3
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

// Obtener todos los ítems
export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  return response.json();
};

// Obtener un ítem por su ID
export const getItemById = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`);
  return response.json();
};

// Crear un nuevo ítem
// IMPORTANTE: Recuerda agregar tus iniciales en el título o descripción al llamar a esta función
export const createItem = async (item) => {
  const response = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return response.json();
};

// Actualizar un ítem existente
export const updateItem = async (id, item) => {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return response.json();
};

// Eliminar un ítem
export const deleteItem = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Función adicional para probar el estado (Punto 4 del examen)
export const checkHealth = async () => {
  const response = await fetch(`${BASE_URL}/health`);
  return response.json();
};
