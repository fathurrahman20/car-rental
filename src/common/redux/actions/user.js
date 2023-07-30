import { API } from "../../API";
import * as actionType from "../actionsType/user";
import { toast } from "react-toastify";

export const setForm = (formType, formValue) => ({
  type: actionType.SET_FORM,
  formType,
  formValue,
});

export const postToAPIRegister = (data) => async () => {
  const form = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  await API.post("customer/auth/register", form)
    .then((response) => {
      if (response.status === 201) {
        toast.success("Akun berhasil dibuat");
        setTimeout(() => {
          window.location.assign("login");
        }, 2000);
      }
    })
    .catch((e) => {
      toast.error(e.data.message);
    });
};

export const postToAPILoginAdmin = (data) => async () => {
  const form = JSON.stringify({
    email: data.email,
    password: data.password,
  });

  await API.post("admin/auth/login", form)
    .then((response) => {
      if (response.data.role !== "Admin")
        toast.error("Hanya admin yang bisa login");
      if (response.data.role === "Admin" && response.status === 201) {
        localStorage.setItem("tokenAdmin", response.data.access_token);
        toast.success("Login berhasil");
      }
    })
    .catch((e) => {
      toast.error(e.data.message);
    });
};
