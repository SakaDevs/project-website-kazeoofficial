// components/AutoPopUp.tsx
"use client"
import { useState, useEffect } from 'react';


interface AutoPopUpProps {
  text: string;
  popupId: string; // ID unik untuk pop-up ini, digunakan di localStorage
}

const AutoPopUp: React.FC<AutoPopUpProps> = ({ text, popupId }) => {
  const [isVisible, setIsVisible] = useState(false); // Awalnya sembunyikan
  const [doNotShowToday] = useState(false);

  useEffect(() => {
    // Jalankan ini hanya di sisi klien
    if (typeof window !== "undefined") {
      const lastPopupDismissedDate = localStorage.getItem(`popupDismissed_${popupId}`);
      const today = new Date().toDateString();

      if (lastPopupDismissedDate !== today) {
        // Jika belum ditutup hari ini, tampilkan pop-up
        setIsVisible(true);
      }
    }
  }, [popupId]); // Dependensi pada popupId jika ada lebih dari satu pop-up

  // Efek untuk menambahkan atau menghapus kelas 'no-scroll' pada body
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isVisible) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.classList.remove('no-scroll');
      }
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    if (doNotShowToday) {
      localStorage.setItem(`popupDismissed_${popupId}`, new Date().toDateString());
    }
  };


  if (!isVisible) return null; // Jika tidak terlihat, jangan render apa-apa

  return (
    <div className="overlay">
      <div className="popup">
        <button className="closeButton" onClick={handleClose}>
          &times;
        </button>

        <p className="popupText">Terimakasih telah mendukung KazeoOfficial sampai saat ini!, saya selaku Kazeo izin pamit undur diri dari sini, semoga kalian sehat selalu!</p>
        <p className="popupText">{text}</p>
      </div>
    </div>
  );
};

export default AutoPopUp;