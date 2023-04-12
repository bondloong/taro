import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";

const Error = () => {
  const resolvedUrl = "/404"
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Header resolvedUrl={resolvedUrl} title='Страница не найдена 404' description='Страница не найдена'
        about='Страница не найдена'/>
    </>
  )
};

export default Error;