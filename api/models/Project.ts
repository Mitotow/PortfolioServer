/**
 * Checks if an object is of type Project
 * 
 * @param obj - The object to check
 * @returns A boolean value indicating whether the object is of type Project
 */
const isProject = (obj: any): obj is Project => {
    return (
        typeof obj.title === "string" &&
        typeof obj.subtitle === "string" &&
        typeof obj.text === "string" &&
        typeof obj.git === "string" &&
        obj.used.every((item: any) => typeof item === "string")
    );
};

export default interface Project {
    _id: string | undefined;
    title: string;
    subtitle: string;
    text: string;
    git: string;
    used: string[];
}

export { isProject };
