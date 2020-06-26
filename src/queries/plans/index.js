import gql from 'graphql-tag';

export const getAll = () =>
  gql(
    window.atob(
      'CiAgewogICAgbGlzdFBsYW5zIHsKICAgICAgaWQKICAgICAgd2Vla2x5UmVjaXBlcwogICAgICBudW1iZXJPZlBlb3BsZQogICAgICBwcmljZQogICAgfQogIH0K'
    )
  );
