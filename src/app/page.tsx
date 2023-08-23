import { getVendorList } from '@api/server/landingApi';
import HomeConatiner from '@container/landing';

const HomePage = async () => {

  const data = await getVendorList();

  return (
    <>
      <HomeConatiner data={data} />

    </>
  );
};

export default HomePage;
