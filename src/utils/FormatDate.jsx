export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
};

export function formatDateLong(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const formattedDate = `${parseInt(day, 10)} ${
    months[parseInt(month, 10) - 1]
  } ${year}`;

  return formattedDate;
}

export const dateFormat = (dateString) => {
  const date = new Date(dateString);

  // Dapatkan tanggal, bulan, dan tahun dari objek Date
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // January dimulai dari 0
  const yyyy = date.getFullYear();

  // Gabungkan tanggal, bulan, dan tahun dengan tanda "-" sebagai pemisah
  return dd + '-' + mm + '-' + yyyy;
};
