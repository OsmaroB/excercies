import axios from "axios";
import React, { useEffect } from "react";

const Axios = () => {
    const GetList = () => {
        axios.get("http://localhost:8080/api/events").then((value) => {
            console.log(value);
        });
    };

    useEffect(() => {
        GetList();
    })
    return (
        <div className="list-container">
            <ul className="ul-list">
                <li className="li-list">

                </li>
            </ul>
        </div>
    );
};
export default Axios;