import { getVendorList } from '@api/server/landingApi';
import HomeConatiner from '@container/landing';

const HomePage = async () => {

  const data = await getVendorList();
  console.log({ data });

  return (
    <>
      <HomeConatiner />
    </>
  );
};

export default HomePage;
