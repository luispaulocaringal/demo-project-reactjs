import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-select-bs5';
import 'datatables.net-responsive-bs5';

DataTable.use(DT);

function Table({ data }: { data:any }) {
return (
  <DataTable data={ data } className="table table-striped shadow">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
      </tr>
    </thead>
  </DataTable>
)
}

export default Table;