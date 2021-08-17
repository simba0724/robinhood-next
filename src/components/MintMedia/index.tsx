import {PlayerComponent} from 'components/Player';
import React, {FC} from 'react';
import {MediaProps} from 'components/AllMedia';

export const MintMedia: FC<{media: MediaProps}> = ({media}) => {
  const {
    _id,
    media_url,
    metadata: {title, mime_type},
  } = media;
  return (
    <div className="my-5" style={{width: 300}}>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <PlayerComponent url={media_url} mimetype={mime_type} />
        <a href={typeof _id !== 'undefined' ? `/media/${_id}` : '#'}>
          <header className="curosr-pointer flex items-center justify-between leading-tight p-2 md:p-4">
            <h1
              className="curosr-pointer text-lg truncate max-w-sm break-all"
              style={{
                width: 200,
              }}>
              {title}
            </h1>
          </header>
        </a>
        <header className="curosr-pointer flex items-center justify-between leading-tight p-2 md:p-4">
            <h1
              className="curosr-pointer text-lg truncate max-w-sm break-all"
              style={{
                width: 200,
              }}>
              creator:xxx
            </h1>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <div className="flex items-center no-underline hover:underline text-black">
            <button
                type="submit"
                className="inline-flex w-full justify-center py-3 px-24 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Mint Media
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
};
