<template>
  <div v-if="providerData" class="profile">
    <div class="profile__head">
      <div class="headband">
        <div class="provider-picture">
          <img :src="providerData.logo" alt="provider picture"/>
        </div>
      </div>
      <div class="header">
        <h1>{{ providerData.name }}</h1>
        <h2>{{ providerData.category }}</h2>
        <div class="actions">
          <button
              v-for="(link, id) in providerData.profileLinks"
              :key="id"
              class="btn"
              @click="redirect(link.to)"
          >
            {{ link.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="profile__body">
      <aside v-if="providerData.services" class="services">
        <h3>{{ $t('public.providers.services') }}</h3>
        <ul>
          <li
              v-for="(service, id) in providerData.services"
              :key="id"
              @click="$router.push(service.to)"
          >
            {{ service.name }}
          </li>
        </ul>
      </aside>
      <div class="profile__page">
        <div class="desc">
          <h3>{{ $t('public.providers.providerDescription') }}</h3>
          <p>
            {{ providerData.description }}
          </p>
        </div>
        <div v-if="providerPosts.length > 0" class="posts">
          <h3>{{ $t('public.providers.posts') }}</h3>
          <div class="elements">
            <article v-for="post in providerPosts" :key="post._id">
              <h4>{{ post.title }}</h4>
              <p v-if="post.datetime" class="posts_details">{{ post.datetime }}</p>
              <p v-if="post.content">{{ post.content }}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getProvider} from "@/services/from_datasets/providers.service";
import {getPosts} from "@/services/from_datasets/posts.service";

export default {
  name: "ProviderProfile",
  props: {
    id: {
      required: true,
    }
  },
  data() {
    return {
      providerData: null,
      providerPosts: null,
      loading: false,
    };
  },
  methods: {
    redirect(to) {
      if (to.name || to.path) {
        this.$router.push(to);
      } else {
        window.open(to, "_blank");
      }
    },
    async getProviderData(id) {
      this.loading = true;
      this.providerData = await getProvider(id);
      this.providerPosts = await getPosts(id);
      this.loading = false;
    },
  },
  async mounted() {
    await this.getProviderData(this.id);
  },
  watch: {
    async id(newVal) {
      await this.getProviderData(newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  .profile__head {
    background-color: black;
    min-height: 400px;

    .headband {
      min-height: 180px;
      background-color: #f5f5f5;

      position: relative;

      .provider-picture {
        width: 180px;
        height: 180px;
        border: 10px solid yellow;
        border-radius: 50%;
        overflow: hidden;

        position: absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);

        img {
          width: 164px;
          height: 164px;
          object-fit: cover;
          border: 8px solid black;
          border-radius: 50%;
        }
      }
    }

    .header {
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        margin-top: 60px;
        font-size: 2rem;
        color: white;
        text-transform: uppercase;
      }

      h2 {
        font-size: 1.5rem;
        color: white;
      }

      .actions {
        margin-top: 20px;
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        .btn {
          color: white;
          background-color: black;
          border: 2px solid white;
          font-size: 1.2rem;

          height: 35px;
          padding: 0 20px;
          border-radius: 35px;

          &:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }

  .profile__body {
    padding: 40px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 60px;
    margin-top: 20px;
    text-align: justify;

    h2,
    h3 {
      font-size: 1.6rem;
      margin-bottom: 20px;

      &::before {
        content: "> ";
      }
    }

    .services {
      flex: 1;
      min-width: 200px;

      ul {
        list-style: none;

        li {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
      }
    }

    .profile__page {
      flex: 4;
      min-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .desc {
        p {
          font-size: 1.2rem;
        }
      }

      .posts {
        h3 {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .elements {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 50px;

          article {
            width: 100%;
            flex: 1;
            min-width: 300px;

            h4 {
              font-size: 1.2rem;
              margin-bottom: 10px;
            }

            p {
              font-size: 1.2rem;

              &.posts_details {
                font-size: 1rem;
                color: grey;
              }
            }
          }
        }
      }
    }
  }
}
</style>
