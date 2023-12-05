import React from 'react';
import NavigointiPalkki from './NavigointiPalkki';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigointiPalkki />
      <main className="container mx-auto p-4">{children}</main>
      {/* Lisää mahdolliset alatunnisteet tai muut toistuvat osat */}
    </div>
  );
};

export default Layout;