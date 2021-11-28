import axios from 'axios'

export const postForm = async ({name, email, message}) => {
	return axios.post('http://localhost:3010/sendMessage',{
		name, email, message
	}).then(()=>{
		console.log('done')
	})
}