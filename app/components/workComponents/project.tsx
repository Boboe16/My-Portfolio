import { useState } from "react";

export default function Project({projectName, projectDescription, projectTags}: {projectName: string; projectDescription: string; projectTags: Array<string>}) {
    const [state,] = useState(projectTags)
    
    return (
        <>
            <h2 className="justify-start m-2">{projectName}</h2>
            <p className="m-2">{projectDescription}</p>
            <div className="grid grid-cols-2 m-2">
                {state.map((tag) => {
                    return <span key={Math.random()} className="border-2 border-gray-400 px-2 py-1">{tag}</span>
                })}
            </div>

        </>
    )
}
    
