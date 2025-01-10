
import Image from "next/image";

export default function HomePageContent() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        {/* Summary Cards */}
        <div className="card p-3 mx-2">
          <h5>Total Transactions in 5 Days</h5>
          <p className="text-danger">20</p>
        </div>
        <div className="card p-3 mx-2">
          <h5>Total No. of Active Cases</h5>
          <p className="text-primary">35</p>
        </div>
      </div>
      <div className="mt-4">
        <h5>All Transaction List</h5>
        <div className="card p-3">
          {/* Task List Table */}
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Aging</th>
                <th>Entry Creation Date</th>
                <th>Case Type</th>
                <th>Case Ref No.</th>
                <th>UEN</th>
                <th>Company Name</th>
                <th>Total Amount</th>
                <th>Case Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8 Days</td>
                <td>2023-01-01</td>
                <td>Refund</td>
                <td>REFUND20221231_000001</td>
                <td>202012345A</td>
                <td>Company Name 1</td>
                <td>$100.00</td>
                <td>New Case</td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
