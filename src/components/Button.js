import styled from 'styled-components';

const Button = styled.button`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 2.5;
    border-radius: var(--radius);
    border: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--colors-text);
    cursor: pointer;
`;
export { Button };