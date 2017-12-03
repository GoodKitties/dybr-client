import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardPanel from 'components/CardPanel';
import StartStep from './Start';
import NicknamesStep from './Nicknames';
import BlogStep from './Blog';

class Wizard extends Component {
  state = {
    page: 1,
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <CardPanel colSizes="s12" title="Завершение регистрации">
        {page === 1 && <StartStep onSubmit={this.nextPage} />}
        {page === 2 && <NicknamesStep previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <BlogStep previousPage={this.previousPage} onSubmit={onSubmit} />}
      </CardPanel>
    );
  }
}

Wizard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Wizard;
