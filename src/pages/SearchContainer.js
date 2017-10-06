import React from 'react';
import SearchFormContainer from '../components/Forms/searchForm/SearchFormContainer';

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div className="search-wrapper">
                <SearchFormContainer/>
            </div>
        )
    }
}