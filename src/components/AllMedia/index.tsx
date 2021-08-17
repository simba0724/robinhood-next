import {Media} from 'components/Media';
import {FC} from 'react';

export type MediaProps = {
  media_url?: string;
  metadata: {
    title?: string;
    description?: string;
    mime_type?: string;
  };
  media_id?: string;
  _id?: string;
  metadata_url?: string;
  creator_address?: string;
  count?: number;
};

export type AllMediaProps = {
  media: MediaProps[];
  title?: string;
};

export const AllMedia: FC<AllMediaProps> = ({media}) => {
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex">
          <img src="/img/totalvalue2.png" className="h-20 w-auto"/>
          <div>
            <select className="mt-8 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 pr-8 rounded">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 md:grid-cols-2 gap-2">
        {media.map((item, index) => (
          <Media key={index} media={item} />
        ))}
      </div>
    </div>
  );
};
