import { styled } from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  margin-right: 30px;
`

export const SelectContainer = styled.select`
  width: 100%;
  height: 28px;
  border: none;
  border-radius: 10px;
  padding: 8px;
  font-size: 16px;

  color: white;
  background-color: ${({ theme }) => theme['blue-300']};
  appearance: none;
  outline: none;
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.2);

  font: bold 0.75rem 'Roboto', sans-serif;

  cursor: pointer;

  option {
    color: white;
    background-color: ${({ theme }) => theme['blue-300']};
    border: none;
    border-radius: 10px;

    &:focus {
      border: none;
      border-radius: 10px;
      background-color: white;
    }
  }
`
