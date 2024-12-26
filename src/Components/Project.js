import projectimg from '../asserts/projectimg.png'
import projectimage from '../asserts/freepik__adjust__64284.png'
import projectimages from '../asserts/5603474_1824.jpg'
export default function Project() {
    const config={
        projects:[
            {
                image:projectimg,
                description:'A Ecommerce website. Built with MERN Stack.',
                link:''
            },
            {
                image:projectimage,
                description:'A Self portfolio website. Built with MERN Stack.',
                link:''
            },
            {
                image:projectimages,
                description:'Basic personal Blog website. Built with MERN Stack.',
                link:''
            }
        ]
    }

    return(
        <section className="flex flex-col  py-20 px-5 justify-center bg-secondary" id='Project'>
            <div className="w-full">
            <div className="flex flex-col justify-center text-center">
            <h1 className="text-5xl font-bold  ">Projects</h1>
            <p className="  p-5">These are some of my best projects. I have built these with React,MERN and Tailwind CSS. check them out</p>
            </div>
            </div>

            <div className="w-ful">
            <div className='flex flex-col md:flex-row px-10 gap-5 '>

                {config.projects.map((project) =>(
                    

<div className='relative'>
                <img className='h-[200px] w-[400px]' src={project.image}/>
                <div className='project-desc'>
                <p className='text-center py-5'>{project.description}</p>
                <div className='flex justify-center'>
                    <a className="btn" target="_blank"href={project.link}>View project</a>
                </div>
                </div>
                
                </div>
               
                ))}
                

            </div>
            </div>
        </section>
    )
}