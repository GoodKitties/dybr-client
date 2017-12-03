import React from 'react';
import { noop } from 'lodash';

import ConfirmationForm from './components/ConfirmationForm';

const ConfirmScene = () => {
  return <ConfirmationForm submitConfirmation={noop} />;
};

export default ConfirmScene;
