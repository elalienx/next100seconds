// Node modules
import { useRouter } from "next/router";
import Image from "next/image";

// SSR
export async function getServerSideProps({ params }) {
  const request = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await request.json();

  return { props: { car: data } };
}

// SSG
// export async function getStaticProps({ params }) {
//   const request = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await request.json();

//   return { props: { car: data } };
// }

// export async function getStaticPaths() {
//   const request = await fetch("http://localhost:3000/cars.json");
//   const data = await request.json();
//   const paths = data.map((item) => {
//     return { params: { id: item } };
//   });

//   return { paths, fallback: false };
// }

export default function CarPage({ car }) {
  // Global state
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Car id #{id}</h1>
      <Image src={car.image} fill width={800} height={600} />
    </div>
  );
}
