import { Form, Field, Formik } from 'formik'
import Image from 'next/image'

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Header from '../components/layout/Header';
import { useState } from 'react';

export interface InitialValues {
  search: string
}

const PopUp = ({ gif, visible, back, previous, next, index }: any) => {
  return (
      <div
        className={`overflow-auto \
              z-30 \
              mx-auto \
              top-20 \
              p-6 \
              bg-white \
              text-left \
              fixed \
              ${visible ? 'visible' : 'invisible'}`}>
          <Image className='w-full' width={400} height={400} src={gif} />
    <div className='flex flex-col'>
      <button className='dark:bg-purple-400 bg-purple-700
  dark:hover:bg-purple-700 hover:bg-purple-900 dark:text-black text-white
  font-medium rounded p-2 my-2' onClick={back}>Go back</button>
      {index != 0 &&
        <button className='dark:bg-purple-400 bg-purple-700
  dark:hover:bg-purple-700 hover:bg-purple-900 dark:text-black text-white
  font-medium rounded p-2 my-2 w-full' onClick={previous}>Previous</button>}
      <button className='dark:bg-purple-400 bg-purple-700
  dark:hover:bg-purple-700 hover:bg-purple-900 dark:text-black text-white
  font-medium rounded p-2 my-2 w-full' onClick={next}>Next</button>
          </div>
      </div>
  )
}

export default function HomePage() {
  const [offset, setOffset] = useState(0);
  const [gifs, setGifs] = useState([]);
  const [currentGifIndex, setCurrentGifIndex] = useState(-1);
  const [visiblePopUp, setVisiblePopUP] = useState(false);
  const [limit, setLimit] = useState(10);
  return (
    <Layout>
      <Seo />
      <Header />
      <main className="min-h-main flex justify-center items-center flex-col md:px-24">
        <div className='flex flex-col max-w-14'>
          <Formik initialValues={{ search: '' }} onSubmit={async ({ search }: any, { resetForm }) => {
              console.log('submitting');
          const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=v54hYaQ1qhd4G9OsDiViA08Ij3PBy38n&q=${search}&offset=${offset}&limit=${limit}`)
          const new_gifs = await res.json()
          setGifs(gifs.concat(new_gifs.data))
          setOffset(offset + 10)
          setLimit(limit + 10)
          resetForm({ values: { search } })
        }}><Form>
            <div className='flex flex-col'>
              <Field
                placeholder='Search bar'
                name='search'
                type='search'
              />
              <button className='dark:bg-purple-400 bg-purple-700
  dark:hover:bg-purple-700 hover:bg-purple-900 dark:text-black text-white
  font-medium rounded p-2 my-2' type='submit'>{gifs.length > 0 ? 'More' : 'Search'}</button>
            </div>
          </Form></Formik>
              <button className='dark:bg-gray-200 bg-transparent
  hover:bg-purple-700 text-purple-700 font-medium hover:text-white border border-purple-700 hover:border-transparent rounded w-full p-2 my-2' onClick={() => {
                  setGifs([])
                  setOffset(0)
                  setLimit(10)
                  setCurrentGifIndex(-1)
                }}>Clear</button>
            </div>
        <div className='w-full flex flex-wrap flex-row mx-8'>
          {gifs.length > 0 &&
            gifs.map((gif, index) => {
              return (<div onClick={() => {
                setVisiblePopUP(true)
                setCurrentGifIndex(index)
              }}><Image width={60} height={60} src={gif.images.preview_gif.url} /></div>)
            })}
        </div>
        {currentGifIndex != -1 &&
          <PopUp visible={visiblePopUp} index={currentGifIndex} gif={gifs[currentGifIndex].images.original.url} back={() => setVisiblePopUP(!visiblePopUp)} next={() => setCurrentGifIndex(currentGifIndex + 1)} previous={() => setCurrentGifIndex(currentGifIndex - 1)} />
        }
      </main>
      <footer>Footer Home</footer>
    </Layout>
  );
}
