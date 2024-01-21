import './report.css'
import Header from '../other_components/header'
import React from "react";





function Report() {
    return (
        <div className='report_page'>
            <Header />
            <h1>Report</h1>
            <a href="/artist" className="report_link"><button>Page</button></a>
        </div>
    )
}

export default Report



