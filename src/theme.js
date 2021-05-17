import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#8bc34a'
		},
		secondary: {
			main: '#4db6ac'
		},
		error: {
			main: red.A400
		},
		background: {
			default: '#fff'
		},
		appBar: {
			textColor: '#009688'
		}
	}
});

export default theme;
