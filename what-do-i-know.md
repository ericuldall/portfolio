---
layout: home
title: 'What do I know?'
---
<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
const { isDark } = useData();
const items = ref([
  {
    title: 'Front-End',
    description: `My first taste of the cloud was at 10 years old. I picked up a giant HTML reference and began writing basic website markup in notepad on my Windows PC. I didn't know at the time that this would be a skill that would expand into one of the greatest pursuits and passions of my life. I have since mastered most things front end from markup, to advanced tools like Vue & React. Looking below you can see a list of some of the technologies I've learned over the years`,
    list: [
      {
        title: 'HTML / CSS',
        duration: '25+ Years'
      },
      {
        title: 'Javascript',
        duration: '20+ Years'
      },
      {
        title: 'Browser Extensions',
        duration: '10+ Years'
      },
      {
        title: 'JS Frameworks',
        subtitle: 'Vue, React, Backbone/Marionette, jQuery',
        duration: '10+ Years'
      },
      {
        title: 'CSS Frameworks',
        subtitle: 'Bootstrap, Material Design, Tailwind',
        duration: '10+ Years'
      },
      {
        title: 'SEO & Site Optimization',
        subtitle: 'Open Graph, Rich Snippets and Lighthouse',
        duration: '10+ Years'
      }
    ]
  },
  {
    title: 'Server Side',
    description: `Around the age of 16 I started to delve into the backend of the cloud. My first taste of server side development was with PHP. I spent years working in PHP and getting my feet wet with servers run on Apache and Nginx. Enter node.js, once I started learning node, the benefits of a common language between client and server, along side the async event loop, it was hard to pass up. While I predominantly use Node.js to this day I've dabbled with other languages over the years as well`,
    list: [
      {
        title: 'PHP',
        subtitle: 'Kohana, Code Igniter, Cake, Wordpress, Joomla, etc...',
        duration: '20+ Years'
      },
      {
        title: 'Servers',
        subtitle: 'Apache, Nginx & Windows',
        duration: '20+ Years'
      },
      {
        title: 'Node.js',
        duration: '10+ Years'
      },
      {
        title: 'Other Languages',
        subtitle: 'Go, Python, ASP',
        duration: '5-10+ Years'
      },
      {
        title: 'Operating Systems',
        subtitle: 'Unix/Linux, MacOS, Windows',
        duration: '20 + Years'
      },
      {
        title: 'Virtualization',
        subtitle: 'VMWare, VirtualBox, Docker',
        duration: '10-15+ Years'
      }
    ]
  },
  {
    title: 'Mobile',
    description: `I am newer to building native mobile apps, but I've gotten a solid amount of practice in the last couple years. Native mobile apps are now something I'm competant enough to build projects on my own, or manage a team to successful goals. Most of my experience is with javascript based tools: React Native or Nativescript, but I've also written some code in swift when learning iOS development and have had some Java experience in the past as well.`,
    list: [
      {
        title: 'React Native',
        duration: '1+ Years'
      },
      {
        title: 'Nativescript & Nativescript Vue',
        duration: '1+ Years'
      },
      {
        title: 'Firebase',
        subtitle: 'Analytics, Performance, Crashlytics, Messaging',
        duration: '1+ Years'
      },
      {
        title: 'App Stores',
        subtitle: 'Apple AppStore, Google Play',
        duration: '1+ Years'
      }
    ]
  },
  {
    title: 'Databases',
    description: `Databases are essential technology for many of the projects I've worked on over the years. I've learned many depending on the unique requirments for the task we sought to achieve. While most commonly I find myself using either MongoDB or MySQL, below you can find a list of the databases I've worked with`,
    list: [
      {
        title: 'MySQL',
        duration: '20+ Years',
      },
      {
        title: 'MongoDB',
        duration: '10+ Years'
      },
      {
        title: 'Google BigQuery',
        duration: '10+ Years'
      },
      {
        title: 'CouchDB',
        duration: '5+ Years'
      },
      {
        title: 'Neo4J',
        duration: '5+ Years'
      },
      {
        title: 'ElasticSearch',
        duration: '5+ Years'
      },
    ]
  },
  {
    title: 'Build, Test & Deploy',
    description: `I spent some years developing DevOps skills and managing all aspects of standing up infrastructure, automiting code builds, testing and continuous deployment. There's a lot here that I can't easily put into a list but I'll share some of the technologies that I've come to find useful when mainting infrastructure and applications`,
    list: [
      {
        title: 'Source Control Tools',
        subtitle: 'Git/SVN via Bitbucket, GitHub and GitLab',
        duration: '15+ Years'
      },
      {
        title: 'Client Build Tools',
        subtitle: 'Vite, Webpack, Gulp & Grunt',
        duration: '10+ Years'
      },
      {
        title: 'CI/CD Tools',
        subtitle: 'Bitbucket Pipelines, GitHub Actions, CircleCI, TravisCI, Jenkins',
        duration: '10+ Years'
      },
      {
        title: 'Cloud Providers',
        subtitle: 'AWS, Google Cloud, Netlify, Linode, GoGrid, Rackspace (the list goes on...)',
        duration: '15+ Years'
      },
      {
        title: 'Infrastructure as Code',
        subtitle: 'Kubernetes, AWS Cloudformation, SaltStack',
        duration: '10+ Years'
      },
      {
        title: 'Unit & E2E Testing',
        subtitle: 'Mocha, Jest, Chai, Sinon, Selenium, Puppeteer, Nightwatch',
        duration: '10+ Years'
      }
    ]
  },
  {
    title: 'Leadership & Project Managment',
    description: `I've always taken a strong leadership role wherever I've worked. I'd often be the first through the door and the last to leave. I've had the opportunity to formally manage teams in full time settings as well as contract environments. No matter the case I always make the success of every team member my primary focus. I've also had experience reviewing resumes and hiring new team members for projects as well as, unfortunately, terminating team members when necessary.`,
    list: [
      {
        title: 'Methodologies',
        subtitle: 'Kanban, Agile, Scrum & Waterfall',
        duration: '15+ Years'
      },
      {
        title: 'Project Management Tools',
        subtitle: 'Jira, Trello, Basecamp, Clickup, etc...',
        duration: '15+ Years'
      },
      {
        title: 'Planning',
        subtitle: 'Negotiating features, setting goals, writing deliverables, etc...',
        duration: '10+ Years'
      }
    ]
  } 
]);
const activeTab = ref(items.value[0]);
const setActiveTab = (tab) => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  activeTab.value = items.value[tab];
}
</script>

