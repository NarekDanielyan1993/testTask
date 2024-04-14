import Head from 'next/head';

const Helmet = () => {
    return (
        <Head>
            <meta
                content="width=device-width, initial-scale=1.0"
                name="viewport"
            />
            <meta charSet="UTF-8" />
            <meta
                content="All the books related to linux software."
                name="description"
            />
            <title>Order books</title>
        </Head>
    );
};

export default Helmet;
