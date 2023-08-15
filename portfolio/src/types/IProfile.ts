export interface IProfile {
    name: string,
    age: string,
    nationality: string,
    city: string,
    currentCompany: string,
    uniLevel: string,
    skills: skills[],
    languages : language[]
    experiences: experiences[]
}
interface skills {
    language: string,
    experience : experience
    level: level
}
export enum level {
    high = "high",
    mid = "midlevel",
    low = "beginner",
}
export enum experience {
    high = "more than 5 years",
    mid = "between 2 and 5 years",
    low = "less than 2 years"
}
export interface language {
    lang: string,
    level: langLevel
}
export enum langLevel {
    proficient = "fluent",
    good = "Conversationnal",
    mid = "mid",
    low = "low"
}

interface experiences {
    type: type,
    jobTitle: string,
    company: string,
    companyLinkedIn: string,
    length: string,
    stack: string[]
}

export enum type {
    internship = "internship",
    apprenticeship = "apprenticeship",
    fullTime = "Full time job"
}