<div class="flex flex-col justify-center items-center">
  <div class="p-12 text-center max-w-5xl">
    <div class="text-5xl font-bold mb-4">{{ activeTab.title }}</div>
    <div class="text-justify first-line:text-[var(--vp-c-brand-1)] first-line:tracking-widest first-letter:text-[var(--vp-c-brand-1)] first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">{{ activeTab.description }}</div>
  </div>
  <div class="w-full max-w-5xl px-2 sm:px-0">
    <TabGroup @change="setActiveTab">
      <div class="shadow-xl rounded-xl z-40 static lg:sticky top-[75px]" :class="[ isDark ? 'bg-neutral-800/50 backdrop-blur' : 'bg-white/50 backdrop-blur']">
        <TabList class="flex flex-wrap justify-between gap-2 rounded-xl bg-[var(--vp-c-default-soft)] p-2">
          <TransitionGroup
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
          >
            <Tab v-slot="{ selected }" as="template" v-for="item in items" :key="item">
              <button
                :class="[
                  'grow rounded-lg py-2.5 text-sm leading-6 px-8',
                  'ring-white ring-opacity-60 focus:outline-none',
                  selected ? 'font-bold bg-white shadow text-[var(--vp-c-brand-1)]' : 'text-[var(--vp-c-text-1)] hover:bg-neutral-200/[0.8] hover:text-neutral-600'
                ]"
              >
                {{ item.title }}
              </button>
            </Tab>
          </TransitionGroup>
        </TabList>
      </div>
      <TabPanels class="mt-2 rounded-lg text-[var(--vp-c-text-1)">
        <TransitionGroup
          enter-active-class="duration-300 ease-out"
          enter-from-class="transform opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="transform opacity-0"
        >
          <TabPanel as="div" class="flex flex-col gap-2" v-for="item in items" :key="item">
            <div class="p-4 bg-[var(--vp-c-default-soft)] hover:text-white hover:bg-[var(--vp-c-brand-1)] hover:scale-[1.02] cursor-pointer rounded-lg" v-for="el in item.list">
              <h1 class="text-2xl font-bold">{{ el.title }}</h1>
              <h3 class="text-lg font-bold">{{ el.subtitle }}</h3>
              <small>{{ el.duration }} Experience</small>
            </div>
          </TabPanel>
        </TransitionGroup>
      </TabPanels>
    </TabGroup>
  </div>
</div>
