import { Helmet } from 'react-helmet-async';
// @mui
import { Container } from '@mui/material';
// mock
import { _mapFeatures } from '../_mock/arrays';
// components
import { useSettingsContext } from '../components/settings';
import FeatureCard from '../components/feature-card';

// ----------------------------------------------------------------------

export default function FeaturePage() {
  const { themeStretch } = useSettingsContext();
  return (
    <>
      <Helmet>
        <title> Feature | CI</title>
      </Helmet>

      <Container
        maxWidth={themeStretch ? false : 'xl'}
        sx={{
          display: 'grid',
          gap: 5,
          justifyItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          paddingX: 'auto',
        }}
      >
        {_mapFeatures.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </Container>
    </>
  );
}
