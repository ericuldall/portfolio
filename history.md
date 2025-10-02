---
layout: home
title: 'History'
---
<script setup>
import { ref } from "vue";
import TimelineCard from './.vitepress/components/TimelineCard.vue';

import { AcademicCapIcon, ArrowsRightLeftIcon, BuildingOffice2Icon, CakeIcon, CodeBracketSquareIcon, InformationCircleIcon, RocketLaunchIcon } from '@heroicons/vue/24/solid';

const events = ref([
    {
      date: 'July 9, 1987',
      title: 'I was born',
      subtitle: '',
      description: `Happy birthday to me!`,
      icon: 'cake',
      color: '#668284'
    },
    {
      date: 'Circa 1997',
      title: 'The Cloud Journey Begins',
      subtitle: 'Started Learning HTML/CSS',
      description: `Thanks to my older brother who left a giant html bible sitting around the house. This book would be the starting point for my entire professional life.`,
      icon: 'code',
      color: '#2A2829'
    },
    {
      date: 'Circa 2004',
      title: 'Enter Server Side',
      subtitle: 'Got bored just building "websites"',
      description: `I was introduced to PHP by a friend in high school and I began to learn everything I needed to know about building a fully functionaly application.`,
      icon: 'code',
      color: '#493736'
    },
    {
      date: 'June 2005',
      title: 'Graduated High School',
      subtitle: '',
      description: `Tried to find myself...that didn't work.<br />Went back to coding eventually :D`,
      icon: 'learn',
      color: '#7B3B3B'
    },
    {
      date: '2005-2014',
      title: 'Odd Jobs and such',
      subtitle: 'It was a long time ago...',
      description: `During this time I did some freelance work and an internship but it's so long ago I don't really remember all the details. Was a good time to cut my teeth and get some work under my belt as a young lad.`,
      icon: 'rocket',
      color: '#668284',
    },
    {
      split: [
        {
          date: '2016',
          title: 'Co-Created Amino Editor',
          subtitle: 'The best-in-class live css editor chrome extension',
          description: `Amino was originally my initial exploration into the world of chrome extensions. I partnered up with a designer and we grew that into something truly wonderful. Today Amino boastes over 30k active installed users on the chrome web store alone.`,
          color: '#7F79D3',
          link: 'https://aminoeditor.com',
          linkTest: 'Try Amino'
        },
        {
          date: '2014 - 2019',
          title: 'Hired at Restoration Media',
          subtitle: 'A data management and marketing firm',
          description: `I started out as a software engineer and later grew into the lead DevOps role at the company. During my tenure here I was responsible for managing large scale infrastructure and executed a vision that was able to save hundreds of thousands of dollars in costs each year.`,
          color: '#668284',
        }
      ],
      icon: 'work',
      color: '#668284',
    },
    {
      date: 'October 2019',
      title: 'Founded: Frozen Crow',
      subtitle: 'We started a business of our own',
      description: `Me and my partners at Frozen Crow set out to build a data management and marketing company. Little did we know that COVID was just around the corner, but through good times and bad we've stuck together, still building the business to this day.`,
      icon: 'rocket',
      link: 'https://frozencrow.com',
      linkText: 'Check out frozencrow.com',
      color: '#2A2829'
    },
    {
      date: 'May 10th, 2022',
      title: 'Launched Chroma',
      subtitle: 'Revolutionizng color picking and pallette creating in chrome based browsers',
      description: `Chroma was the next release from me and my partner that created amino. We'd gotten a taste of the chrome extension space and we enjoyed it. Chroma has built up over 10k installed users in chrome alone and holds a sturdy 4.8 star rating.`,
      icon: 'rocket',
      color: '#EC4899',
      link: 'https://chroma.dev',
      linkText: 'Check out chroma.dev',
    },
    {
      date: '2023 and Beyond',
      icon: 'info',
      color: '#493736',
      title: 'A busy year and more',
      description: `Managing a few large projects with Frozen Crow kept me pretty busy this year but there's still a lot of room to continue growing. We're constantly looking for new opportunities and improving our services. A heavy focus on our email marketing platform Carrier Crow has expanded the world of email for our users.<br /><br /><b>Stay tuned for what's next</b>`
    }
]);

  const isChromaDemoLoaded = () => {
    return document.getElementsByTagName('chroma-container').length > 0;
  }

  const loadChromaDemo = () => {
    if (isChromaDemoLoaded()) {
      return;
    }

    let tag = document.createElement('chroma-container');
    tag.setAttribute('num-colors', 5);
    tag.setAttribute('style', 'pointer-events: none;');
    document.body.appendChild(tag);
  }
</script>

<div class="flex flex-col items-center">
  <div class="w-full md:w-3/4 p-4">
    <div class="flex even:flex-row-reverse w-full" v-for="item in events" :key="item">
      <div class="flex-1">
        <TimelineCard :item="item.split[0]" v-if="item.split" class="hidden md:block" />
      </div>
      <div class="flex flex-col items-center flex-none mx-6">
        <span class="hover:scale-110 flex p-2 rounded-full items-center justify-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: item.color }">
          <AcademicCapIcon v-if="item.icon == 'learn'" class="w-6 h-6 text-white" />
          <BuildingOffice2Icon v-if="item.icon == 'work'" class="w-6 h-6 text-white" />
          <CakeIcon v-if="item.icon == 'cake'" class="w-6 h-6 text-white" />
          <CodeBracketSquareIcon v-if="item.icon == 'code'" class="w-6 h-6 text-white" />
          <InformationCircleIcon v-if="item.icon == 'info'" class="w-6 h-6 text-white" />
          <RocketLaunchIcon v-if="item.icon == 'rocket'" class="w-6 h-6 text-white" />
        </span>
        <div class="border border-[var(--vp-c-default-soft)] h-full"></div>
      </div>
      <div class="flex-1">
        <TimelineCard :item="item.split[0]" v-if="item.split" class="block md:hidden" />
        <TimelineCard :item="item.split[1]" v-if="item.split" />
        <TimelineCard :item="item" v-else />
        <div class="bg-[#EC4899] cursor-pointer hover:scale-110 font-bold p-2 -mt-6 text-white rounded-xl" v-if="item.title=='Launched Chroma'" @click.prevent="loadChromaDemo">
          Click here to try chroma on this page ;)<br />
          <small>Some features won't work</small>
        </div>
      </div>
    </div>
  </div>
</div>
