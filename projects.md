---
layout: home
title: 'Projects'
---
<script setup>
import { ref } from 'vue';
import ProjectCard from './.vitepress/components/ProjectCard.vue';

const company = ref({
  kind: 'Company',
  title: 'Frozen Crow',
  role: 'Co-Founder & Principal Engineer',
  dates: 'October 2019 – Present',
  description: `A marketing and I.T. agency out of Orange County. My partners and I started Frozen Crow months before COVID landed &mdash; and built it into a shop that handles the whole stack of a client's technical life: strategy and campaign work on one side, the applications and infrastructure that support it on the other.<br /><br />I own the engineering. That means everything from architecting client applications and standing up the infrastructure they run on, to building the in-house products we sell.`,
  highlights: [
    'Web &amp; mobile application development, from architecture through deployment',
    'Data &amp; analytics pipelines, plus the I.T. and communications backbone behind them',
    'Over <b>$1MM in managed ad spend</b> running at a 7&ndash;10x return',
    '<b>$7M+</b> in partner revenue generated, with a 5.0 rating from verified clients'
  ],
  stack: ['Node.js', 'Vue', 'React', 'MongoDB', 'MySQL', 'BigQuery', 'Kubernetes', 'AWS', 'Google Cloud'],
  link: 'https://frozencrow.com',
  linkText: 'frozencrow.com'
});

const consulting = ref([
  {
    kind: 'Consulting',
    title: 'FranFunnel',
    role: 'Consulting Engineer',
    dates: '2025 – Present',
    description: `A text-first lead engagement platform for franchise development. The premise is blunt: the first response wins the deal. When a prospect raises their hand, FranFunnel is texting them inside of 60 seconds &mdash; at 2am, on a holiday, before a competitor's rep has opened their laptop.<br /><br />I've spent roughly the last year consulting on the platform, working across the engagement engine and the integration surface that keeps it in lockstep with whatever CRM a brand already lives in.`,
    highlights: [
      'AI engagement agents purpose-built per pipeline stage, with clean hand-off to a human rep at any point',
      'Two-way CRM sync against FranConnect, GoHighLevel, Salesforce and HubSpot',
      'Multi-brand architecture &mdash; separate messaging, workflows and reps per brand',
      'Full-funnel automation: follow-ups, reminders and re-engagement without a human in the loop'
    ],
    stack: ['Node.js', 'SMS / Telephony', 'LLM Agents', 'CRM Integrations', 'Webhooks'],
    link: 'https://franfunnel.com',
    linkText: 'franfunnel.com'
  }
]);

const games = ref([
  {
    kind: 'Game · New',
    title: 'Catch Fishies',
    role: 'A Frozen Crow release',
    dates: '2026',
    description: `A spearfishing arcade game that runs in a browser tab. Two modes share one ocean: <b>One Breath</b> is a single-button dive where the only thing you control is rhythm, and <b>Open Water</b> hands you two axes of movement, a speargun, boat traffic overhead, and an air supply that is very much finite.`,
    highlights: [
      'Hand-written canvas engine &mdash; no framework, no build step, no dependencies',
      'Runs straight off the filesystem: the whole game is a double-clickable HTML file',
      'Original seven-track soundtrack with mode-aware scoring',
      'Mobile-first, with fullscreen and orientation handling and local high scores'
    ],
    stack: ['Vanilla JS', 'Canvas 2D', 'Web Audio', 'Zero dependencies'],
    link: 'https://catchfishies.com',
    linkText: 'catchfishies.com'
  },
  {
    kind: 'Game · New',
    title: 'snackOS: DevOps Manager',
    role: 'A Frozen Crow release',
    dates: '2026',
    description: `A puzzle game about permissions, firewalls, and the consequences of clicking &ldquo;approve.&rdquo; You are the only DevOps engineer at snackstack inc. Coworkers want access <i>now</i>, a botnet is knocking, and on day five an attacker walks the graph of exactly what you granted &mdash; nothing more, nothing less.<br /><br />The whole thing presents as a fake operating system: draggable windows, a taskbar, a terminal, and a status bar of live scores. There is deliberately no network map, because nobody gets a god-view of their own infrastructure. You reconstruct the topology with <code>ssh</code>, <code>tcpdump</code> and <code>/etc/hosts</code>.`,
    highlights: [
      'A seven-day campaign: ticket triage, firewall rule chains, log forensics, patch triage, live incident',
      'Scored on SLA, blast radius, spend and reputation &mdash; the day-seven incident is a direct function of what you approved on day one',
      'Zero-dependency TypeScript; the entire game is client-side with no server and no accounts',
      'Teaches real ideas: least privilege, default-deny, first-match-wins ordering, exploitability over CVSS'
    ],
    stack: ['TypeScript', 'Vite', 'localStorage', 'Zero dependencies'],
    link: 'https://snackos.dev',
    linkText: 'snackos.dev'
  }
]);

