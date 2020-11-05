import React from 'react'
import Shell from '../../common/shell'

const settingsContent = () => {
    return <div>
        Hello World
        </div>;
}
export default function Settings(props) {
    return (
        <div>
            <Shell content={settingsContent}/>
        </div>
    )
}
