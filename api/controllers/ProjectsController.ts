import Project from "../models/Project"

// Projects Controller
export default {
    findAll: (): Promise<Project[]> => { throw new Error('Not implemented yet') },
    findById: (): Promise<Project> => { throw new Error('Not implemented yet') },
    add: (project: Project): Promise<boolean> => { throw new Error('Not implemented yet') }
}