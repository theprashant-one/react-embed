import * as React from 'react';
import {BlockProps} from '../..';
import ReactPlayer from 'react-player';

const Vimeo: React.FC<BlockProps> = ({url, renderWrap}) => {
  return renderWrap(<ReactPlayer url={url} />);
};

export default Vimeo;
