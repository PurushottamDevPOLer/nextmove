import Hero from "./components/Hero";
import Signin from "./components/Signin";

export default function Home() {
  let userRole = 'accountant'
  let content;
  if (userRole === 'admin') {
    content = <Hero />;
  } else {
    content = <Signin />;
  }
  return (
    <>
        {content}
    </>
  );
}
