export default function About() {
    return  (
    <Layout>
    <Head>
      <title>About Mw</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>About me goes here </p>
      <p>
        (This is a sample website - you’ll be building a site like this in{' '}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
    </section>
  </Layout>
    )
  }