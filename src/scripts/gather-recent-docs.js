const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const gatherRecentDocs = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      gatherRecentDocs(filePath, filelist);  // Recurse into subdirectories
    } else if (path.extname(file) === '.md' || path.extname(file) === '.mdx') {
      const docContent = fs.readFileSync(filePath, 'utf8');
      const metadata = matter(docContent).data;
      metadata.permalink = filePath.replace(/^docs\//, '/docs/').replace(/\.mdx?$/, '');
      filelist.push(metadata);
    }
  });
  return filelist;
};

const docsMetadata = gatherRecentDocs('./docs');
const blogMetadata = gatherRecentDocs('./blog');

const allMetadata = [...docsMetadata, ...blogMetadata];
const sortedMetadata = allMetadata.sort((a, b) => new Date(b.date) - new Date(a.date));
const recentDocs = sortedMetadata.slice(0, 10);  // Adjust this number to control how many recent documents to include

fs.writeFileSync('./src/recent-docs.json', JSON.stringify(recentDocs, null, 2));

