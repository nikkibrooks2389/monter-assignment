/**
 * ReportTableWrapper Component
 *
 * This component acts as a container for the report table and associated controls within the application.
 * It is designed to be used inside the Modal component, providing a styled panel to display the report list
 * and pagination controls.
 *
 * Props:
 *   - children (ReactNode): Child components that are rendered inside the wrapper, typically the report table
 *     and pagination components.
 */
// components/RecentlyGeneratedReports/ReportTableWrapper.js
const ReportTableWrapper = ({ children }) => {
    return (
        <div className="flex flex-col h-full" style={{ minHeight: "85vh", maxHeight: "85vh", width: '90vw' }}>
            {children}
        </div>
    );
};

export default ReportTableWrapper;