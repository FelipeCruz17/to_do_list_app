import { View, Text, TouchableOpacity } from 'react-native';
import { Trash, Check } from 'phosphor-react-native';
import { styles } from './styles';
import { ITask } from '../../types';

interface Props {
  task: ITask
  onRemoveTask: (taskId: string) => void
  onToggleTaskStatus: (taskId: string) => void
}

export function Task({ task, onRemoveTask, onToggleTaskStatus }: Props) {
	return (

		<View style={styles.container}>
			{task.isCompleted === false ? (
				<TouchableOpacity
					style={styles.buttonUnChecked}
					onPress={() => onToggleTaskStatus(task.id)}
				/>
			) : (
				<TouchableOpacity style={styles.buttonChecked}>
					<Check color='#F2F2F2' size={18} />
				</TouchableOpacity>
			)}

			{task.isCompleted ? (
				<Text style={styles.textTitleChecked}>
					{task.title}
				</Text>
			) : (
				<Text style={styles.textTitle}>
					{task.title}
				</Text>
			)}


			<TouchableOpacity onPress={() => onRemoveTask(task.id)}>
				<Trash color='#808080' />
			</TouchableOpacity>
		</View>

	);
}

