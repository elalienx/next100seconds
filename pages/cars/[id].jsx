// Node modules
import { useRouter } from "next/router";

export default function CarPage() {
  // Global state
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Car id #{id}</h1>
    </div>
  );
}
