import Head from "next/head";
import {
  GlobalStyle,
  SplashScreen,
  NavBar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "../components";
import { Octokit } from "@octokit/core";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Rudra Patel</title>
        <meta
          name="description"
          content="Rudra Patel is a first-year computer science student at the University of Tennessee"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <GlobalStyle />
      <SplashScreen />
      <NavBar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {

  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });

  const response = await octokit.request("GET /users/{username}/repos", {
    username: "RudraPatel2003",
  });

  const projects = [];

  response.data.forEach((project) => {
    const projectObject = {};

    projectObject.name = project.name;
    if (projectObject.name === "RudraPatel2003") return;

    projectObject.description = project.description;
    projectObject.tags = project.topics;
    projectObject.githubLink = project.html_url;
    projectObject.externalLink = project.homepage;

    projects.push(projectObject);
  });

  return {
    props: { projects },
    revalidate: 60 * 60, // revalidate once an hour
  };
}
