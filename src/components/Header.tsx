"use client";

import React from 'react';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const scenarioItems = [
    { label: 'シナリオの作成', onClick: () => console.log('New scenario') },
    { label: 'シナリオの保存', onClick: () => console.log('Save scenario') },
    { label: 'シナリオの読み込み', onClick: () => console.log('Load scenario') },
    { label: 'シナリオのエクスポート', onClick: () => console.log('Export scenario') },
  ];

  const windowItems = [
    { label: '新規にウィンドウを表示する', onClick: () => console.log('New window') },
    { label: 'ウィンドウを整列する', onClick: () => console.log('Arrange windows') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">Hakogaki</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <DropdownMenu label="シナリオ" items={scenarioItems} />
            </li>
            <li>
              <DropdownMenu label="ウィンドウ" items={windowItems} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
