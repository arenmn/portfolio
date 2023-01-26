import { ReactNode } from "react";
import Image from "next/image";
declare interface ProjectProps {
    children: ReactNode;
    project: string;
    image?: string;
}

import styles from '../styles/Project.module.css';

const Project = (props: ProjectProps) => {

    return (
        <>
            <div style={{marginBottom: "2vw"}}>
                <h2>{props.project}</h2>
                <br/>
                {props.image && <div className={styles.imageContainer}><Image src={props.image} fill alt={props.project}/></div>}
                {props.children}
            </div>
        </>
    )
}

export default Project;