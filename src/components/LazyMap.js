import dynamic from 'next/dynamic';

const LazyMap = dynamic(
    () => import('./Map'),
    {
        ssr: false,
        loading: () => (<div>loading...</div>),
    }
);

export default LazyMap;