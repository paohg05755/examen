const BASE_URL = 'https://api-items-icel-production.up.railway.app';

// 1. Obtener todos los ítems
export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  return await response.json();
};

// 2. Obtener un ítem por ID
export const getItemById = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`);
  return await response.json();
};

// 3. Crear un nuevo ítem
export const createItem = async (item) => {
  const response = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};

// 4. Actualizar un ítem
export const updateItem = async (id, item) => {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return await response.json();
};

// 5. Eliminar un ítem
export const deleteItem = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
