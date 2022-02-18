// import React from 'react';
// import { Avatar } from '@mui/material';
// import './chat.css';
// import { Link } from 'react-router-dom';

// function Chat({ name, message, profilePic, timestamp }) {
//   return (
//       //need to fix this to route to their name link to=`chat/chat/${name}`
//       <Link to={`/chatscreen`}>
//     <div className='chat'>
//         <Avatar className='chat-img' alt={name} src={profilePic} />
//         <div className='chat-details'>
//             <h2>{name}</h2>
//             <p>{message}</p>
//         </div>
//         <p className='chat-time'>{timestamp}</p>
//     </div>
//     </Link>
//   );
// }

// export default Chat

// import React from 'react';
// import { ChatEngine } from 'react-chat-engine';

// export function Chat() {
// 	return (
// 		<ChatEngine
// 			height='100vh'
// 			userName='admin'
// 			userSecret='8e2f1bc1-954e-43cc-ace0-7214bf22f139'
// 			projectID='c705ac59-d4be-4f3d-b053-c4b9bfb5c759'
// 		/>
// 	);
// }

// export default Chat;

import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='admin'
			userSecret='8e2f1bc1-954e-43cc-ace0-7214bf22f139'
			projectID='c705ac59-d4be-4f3d-b053-c4b9bfb5c759'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DirectChatPage;
