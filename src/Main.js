import React from 'react'
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <nav>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" to={"/"}>Active</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/"} role="button" aria-expanded="false">Games</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href={"/GameHub/Snake"}>Snake</a></li>
                            <li><a className="dropdown-item" to={"/"}>Another action</a></li>
                            <li><a className="dropdown-item" to={"/"}>Something else here</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" to={"/"}>Separated link</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to={"/"}>Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Main