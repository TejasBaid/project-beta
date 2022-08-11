import React from 'react';
import { useState } from 'react';
import "./FilterTable.scss";

export const FilterTable = () => {
    const toppers12th = [
        {
            name: "Udit Yadav",
            class: "12",
            section: "E",
            s1: "100",
            s2: "100",
            s3: "100",
            s4: "100",
            s5: "100"
        },
        {
            name: "Simar Tandon",
            class: "12",
            section: "B",
            s1: "100",
            s2: "100",
            s3: "100",
            s4: "100",
            s5: "100"
        },
        {
            name: "Stuti Kathuria",
            class: "12",
            section: "J",
            s1: "100",
            s2: "98",
            s3: "100",
            s4: "99",
            s5: "99"
        },
        {
            name: "Ashmit Sharma",
            class: "12",
            section: "J",
            s1: "98",
            s2: "100",
            s3: "100",
            s4: "97",
            s5: "99"
        },
        {
            name: "Riddhi Aggarwal",
            class: "12",
            section: "C",
            s1: "99",
            s2: "97",
            s3: "98",
            s4: "99",
            s5: "97"
        },
        {
            name: "Aadi Jain",
            class: "12",
            section: "J",
            s1: "100",
            s2: "95",
            s3: "99",
            s4: "100",
            s5: "96"
        },
        {
            name: "Navye Garg",
            class: "12",
            section: "F",
            s1: "100",
            s2: "99",
            s3: "99",
            s4: "94",
            s5: "97"
        },
        {
            name: "Adit Magotra",
            class: "12",
            section: "K",
            s1: "97",
            s2: "94",
            s3: "100",
            s4: "96",
            s5: "97"
        },
        {
            name: "Vidushi Jain",
            class: "12",
            section: "H",
            s1: "98",
            s2: "96",
            s3: "95",
            s4: "93",
            s5: "97"
        },
        {
            name: "Paavan Gupta",
            class: "12",
            section: "I",
            s1: "100",
            s2: "99",
            s3: "95",
            s4: "94",
            s5: "96"
        }
    ];
    let [show12thTable, setShow12thTable] = useState("false");
    return (
        <div className="filter-table">
            <div className="search-row">
                <input type="text" className="filter-input" placeholder="Search here..."/>
                <select>
                    <option name="10th" value="10th" defaultValue>10th</option>
                    <option name="12th" value="12th">12th</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th className='mobile-hide'>English</th>
                        <th className='mobile-hide'>Maths</th>
                        <th className='mobile-hide'>Science</th>
                        <th className='mobile-hide'>Social Studies</th>
                        <th className='mobile-hide'>Second Language</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                {
                    toppers12th.map((topper, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}.</td>
                                <td>{toppers12th[i].name}</td>
                                <td>{toppers12th[i].class}-{toppers12th[i].section}</td>
                                <td className='mobile-hide'>{toppers12th[i].s1}</td>
                                <td className='mobile-hide'>{toppers12th[i].s2}</td>
                                <td className='mobile-hide'>{toppers12th[i].s3}</td>
                                <td className='mobile-hide'>{toppers12th[i].s4}</td>
                                <td className='mobile-hide'>{toppers12th[i].s5}</td>
                                <td>{String((parseInt(topper.s1)+parseInt(topper.s2)+parseInt(topper.s3)+parseInt(topper.s4)+parseInt(topper.s5))/5)}%</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
}