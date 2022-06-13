import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src="/images/naruto.jpg" width={120} height={120} />
    </Layout>
  );
}
