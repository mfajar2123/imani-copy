// describe ('import vue components', ()=> {
//     test('normal imports as expected', async ()=>{
//          const cmp = await import ('../components/Home/Thebrochure.vue')
//          expect(cmp).toBeDefined
//     })
// })
import {describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';

import MyComponent from '../components/Home/Thebrochure.vue';

describe('MyComponent', ()=> {
    it('renders the message correctly', async () => {
        const wrapper = await mountSuspended(MyComponent);
        expect(wrapper.text()).toContain('This Component is set up!');
    });
})