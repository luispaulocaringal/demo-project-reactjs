import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-select-bs5';
import 'datatables.net-responsive-bs5';

DataTable.use(DT);

function Table({ data, header }: { data:any, header:any }) {
return (
  <DataTable 
    data={ data } 
    className="table table-striped shadow"
    >
    <thead>
      <tr>
        { header }
      </tr>
    </thead>
  </DataTable>
)
}

export default Table;