import React from 'react';

type Props = {
  greeting: string;
};

export function App({ greeting }: Props) {
  return <h1>Hello, {greeting}!</h1>;
}
