import React from 'react';

class SearchBar extends React.Component {
	onInputChange(event) {

        console.log(event.target.value)

    }

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image Search</label>
                        {/*Do not put () - we only want to callback onInputChange when needed () will call every time! */}
    					<input type="text" onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
