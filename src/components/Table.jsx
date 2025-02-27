import React from 'react';

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead className='bg-[#004733] text-white'>
                    <tr>
                        <th>State</th>
                        <th>Median Effective Property Tax Rate</th>
                        <th>Mean Effective Property Tax Rate</th>
                        <th>Median Home Value</th>
                        <th>Median Property Taxes Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>AL</td>
                        <td>0.41%</td>
                        <td>0.40%</td>
                        <td>$157,100</td>
                        <td>$646</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <td>AK</td>
                        <td>1.23%</td>
                        <td>1.04%</td>
                        <td>$282,800</td>
                        <td>$3464</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <td>AZ</td>
                        <td>0.62%</td>
                        <td>0.63%</td>
                        <td>$265,600</td>
                        <td>$1648</td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                        <td>AR</td>
                        <td>0.62%</td>
                        <td>0.64%</td>
                        <td>$142,100</td>
                        <td>$878</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;