import React from 'react';
import { NavItem } from 'src/data/navigationData';

type Props = {
  activeItem: NavItem | undefined;
};

export const PageView = ({ activeItem }: Props) => {
  return (
    <div className="flex-1 flex pt-10 justify-center text-4xl font-bold bg-gray-50 border-b border-gray-200">
      {activeItem ? activeItem.name : 'No page selected'}
    </div>
  );
}; 