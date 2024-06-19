import React from "react";
import styled from "styled-components";

const StyledAboutSection = styled.section`
  width: min(90%, 80ch);
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

    margin-bottom: 1rem;

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

  p {
    color: var(--color-text-secondary);
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    line-height: 175%;
    margin-bottom: 1rem;
  }
`;

export default function About() {
  return (
    <StyledAboutSection id="about">
      <h2>
        <span>About Me</span>
      </h2>
      <p>
        Hi! My name is Rudra and I am a third-year computer science student at
        the University of Tennessee - Knoxville.
      </p>
      <p>
        I have always been fascinated by computers and how they make it possible
        to learn about almost anything in the world within a few clicks.
        Watching an endless amount of YouTube videos and scrolling through
        Wikipedia articles on random topics as a kid cemented my passion for
        technology, and I knew that no matter what, I had to learn how it all
        worked under the hood.
      </p>
      <p>See what I&apos;ve been up to below!</p>
    </StyledAboutSection>
  );
}
