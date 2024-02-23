import { toast } from 'react-toastify';

export const successNotification = (text) => {
  toast.success(`${text} berhasil dikirim !`);
};

export const errorNotification = (text) => {
  toast.error(`${text} gagal dikirim !`);
};
