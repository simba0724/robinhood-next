import {PlayerComponent} from 'components/Player';
import React, {FC} from 'react';
import {User} from 'components/User';
import {MediaProps} from 'components/AllMedia';

export const Media: FC<{media: MediaProps}> = ({media}) => {
  const {
    _id,
    media_url,
    metadata: {title, mime_type},
  } = media;
  return (
    <div className="my-5">
      <article className="overflow-hidden bg-white rounded-lg shadow-lg p-4">
        <div className="relative">
          <div className="py-4">
            <PlayerComponent url={media_url} mimetype={mime_type} />
          </div>
          <button class="flex text-sm absolute top-0 h-6 px-2 text-indigo-100 rounded-lg" style={{backgroundColor: "#33932e"}}>
              <span class="mr-1 my-auto">Live Auction</span>
              <span class="inline-flex items-center justify-center px-2 py-2 mt-1 text-xs font-bold leading-none bg-blue-300 rounded-full"></span>
            </button>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-xl font-black text-gray-600">Name</p>
          <button className="font-bold py-1 px-4 rounded" style={{backgroundColor: "#d6f1d1", color: '#33932e'}}>GLW-YDM</button>
        </div>
        <div className="text-lg" style={{color: '#33932e'}}>
          Current Price: 20.93 SEED
        </div>
      </article>
    </div>
  );
};
