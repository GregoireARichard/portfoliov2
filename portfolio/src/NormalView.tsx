// NormalView.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IProfile } from './types/IProfile';


const NormalView: React.FC = () => {
    const [profile, setProfile] = useState<IProfile | null>(null);
  
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
  
    useEffect(() => {
      fetchProfile();
    }, []);

    return (
        <div>
          <h1>Normal UI View</h1>
          {profile ? (
            <div>
              <p>Name: {profile.name}</p>
              <p>Age: {profile.age}</p>
              <p>Nationality: {profile.nationality}</p>
              <p>City: {profile.city}</p>
              <p>Current Company: {profile.currentCompany}</p>
              <p>University Level: {profile.uniLevel}</p>
    
              <h2>Skills</h2>
              <ul>
                {profile.skills.map((skill, index) => (
                  <li key={index}>
                    {skill.language} - {skill.experience} - {skill.level}
                  </li>
                ))}
              </ul>
    
              <h2>Experiences</h2>
              <ul>
                {profile.experiences.map((experience, index) => (
                  <li key={index}>
                    {experience.type} - {experience.company} - {experience.jobTitle} - {experience.length}
                  </li>
                ))}
              </ul>
    
              <h2>Languages</h2>
              <ul>
                {profile.languages.map((language, index) => (
                  <li key={index}>
                    {language.lang} - {language.level}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>
      );
};

export default NormalView;
