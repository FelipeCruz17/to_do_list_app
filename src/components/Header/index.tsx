import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/logo.svg';
import { styles } from './styles';
export function Header() {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Logo />
			</View>
		</SafeAreaView>
	);
}
