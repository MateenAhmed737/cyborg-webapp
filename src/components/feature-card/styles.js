// @mui
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledButton = styled('button')(({ theme, color }) => ({
  zIndex: 1,
  padding: 2,
  content: "''",
  position: 'absolute',
  top: 1,
  right: 1,
  background: theme.palette[color].dark,
}));
