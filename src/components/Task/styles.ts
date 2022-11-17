import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: THEME.COLORS.GRAY_400,
		width: 327,
		marginRight: 'auto',
		marginLeft: 'auto',
		padding: 12,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 8,
		borderRadius: 8,
	},
	buttonUnChecked: {
		borderRadius: 999,
		borderWidth: 2,
		borderColor: THEME.COLORS.BLUE,
		minWidth: 22,
		height: 22,
	},
	buttonChecked: {
		borderRadius: 999,
		backgroundColor: THEME.COLORS.PURPLE_DARK,
		minWidth: 22,
		height: 22,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textTitle: {
		fontFamily: THEME.FONT_FAMILY.REGULAR,
		color: THEME.COLORS.GRAY_100,
		fontSize: THEME.FONT_SIZE.MD,
		marginLeft: 8,
		marginRight: 8,
		maxWidth: 235,
	},
	textTitleChecked: {
		fontFamily: THEME.FONT_FAMILY.REGULAR,
		color: THEME.COLORS.GRAY_300,
		fontSize: THEME.FONT_SIZE.MD,
		marginLeft: 8,
		marginRight: 8,
		maxWidth: 235,
		textDecorationLine: 'line-through',
	},
});
