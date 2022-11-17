import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textTitleCreated:{
		fontFamily: THEME.FONT_FAMILY.BOLD,
		color: THEME.COLORS.BLUE,
		marginRight: 16,
		fontSize: THEME.FONT_SIZE.MD,
	},
	textTitleFinished:{
		fontFamily: THEME.FONT_FAMILY.BOLD,
		color: THEME.COLORS.PURPLE,
		marginRight: 16,
		fontSize: THEME.FONT_SIZE.MD,
	},
	counterContainer: {
		backgroundColor: THEME.COLORS.GRAY_400,
		paddingVertical: 2,
		paddingHorizontal: 8,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
	},
	counterText: {
		fontFamily: THEME.FONT_FAMILY.BOLD,
		color: THEME.COLORS.GRAY_200,
		fontSize: THEME.FONT_SIZE.MD,
	},
});
