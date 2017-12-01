import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PanelHeader = styled.div`
  background-color: #aaa;
  color: white;
  text-align: center;
  padding: 5px;
`;

const PanelContent = styled.div`
  color: #333;
  background-color: white;
  padding: 20px;

  .small-link {
    margin: 10px 0;
    display: block;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const PanelFooter = styled.div`
  text-align: center;
  padding-bottom: 15px;
  border-radius: 0 0 3px 3px;
  background-color: white;
`;

const CardPanel = ({
  colSizes, children, title, footer,
}) => {
  return (
    <div className={`col ${colSizes}`}>
      <PanelHeader>{title}</PanelHeader>
      <PanelContent>{children}</PanelContent>
      <PanelFooter>{footer}</PanelFooter>
    </div>
  );
};

CardPanel.propTypes = {
  title: PropTypes.string.isRequired,
  footer: PropTypes.array.isRequired,
  colSizes: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default CardPanel;
