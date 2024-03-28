import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      // Check if the user is authenticated
      const checkAuth = async () => {
        // Implement your authentication logic here
        const isAuthenticated = true; // Replace with your authentication check

        if (isAuthenticated) {
          setIsLoggedIn(true);
        } else {
          router.push("/portal");
        }
      };

      checkAuth();
    }, []);

    if (!isLoggedIn) {
      return null;
    }

    return <WrappedComponent {...props} isLoggedIn={isLoggedIn} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
