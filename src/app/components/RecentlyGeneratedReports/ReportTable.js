/**
 * ReportTable Component
 *
 * This component renders a table displaying a list of reports.
 * Each report includes a date, a report name, and a download button.
 *
 * Props:
 *   - reports (Array): Array of report objects to be displayed in the table.
 */

'use client'
import ReportItem from './ReportItem.client';
const ReportTable = ({ reports }) => {
    return (
        <div className="overflow-x-auto bg-white rounded shadow-lg">
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600  tracking-wider">
                            Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600  tracking-wider">
                            Report Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600  tracking-wider">
                            Download
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report, index) => (
                        <ReportItem key={index} report={report} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportTable;