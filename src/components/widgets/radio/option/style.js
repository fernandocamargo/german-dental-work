import styled from 'styled-components';

export default component => styled(component)`
  position: relative;
  overflow: hidden;

  input {
    left: -1rem;
    position: absolute;
    top: -1rem;
    z-index: -1;

    &:checked + label {
      background-color: #3bb300;
      color: #fff;
    }
  }

  label {
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    color: #aeb2b8;
    cursor: pointer;
    display: flex;
    font-size: 1.75rem;
    font-weight: 500;
    height: 61px;
    justify-content: center;
    transition: background-color 0.15s linear, color 0.15s linear;
    width: 62px;

    &:hover {
      background-color: #aeb2b8;
      color: #fff;
    }
  }
`;
