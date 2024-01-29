import React from 'react'
import '../../../public/styles/style.css'
import { FiberManualRecord, Info } from '@mui/icons-material'

const Widgets = () => {
    const widgetNewsDetails = [
        {
            heading: "Shehzad ladders up to success",
            news: "MUSIC - Shehzad has the best soothing voice. Fans show their love by cheering his name out loud."

        },
        {
            heading: "Shahrukh meets Shehzad",
            news: "TopNews - Sharukh gives his blessings to shehzad, hugs him tightly, shehzad drops tears."
        },
        {
            heading: "Bitcoin breaks $22k", 
            news: "Crypto - 8000 readers"
        },
        {
            heading: "Is Redux too good?",
            news: "code -123 readers"
        }
    ]
  return (
    <div className='widgets'>
        <div className="widgets-header">
            <h2>LinkedIn News</h2>
            <Info />
        </div>

        {
            widgetNewsDetails.map((details, index)=> {
                return (
                    <div key={index} className="widgets-article">
                        <div className='widgets-article-left'>
                            <FiberManualRecord /> 
                        </div>
                        <div className="widgets-article-right">
                                <h4>{details.heading}</h4>
                                <p>{details.news}</p>
                            </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Widgets