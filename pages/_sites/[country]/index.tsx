import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Country } from '../../../models/country'

const Home: NextPage<{country: Country}> = ({country}) => {
  return (
    <div>
      <Head>
        <title>Country Static SaaS | {country.name}</title>
        <link rel="icon" href={country.favicon} />
      </Head>

      <main style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem'}}>
          {country.name}
        </h1>
        <div style={{ position: 'relative', width: '50rem', height: '50rem', margin: 'auto' }}>
          <Image
            src={country.background}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const result = await fetch(
    `${process.env.HOST}/api/countries/${
      process.env.PLATFORM === 'local' ? process.env.DEFAULT_COUNTRY_URL : params?.country?.toString().replace(':3000','')
    }`
  );
  
  const country = await result.json();

  return {
    props: {
      country
    },
    revalidate: 3600,
  };
};