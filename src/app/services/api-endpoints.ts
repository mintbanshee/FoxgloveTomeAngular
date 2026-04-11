// src/app/services/api-endpoints.ts

// this file defines the API endpoints all in one place


// base URL for the API endpoints to keep everything organized and easy to read
const BASE_URL = 'http://localhost/FoxgloveTome/api/';

export const API = {

  entries: {
    read: `${BASE_URL}entries/read.php`,
    create: `${BASE_URL}entries/create.php`,
    update: `${BASE_URL}entries/update.php`,
    delete: `${BASE_URL}entries/delete.php`
  },

  auth: {
    login: `${BASE_URL}auth/login.php`,
    signup: `${BASE_URL}auth/signup.php`,
    logout: `${BASE_URL}auth/logout.php`
  },

  moods: {
    read: `${BASE_URL}moods/read.php`,
  }

} as const; 
// using 'as const' to make the API object read-only and prevent accidental modifications