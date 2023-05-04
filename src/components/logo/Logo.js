import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      component="img"
      src="/logo/logo_single.svg"
      sx={{ width: 80, height: 80, cursor: 'pointer', ...sx }}
    />
  );

  // OR using svg
  // -------------------------------------------------------

  // const theme = useTheme();

  // const PRIMARY_LIGHT = theme.palette.primary.light;

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

  // const logo = (
  //   <Box
  //     ref={ref}
  //     component="div"
  //     sx={{
  //       width: 80,
  //       height: 80,
  //       display: 'inline-flex',
  //       ...sx,
  //     }}
  //     {...other}
  //   >
  //     <svg
  //       version="1.1"
  //       id="Layer_1"
  //       xmlns="http://www.w3.org/2000/svg"
  //       xmlnsXlink="http://www.w3.org/1999/xlink"
  //       x="0px"
  //       y="0px"
  //       viewBox="0 0 87 62"
  //       xmlSpace="preserve"
  //     >
  //       <g id="g12">
  //         <g>
  //           <defs>
  //             <rect id="SVGID_1_" x="-51.2" y="-15.7" width="199.9" height="112.4" />
  //           </defs>
  //           <g>
  //             <g id="g14">
  //               <path id="path72" fill="#69C2D2" d="M72.1,49.2h-9V10.2h9V49.2z" />
  //               <g id="g74">
  //                 <path
  //                   id="path76"
  //                   fill="#69C2D2"
  //                   d="M49,31c-0.7,6.1-6.2,10.4-12.3,9.7C30.6,40,26.3,34.5,27,28.4c0.7-6.1,6.2-10.4,12.3-9.7
  // 					c5.1,0.6,9.1,4.6,9.7,9.7h9.3C57.6,17.3,48,8.9,36.9,9.6C25.8,10.3,17.4,19.9,18.2,31c0.7,11.1,10.3,19.5,21.4,18.8
  // 					c10.1-0.7,18.1-8.7,18.8-18.8H49z"
  //                 />
  //               </g>
  //             </g>
  //           </g>
  //         </g>
  //       </g>
  //     </svg>
  //   </Box>
  // );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
