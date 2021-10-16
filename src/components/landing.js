import * as React from 'react'
import {
    container,
    mainInfoContainer,
    mainInfoTextContainer,
    mainInfoImage,
    comingSoonButton,
} from './landing.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Landing = ({ pageTitle, children }) => {
  return (
    <div className={container}>
        <div className={mainInfoContainer}>
            <div className={mainInfoTextContainer}>
                <h1>Make your daily to-do list more <span>exciting.</span></h1>
                <p>TaskRanger is your simple, gamified, national-park-themed to-do list app.</p>
                <div className={comingSoonButton}>
                    Coming Soon
                </div>
            </div>
            <StaticImage
                className={mainInfoImage}
                alt="iPhone running TaskRanger with two patches in front, one of three fish in the ocean, the other of a llama."
                src="../images/phone-with-patches.png"
            />
        </div>
        
        {/* <br/>
        <h1>What is TaskRanger?</h1>
        <p>This is some information about TaskRanger and why it exists.</p>
        <br/>
        <h1>Features</h1>
        <table>
        <tr>
            <td>cool feature</td>
            <td>cool feature</td>
            <td>cool feature</td>
        </tr>
        <tr>
            <td>cool feature</td>
            <td>cool feature</td>
            <td>cool feature</td>
        </tr>
        <tr>
            <td>cool feature</td>
            <td>cool feature</td>
            <td>cool feature</td>
        </tr>
        </table>
        <br/>
        <h1>Download Now</h1>
        <a>Coming Soon</a> */}
    </div>
  )
}

export default Landing