// components/ConfirmationModal.js
import React from 'react';
import styles from './modal.module.css';

export default function Modal({ isOpen, onClose, onConfirm, message }:any) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <button className={styles.confirmButton} onClick={onConfirm}>Close</button>
        </div>
      </div>
    </div>
  );
}