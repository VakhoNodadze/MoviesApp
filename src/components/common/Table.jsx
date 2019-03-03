import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


const table = (props) => {
    const { columns, sortColumn, onSort, data } = props;
    
    return (
        <table className="table table-hover">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />
            <TableBody data={data} columns={columns} />
        </table>);
}

export default table;