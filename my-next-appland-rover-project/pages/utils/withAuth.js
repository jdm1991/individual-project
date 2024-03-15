import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const token = localStorage.getItem("token");
    const isAuthenticated = !!token;

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
