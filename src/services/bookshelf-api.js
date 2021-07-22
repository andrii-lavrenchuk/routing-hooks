const BASE_URL = 'http://localhost:4444';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getAuthors() {
  return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`);
}

export function getBooks() {
  return fetchWithErrorHandling(`${BASE_URL}/books`);
}

export function getBookById(bookId) {
  return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
}
