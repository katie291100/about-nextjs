"use client"
import Link from 'next/link'
import Card from './components/card'
import MiniSearch from 'minisearch'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    // A collection of documents for our examples
    const documents = [
      {
        id: 1,
        title: 'Moby Dick',
        text: 'Call me Ishmael. Some years ago...',
        category: 'fiction'
      },
      {
        id: 2,
        title: 'Zen and the Art of Motorcycle Maintenance',
        text: 'I can see by my watch...',
        category: 'fiction'
      },
      {
        id: 3,
        title: 'Neuromancer',
        text: 'The sky above the port was...',
        category: 'fiction'
      },
      {
        id: 4,
        title: 'Zen and the Art of Archery',
        text: 'At first sight it must seem...',
        category: 'non-fiction'
      }
      // ...and more
    ];


    (async () => {
      let index = new MiniSearch({
        fields: ['title', 'text'], // fields to index for full-text search
        storeFields: ['title', 'category'] // fields to return with search results
      })    
      index.addAll(documents)

      const input = document.querySelector('input[type=search]');
    
      const search = query => {
        const results = index.search(query, { prefix: true, fuzzy: 0.3 });
        console.log(results);
      };
      input.addEventListener('input', event => {
        search(event.target.value);
      });
    })();
    const container = document.createElement('div');
    container.setAttribute('id', 'search-results');

    const search = query => {
      if (query.length > 1) {
        const results = index.search(query, { prefix: true, fuzzy: 0.3, });
        const list = document.createElement('ol');
        results.slice(0, 10).forEach(result => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.setAttribute('href', result.pathname);
          link.appendChild(document.createTextNode(result.title));
          item.appendChild(link);
          list.append(item);
        });
        container.replaceChildren(list);
        input.after(container);
      } else {
        container.parentNode.removeChild(container);
      }
    };
  }, [])
 
  return (
      <div className='flex min-h-screen flex-col items-center justify-between'>
      <h3 className="text-black text-[48px] font-patua_one">Katie Maison</h3>
      <div className="m-auto mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <input type="search"></input>
        <Card
          link="/work-experience"
          title = "Work Experience"
          description = "Find in-depth information about Next.js features and API."/>

        <Card
          link="/work-experience"
          title = "Work Experience"
          description = "Find in-depth information about Next.js features and API."/>

        <Card
          link="/work-experience"
          title = "Work Experience"
          description = "Find in-depth information about Next.js features and API."/>

        <Card
          link="/work-experience"
          title = "Work Experience"
          description = "Find in-depth information about Next.js features and API."/>
      </div>
    </div>
  )
}
