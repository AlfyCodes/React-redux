import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
                        {/*Do not put () - we only want to callback onInputChange when needed () will call every time! */}
    					<input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
