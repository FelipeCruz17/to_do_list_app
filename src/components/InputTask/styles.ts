import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		marginLeft: 24,
		marginRight: 24,
		marginTop: -28,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputContainer: {
		backgroundColor: THEME.COLORS.GRAY_500,
		height: 56,
		flex: 1,
		borderRadius: 6,
		color: THEME.COLORS.GRAY_100,
		padding: 16,
		fontSize: THEME.FONT_SIZE.LG,
		marginRight: 6
	},
	buttonAddTask: {
		width: 56,
		height: 56,
		borderRadius: 6,
		backgroundColor: THEME.COLORS.BLUE_DARK,
		alignItems: 'center',
		justifyContent: 'center'
	},
});
