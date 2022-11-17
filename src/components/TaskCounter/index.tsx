import { View } from 'react-native';
import { CounterHeading } from '../CounterHeading';
import { styles } from './styles';

interface Props {
  totalTasks: number;
  completedTasks: number;
}

export function TaskCounter({ totalTasks, completedTasks }: Props) {
	return (
		<View style={styles.container}>
			<CounterHeading title='Criadas' counter={totalTasks} />
			<CounterHeading title='Concluídas' counter={completedTasks} />
		</View>
	);
}
