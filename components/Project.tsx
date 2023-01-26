import { ReactNode } from "react";
import Image from "next/image";
declare interface ProjectProps {
    children: ReactNode;
    project: string;
    image?: string;
}

const Project = (props: ProjectProps) => {

    return (
        <>
            <div style={{marginBottom: "2vw"}}>
                <h2>{props.project}</h2>
                <br/>
                {props.image && <Image src={props.image} width={480} height={220} alt={props.project}/>}
                <div>{props.children}</div>
            </div>
        </>
    )
}

export default Project;