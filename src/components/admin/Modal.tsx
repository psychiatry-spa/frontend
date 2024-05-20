import React from 'react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div onClick={handleBackgroundClick} className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-4 text-primary font-bold">Are you sure?</h2>
        <div className="block w-max mx-auto">
          <div className="flex justify-end space-x-4">
            <button onClick={onClose} className="bg-primary-700 text-white px-4 py-2 rounded">No</button>
            <button onClick={onConfirm} className="bg-coral text-white px-4 py-2 rounded">Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal