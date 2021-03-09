import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID FF1EXdUQ1WI1MB6KACEwm-d8M9JKbKEYjpYjx1Rsgfw'
	}
});
