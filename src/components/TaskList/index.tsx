import { FlatList, Text, View } from 'react-native';
import { ITask } from '../../types';
import { Task } from '../Task';
import { Clipboard } from 'phosphor-react-native';
import { styles } from './styles';

interface Props {
  tasks: ITask[]
  onRemoveTask: (taskId: string) => void
  onToggleTaskStatus: (taskId: string) => void
}

export function TaskList({ tasks, onRemoveTask, onToggleTaskStatus }: Props) {
	return (
		<FlatList
			style={styles.container}
			data={tasks}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<Task
					task={item}
					onRemoveTask={() => onRemoveTask(item.id)}
					onToggleTaskStatus={() => onToggleTaskStatus(item.id)}
				/>
			)}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={() => (
				<View style={styles.emptyListContainer}>
					<Clipboard color='#808080' size={56} />
					<Text style={styles.text1}>
            Você ainda não tem tarefas cadastradas
					</Text>
					<Text style={styles.text2}>
            Crie tarefas e organize seus itens a fazer
					</Text>
				</View>

			)}
		/>
	);
}
