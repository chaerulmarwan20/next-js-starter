import Layout from "../../components/Layout/Layout";

const detail = (props) => {
  const { dataUser } = props;
  const { name, email, phone, website } = dataUser;

  return (
    <Layout pageTitle="Users Detail Page">
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </Layout>
  );
};

export default detail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const dataUser = await res.json();
  return {
    props: {
      dataUser,
    },
  };
}
