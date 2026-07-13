const BASE_URL = 'https://api-items-icel-production.up.railway.app';

export const getItems = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  return response.json();
};

export const getItemById = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`);
  return response.json();
};

export const createItem = async (item) => {
  const response = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const updateItem = async (id, item) => {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.json();
};

export const deleteItem = async (id) => {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
  return response;
};
