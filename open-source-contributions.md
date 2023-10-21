---
layout: home
---
<script setup>

</script>

<div class="flex flex-col justify-center items-center p-4 md:p-12 lg:p-20">
  <div class="grid auto-rows grid-cols-3 gap-4">
    <div class="col-span-3 md:col-span-1 row-span-1 rounded-xl bg-[var(--vp-c-default-soft)] p-4 flex flex-col justify-between">
      <div class="flex justify-between items-center mb-4">
        <div class="overflow-hidden rounded-xl">
          <img src="https://avatars.githubusercontent.com/u/7195757?s=48&v=4" />
        </div>
        <div class="text-2xl font-bold">
          Grafana
        </div>
      </div>
      <div class="leading-6">
        Added organization support for google login on grafana dashboard
      </div>
    </div>  
    <div class="col-span-3 md:col-span-1 row-span-2 rounded-xl bg-[var(--vp-c-default-soft)] p-4 flex flex-col justify-between">
      <div class="flex justify-between items-center mb-4">
        <div class="overflow-hidden rounded-xl">
          <img src="https://avatars.githubusercontent.com/u/16785467?s=48&v=4" />
        </div>
        <div class="text-2xl font-bold">
          Google Cloud Node
        </div>
      </div>
      <div>
        <div class="leading-6 mb-6">
          Added fixes to improve FQDN resolution speed in systems with large number of ndots to check internal services.
        </div>
        <div class="leading-6">
          Added fixes to allow request agent keep alive to reduce latency in high request environments
        </div>
      </div>
    </div>
    <div class="col-span-3 md:col-span-1 row-span-1 rounded-xl bg-[var(--vp-c-default-soft)] p-4 flex flex-col justify-between">
      <div class="flex justify-between items-center mb-4">
        <div class="overflow-hidden rounded-xl">
          <img src="https://avatars.githubusercontent.com/u/6078720?s=48&v=4" />
        </div>
        <div class="text-2xl font-bold">
         NPM Expansions 
        </div>
      </div>
      <div>
        <div class="leading-6">
          If you know, you know ;)
        </div>
      </div>
    </div>
    <div class="col-span-3 md:col-span-1 row-span-1 rounded-xl bg-[var(--vp-c-default-soft)] p-4">
      <div class="flex justify-between items-center mb-4">
        <div class="overflow-hidden rounded-xl">
          <img src="https://avatars.githubusercontent.com/u/26621321?s=48&v=4" />
        </div>
        <div class="text-2xl font-bold">
          Mailtrain
        </div>
      </div>
      <div>
        <div class="leading-6 mb-6">
          Added a patch to fix a bug with email campaigns sending duplicates to users
        </div>
        <div class="leading-6">
          Improved ability to handle errors from content url's and prevent infinitely stuck in send bug
        </div>
      </div>
    </div>
    <div class="col-span-3 md:col-span-1 row-span-2 rounded-xl bg-[var(--vp-c-default-soft)] p-4 flex flex-col justify-between">
      <div class="flex justify-between items-center mb-4">
        <div class="overflow-hidden rounded-xl">
          <img src="https://avatars.githubusercontent.com/u/3223296?s=48&v=4" />
        </div>
        <div class="text-xl font-bold">
          K8's Scheduled Scaler
        </div>
      </div>
      <div>
        <div class="leading-6 mb-6">
          Invented a scheduled scaler resource for kubernetes that allowed users to scale workloads at certain time windows. This allowed users to prepare workloads for heavy traffic hours just before traffic begins and save the scaling lag incurred when scaling based on usage in realtime.
        </div>
      </div>
    </div>
    <a href="https://github.com/ericuldall" class="hover:bg-[var(--vp-c-brand-1)] col-span-3 md:col-span-2 rounded-xl bg-[var(--vp-c-default-soft)] p-4 flex justify-between items-center font-bold text-[var(--vp-c-text-1)] hover:text-white" target="_blank">
      Check out more on GitHub
      <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
        <path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
      </svg>
    </a>
  </div>
</div>
