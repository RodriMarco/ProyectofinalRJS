import React from 'react';

const HorariosItem = (props) => {
    const { time, day1, day2, day3, day4, day5, day6, body } = props;

    return (
        <tbody>
            <tr>
                <th>{time}</th>
                <td>{day1}</td>
                <td>{day2}</td>
                <td>{day3}</td>
                <td>{day4}</td>
                <td>{day5}</td>
                <td>{day6}</td>
            </tr>
        <div dangerouslySetInnerHTML={{__html: body}}/>
        </tbody>
    )
}

export default HorariosItem;