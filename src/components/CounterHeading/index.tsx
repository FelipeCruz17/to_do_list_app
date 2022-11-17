import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
  title: 'Criadas' | 'Concluídas'
  counter: number
}

export function CounterHeading({ title, counter }: Props) {
	return (
		<View style={styles.container}>
			{title === 'Criadas' ? (
				<Text style={styles.textTitleCreated }>
					{title}
				</Text>
			) : (
				<Text style={styles.textTitleFinished}>
					{title}
				</Text>
			)}
			<View style={styles.counterContainer}>
				<Text style={styles.counterText}>
					{counter}
				</Text>
			</View>
		</View>
	);
}
