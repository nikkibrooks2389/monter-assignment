/**
 * ReportItem Component
 *
 * This component represents a single row within the report table,
 * displaying the date, report name, and a download button for each report.
 *
 * Props:
 *   - report (Object): The report object containing the details to display.
 *     - date (String): Date when the report was generated.
 *     - reportName (String): Name of the report.
 *  *     - downloadUrl (String): URL from which the report can be downloaded.
 */
import { getDate } from '../../util/getDate';
import { getTime } from '../../util/getTime';

const ReportItem = ({ report }) => {

    const handleDownload = () => {
        window.open(report.downloadUrl, '_blank');
    };

    return (
        <tr className="">
            <td className="px-5 py-3  bg-white">
                {/* Date */}
                <div className="text-gray-900 whitespace-no-wrap">{getDate(report.date)}</div>
                <div className="text-gray-300 text-xs">{getTime(report.date)}</div>
            </td>
            <td className="px-5 py-3  bg-white">
                {/* Report Name */}
                <div className="text-gray-900 whitespace-no-wrap">{report.reportName}</div>
            </td>
            <td className="px-14 py-3  bg-white text-right">
                {/* Download Button */}
                <button onClick={handleDownload} className="inline-block text-blue-600 hover:text-blue-800">
                    <img src="/download.png" alt="Download" className="w-8 h-8" />
                </button>
            </td>
        </tr>
    );
};

export default ReportItem;