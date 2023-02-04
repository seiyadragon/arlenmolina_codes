
<template>

    <main class="main_0">
      <Head>
        <title>Arlen Molina -- Contact</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
      </Head>
      <div class="main_div">
        <Header />
        <Projects 
            question="
                Can you show me some of the projects you've worked on?
            "
            :response-one-data="{name: 'Self++', image: '/self++.png', link:'https://better-self.vercel.app', response: `
                Self++ is one of my most complex projects. It allows users to 
                keep track of their diary, habits and projects. It keeps track of users 
                and their data through a database. It supports accounts and even has tesseract 
                to read text from images.
            `}"

            :response-two-data="{name: 'Scrollhub', image: '/scrollhub.png', response:`
                Scrollhub was a project that I made in order to learn NextJS. 
                It utilized the Gutendex Api to download the entire book catalog 
                of the Gutenberg project into my database to then show on the site. 
            `}"

            :response-three-data="{name: 'HempPyre', image: '/hemppyre.png', response: `
                HempPyre was a site I made in order to see if I could make a store 
                in a limited amount of time. The project was a success in my opinion 
                while the type of items sold were not the best the site itself worked 
                perfectly.
            `}"
        />
      </div>
    </main>

</template>

<style lang="scss">

    * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      font-family: 'Ubuntu';
    }

</style>