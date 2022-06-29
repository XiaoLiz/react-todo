import React, { useState, useEffect } from 'react'


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

interface Todo {
    title: string,
    done: boolean
}

type inputEvevt = React.ChangeEvent<HTMLInputElement>

const App:React.FC = function() {

	let [ val, setVal ] = useState<string>('');
	let [ todos, setTodos ] = useState<Todo[]>([
		{
			title: '吃饭',
			done: false
		},
		{
			title: '睡觉',
			done: false
		},
		{
			title: '学习',
			done: false
		},
		{
			title: '理财',
			done: false
		}

	])

	const listItems = todos.map((item, index) =>
		<li key={index.toString()}>
			<input
				type="checkbox"
				checked={item.done}
				onChange={e=>{handleSetTodo(e, index)}}
			/>
			<span>{item.title}</span>
            <span onClick={() => { handleTodoItemDelete(index) }}>❌</span>
		</li>
	)

    function handleTodoItemDelete(index: number) {
        let nextTodos = [...todos]
        nextTodos.splice(index, 1);
        console.log(nextTodos, 'nextTodos')

        setTodos(nextTodos)
    }

	function handleAdd(): void {
		if(!val) {
			alert('不能为空')
			return
		}
		setTodos([...todos, { title: val, done: false }])
		setVal('')
	}

	function handleSetTodo(e: inputEvevt, index: number) {
		console.log(e, 'e')
		const updateTodos = [...todos]
		updateTodos[index].done = e.target.checked
		setTodos(updateTodos)
	}

	let active = todos.filter(item=>item.done).length
	let [ allDone, setAllDone ] = useState(false)
	function handleToggleTodo(e: inputEvevt) {
		const nextTodos = [...todos];
		nextTodos.forEach(item => item.done = e.target.checked)

		setTodos(nextTodos)
		setAllDone(e.target.checked)
	}

	useEffect(() => {
		setAllDone(active === todos.length)
	}, [todos])


    function handleClear() {
        setTodos(todos.filter(item => !item.done))
    }

	return <div>
		<input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
		<button onClick={ handleAdd }>添加</button>
		<button onClick={ handleClear }>清空</button>

		{ todos.length ? <ul> { listItems } </ul> : <div>暂无数据</div> }

		<div>
			全选 <input type="checkbox" checked={allDone} onChange={e=>{handleToggleTodo(e)}}  />
			<span>{ active }/{todos.length}</span>
		</div>
	</div>
}

export default App;