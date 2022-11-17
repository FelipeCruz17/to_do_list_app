import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		marginTop: 32,
		flexDirection: 'row',
		justifyContent:'space-between',
		marginLeft: 28,
		marginRight: 28,
		alignSelf: 'stretch',
		borderBottomWidth: 1,
		borderBottomColor: THEME.COLORS.GRAY_400,
		paddingBottom: 20
	},
});