const products = ref([
  {
    kind: 'Product · New',
    title: 'WP MCP Connector',
    role: 'Frozen Crow',
    dates: 'v2, 2026',
    description: `A WordPress plugin that turns any site into an MCP server, so an AI assistant &mdash; Claude, Cursor, Windsurf &mdash; can read and build the site directly instead of through a pile of bespoke glue. It's builder-agnostic by design: rather than targeting one page builder, it detects and speaks to nine of them.`,
    highlights: [
      'Full CRUD over posts, pages, custom post types, media and layouts',
      'Works across Elementor, Divi, Beaver Builder, Bricks, Oxygen, WPBakery, Avada and Gutenberg',
      'Preserves whatever encoding a builder stores in &mdash; base64, JSON, PHP-serialized &mdash; instead of corrupting it on write',
      'Scoped filesystem access with audit logging, 256-bit API keys, constant-time comparison and optional IP allowlisting'
    ],
    stack: ['PHP', 'WordPress', 'MCP', 'JSON-RPC'],
    link: 'https://wpmcp.frozencrow.com',
    linkText: 'wpmcp.frozencrow.com'
  },
  {
    kind: 'Product',
    title: 'Carrier Crow',
    role: 'Frozen Crow',
    description: `A cloud email marketing platform. Users build lists, design templates, send campaigns and read the metrics that come back &mdash; the deliverability and reporting plumbing underneath it is the part nobody sees and everybody depends on.`,
    stack: ['Node.js', 'Vue', 'MongoDB', 'SMTP'],
    link: 'https://carriercrow.com',
    linkText: 'carriercrow.com'
  }
]);

const extensions = ref([
  {
    kind: 'Browser Extension',
    title: 'Amino Editor',
    role: 'Co-Creator',
    dates: 'Since 2016',
    description: `A best-in-class live CSS editor for Chrome, Edge and other Chromium browsers. Amino started as my first exploration into extensions, grew up alongside a designer I partnered with, and now sits at <b>30k+ active installs</b> on the Chrome Web Store alone.`,
    stack: ['JavaScript', 'Chrome Extensions', 'CSS Injection'],
    link: 'https://aminoeditor.com',
    linkText: 'aminoeditor.com'
  },
  {
    kind: 'Browser Extension',
    title: 'Chroma',
    role: 'Co-Creator',
    dates: 'Since 2022',
    description: `An elegant way to build color palettes on the fly, straight from any page you're looking at. Same partnership that built Amino, and it's earned <b>10k+ installs</b> and a steady 4.8-star rating.`,
    stack: ['JavaScript', 'Chrome Extensions', 'Web Components'],
    link: 'https://chroma.dev/try',
    linkText: 'Try it — no install required'
  }
]);
</script>
<div class="flex flex-col items-center px-4 py-12 md:py-16">
  <div class="w-full max-w-6xl">
    <div class="max-w-3xl mb-14">
      <div class="eu-eyebrow mb-3">Selected Work</div>
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-5">
        Things I've built, <span class="eu-gradient-text">and still maintain</span>
      </h1>
      <p class="text-lg leading-8 opacity-80">
        Twenty-some years of writing software, most of the last seven at a company I own.
        Below is the work I'd actually point at &mdash; a marketing and I.T. agency, a platform I
        consult on, two games I shipped this year, and a handful of products still in the wild.
      </p>
    </div>
    <ProjectCard :item="company" featured class="mb-16" />
    <div class="eu-section-heading">Consulting</div>
    <div class="grid grid-cols-1 gap-6 mb-16">
      <ProjectCard v-for="item in consulting" :key="item.title" :item="item" />
    </div>
    <div class="eu-section-heading">
      New This Year
      <span class="eu-badge">2026</span>
    </div>
    <p class="max-w-2xl mb-8 leading-7 opacity-70">
      Two games, both built in the open web with no engine underneath them. Different reasons:
      one is about feel, the other is about a lesson that's hard to teach any other way.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
      <ProjectCard v-for="item in games" :key="item.title" :item="item" />
    </div>
    <div class="eu-section-heading">Products</div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
      <ProjectCard v-for="item in products" :key="item.title" :item="item" />
    </div>
    <div class="eu-section-heading">Browser Extensions</div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
      <ProjectCard v-for="item in extensions" :key="item.title" :item="item" />
    </div>
    <div class="eu-section-heading">Developer Tools</div>
    <p class="max-w-2xl mb-8 leading-7 opacity-70">
      Two things I publish and maintain in the open, both born out of problems I hit doing the
      day job.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <a href="https://monogit.com" target="_blank" rel="noreferrer" class="eu-card p-6">
        <div class="eu-eyebrow">Open Source &middot; CLI</div>
        <h2 class="text-2xl font-bold mt-1 mb-3">monogit</h2>
        <p class="leading-7 opacity-90">
          A monorepo workflow without a monorepo. Run git across every repo under one parent
          folder with a single command &mdash; cross-repo commits, dependency-ordered pushes, a live
          TUI, and an MCP server so an agent can drive the whole workspace.
        </p>
        <div class="mt-4 text-sm font-bold text-[var(--vp-c-brand-1)]">monogit.com &rarr;</div>
      </a>
      <a href="https://api-core.frozencrow.com" target="_blank" rel="noreferrer" class="eu-card p-6">
        <div class="eu-eyebrow">Open Source &middot; Library</div>
        <h2 class="text-2xl font-bold mt-1 mb-3">@frozencrow/api-core</h2>
        <p class="leading-7 opacity-90">
          Multitenant APIs without the boilerplate. A Feathers 5 + Koa + MongoDB core with
          authentication, role-based access control and organization-level data isolation built in
          &mdash; a published library, not a template you fork and let drift.
        </p>
        <div class="mt-4 text-sm font-bold text-[var(--vp-c-brand-1)]">api-core.frozencrow.com &rarr;</div>
      </a>
    </div>
    <div class="eu-card p-8 md:p-10 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-3">Want to build something?</h2>
      <p class="opacity-80 mb-6 max-w-xl mx-auto leading-7">
        I take on engineering work through Frozen Crow, and I consult directly. If you've got a
        problem that needs someone who's seen a few of these before, reach out.
      </p>
      <a href="mailto:ericuldall@gmail.com" class="eu-button">Get in touch</a>
    </div>
  </div>
</div>
