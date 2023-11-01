// TODO: make this work 
// import React from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import recentDocs from '@site/src/recent-docs.json';

// function RecentDocs() {
//   return (
//     <div className={clsx('container', styles.recentDocsContainer)}>
//       <div className="row">
//         <h2>Recent Documents</h2>
//         <div>
//           {recentDocs.map((doc, idx) => (
//             <div key={idx} className={styles.recentDocItem}>
//               <Link to={`/docs/${doc.id}`} className={clsx("button button--secondary", {[styles.emptyButton]: !doc.title})}>
//                 {doc.title || 'Untitled Document'}
//               </Link>
//               {doc.description && <p>{doc.description}</p>}
//               <small>
//                 {doc.date && `Published on: ${new Date(doc.date).toLocaleDateString()}`}
//                 {doc.readingTime && ` • Estimated Reading Time: ${doc.readingTime} mins`}
//               </small>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <main>
//         <RecentDocs />
//       </main>
//     </Layout>
//   );
// }
//HACK: redirect to blog for now
import React from 'react';
import {Redirect} from '@docusaurus/router';

function Home() {
  return <Redirect to="/blog" />;
}

export default Home;

