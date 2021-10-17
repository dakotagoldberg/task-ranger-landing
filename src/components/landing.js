import * as React from 'react'
import {
    container,
    mainInfoContainer,
    mainInfoTextContainer,
    mainInfoImage,
    comingSoonButton,
    aboutContainer,
    sectionHeading,
    featureContainer,
    featureList
} from './styles/landing.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import Feature from './feature'

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
        <div className={aboutContainer}>
            <h1 className={sectionHeading}>What is TaskRanger?</h1>
            <p>TaskRanger creates a simple yet beautiful environment for your daily to-do list. Add your tasks, set goals, track your progress with streaks and a satisfying progress bar, and complete your daily task goal to win collectible digital patches. You can use TaskRanger on its own or within your existing task-management system!</p>
        </div>
        <div className={featureContainer}>
            <h1 className={sectionHeading}>Features</h1>
            <div className={featureList}>
                <Feature
                    heading="Plan your days"
                    description="Set completion dates and reminder notifications for tasks to stay on track."
                    icon="bx:bx-calendar-star"
                />
                <Feature
                    heading="Add recurring tasks"
                    description="Choose if and when you want your task to repeat; perfect for reoccurring tasks or setting aside time each day for long-term projects."
                    icon="entypo:cycle"
                />
                <Feature
                    heading="Stay organized with task details"
                    description="Add notes and subtasks to your tasks."
                    icon="bx:bx-list-plus"
                />
                <Feature
                    heading="Set daily goals"
                    description="Set daily task completion goals to track with a clear and motivating progress bar."
                    icon="fluent:target-arrow-16-filled"
                />
                <Feature
                    heading="Collect unique patches"
                    description="Win a digital, collectible, shareable patch upon completion of your daily goal."
                    icon="bx:bx-badge-check"
                />
                <Feature
                    heading="Stay motivated with streaks"
                    description="Complete your goal multiple days in a row to build a streak; miss a day, and it resets."
                    icon="lucide:flame"
                />
                <Feature
                    heading="Choose when your day ends"
                    description="Later end-of-day time options available for night owls (up to 5:00am)."
                    icon="uil:moonset"
                />
                <Feature
                    heading="Learn about the national parks"
                    description="Check out TaskRanger’s “National Park of the Day” screen to learn about a new featured national park, monument, or historic site each day."
                    icon="ic:outline-forest"
                />
                <Feature
                    heading="Work in style"
                    description="Customize your TaskRanger experience with 10+ beautiful themes."
                    icon="foundation:paint-bucket"
                />
            </div>
        </div>
    </div>
  )
}

export default Landing