// components/ReportPanel.js

const ReportPanel = ({ children }) => {
    return (
        <div className="container mx-auto mt-5 bg-white rounded shadow-lg">
            <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">Recently Generated Reports</h2>
            </div>
            {children}
        </div>
    );
};

export default ReportPanel;