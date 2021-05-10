import React from 'react';
import KickStart from '../src/index';
import '~/tailwind/src/styles.css';
import kits from '../doc/starterkit-list';

export const story1 = () => <KickStart kits={kits} />;
