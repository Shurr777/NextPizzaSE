'use client';

import React from 'react';
import { Container, Title, Categories, SortPopup, Filters, ProductsGroupList } from '@/components/shared';
import { TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size="lg" className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>

        <div className="flex gap-[80px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
              title='Пиццы'
              items={[
                {
                  id: 1,
                  name: 'Пепперони',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 2,
                  name: 'Маргарита',
                imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 3,
                  name: 'Гавайская',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 4,
                  name: 'Четыре сыра',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 5,
                  name: 'Мясная',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 6,
                  name: 'Вегетарианская',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
              ]}
              categoryId={1}
              />
              <ProductsGroupList
              title='Комбо'
              items={[
                {
                  id: 1,
                  name: 'Пепперони',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 2,
                  name: 'Маргарита',
                imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 3,
                  name: 'Гавайская',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 4,
                  name: 'Четыре сыра',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 5,
                  name: 'Мясная',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
                {
                  id: 6,
                  name: 'Вегетарианская',
                  imageUrl: 'https://bellamozzarella.com.ua/static/media/halves.ab9acda2a5f6e8833b01.jpg',
                  items: [{ price: 395 }]
                },
              ]}
              categoryId={2}
              />
              </div>
          </div>

        </div>
      </Container >
    </>
  );
}
