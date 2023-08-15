// NormalView.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProfile } from "./types/IProfile";
import { IExperience } from "./types/IExperience";
import "./css/normalView.css";

const url = process.env.REACT_APP_API_URL

const NormalView: React.FC = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [experiences, setExperiences] = useState<IExperience[] | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${url}/profile`);
      console.log(process.env.BACK_URL)
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  const fetchExperiences = async () => {
    try {
      const lang = "FR";
      const response = await axios.get<IExperience[]>(
        `${url}/experience`,
        {
          params: { lang },
        }
      );
      setExperiences(response.data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchExperiences();
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
                {experience.type} - {experience.company} - {experience.jobTitle}{" "}
                - {experience.length}
              </li>
            ))}
          </ul>
          <ul>
          </ul>
          <h2>Languages</h2>
          <ul>
            {profile.languages.map((language, index) => (
              <li key={index}>
                {language.lang} - {language.level}
              </li>
            ))}
          </ul>
          <h2> Detailed Experiences</h2>
          {<ul>
            {experiences?.map((e, index) => (
              <>
                <h3>Company: {e.company}</h3>
                <p>Role: {e.role}</p>
                <p>Position: {e.position}</p>
                <p>length: {e.length}</p>
                <p>from: {e.from}</p>
                <p> to: {e.to}</p>
                <p> place: {e.place}</p>
                <p className="long_text"> Details: {e.text}</p>
              </>
            ))}
          </ul> }
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default NormalView;
