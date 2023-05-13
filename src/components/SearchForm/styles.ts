import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  margin: 2rem;

  flex: 1;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['gray-100']};

  background: ${({ theme }) => theme['white']};
  color: ${({ theme }) => theme['gray-400']};
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme['gray-300']};
  }

  input {
    width: 100%;
    border: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    border: 0;
    cursor: pointer;

    background: transparent;

    font-weight: bold;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    svg {
      &:hover {
        opacity: 0.6;
        transition: background-color 0.3s;
      }
    }

    &:not(:disabled):hover {
      /* background: ${({ theme }) => theme['green-500']}; */
      /* border: 1px solid ${({ theme }) => theme['green-500']}; */
      /* color: ${({ theme }) => theme.white}; */
      /* transition: background-color 0.2s, color 0.2s, border-color 0.2s; */
    }
  }
`
