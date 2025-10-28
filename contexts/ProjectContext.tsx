
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS as initialProjects } from '../constants';

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Omit<Project, 'id'>) => void;
    updateProject: (project: Project) => void;
    deleteProject: (projectId: string) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(() => {
        try {
            const localData = localStorage.getItem('projects');
            return localData ? JSON.parse(localData) : initialProjects;
        } catch (error) {
            console.error("Could not parse projects from localStorage", error);
            return initialProjects;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch (error) {
            console.error("Could not save projects to localStorage", error);
        }
    }, [projects]);

    const addProject = (projectData: Omit<Project, 'id'>) => {
        const newProject: Project = {
            ...projectData,
            id: projectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        };
        setProjects(prev => [newProject, ...prev]);
    };

    const updateProject = (updatedProject: Project) => {
        setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
    };

    const deleteProject = (projectId: string) => {
        setProjects(prev => prev.filter(p => p.id !== projectId));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
