import React from 'react';
import { useState } from 'react';
import "./FilterTable.scss";

export const FilterTable = () => {
    const toppers10th = [
        {
            name: "Keshav Singh",
            class: "10",
            section: "E",
            s1: "100",
            s2: "100",
            s3: "100",
            s4: "100",
            s5: "100"
        },
        {
            name: "Rakshiv Sharma",
            class: "10",
            section: "B",
            s1: "100",
            s2: "100",
            s3: "98",
            s4: "100",
            s5: "100"
        },
        {
            name: "Namit Aggarwal",
            class: "10",
            section: "J",
            s1: "100",
            s2: "97",
            s3: "100",
            s4: "98",
            s5: "99"
        },
        {
            name: "Parav Jaikrishan",
            class: "10",
            section: "J",
            s1: "98",
            s2: "100",
            s3: "100",
            s4: "96",
            s5: "99"
        },
        {
            name: "Sushant Singh",
            class: "10",
            section: "C",
            s1: "99",
            s2: "97",
            s3: "99",
            s4: "99",
            s5: "97"
        },
        {
            name: "Prakhar Rathi",
            class: "10",
            section: "J",
            s1: "99",
            s2: "96",
            s3: "98",
            s4: "100",
            s5: "96"
        },
        {
            name: "Kartik Jha",
            class: "10",
            section: "F",
            s1: "100",
            s2: "99",
            s3: "99",
            s4: "93",
            s5: "97"
        },
        {
            name: "Vasu Kumar",
            class: "10",
            section: "K",
            s1: "96",
            s2: "94",
            s3: "98",
            s4: "98",
            s5: "97"
        },
        {
            name: "Ryan Gupta",
            class: "10",
            section: "I",
            s1: "98",
            s2: "99",
            s3: "95",
            s4: "94",
            s5: "96"
        },
        {
            name: "Ritu Bhardwaj",
            class: "10",
            section: "H",
            s1: "98",
            s2: "96",
            s3: "95",
            s4: "96",
            s5: "97"
        }
    ];
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
            name: "Paavan Gupta",
            class: "12",
            section: "I",
            s1: "100",
            s2: "99",
            s3: "95",
            s4: "94",
            s5: "96"
        },
        {
            name: "Vidushi Jain",
            class: "12",
            section: "H",
            s1: "98",
            s2: "96",
            s3: "95",
            s4: "96",
            s5: "97"
        }
    ];
    let [show10thTable, setShow10thTable] = useState(true);
    let [show12thTable, setShow12thTable] = useState(false);
    const switchClass = () => {
        setShow10thTable(!show10thTable);
        setShow12thTable(!show12thTable);
    }
    return (
        <div className="filter-table">
            <h1>School Toppers</h1>
            <div className="switch-class">
                <button className={show10thTable === true ? "selected" : ""} onClick={()=>switchClass()}>10<sup>th</sup></button>
                <button className={show12thTable === true ? "selected" : ""} onClick={()=>switchClass()}>12<sup>th</sup></button>
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
                <tbody className={show10thTable === true ? "" : "hide"}>
                {
                    toppers10th.map((topper, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}.</td>
                                <td>{topper.name}</td>
                                <td>{topper.class}-{topper.section}</td>
                                <td className='mobile-hide'>{topper.s1}</td>
                                <td className='mobile-hide'>{topper.s2}</td>
                                <td className='mobile-hide'>{topper.s3}</td>
                                <td className='mobile-hide'>{topper.s4}</td>
                                <td className='mobile-hide'>{topper.s5}</td>
                                <td>{String((parseInt(topper.s1)+parseInt(topper.s2)+parseInt(topper.s3)+parseInt(topper.s4)+parseInt(topper.s5))/5)}%</td>
                            </tr>
                        );
                    })
                }
                </tbody>
                <tbody className={show12thTable === true ? "" : "hide"}>
                {
                    toppers12th.map((topper, i) => {
                        return (
                            <tr key={i}>
                                <td>{i+1}.</td>
                                <td>{topper.name}</td>
                                <td>{topper.class}-{topper.section}</td>
                                <td className='mobile-hide'>{topper.s1}</td>
                                <td className='mobile-hide'>{topper.s2}</td>
                                <td className='mobile-hide'>{topper.s3}</td>
                                <td className='mobile-hide'>{topper.s4}</td>
                                <td className='mobile-hide'>{topper.s5}</td>
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