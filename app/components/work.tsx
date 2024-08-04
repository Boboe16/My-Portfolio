"use client"
import Project from './workComponents/project'

export default function Work() {
    return (
        <div className="flex flex-col p-5 bg-orange-200">
            <h1 className='text-center'>PROJECTS</h1>
            <Project 
                projectName='BULALOI APP' 
                projectDescription='JUST SKETCHY WEBSITE' 
                projectTags={['JAVASCRIPT', 'HTML', 'CSS', 'NEXTJS', 'REACT', 'BOOTSTRAP', 'VERCEL']}
            />
            <Project 
                projectName='BULALOI MANAGER' 
                projectDescription='DESKTOP APPLICATION THAT IS USED TO MANAGE SKETCHY WEBSITE' 
                projectTags={['PYTHON', 'PYQT6', 'CSS', 'GIT', 'LIBRARIES']}
            />
            <div>SEE MORE</div>
        </div>
    )
}