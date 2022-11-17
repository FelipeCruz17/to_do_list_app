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
		fontSize: THEME.FONT_SIZE.MD,
		fontFamily: THEME.FONT_FAMILY.BOLD,
	},
	text2: {
		color: THEME.COLORS.GRAY_300,
		fontFamily: THEME.FONT_FAMILY.REGULAR,
		fontSize: THEME.FONT_SIZE.MD,
	},
});
