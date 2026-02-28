import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type TileItem = {
  title: string;
  emoji: string;
  description: string;
  link: string;
};

const TileList: TileItem[] = [
  {
    title: 'Quickstart',
    emoji: '🚀',
    description: 'Get up and running in under 5 minutes',
    link: '/docs/getting-started/quickstart',
  },
  {
    title: 'Editor',
    emoji: '✏️',
    description: 'Create tests with natural language',
    link: '/docs/product/editor/overview',
  },
  {
    title: 'RunningMan',
    emoji: '🏃',
    description: 'Execute workflows with AI-powered resilience',
    link: '/docs/product/runningman/overview',
  },
  {
    title: 'CI/CD',
    emoji: '⚙️',
    description: 'Run tests on every pull request',
    link: '/docs/integrations/github-actions/overview',
  },
  {
    title: 'Integrations',
    emoji: '🔗',
    description: 'Connect Playwright, Jira, Cloudflare, and more',
    link: '/docs/category/integrations',
  },
  {
    title: 'Troubleshooting',
    emoji: '🔍',
    description: 'Fix common issues fast',
    link: '/docs/guides/troubleshooting',
  },
];

function Tile({title, emoji, description, link}: TileItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.tile}>
        <div className={styles.tileEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {TileList.map((props, idx) => (
            <Tile key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
