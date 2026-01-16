
interface ProjectCardProps {
    title : string;
    description : string;
    star : number
}

export default function ProjectCard ({title,description,star} : ProjectCardProps){
    return (
        <div className="border p-4 rounded-lg shadow-sm  m-2">
         <h1>{title}</h1>
         <p> description :{description}</p>
        <p>⭐ {star}</p>
        </div>
    )
}