import fs from "fs";
import path from "path";
import matter from "gray-matter";

console.log(process.cwd());
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // get file name under posts directory
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove ".md" from filename
    const id = fileName.replace(/\.md$/, "");

    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the data from file
    const matterResult = matter(fileContents);

    // combine the data with id
    return { id, ...matterResult.data };
  });
  return allPostsData.sort(({ data: a }, { data: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}
