import './report.css'
import EmailList from './email_list'
import React from "react"



function Report() {
    return (
        <div className='report_page'>
            <div className ='report_header'>
                <h1>Report Page</h1>
            </div>

            <div className='email_report'>
                <EmailList />
            </div>

            <div className ='artist_page'>
            <a href="/artist">Home Page</a>
            </div>
            
        </div>
    )
}

export default Report







