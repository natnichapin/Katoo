//สามารถใช้ axios แทนการใช้ fetch ได้

import Image from "next/image";

const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const getUserData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const getDogData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 10,
    },
  });
  return res.json();
};

export default async function ListOfPosts() {
  const [posts, users, dog] = await Promise.all([
    getPostsData(),
    getUserData(),
    getDogData(),
  ]);
  // const posts  = await getPostsData();
  console.log(posts);

  return (
    <div className="w-full p-5 relative  overflow-auto">
      <Image  className="m-auto"  src={dog.message} alt="dog" width={300} height={300} />

      {posts.map((post: any) => {
        if (post.id <= 20)
          return (
            <div className=" block text-sm">
              {post.id} . {post.title}{" "}
            </div>
          );
      })}

      {users.map((user: any) => {
        return <div className=" block text-sm">{user.name} </div>;
      })}
    </div>
  );
}
