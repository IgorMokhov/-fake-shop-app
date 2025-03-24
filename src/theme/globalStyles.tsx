import { CssBaseline, GlobalStyles } from '@mui/material';

const styles = {
  'h1, h2, h3, h4, h5, h6': { margin: 0 },
};

export const GlobalStylesComponent = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
};
