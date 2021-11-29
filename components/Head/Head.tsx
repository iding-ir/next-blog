import NextHead from "next/Head";

interface IProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Head = (props: IProps) => {
  const { title, description, keywords } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aydin Ghane Kh." />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicons/apple-touch-icon.png?v=47B68lwkB7"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicons/favicon-32x32.png?v=47B68lwkB7"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicons/favicon-16x16.png?v=47B68lwkB7"
      />
      <link
        rel="manifest"
        href="/assets/favicons/site.webmanifest?v=47B68lwkB7"
      />
      <link
        rel="mask-icon"
        href="/assets/favicons/safari-pinned-tab.svg?v=47B68lwkB7"
        color="#1976d2"
      />
      <link
        rel="shortcut icon"
        href="/assets/favicons/favicon.ico?v=47B68lwkB7"
      />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
      <meta name="msapplication-TileColor" content="#1976d2" />
      <meta
        name="msapplication-config"
        content="/assets/favicons/browserconfig.xml?v=47B68lwkB7"
      />
      <meta name="theme-color" content="#1976d2" />
    </NextHead>
  );
};

Head.defaultProps = {
  title: "Next Blog",
  description: "A simple next.js blog.",
  meta: "React, next.js",
};

export default Head;
