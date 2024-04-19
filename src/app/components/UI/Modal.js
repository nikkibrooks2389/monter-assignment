/**
 * Modal Component
 *
 * This component handles the display and animation of modal content.
 * It uses a fixed position to overlay the content area and includes a backdrop to
 * emphasize focus on the modal content.
 *
 * Props:
 *   - isOpen (Boolean): Controls the visibility of the modal.
 *   - className (String): Custom CSS classes to apply for additional styling.
 *   - style (Object): Inline styles for custom styling.
 *   - children (ReactNode): Content of the modal.
 *   - headerContent (ReactNode): Content for the modal's header.
 */
import React from 'react';

const Modal = ({ isOpen, className, style, children, headerContent }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-gray-300 bg-opacity-100">
            <div className={`bg-white rounded-lg shadow-lg ${className}`} style={style}>
                {/* Modal Header */}
                {headerContent && (
                    <div className="flex justify-between items-center">
                        {headerContent}
                    </div>
                )}
                {/* Modal Body */}
                <div className="flex flex-col h-full">
                    {children}
                </div>
                {/* Optionally, you can add Modal Footer here */}
            </div>
        </div>
    );
};

export default Modal;