import {FC} from 'react';

type ImageProps = {
  url?: string;
};

export const ImageComponent: FC<ImageProps> = ({url}) => {
  return (
    <div>
      <img width={300} className="object-cover h-64 p-4" src={url} />
    </div>
  );
};
