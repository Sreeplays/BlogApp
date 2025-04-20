// components/ui/ConfirmationModal.jsx
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, title, message }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen &&
        <motion.div key="confirmation-modal" initial={{opacity:0, z: 0}} animate={{opacity: 1, z:1000}} exit={{opacity: 0, z: 0}} transition={{ duration: 0.3, ease: "easeInOut" }}  className="fixed z-[1000] inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center">
            <div>
                <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
                  <p className="text-sm text-gray-600 mb-6">{message}</p>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={onCancel}
                      className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onConfirm}
                      className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      Yes, Delete
                    </button>
                  </div>
                </div>
            </div>
        </motion.div>
      }

    </AnimatePresence>
  );
};

export default ConfirmationModal;
