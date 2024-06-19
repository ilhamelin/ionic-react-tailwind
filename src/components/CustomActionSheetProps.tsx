import React from "react";

interface Action {
  content: React.ReactNode;
  onClick: () => void;
}

interface CustomActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  actions: Action[];
}

const CustomActionSheet: React.FC<CustomActionSheetProps> = ({
  isOpen,
  onClose,
  actions,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-Negro bg-opacity-55 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-Blanco p-4 rounded-t-lg transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {actions.map((action, index) => (
          <button
            key={index}
            className="w-full text-left p-2 hover:bg-gray-200 font-font-family-light leading-7"
            onClick={action.onClick}
          >
            {action.content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomActionSheet;
