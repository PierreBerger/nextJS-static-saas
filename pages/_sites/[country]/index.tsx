import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Country } from '../../../models/country'


const Home: NextPage<{country: Country}> = ({country}) => {
  return (
    <div>
      <Head>
        <title>Country Static SaaS | {country.name}</title>
        <link rel="icon" href={country.favicon} />
      </Head>

      <main style={{textAlign: 'center', height: '95vh'}}>
        <h1 style={{fontSize: '3rem'}}>
          {country.name}
        </h1>
        <div style={{ position: 'relative', width: '100%', height: '60%'}}>
          <Image
            src={country.background}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        <ul>
          <li>
            <Link href="https://static-saas-france.vercel.app/">
              static-saas-france.vercel.app
            </Link>
          </li>
          <li>
            <Link href="https://static-saas-usa.vercel.app/">
              static-saas-usa.vercel.app
            </Link>
          </li>
          <li>
            <Link href="https://static-saas-deutschland.vercel.app/">
              static-saas-deutschland.vercel.app
            </Link>
          </li>
        </ul>

        <div className="source">Source {''}
          <Link href="https://github.com/PierreBerger/nextJS-static-saas">
            <a target="_blank">available on Github.</a>
          </Link>
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
    revalidate: 360000,
  };
};