import React from 'react';

const Month = ({data}) => {
    const month = [...new Set(data.map(match => match.month))]
    console.log(month);
    return (
        <div id='month'>
            <ul>
                {month.map((month, index) => 
                    <li month={month} key={index}>
                        <p>{month}</p>
                        <p></p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Month;