import { API } from 'src/common/API';
import * as actionType from 'src/common/redux/actionsType/admin';
import { toast } from 'react-toastify';

export const setAllData = data => ({
  type: actionType.SET_ALL_DATA,
  data,
});

export const setSmallData = data => ({
  type: actionType.SET_SMALL_DATA,
  data,
});

export const setMediumData = data => ({
  type: actionType.SET_MEDIUM_DATA,
  data,
});

export const setLargeData = data => ({
  type: actionType.SET_LARGE_DATA,
  data,
});

export const getAllData = () => async dispatch => {
  const tokenAdmin = localStorage.getItem('tokenAdmin');
  if (!tokenAdmin) {
    toast.error('Silakan login terlebih dahulu');
    window.location.assign('admin/login');
  }
  try {
    const response = await API.get('admin/v2/car?page=1&pageSize=50', tokenAdmin);
    dispatch(setAllData(response.data.cars));
    dispatch(setSmallData(null));
    dispatch(setMediumData(null));
    dispatch(setLargeData(null));
  } catch (error) {
    toast.error(error);
  }
};

export const getSmallData = () => async dispatch => {
  const tokenAdmin = localStorage.getItem('tokenAdmin');
  try {
    const response = await API.get('admin/v2/car?category=small&page=1&pageSize=10', tokenAdmin);
    dispatch(setSmallData(response.data.cars));
    dispatch(setAllData(null));
    dispatch(setMediumData(null));
    dispatch(setLargeData(null));
  } catch (error) {
    toast.error(error);
  }
};

export const getMediumData = () => async dispatch => {
  const tokenAdmin = localStorage.getItem('tokenAdmin');
  try {
    const response = await API.get('admin/v2/car?category=medium&page=1&pageSize=10', tokenAdmin);
    dispatch(setMediumData(response.data.cars));
    dispatch(setSmallData(null));
    dispatch(setAllData(null));
    dispatch(setLargeData(null));
  } catch (error) {
    toast.error(error);
  }
};

export const getLargeData = () => async dispatch => {
  const tokenAdmin = localStorage.getItem('tokenAdmin');
  try {
    const response = await API.get('admin/v2/car?category=large&page=1&pageSize=10', tokenAdmin);
    dispatch(setLargeData(response.data.cars));
    dispatch(setSmallData(null));
    dispatch(setMediumData(null));
    dispatch(setAllData(null));
  } catch (error) {
    toast.error(error);
  }
};

export const deleteAllData = () => dispatch => {
  dispatch(setLargeData(null));
  dispatch(setSmallData(null));
  dispatch(setMediumData(null));
  dispatch(setAllData(null));
};
