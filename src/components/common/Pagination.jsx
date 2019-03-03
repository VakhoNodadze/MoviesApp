import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    const { pageSize, itemsCount, onPageChange, currentPage } = props;

    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            {pages.map(page =>
                <li key={page}
                    className={page === currentPage ? 'page-item active' : 'page-item'}>
                    <p className="page-link" onClick={() => onPageChange(page)}>
                        {page}
                    </p>
                </li>)
            }
        </ul>
    </nav>
}

export default Pagination;