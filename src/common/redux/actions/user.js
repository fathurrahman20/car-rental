import { API } from 'src/common/API';
import * as actionType from '../actionsType/user';
import { toast } from 'react-toastify';

export const setForm = (formType, formValue) => ({
  type: actionType.SET_FORM,
  formType,
  formValue,
});

export const postToAPIRegister = data => async () => {
  const dataUser = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  await API.post('customer/auth/register', dataUser)
    .then(response => {
      if (response.status === 201) {
        toast.success('Akun berhasil dibuat');
        setTimeout(() => {
          window.location.assign('login');
        }, 2000);
      }
    })
    .catch(e => {
      toast.error(e.data.message);
    });
};

export const postToAPILogin = data => async () => {
  const dataUser = {
    email: data.email,
    password: data.password,
  };

  await API.post('customer/auth/login', dataUser)
    .then(response => {
      if (response.status === 201 && response.data.role === 'Admin') {
        return toast.error('Hanya customer yang bisa login');
      }
      if (response.status === 201 && response.data.role === 'Customer') {
        localStorage.setItem('tokenCustomer', response.data.access_token);
        toast.success('Login Berhasil');
        setTimeout(() => {
          window.location.assign('/');
        }, 800);
      }
    })
    .catch(e => {
      toast.error(e.data.message);
    });
};

export const postToAPILoginAdmin = data => async () => {
  const dataUser = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  await API.post('admin/auth/login', dataUser)
    .then(response => {
      if (response.status === 201 && response.data.role !== 'Admin')
        toast.error('Hanya admin yang bisa login');
      if (response.status === 201 && response.data.role === 'Admin') {
        localStorage.setItem('tokenAdmin', response.data.access_token);
        toast.success('Login berhasil');
        window.location.assign('/admin');
      }
    })
    .catch(e => {
      toast.error(e.data.message);
    });
};
