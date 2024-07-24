import React from 'react';

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

const HoursListing = ({ hours }) => {
    const today = (new Date()).getDay();

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
            <td className="pr-6">{day.charAt(0).toUpperCase() + day.slice(1)}</td>
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

const OpenStatus = ({hours}) => {
    const info = calculateOpenStatus(hours);
    console.log(info);
    const timeUntil = ((Time(info.until) - Time(new Date())) % (24 * 60 * 60 * 1000)) / (1000 * 60);
    console.log(timeUntil);

    if (info.status === 'closed') {
        return (
            <>
                <span className="text-danger font-bold">Closed&nbsp;</span>
                {info.until &&
                    <> Opens {info.day ?? ''} {formatTimeString(info.until)}</>
                }
            </>
        )
    } else if (info.status === 'open') {
        return (
            <>
                { timeUntil > 45 ?
                    <>
                        <span className="text-success font-bold">Open&nbsp;</span> 
                        <> Closes at </>
                    </>
                    :
                    <>
                        <span className="text-warning font-bold">Closes soon</span> 
                        <> at </>
                    </>
                }
                {formatTimeString(info.until)}
            </>
        )
    }
}

const Time = (time) => {
    if (typeof time === 'string') {
        return new Date(`2000-01-01T${time}-06:00`);
    }

    if (typeof time === 'object') {
        const a = new Date(time.getTime());
        a.setFullYear(2000, 0, 1);
        return a;
    }
}

function calculateOpenStatus(hours) {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = Time(now);
    const today = days[currentDay];

    // if business is open all day
    if (hours[today].allDay) {
        return {
            status: 'open24',
        };
    }

    // if business is closed today, or if the business has not opened yet today
    if (hours[today].closed || currentTime < Time(hours[today].hours[0].from)) {
        const yesterday = days.at(currentDay-1);

        // check yesterday for overhanging time
        const yesterdayFrom = Time(hours[yesterday].hours?.at(-1).from);
        const yesterdayTo = Time(hours[yesterday].hours?.at(-1).to);

        // if time overhangs
        if (yesterdayTo < yesterdayFrom) {
            yesterdayTo.setDate(yesterdayTo.getDate() + 1);

            if (currentTime < yesterdayTo) {
                return {
                    status: 'open',
                    from: hours[yesterday].hours?.at(-1).from,
                    until: hours[yesterday].hours?.at(-1).to,
                };
            }
        }

        return nextOpenTime(hours, now);
    }

    // business is open today -- is it open now?
    for (const range of hours[today].hours) {
        const from = Time(range.from);
        const to = Time(range.to);

        if (to < from) {
            to.setDate(to.getDate() + 1);
        }

        if (from < currentTime && currentTime < to) {
            return {
                status: 'open',
                from: range.from,
                until: range.to,
            };
        }
    }

    return nextOpenTime(hours, now);
}

function nextOpenTime(hours, now) {
    const today = days[now.getDay()];
    const currentTime = Time(now);

    if (!hours[today].closed) {
        for (const {from} of hours[today].hours) {
            if (currentTime < Time(from)) {
                return {
                    status: 'closed',
                    until: from,
                    // day: today,
                }
            }
        }
    }

    // i.e. start tomorrow, end 7 days from now
    for (let i = 1; i < 7; i++) {
        const day = days.at(today + i - 7);
        
        if (!hours[day].closed) {
            return {
                status: 'closed',
                until: hours[day].allDay ? '00:00' : hours[day].hours[0].from,
                day,
            };
        }
    }

    // an edge case
    return { status: 'closed' };
}

function formatTimeString(time) {
    return Time(time)
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
    OpenStatus,
}