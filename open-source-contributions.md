---
layout: home
title: 'Open Source Contributions'
---
<script setup>
import { ref } from 'vue';

// Projects I own and publish. Install lines are the real published names —
// keep them in sync with the packages if they ever get renamed.
const mine = ref([
  {
    title: 'monogit',
    tagline: 'A monorepo workflow without a monorepo',
    description: `Manage every git repository under a single parent folder with one command. Branch, commit, push and open PRs across all of them at once &mdash; including cross-repo commits that share one message and carry a <code>Monogit-Change-Id</code> trailer linking a logical change across every repo it touched.`,
    points: [
      'Live watch TUI and a compact status dashboard across all repos',
      'Ordered pushes via a <code>dependsOn</code> dependency graph, optionally waiting on each repo&rsquo;s CI',
      'Built-in MCP server, so an LLM agent can drive the whole workspace',
      'Branch tidy, workspace manifests, targeting with <code>--only</code>/<code>--except</code>/<code>--group</code>'
    ],
    install: 'npm install -g @frozencrow/monogit',
    license: 'ISC',
    site: 'https://monogit.com',
    repo: 'https://github.com/Frozen-Crow/monogit'
  },
  {
    title: '@frozencrow/api-core',
    tagline: 'Multitenant APIs without the boilerplate',
    description: `A batteries-included Feathers 5 + Koa + MongoDB core for building APIs. Authentication, role-based access control, a repeatable service and hook system, and organization-level data isolation &mdash; published as reusable packages rather than a template you fork and drift from.`,
    points: [
      'One <code>createApp(options)</code> call for a working, secured API',
      'Composable services, hooks and access-control utilities',
      'Multitenant isolation at the access-control layer, not bolted on per-route',
      'Ships with <code>npm create @frozencrow/api</code> to scaffold a ready-to-run project'
    ],
    install: 'npm install @frozencrow/api-core',
    license: 'MIT',
    site: 'https://api-core.frozencrow.com',
    repo: 'https://github.com/Frozen-Crow/api-boilerplate'
  },
  {
    title: 'K8s Scheduled Scaler',
    tagline: 'Scale Kubernetes workloads on a clock',
    description: `A custom Kubernetes resource that scales workloads inside defined time windows. It lets you have capacity <i>already standing</i> before a traffic peak arrives, instead of eating the scaling lag you get when you only react to realtime usage.`,
    points: [
      'Prepares workloads ahead of known heavy-traffic hours',
      'Eliminates the cold-start lag of usage-based autoscaling',
      'Written while running large-scale infrastructure day to day'
    ],
    repo: 'https://github.com/West-Coast-Devops/scheduled-scaler'
  }
]);

// Patches sent upstream to projects I don't own.
const upstream = ref([
  {
    title: 'Grafana',
    avatar: 'https://avatars.githubusercontent.com/u/7195757?s=48&v=4',
    points: ['Added organization support for Google login on the Grafana dashboard'],
    link: 'https://github.com/grafana/grafana/pulls?q=is%3Apr+author%3Aericuldall+is%3Aclosed'
  },
  {
    title: 'Google Cloud Node',
    avatar: 'https://avatars.githubusercontent.com/u/16785467?s=48&v=4',
    points: [
      'Improved FQDN resolution speed on systems with a large number of ndots to check internal services',
      'Allowed request agent keep-alive to reduce latency in high-request environments'
    ],
    link: 'https://github.com/googleapis/google-cloud-node/pulls?q=is%3Apr+author%3Aericuldall+is%3Aclosed'
  },
  {
    title: 'Mailtrain',
    avatar: 'https://avatars.githubusercontent.com/u/26621321?s=48&v=4',
    points: [
      'Patched a bug that sent duplicate campaign emails to subscribers',
      'Improved error handling for content URLs, fixing a bug that left campaigns stuck mid-send'
    ],
    link: 'https://github.com/Mailtrain-org/mailtrain/pulls?q=is%3Apr+author%3Aericuldall+is%3Aclosed'
  },
  {
    title: 'NPM Expansions',
    avatar: 'https://avatars.githubusercontent.com/u/6078720?s=48&v=4',
    points: ['If you know, you know ;)'],
    link: 'https://github.com/npm/npm-expansions/pulls?q=is%3Apr+author%3Aericuldall+is%3Aclosed'
  }
]);
</script>
<div class="flex flex-col items-center px-4 py-12 md:py-16">
  <div class="w-full max-w-6xl">
    <div class="max-w-3xl mb-14">
      <div class="eu-eyebrow mb-3">Open Source</div>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-5">
        Code I've <span class="eu-gradient-text">given away</span>
      </h1>
      <p class="text-lg leading-8 opacity-80">
        Tools I publish and maintain, plus patches I've sent upstream to projects I depend on.
        The second list is the one I'm prouder of &mdash; fixing someone else's bug is how you pay rent
        on the software you use for free.
      </p>
    </div>
    <div class="eu-section-heading">Projects I Maintain</div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      <div class="eu-card p-6 flex flex-col" v-for="item in mine" :key="item.title">
        <h2 class="text-2xl font-bold leading-tight">{{ item.title }}</h2>
        <div class="eu-eyebrow mt-2">{{ item.tagline }}</div>
        <div class="leading-7 opacity-90 mt-4" v-html="item.description"></div>
        <ul class="mt-5 space-y-2 text-sm opacity-90">
          <li class="flex gap-2" v-for="point in item.points" :key="point">
            <span class="text-[var(--vp-c-brand-1)] font-bold flex-none">&rsaquo;</span>
            <span v-html="point"></span>
          </li>
        </ul>
        <div class="grow"></div>
        <div class="mt-6 pt-5 eu-card-footer">
          <div class="text-xs font-mono p-2 rounded bg-[var(--vp-c-default-soft)] overflow-x-auto whitespace-nowrap mb-3" v-if="item.install">
            {{ item.install }}
          </div>
          <div class="flex flex-wrap items-center gap-3 text-sm font-bold">
            <a class="text-[var(--vp-c-brand-1)] hover:underline" :href="item.site" target="_blank" rel="noreferrer" v-if="item.site">
              Website &rarr;
            </a>
            <a class="text-[var(--vp-c-brand-1)] hover:underline" :href="item.repo" target="_blank" rel="noreferrer">
              Source &rarr;
            </a>
            <span class="eu-chip ml-auto" v-if="item.license">{{ item.license }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="eu-section-heading">Contributions Upstream</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <a
        class="eu-card p-6 flex flex-col"
        v-for="item in upstream"
        :key="item.title"
        :href="item.link"
        target="_blank"
        rel="noreferrer"
      >
        <div class="flex items-center gap-4 mb-4">
          <img class="rounded-xl w-12 h-12" :src="item.avatar" :alt="item.title + ' logo'" />
          <div class="text-2xl font-bold">{{ item.title }}</div>
        </div>
        <ul class="space-y-2 leading-7 opacity-90">
          <li class="flex gap-2" v-for="point in item.points" :key="point">
            <span class="text-[var(--vp-c-brand-1)] font-bold flex-none">&rsaquo;</span>
            <span>{{ point }}</span>
          </li>
        </ul>
        <div class="grow"></div>
        <div class="mt-5 text-sm font-bold text-[var(--vp-c-brand-1)]">View merged PRs &rarr;</div>
      </a>
    </div>
    <a
      href="https://github.com/ericuldall"
      target="_blank"
      rel="noreferrer"
      class="eu-card p-6 flex justify-between items-center font-bold text-lg"
    >
      Check out more on GitHub
      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32">
        <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
      </svg>
    </a>
  </div>
</div>
