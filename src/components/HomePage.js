import React, {Fragment} from 'react';
import Search from './Search';

export default function HomePage() {
  document.title = 'Statfinder – Apex Legends Stats';

  return (
    <Fragment>
      <Search />
    </Fragment>
  )
}
