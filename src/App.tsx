import React, { useState } from 'react'



// const App = function() {
// 	let [ text, setText ] = useState('hello world');

// 	function handleUpText() {
// 		setText('hello react')
// 	}

// 	return <div>
// 		<h1 onClick={() => setText('hello react')}>{ text }</h1>
// 		<h1 onClick={ handleUpText }>{ text }</h1>
// 	</div> 
// }


const App = function() {
	let [ val, setVal ] = useState('');
	let [ todos, setTodos ] = useState(['吃饭', '睡觉', '学习'])

	function handleAdd() {
		setTodos([...todos, val])
		setVal('')
	}

	return <div>
		<h1 >{ val }</h1>
		<input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
		<button onClick={ handleAdd }>添加</button>
		<ul>
			{
				todos.map(item => <li>{item}</li>)
			}
		</ul>
	</div>
}

export default App;