// routes
import { PATH_DASHBOARD, PATH_FEATURE_STORE } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.root, icon: ICONS.dashboard },
      { title: 'Feature Store', path: PATH_FEATURE_STORE.root, icon: ICONS.dashboard },
    ],
  },
];

export default navConfig;
