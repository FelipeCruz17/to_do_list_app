import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		marginTop: 16,
	},
	emptyListContainer: {
		marginTop: 48,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text1: {
		marginTop: 16,
		color: THEME.COLORS.GRAY_300,
		fontWeight: 'bold',
		fontSize: THEME.FONT_SIZE.MD,
	},
	text2: {
		color: THEME.COLORS.GRAY_300,
		fontWeight: 'normal',
		fontSize: THEME.FONT_SIZE.MD,
	},
});
