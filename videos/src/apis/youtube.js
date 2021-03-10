import axios from 'axios';

const KEY = 'AIzaSyCvQkso2Ee4FB7bHYW1GBdXOQPKAl0BPK4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
