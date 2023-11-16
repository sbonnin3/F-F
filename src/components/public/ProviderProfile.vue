<template>
  <div class="profile">
    <div class="profile__head">
    <div class="headband">
      <div class="provider-picture">
        <img src="https://picsum.photos/200/200" alt="provider picture" />
      </div>
    </div>
    <div class="header">
      <h1>Provider Name</h1>
      <h2>Provider category</h2>
      <div class="actions">
        <button class="btn">Contact</button>
        <button class="btn">Book</button>
        <button href="#" class="btn">Vas sur le site</button>

      </div>
    </div>
  </div>
  <div class="profile__body">
    <aside class="services">
      <h3>Services</h3>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </aside>
    <div class="profile__page">
      <div class="desc">
        <h3>Provider Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptatem voluptas quod
          exercitationem voluptatibus quos doloribus quidem. Quisquam
          voluptatum, quibusdam, quia, quae voluptatem voluptas quod
          exercitationem voluptatibus quos doloribus quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptatem voluptas quod
          exercitationem voluptatibus quos doloribus quidem. Quisquam
          voluptatum, quibusdam, quia, quae voluptatem voluptas quod
          exercitationem voluptatibus quos doloribus quidem.
        </p>
      </div>
      <div class="posts">
        <h3>Posts</h3>
        <article>
          <h4>Post Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptatem voluptas quod
            exercitationem voluptatibus quos doloribus quidem. Quisquam
            voluptatum, quibusdam, quia, quae voluptatem voluptas quod
            exercitationem voluptatibus quos doloribus quidem.
          </p>
        </article>
        <article>
          <h4>Post Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptatem voluptas quod
            exercitationem voluptatibus quos doloribus quidem. Quisquam
            voluptatum, quibusdam, quia, quae voluptatem voluptas quod
            exercitationem voluptatibus quos doloribus quidem.
          </p>
        </article>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'ProviderProfile'
}
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

    h2, h3 {
      font-size: 1.6rem;
      margin-bottom: 20px;
    
      &::before {
        content: '> ';
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
        article {
          h4 {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>