import { useEffect } from "react";
import { Text } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../features/categories/categorySlice";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    try {
     dispatch(getAllCategories());
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = (slug) => {
    navigate(`${process.env.REACT_APP_API_CAT_URL}${slug}`);
  };

  return (
    <>
      {categories.length ? (
        categories.map((cat) => {
          return (
            <Text onClick={() => handleClick(cat.slug)} key={cat._id}>
              {cat.name}
            </Text>
          );
        })
      ) : (
        <Text>No services found to display...</Text>
      )}
    </>
  );
};

export default CategoriesList;
