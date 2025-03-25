import { CssBaseline, GlobalStyles } from '@mui/material';

const styles = {
  html: { overflowY: 'scroll' },
};

export const GlobalStylesComponent = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
};
