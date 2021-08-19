import React from 'react';

export type DoubleCtaProps = {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
};

export const DoubleCtaReact = ({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: DoubleCtaProps) => (
  <div className="flex mt-8 space-x-2">
    <a className="btn-primary" href={primaryHref}>
      {primaryText}
    </a>
    <a className="btn-text" href={secondaryHref}>
      {secondaryText}
    </a>
  </div>
);
