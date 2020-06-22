import React from 'react';
import {ReactSVG} from 'react-svg';

type SVGImageProps = {
  src?: string;
  afterInjectionCallback?: (svg: SVGElement | undefined) => void;
  beforeInjectionCallback?: (svg: SVGElement | undefined) => void;
  evalScripts?: 'always' | 'once' | 'never' | undefined;
  fallbackComponent?: (
    props: any,
  ) =>
    | React.ReactElement
    | React.FunctionComponent
    | React.Component
    | undefined
    | React.PureComponent;
  loadingComponent?: (
    props: any,
  ) =>
    | React.ReactElement
    | React.FunctionComponent
    | React.Component
    | undefined
    | React.PureComponent;
  wrapperElement?: 'div' | 'span';
  svgClassName?: string;
  svgCustomStyles?: string;
};

type Props = SVGImageProps & BaseCommponent;

const SVGImage: React.FunctionComponent<Props> = ({
  src,
  afterInjectionCallback,
  beforeInjectionCallback,
  fallbackComponent,
  loadingComponent,
  evalScripts,
  id,
  className,
  wrapperElement,
  svgClassName,
  style,
  svgCustomStyles,
}) => (
  <div id={id} className={`bdlib-svg-image ${className ? className : ''}`}>
    <ReactSVG
      src={src ? src : ''}
      afterInjection={(error, svg) => {
        if (error) {
          console.error(error);
          return;
        }
        afterInjectionCallback ? afterInjectionCallback(svg) : console.log(svg);
      }}
      beforeInjection={(svg) => {
        svg.classList.add(svgClassName + '');
        beforeInjectionCallback
          ? beforeInjectionCallback(svg)
          : console.log(svg);
      }}
      evalScripts={evalScripts}
      fallback={fallbackComponent as any}
      loading={loadingComponent as any}
      wrapper={wrapperElement}
      className="custom-svg-wrapper"
      style={style}
    />
    <style jsx global>{`
      .custom-svg-wrapper {
        display: inline-block;
        margin: 0;
        padding: 0;
      }

      .custom-svg-wrapper > ${wrapperElement} {
        display: inline-block;
        margin: 0;
        padding: 0;
      }
    `}</style>
    <style jsx global>
      {svgCustomStyles}
    </style>
  </div>
);

SVGImage.defaultProps = {
  src:
    '//images.ctfassets.net/n6oys4mfogjn/7tFrDMZukbe7SaFsF5eOLx/edb8582abcb7ac0eda7c1266736e1b8b/iconmonstr-instagram-11.svg',
  afterInjectionCallback: (svg: SVGElement | undefined) => console.log(svg),
  beforeInjectionCallback: (svg: SVGElement | undefined) => console.log(svg),
  evalScripts: 'never',
  fallbackComponent: () => <span>Error!</span>,
  loadingComponent: () => <span>Loading</span>,
  wrapperElement: 'div',
  svgClassName: 'custom-svg-element',
} as Partial<SVGImageProps>;

export default SVGImage;
