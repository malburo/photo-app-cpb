import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2F80ED',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle3: {
      fontSize: 18,
      fontWeight: 600,
      color: '#fff',
      marginLeft: 10,
    },
    fontFamily: ['Noto Sans', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#fff',
        color: 'black',
      },
    },
    MuiPaper: {
      elevation4: {
        boxShadow: '0 1px 30px 0 rgba(145,145,145,0.2);',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 'none',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 12,
      },
    },
    MuiButton: {
      contained: {
        borderRadius: 8,
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#5d9cf1',
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fill: '#828282',
      },
    },
    MuiMenu: {
      paper: {
        border: '1px solid #E0E0E0',
        borderRadius: 12,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
    MuiMenuItem: {
      root: {
        '&:hover': {
          backgroundColor: '#F2F2F2',
        },
        margin: '8px 14px',
        borderRadius: 8,
        width: 160,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 30,
      },
    },
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
        justifyContent: 'start',
      },
    },
  },
});

export default theme;
