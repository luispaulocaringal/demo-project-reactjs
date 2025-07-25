import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-select-bs5';
import 'datatables.net-responsive-bs5';
import { useNavigate } from 'react-router-dom';

DataTable.use(DT);

function Table({ data, header }: { data:any, header:any }) {
  const navigate = useNavigate();
  return (
    <DataTable 
      data={ data } 
      className="table table-striped shadow"
      slots={{
        1: (data:any, row:any) => {
          return (
            <a className="btn-link" role="button" onClick={() => navigate(`/contact/${row[0]}`)}>
              {data}
            </a>
          )
        }
      }}
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