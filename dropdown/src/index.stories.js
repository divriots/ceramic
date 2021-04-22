import Dropdown from './index.vue';
import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: '#F3F4F6' },
  },
};

export const Story1 = () => ({
  components: { Dropdown },
  template: `<Dropdown>
      <template #summary>Options</template>
      <div class="py-1">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Edit</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Duplicate</a>
      </div>
      <div class="py-1" role="none">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Archive</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Move</a>
      </div>
      <div class="py-1" role="none">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Share</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Add to favorites</a>
      </div>
      <div class="py-1" role="none">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem">Delete</a>
      </div></Dropdown>`,
});
