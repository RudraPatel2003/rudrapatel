import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 3rem;

  width: 100%;
  height: var(--nav-height);

  color: var(--color-text-secondary);
  background-color: var(--color-background-dark);

  a {
    color: inherit;

    &:hover {
      color:var(--color-accent);
    }
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p><a href="https://www.figma.com/file/58Sw1Dl28R5cHzE6nybnPC/Portfolio-Website?node-id=0%3A1" target="_blank" rel="noreferrer">Designed</a> and <a href="https://github.com/RudraPatel2003/rudrapatel" target="_blank" rel="noreferrer">Created</a> by Rudra Patel</p> 
      <p><a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Inspired by Brittany Chiang</a></p>
    </StyledFooter>
  )
}
