import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Style from "../../styles/Users.module.css";

const users = (props) => {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => {
        return (
          <div
            key={user.id}
            onClick={() => router.push(`users/${user.id}`)}
            className={Style.card}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
};

export default users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
