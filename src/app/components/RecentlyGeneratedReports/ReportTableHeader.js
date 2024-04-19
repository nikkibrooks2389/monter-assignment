/**
 * ReportsTableHeader Component
 *
 * Provides the header layout for the Reports table. This includes navigation
 * and action buttons like settings and close.
 *
 * Props:
 *   - setModalOpen (Function): Function to control the visibility of the modal.
 */
import React from 'react';
import Image from 'next/image';
import settingsIcon from '../../../../public/settingsIcon.png';
import closeIcon from '../../../../public/closeIcon.png';

const ReportsTableHeader = ({ setModalOpen }) => {
    return (
        <div className="flex justify-between items-center w-full p-4">
            <div className="flex-1"></div>
            <h2 className="text-xl font-semibold text-center flex-1">Recently Generated Reports</h2>
            <div className="flex flex-1 justify-end mr-5">
                <button className="mr-4">
                    <Image src={settingsIcon} alt="Settings Icon" width={34} height={34} />
                </button>
                {/* Close button */}
                <button onClick={() => setModalOpen(false)} className="text-gray-600 hover:text-gray-900">
                    <Image src={closeIcon} alt="Close Icon" width={34} height={34} />
                </button>
            </div>
        </div>
    );
};

export default ReportsTableHeader;