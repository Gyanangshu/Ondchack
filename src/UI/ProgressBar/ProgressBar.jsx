import React from 'react'
import "./progress.css"

const ProgressBar = ({page}) => {
    return (
        <section className="step-wizard">
            <ul className="step-wizard-list">
                <li className={page == 0 ? `step-wizard-item current-item` : `step-wizard-item `}>
                    <span className="progress-count">1</span>
                    <span className="progress-label">Add Products</span>
                </li>
                <li className={page == 1 ? `step-wizard-item current-item` : `step-wizard-item `}>
                    <span className="progress-count">2</span>
                    <span className="progress-label">Check</span>
                </li>
                <li className={page == 2 ? `step-wizard-item current-item` : `step-wizard-item `}>
                    <span className="progress-count">3</span>
                    <span className="progress-label">Create link</span>
                </li>
            </ul>
        </section>
    )
}

export default ProgressBar