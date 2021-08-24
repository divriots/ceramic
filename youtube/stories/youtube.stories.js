import { YouTube } from '~/youtube';
import '~/tailwind';

export const youtube = () => ({
  components: { YouTube },
  template: `<YouTube/>`,
});

export const youtubeName = () => ({
  components: { YouTube },
  template: `<YouTube>youtube</YouTube>`,
});
