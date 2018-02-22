import React from 'react';

const AllBeans = ({ beans }) => (
    <div>
        <ul>
            { beans.map((bean, idx) => <li key={idx}>{bean.name}</li>) }
        </ul>
    </div>
)

export default AllBeans;