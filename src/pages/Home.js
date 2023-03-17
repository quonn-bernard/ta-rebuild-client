import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../features/categories/categorySlice';
import { Text } from "@chakra-ui/layout";

const Home = () => {
    const dispatch = useDispatch();
    const { categories, isLoading, isError, message } = useSelector(
        (state) => state.categories
      );

      useEffect(() => {
        if (isError) {
            console.log(message);
          }
          dispatch(getAllCategories())
      },[dispatch])

      if (isLoading) {
        return <p>Loading...</p>;
      }

    return ( <>
        <Text>Home</Text>
        {categories.length ? (categories.map(cat => {
            return <Text key={cat._id}>{cat.name}</Text>
        })) : <Text>No categories to display...</Text>}
    </> );
}
 
export default Home;