import React from 'react'
import { Link, withRouter } from "react-router-dom";
import "./breadcrumb.scss"

const Breadcrumb = (props) => {
    const {
        history, 
        location: { pathname }
    } = props;
    const pathnames = pathname.split('/').filter(x => x);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {
                    pathnames.map((name, index)=> {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <li key={name} className="breadcrumb-item active" aria-current="page">{name}</li>
                        ) : (
                            <li key={name} className="breadcrumb-item"><Link to={routeTo}>{name}</Link></li>
                        )
                    })
                }
            </ol>
        </nav>
    )
}

export default withRouter(Breadcrumb)
