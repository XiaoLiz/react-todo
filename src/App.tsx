import React, { useState } from 'react'

const App = function() {
	let [ text, setText ] = useState('hello world');

	function handleUpText() {
		setText('hello react')
	}

	return <div>
		<h1 onClick={() => setText('hello react')}>{ text }</h1>
		<h1 onClick={ handleUpText }>{ text }</h1>
	</div> 
}

export default App;