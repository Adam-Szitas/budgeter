import { computed, signal } from '@angular/core';
import { createStore } from '@ngrx/signals';

export const UserStore = createStore(
    { providedIn: 'root' }, // Provide it app-wide
    (store) => {
        // State
        // const count = signal(0);
        // // Computed
        // const double = computed(() => count() * 2);
        // // Updaters
        // const increment = () => count.update((c) => c + 1);
        // const decrement = () => count.update((c) => c - 1);
        // return {
        //   count,
        //   double,
        //   increment,
        //   decrement
        // };
    },
);
