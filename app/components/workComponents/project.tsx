import { useState } from "react";
import Image from "next/image";

interface propsValue {
    projectName: string,
    projectDescription: string,
    projectImagePath: string,
    projectTags: Array<string>,
}

export default function Project(propsObject: propsValue) {
    const {projectName, projectImagePath, projectDescription, projectTags} = propsObject;
    const [state,] = useState(projectTags)
    
    return (
        <div className="my-6">
            <h2 className="font-lato font-medium text-xl my-2">{projectName}</h2>
            <div className="w-full h-65">
                <Image
                    className="shadow-md border-secondary rounded-md"
                    src={`${projectImagePath}`}
                    alt="Placeholder Project Image"
                    width={300}
                    height={300}
                    style={{width: '100%', height: '100%'}}
                />
            </div>
            <p className="font-lato text-sm my-2">{projectDescription}</p>
            <div className="grid grid-cols-4 my-2">
                {state.map((tag) => {
                    return <span key={Math.random()} className="border-2 text-sm my-1 shadow-sm mr-1 bg-fourtuary rounded-full px-2 py-1">{tag}</span>
                })}
            </div>

        </div>
    )
}
    
