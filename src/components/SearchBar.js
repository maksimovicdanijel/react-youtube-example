import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchVideos } from '../store/videos/actions';

import PrimaryButton from './buttons/PrimaryButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = this.getDefaultState();

    this.onSearchSubmit = props.onSearchSubmit ? props.onSearchSubmit : () => {};
  }

  getDefaultState() {
    return {
      searchValue: '',
      canSubmit: false
    }
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;

    dispatch(searchVideos(this.state.searchValue));
    this.setState(this.getDefaultState());
  }

  onChange = (e) => {
    let searchValue = e.target.value;
    let canSubmit = searchValue !== '';

    this.setState({
      searchValue,
      canSubmit
    });
  } 

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSearchSubmit}>
          <div className="input-group">
            <input onChange={this.onChange} value={this.state.searchValue} type="text" className="form-control search-bar__input" placeholder="Search video..." />
            <span className="input-group-btn">
              <PrimaryButton disabled={!this.state.canSubmit}>Search</PrimaryButton>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar = connect()(SearchBar);

export default SearchBar;
