import { server } from "../../../config2";
import Link from "next/link";
import Meta from "../../../components/Meta";

const project = ({ project }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <>
      <Meta
        title={project.title.rendered}
        description={project.content.rendered}
      />
      <div className="container">
        <h1 className="ip-5">{project.title.rendered}</h1>
        <div
          className="overflow"
          dangerouslySetInnerHTML={{ __html: project.content.rendered }}
        ></div>

        <br />
        <Link href="/"> Go Back &larr;</Link>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/wp-json/wp/v2/project/
    ${context.params.id}`
  );
  const project = await res.json();

  console.log(project);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/wp-json/wp/v2/project`);
  const projects = await res.json();

  const ids = projects.map((project) => project.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const project = await res.json();

//   return {
//     props: {
//       project,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const project = await res.json();

//   const ids = project.map((project) => project.id);
//   console.log(ids);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default project;
