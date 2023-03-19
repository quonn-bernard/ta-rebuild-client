import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories} from "../features/categories/categorySlice";
import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getAllCategories());
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Text>Home</Text>
        {categories.length ? (
          categories.map((cat) => {
            return (
              <Link key={cat._id} href={`${process.env.REACT_APP_API_CAT_URL}${cat.slug}`}>
                {cat.name}
              </Link>
            );
          })
        ) : (
          <Text>No categories to display...</Text>
        )}
      </>
  );
};

export default Home;
