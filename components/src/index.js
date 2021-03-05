import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.image()}
					author="Sam"
					timeAgo="Today at 4:45PM"
					comment="Hello I'm Sam!"
				/>
			</ApprovalCard>
			<CommentDetail
				avatar={faker.image.image()}
				author="Alfred"
				timeAgo="Today at 5:50PM"
				comment="Hey Sam, welcome."
			/>
			<CommentDetail
				avatar={faker.image.image()}
				author="John"
				timeAgo="Today at 5:51PM"
				comment="Look forward to working with you. "
			/>
			<CommentDetail
				avatar={faker.image.image()}
				author="Stephon"
				timeAgo="Today at 7:00PM"
				comment="Nice to meet you."
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
