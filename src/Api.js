import axios from 'axios';

const token = process.env.REACT_APP_SECRET_KEY;

export const signUp = async (endpoint, payload) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
    payload,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_USER_API_KEY,
        authorizationToken: token
      }
    }
  );
};

export const forgetPasswordOtp = async (endpoint, payload) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      payload,
      {
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const login = async (endpoint, payload) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
    payload,
    {
      withCredentials: true,
      headers: {
        'x-api-key': process.env.REACT_APP_USER_API_KEY,
        authorizationToken: token
      }
    }
  );
};

export const googleLogin = async (endpoint, payload) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
    payload,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_USER_API_KEY,
        authorizationToken: token
      }
    }
  );
};

export const regenerateToken = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const forgetPassword = async (endpoint, payload) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      payload,
      {
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const resetPassword = async (endpoint, payload) => {
  try {
    return await axios.put(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      payload,
      {
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const activateUser = async (endpoint, payload) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
    payload,
    {
      withCredentials: true,
      headers: {
        'x-api-key': process.env.REACT_APP_USER_API_KEY,
        authorizationToken: token
      }
    }
  );
};

export const activateOtp = async (endpoint, payload) => {
  return await axios.post(
    `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
    payload,
    {
      withCredentials: true,
      headers: {
        'x-api-key': process.env.REACT_APP_USER_API_KEY,
        authorizationToken: token
      }
    }
  );
};

export const createItem = async (endpoint, payload) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_BASE_URL_ITEM}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ITEM_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const updateItem = async (endpoint, payload) => {
  try {
    return await axios.put(
      `${process.env.REACT_APP_BASE_URL_ITEM}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ITEM_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const deleteItem = async (endpoint) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_BASE_URL_ITEM}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ITEM_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const editUser = async (endpoint, payload) => {
  try {
    return await axios.put(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const getUserActivate = async (endpoint, payload) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const removeToken = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_USER}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_USER_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllRoles = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_ROLE}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ROLE_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllItems = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_ITEM}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ITEM_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const createRole = async (endpoint, payload) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_BASE_URL_ROLE}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ROLE_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const updateRole = async (endpoint, payload) => {
  try {
    return await axios.put(
      `${process.env.REACT_APP_BASE_URL_ROLE}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ROLE_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const getRole = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_ROLE}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ROLE_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const delRole = async (endpoint) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_BASE_URL_ROLE}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ROLE_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const changeRole = async (endpoint, payload) => {
  try {
    return await axios.put(
      `${process.env.REACT_APP_BASE_URL_PERMISSION}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_ROLE_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const getAllPermissions = async (endpoint) => {
  try {
    return await axios.get(
      `${process.env.REACT_APP_BASE_URL_PERMISSION}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_PERMISSION_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const createPermission = async (endpoint, payload) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_BASE_URL_PERMISSION}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_PERMISSION_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const updatePermission = async (endpoint, payload) => {
  try {
    return await axios.put(
      `${process.env.REACT_APP_BASE_URL_PERMISSION}/${endpoint}`,
      payload,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_PERMISSION_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};

export const delPermission = async (endpoint) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_BASE_URL_PERMISSION}/${endpoint}`,
      {
        withCredentials: true,
        headers: {
          'x-api-key': process.env.REACT_APP_PERMISSION_API_KEY,
          authorizationToken: token
        }
      }
    );
  } catch (error) {
    throw new Error('Network Error');
  }
};
