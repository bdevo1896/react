import React from 'react';
import {SVGImage} from 'components';

export default {
  title: 'SVGImage',
  component: SVGImage,
};

export const Primary = () => (
  <SVGImage
    svgCustomStyles={`
        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        .custom-svg-element {
            width: 100px;
            height: auto;
            animation: rotate 5s linear 0s infinite alternate;
        }
    `}
  />
);
