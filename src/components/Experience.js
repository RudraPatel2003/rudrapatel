import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { INITIAL_JOB_INDEX, jobs } from "../config";

const StyledExperienceSection = styled.section` 
  width: 80%;
  margin-inline: auto;
  margin-bottom: 20vh;
  padding: 5rem 0;

  h2 {
    position: relative;
    z-index: 1;

    color: var(--color-text-primary);
    background-color: var(--color-background);

    font-size: clamp(2rem, 4vw, 4rem);
    text-align: center;

    margin-bottom: 2rem;

    /* Add the green lines */
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      display: block;
      top: 50%;

      width: calc(100%);
      height: 1px;
      background-color: var(--color-accent);
    }

    /* Adds gap between line and word*/
    span {
      background-color: var(--color-background);
      padding-inline: 1rem;
    }
  }

  .centerer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledExperienceSelector = styled.div`
  position: relative;
  width: min(100%, 80ch);
  height: 3rem;
  margin-bottom: 1.5rem;

  display: flex;
  justify-content: flex-start;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 5px;
  }
`;

const StyledJobTitle = styled.h3`
  color: var(--color-text-primary);
  // border-bottom: 1px solid var(--color-text-primary);
  width: 175px;
  min-width: 175px;
  text-align: center;

  &:hover {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
    cursor: pointer;
  }

  ${(props) =>
    props.selectedJobIndex === props.jobIndex &&
    css`
      color: var(--color-accent);
      border-color: var(--color-accent);
    `}
`;

const StyledSlidingBar = styled.div`
  position: absolute;
  content: " ";
  bottom: 0.5rem;
  z-index: 10;

  // move around the sliding bar by adjusting its left position based on state
  left: ${(props) => (175 * props.selectedJobIndex).toString() + "px"};

  height: 3px;
  width: 175px;

  background-color: var(--color-accent);

  transition: left 0.25s ease-in-out;
`;

const StyledJobDescription = styled.div`
  width: min(100%, 80ch);
  height: min-content;
  border-radius: 1.5rem;
  padding: 2rem;
  background-color: var(--color-background-light);
  box-shadow: 0px 0px 8px -4px black;

  display: flex;
  flex-direction: column;

  h3 {
    color: var(--color-text-primary);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: var(--color-text-primary);
    margin-bottom: 0.25rem;
  }

  ul {
    margin-top: 1rem;
    margin-left: 2rem;
  }

  li {
    color: var(--color-text-secondary);
    margin-bottom: 0.75rem;
  }
`;

export default function Experience() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(INITIAL_JOB_INDEX);
  const [selectedJob, setSelectedJob] = useState(jobs[INITIAL_JOB_INDEX]);

  useEffect(() => {
    setSelectedJob(jobs[selectedJobIndex]);
  }, [selectedJobIndex]);

  return (
    <StyledExperienceSection id="experience">
      <h2>
        <span>Experience</span>
      </h2>
      <div className="centerer">
        <StyledExperienceSelector>
          {jobs.map((job, index) => {
            return (
              <StyledJobTitle
                key={index}
                jobIndex={job.jobIndex}
                selectedJobIndex={selectedJobIndex}
                onClick={() => setSelectedJobIndex(job.jobIndex)}
              >
                {job.companyName}
              </StyledJobTitle>
            );
          })}
          <StyledSlidingBar selectedJobIndex={selectedJobIndex} />
        </StyledExperienceSelector>
        <StyledJobDescription>
          <h3>
            {selectedJob.longCompanyName
              ? selectedJob.longCompanyName
              : selectedJob.companyName}
          </h3>
          <h4>{selectedJob.jobTitle}</h4>
          <h4>{selectedJob.dateOfEmployment}</h4>
          <ul>
            {selectedJob.bulletPoints.map((bulletPoint, index) => {
              return <li key={index}>{bulletPoint}</li>;
            })}
          </ul>
        </StyledJobDescription>
      </div>
    </StyledExperienceSection>
  );
}
