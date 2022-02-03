import * as React from 'react';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Header />
      <main className="min-h-main">
      </main>
      <footer>Footer 1</footer>
    </Layout>
  );
}
