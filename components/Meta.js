import Head from "next/head";

const Meta = ({ keyword, description, title }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keyword" content={keyword} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "Lithops Construction",
  keyword:
    "Ethiopian construction, road constrution, building construction, ethiopia road, ethiopia building",
  description: "Building your future! Building your roads. ",
};
export default Meta;
