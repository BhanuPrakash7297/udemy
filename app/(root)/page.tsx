import { Content } from '@/components/Content/Content';
import { Hero } from '@/components/Hero/hero'
import SponserCard from '@/components/SponserSection/SponserCard';
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Content />
      <SponserCard />{" "}
    </div>
  );
}

export default page;


