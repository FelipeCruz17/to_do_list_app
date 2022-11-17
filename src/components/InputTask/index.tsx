import { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { PlusCircle } from 'phosphor-react-native';
import { styles } from './styles';

interface Props {
  onAddTask: (newTaskTitle: string) => void
}

export function InputTask({ onAddTask }: Props) {
	const [newTask, setNewTask] = useState('');

	function handleCreateTask() {
		if (!newTask.trim()) {
			return;
		}
		onAddTask(newTask);
		setNewTask('');
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.inputContainer}
				placeholder='Adicione uma nova tarefa'
				placeholderTextColor="#808080"
				value={newTask}
				onChangeText={event => setNewTask(event)}

			/>
			<TouchableOpacity style={styles.buttonAddTask} onPress={handleCreateTask}>
				<PlusCircle color='white' size={28} />
			</TouchableOpacity>
		</View>
	);
}
