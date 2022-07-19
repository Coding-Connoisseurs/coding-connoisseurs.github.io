import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage/HomePage.vue';

//opportunities section
import Opportunities from '../components/Opportunities/Opportunities.vue';
import CP from '../components/Opportunities/SubComponents/CP.vue';
import Opensource from '../components/Opportunities/SubComponents/Opensource.vue';
import DeveloperClubs from '../components/Opportunities/SubComponents/DeveloperClubs.vue';
import InternshipAndJobs from '../components/Opportunities/SubComponents/InternshipAndJobs.vue';

//resources section
import Resources from '../components/Resources/Resources.vue';
import SDEInterview from '../components/Resources/SubComponents/SDEInterview.vue';
import Roadmaps from '../components/Resources/SubComponents/Roadmaps.vue';
import UIUXResources from '../components/Resources/SubComponents/UIUXResources.vue';
import PMResources from '../components/Resources/SubComponents/PMResources.vue';

//events section
import Events from '../components/Events/Events.vue';
import UpComing from '../components/Events/SubComponents/UpComing.vue';
import CodeofConduct from '../components/Events/SubComponents/CodeofConduct.vue';

//team section
import Team from '../components/Team/Team.vue';
const router = createRouter({
  history: createWebHistory(),
  scrollbehaviour(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 500);
    });
  },
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    {
      path: '/opportunities',
      component: Opportunities,
      name: 'opportunities',
      children: [
        { path: '', component: Opensource, name: '' },
        { path: 'opensource', component: Opensource, name: 'opensource' },
        { path: 'cp', component: CP, name: 'cp' },
        { path: 'devclubs', component: DeveloperClubs, name: 'devclubs' },
        { path: 'internshipandjobs', component: InternshipAndJobs, name: 'internshipandjobs' },
      ],
      InternshipAndJobs,
    },
    {
      path: '/resources',
      component: Resources,
      name: 'resources',
      children: [
        { path: '', component: SDEInterview, name: '' },
        { path: 'sdeinterview', component: SDEInterview, name: 'sdeinterview' },
        { path: 'roadmaps', component: Roadmaps, name: 'roadmaps' },
        { path: 'pmresources', component: PMResources, name: 'pmresources' },
        { path: 'uiuxresources', component: UIUXResources, name: 'uiuxresources' },
      ],
    },
    { path: '/events', component: Events, name: 'events' ,
    children: [
      { path: '', component: UpComing, name: '' },
      { path: 'upcoming', component: UpComing, name: 'upcoming' },
      { path: 'codeofconduct', component: CodeofConduct, name: 'codeofconduct' },
    ],
  
  },
    { path: '/team', component: Team, name: 'team' },
  ],
});

export default router;
