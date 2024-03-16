import React from 'react';

const Hours = ({ hours }) => {
    const today = (new Date()).getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    console.log(today);

    return (
        <table className="border-collapse border-none">
            <tbody>
                <tr className="sr-only">
                    <th>Day</th>
                    <th>Hours</th>
                </tr>

                {hours &&
                    days.map((day, i) => (<DateRow day={day} key={i} hours={hours[day]} isToday={i === today} />))
                }
            </tbody>
        </table>
    );
}

function DateRow({ day, hours, isToday }) {
    const from = new Date('1970-01-01T' + hours.from + '-06:00')
    .toLocaleTimeString('en-US',
        {hour12:true,hour:'numeric',minute:'numeric'}
    );
    const to = new Date('1970-01-01T' + hours.to + '-06:00')
    .toLocaleTimeString('en-US',
        {hour12:true,hour:'numeric',minute:'numeric'}
    );

    return (
        <tr className={ isToday ? 'font-bold' : ''}>
            <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
            <td>{from} &ndash; {to}</td>
        </tr>
    );
}

export default Hours;