import styled from 'styled-components';

const Button = styled.button`
  padding: 0.25em 1em;
  margin: 0 1em;
  width: 160px;
  color: ${props => (props.primary ? props.theme.background : props.theme.darkGray)};
  border-radius: 3px;
  border: 2px solid ${props => (props.primary ? props.theme.brand : props.theme.darkGray)};
  background: ${props => (props.primary ? props.theme.brand : 'transparent')};
`;

// We're extending Button with some extra styles
/* const TomatoButton = Button.extend`
color: tomato;
border-color: tomato;
`; */

export default Button;
