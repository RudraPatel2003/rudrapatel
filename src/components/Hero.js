import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  min-height: 100vh;
  max-width: 80%;

  margin-inline: auto;
  
  h1 {
    font-size: clamp(1rem, 2vw, 2.5rem);
    font-weight: var(--fw-regular);
    color: var(--color-accent);
  }

  h2 {
    color: var(--color-text-primary);
    font-size: clamp(2.9rem, 10vw, 5rem);
  }


  p {
    font-size: clamp(1rem, 2vw, 2rem);
    line-height: 150%;
    color: var(--color-text-secondary);
    margin-bottom: 2rem;

    a {
      color: var(--color-accent);
      text-decoration: none;

      &:hover {
        color: var(--color-text-primary);
      }
    }
  }

  span {
      a {
      font-size: clamp(1rem, 1.5vw, 2rem);
      text-decoration: none;
      color: var(--color-accent);
      outline: 1px solid var(--color-accent);
      padding: 0.625em 1.25em;
      
      &:hover {
        color: var(--color-text-primary);
        outline-color: var(--color-text-primary);
      }
      }
  }
`
export default function Hero() {
  return (
    <StyledHeroSection>
      <h1>Hello! My name is</h1>
      <h2>Rudra Patel.</h2>
      <p>Currently, I am a first-year computer science student at the <a href="https://www.utk.edu/" target="_blank" rel="noreferrer">University of Tennessee</a>.</p>
      <span><a href="/#contact">Come say hi!</a></span>
    </StyledHeroSection>
  )
}
