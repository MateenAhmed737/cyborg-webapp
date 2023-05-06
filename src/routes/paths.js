// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_FEATURE_STORE = '/feature';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  runs: path(ROOTS_DASHBOARD, '/runs'),
};

export const PATH_FEATURE_STORE = {
  root: ROOTS_FEATURE_STORE,
};
