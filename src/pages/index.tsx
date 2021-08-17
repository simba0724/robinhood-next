import React, {useEffect} from 'react';
import {Layout} from 'components/Layout';
import {AllMedia} from 'components/AllMedia';
import {ZeroState} from 'components/ZeroState';
import {useMedia} from 'contexts/Media.context';

const IndexPage = () => {
  const [{allMetadata}, , loadMedia] = useMedia();

  useEffect(() => loadMedia(), []);

  return (
    <Layout title={'RBH Marketplace'}>
      {allMetadata.length > 0 ? (
        <AllMedia media={allMetadata} />
      ) : (
        <ZeroState title="No minted NFTs." hint="Why not try minting some?" />
      )}
    </Layout>
  );
};

export default IndexPage;
