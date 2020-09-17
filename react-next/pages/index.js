import {useRouter} from 'next/router';

import Layout from '../componets/_includes/Layout';

const Index = () => {
  const router = useRouter();
  const {pagename} = router.query;
  console.log(router.query);

  return(
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  )
};
  
  export default Index;
  