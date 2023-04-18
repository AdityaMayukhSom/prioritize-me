export const BASE_URL = 'http://localhost:3000';

/** fetch this url in get method to get all the todos available in database  */
export const ALL_TODO_URL = BASE_URL + '/api/todo/all';

/** require to concatenate only the id to delete, use with delete method */
export const DELETE_TODO_BY_ID_URL = BASE_URL + '/api/todo/'