'use client';
import React from 'react';
import { Container } from '@/components/Container';
import Basket from '@/components/Basket';

export default function Home() {
  return (
    <main>
      <Container>
        <Basket />
      </Container>
    </main>
  );
}
