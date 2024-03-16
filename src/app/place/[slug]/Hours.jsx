import React from 'react';

const HoursListing = ({ hours }) => {
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
                    days.map((day, i) => (<DateRow day={day} key={i} info={hours[day]} isToday={i === today} />))
                }
            </tbody>
        </table>
    );
}

function DateRow({ day, info, isToday }) {
    return (
        <tr className={ isToday ? 'font-bold' : ''}>
            <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
            <td>
                { info.closed ? (
                    <div className="m-0">Closed</div>
                ) : (
                    info.hours.map(({from, to}) => (
                        <div className="m-0">{formatTimeString(from)}&ndash;{formatTimeString(to)}</div>
                    ))
                )}
            </td>
        </tr>
    );
}

function formatTimeString(time) {
    return new Date(`1970-01-01T${time}-06:00`)
    .toLocaleTimeString(
        'en-US',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
        },
    );

}

export {
    HoursListing,
}