import React from 'react';
import { connect } from 'react-redux';

// redux function that copies state into a new object that this componenet will use
const mapStateToProps = state => {
  return {articles: state.articles};
};

// creates a list from the copy of the state
const ConnectedList = ({articles}) => (
  <ul>
    {articles.map(article => (
      <li key={article.id}>
        {article.title}
      </li>
    ))}
  </ul>
)

// connects the ConnectedList with the Redux store
const List = connect(mapStateToProps)(ConnectedList);

export default List;
