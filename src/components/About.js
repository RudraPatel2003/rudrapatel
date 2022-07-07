import React from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
  width: min(80%, 80ch);
  margin-inline: auto;
  margin-bottom: 20vh;
  padding: 5rem 0;

  h2 {
    position: relative;
    background-color: var(--color-background);
    color: var(--color-text-primary);
    font-size: clamp(2rem, 4vw, 4rem);
    text-align: center;
    margin-bottom: 1rem;

    /* Add the green lines */
    &::before, &::after {
      content: "";
      width: calc(30% - clamp(2rem, 4vw, 4rem));
      height: 1px;
      background-color: var(--color-accent);

      position: absolute;
      display: block;
      top: 50%;

      @media (min-width: 25em) {
        width: calc(35% - clamp(2rem, 4vw, 4rem));
      }

      @media (min-width: 40em) {
        width: calc(38% - clamp(2rem, 4vw, 4rem));
      }
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }

  p {
    color: var(--color-text-secondary);
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    line-height: 175%;
    margin-bottom: 1rem;
  }
`
export default function About() {
  return (
    <StyledAboutSection id="about">
      <h2>About Me</h2>
      <p>Hi! My name is Rudra and I am a first-year computer science student at the University of Tennessee - Knoxville.</p>
      <p>I have always been fascinated by computers and how they make it possible to learn about almost anything in the world within a few clicks. Watching an endless amount of YouTube videos and scrolling through Wikipedia articles on random topics as a kid cemented my passion for technology, and I knew that no matter what, I had to learn how it all worked under the hood.</p>
      <p>I began my programming journey by learning Python through Codecademy. Now, I am teaching myself front-end web development.</p>
      <p>Check out some of my projects below!</p>
    </StyledAboutSection>
  )
}
