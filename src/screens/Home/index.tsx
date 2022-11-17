import { useState } from 'react';
import { View, Alert } from 'react-native';
import { Header } from '../../components/Header';
import { InputTask } from '../../components/InputTask';
import { TaskCounter } from '../../components/TaskCounter';
import { TaskList } from '../../components/TaskList';
import { ITask } from '../../types';

import { styles } from './styles';

export function Home() {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const totalTasks = tasks.length;
	const completedTasks = tasks.filter(task => task.isCompleted).length;

	function handleCreateNewTask(newTaskTitle: string) {
		setTasks(prevState => [...prevState, {
			id: String(new Date().getTime()),
			isCompleted: false,
			title: newTaskTitle
		}]);
	}

	function handleDeleteTask(taskId: string) {
		Alert.alert('Deletar', 'Deseja deletar a task?', [
			{
				text: 'Sim',
				onPress: () => setTasks(prevState => prevState.filter(task => task.id !== taskId))
			},
			{
				text: 'Não',
				style: 'cancel'
			}
		]);
	}

	function handleToggleTaskStatus(taskId: string) {
		setTasks(prevState => prevState.map(task => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted
				};
			} else {
				return task;
			}
		}));
	}

	return (
		<View style={styles.container}>
			<Header />
			<InputTask
				onAddTask={handleCreateNewTask}
			/>
			<TaskCounter
				totalTasks={totalTasks}
				completedTasks={completedTasks}
			/>
			<TaskList
				tasks={tasks}
				onRemoveTask={handleDeleteTask}
				onToggleTaskStatus={handleToggleTaskStatus}
			/>
		</View>
	);
}
