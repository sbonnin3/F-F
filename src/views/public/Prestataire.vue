<template>
    <div class="content">
      <ProviderProfile  :providerData="providerData"/>
    </div>
  </template>
  
  <script>
  import ProviderProfile from '@/components/public/ProviderProfile.vue'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Prestataire',
    components: {
      ProviderProfile
    },
    data () {
      return {
        exampleProviderData: {
          name: 'Provider Name',
          category: 'Provider Category',
          profileLinks: [
            {
              name: 'Facebook',
              to: 'https://www.facebook.com'
            },
            {
              name: 'Twitter',
              to: 'https://www.twitter.com'
            },
            {
              name: 'Carte',
              to: { name: 'map' }
            }
          ],
          services: [
            {
              name: 'Service 1',
            },
            {
              name: 'Planning',
              to: { name: 'planning' }
            },
          ],
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem. ', 
          posts: [
          {
            title: 'Post 1',
            date: '01/01/2020',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem.'
          },
          {
            title: 'Post 2',
            date: '01/01/2020',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem.'
          },
          {
            title: 'Post 3',
            date: '01/01/2020',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quae voluptatem voluptas quod exercitationem voluptatibus quos doloribus quidem.'
          },
        ]
        }
      }
    }
  }
  </script>
  