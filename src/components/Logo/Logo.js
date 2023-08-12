// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="100.000000pt" height="20.000000pt" viewBox="0 0 100.000000 20.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
          fill="#000000" stroke="none">
          <path d="M366 174 c-3 -9 -6 -36 -6 -60 0 -47 15 -63 48 -49 16 8 16 8 0 12
-13 3 -18 15 -18 44 0 21 5 39 10 39 6 0 10 7 10 15 0 20 -36 19 -44 -1z"/>
          <path d="M507 183 c-2 -5 -7 -26 -11 -48 -4 -22 -9 -47 -12 -57 -4 -13 2 -16
31 -15 40 1 39 -3 19 100 -5 26 -18 35 -27 20z m10 -85 c-3 -7 -5 -2 -5 12 0
14 2 19 5 13 2 -7 2 -19 0 -25z"/>
          <path d="M620 125 c0 -37 4 -65 10 -65 6 0 10 8 10 18 1 16 1 16 14 0 19 -26
23 -23 30 27 10 64 1 85 -35 85 l-29 0 0 -65z m40 20 c0 -14 -4 -25 -10 -25
-11 0 -14 33 -3 43 11 11 13 8 13 -18z"/>
          <path d="M757 183 c-12 -11 -8 -23 8 -23 12 0 12 -6 0 -47 -8 -27 -15 -49 -15
-50 0 -2 14 -3 30 -3 17 0 30 5 30 10 0 6 -6 10 -14 10 -12 0 -12 7 0 47 8 25
14 50 14 55 0 10 -44 11 -53 1z"/>
          <path d="M884 158 c3 -18 9 -50 12 -71 4 -21 11 -36 17 -34 10 3 40 127 32
135 -9 9 -25 -10 -26 -31 -1 -20 -2 -19 -12 6 -15 37 -31 34 -23 -5z"/>
          <path d="M100 130 c0 -44 -3 -50 -23 -55 -13 -4 -24 -13 -24 -21 0 -16 23 -19
32 -4 9 15 27 1 21 -16 -4 -11 10 -14 70 -14 48 0 73 4 69 10 -11 17 5 32 21
19 17 -14 44 -5 44 14 0 17 -80 31 -94 16 -18 -17 -45 -10 -43 12 1 18 6 20
39 15 l38 -6 0 40 0 40 -75 0 -75 0 0 -50z m57 -45 c0 -8 -4 -12 -9 -9 -5 3
-6 10 -3 15 9 13 12 11 12 -6z m70 -41 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11
1 17 -2 13 -5z"/>
        </g>
      </svg>

    </>
  );
};

export default Logo;
