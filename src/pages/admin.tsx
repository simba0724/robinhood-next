import React, {useEffect} from 'react';
import {AllMintMedia} from 'components/AllMintMedia';
import {ZeroState} from 'components/ZeroState';
import {useMedia} from 'contexts/Media.context';

const AdminPage = () => {
  const [{allMetadata}, , loadMedia] = useMedia();

  useEffect(() => loadMedia(), []);

  return (
    <div className="container mx-auto" style={{maxWidth: 1024}}>
        <div className="my-24 mx-auto">
          <h1 className="text-4xl font-bold text-center my-12">Mint and Auction NFTs</h1>
          {allMetadata.length > 0 ? (
            <AllMintMedia media={allMetadata} />
          ) : (
            <ZeroState title="No minted NFTs." hint="Why not try minting some?" />
          )}
        </div>
    </div>
  );
};

export default AdminPage;
