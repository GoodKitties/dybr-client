import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Panel = styled.div`
  padding: 0;
  box-shadow: 0 4px 7px 1px ${props => props.theme.shadowGray};
`;

const PanelHeader = styled.div`
  background-color: ${props => props.theme.lightGray};
  color: ${props => props.theme.background};
  text-align: center;
  padding: 5px;
`;

const PanelContent = styled.div`
  color: ${props => props.theme.darkGray};
  background-color: ${props => props.theme.background};
  padding: 20px;

  .small-link {
    margin: 10px 0;
    display: block;
    font-size: 0.8rem;
    text-align: center;
    color: ${props => props.theme.accent};
  }

  button {
    margin: 0 auto;
    display: block;
  }
`;

const PanelFooter = styled.div`
  text-align: center;
  padding-bottom: 15px;
  border-radius: 0 0 3px 3px;
  background-color: ${props => props.theme.background};
`;

const CardPanel = ({
  colSizes, children, title, footer,
}) => {
  return (
    <div className={`col ${colSizes}`}>
      <Panel>
        <PanelHeader>{title}</PanelHeader>
        <PanelContent>{children}</PanelContent>
        <PanelFooter>{footer}</PanelFooter>
      </Panel>
    </div>
  );
};

CardPanel.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.array,
  colSizes: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

CardPanel.defaultProps = {
  title: null,
  footer: null,
  colSizes: '',
};

export default CardPanel;
