<template>
  <div
    data-aos="fade-in"
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900"
  >
    <div
      data-aos="zoom-in-down"
      class="max-w-3xl mx-3 bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12"
    >
      <h1
        data-aos="flip-up"
        data-aos-duration="1000"
        class="text-4xl md:text-5xl font-black text-white mb-4"
      >
        Domain Notice
      </h1>
      <div>
        <p class="text-lg md:text-xl text-gray-300 mb-6">
          This domain is no longer in use and maintained by us anymore.
        </p>
        <p class="text-lg md:text-xl text-gray-300 mb-6">
          Please visit our new domain
          <a href="https://icvhack.com"
            >icvhack.com</a
          >
        </p>
        <p class="text-lg md:text-xl text-gray-300 mb-6">
          Or you will be redirected in
          <span class="font-semibold" id="countdown">{{ countdown }}</span> seconds.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: 10,
    };
  },
  created() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        if (this.countdown === 0) {
          window.location.href = "https://icvhack.com";
        } else {
          this.countdown--;
        }
      }, 1000);
    },
  },
};
</script>

<style>
h1 {
  font-family: "Titillium Web", sans-serif;
  font-size: clamp(8rem, 23vw + 1rem, 20rem);
  display: grid;
  place-items: center;
  grid-template-areas: "text";
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-image: linear-gradient(305deg, rgb(141, 71, 255), rgb(195, 0, 255), cyan);
  margin: 0;

  & > *,
  &::after {
    grid-area: text;
  }

  &::after {
    content: attr(data-text);
    color: var(--paper);
    transform: translate(0.1em, 0.1em);
    filter: drop-shadow(0.015em 0.015em 0.025em var(--shadow));
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(var(--highlight), var(--paper));
  }
}


a {
  color: inherit;
  text-decoration: none;
  background:
    linear-gradient(
      to right,
      rgb(143, 100, 200),
      rgb(160, 100, 200)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
  );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}

a:hover {
  background-size: 0 3px, 100% 3px;
}
</style>