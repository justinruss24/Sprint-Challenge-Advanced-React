import React from "react";
import Search from './Search';
import { render } from '@testing-library/react';

test('search bar rendered properly', () => {
    render(<Search />);
})