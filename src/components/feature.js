import * as React from 'react'
import {
    container,
    iconContainer,
    textContainer,
} from './styles/feature.module.css'
import { Icon } from '@iconify/react';

const Feature = (props) => {
    return (
        <div className={container}>
            <div className={iconContainer}>
                <Icon icon={props.icon} style={{ color: '#2C7EFA', fontSize: 30 }} />
            </div>
            <div className={textContainer}>
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Feature