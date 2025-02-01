import { Link, PageProps } from 'gatsby';
import { ReactNode } from 'react';
import {
  postItemContainerCss,
  postItemDateCss,
  postItemDescriptionCss,
  postItemLinkCss,
  postItemTitleCss,
  postListContainerCss,
} from './index.css';
import { Heading, Text } from '@radix-ui/themes';

interface ListProps {
  children: ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <ul className={postListContainerCss}>{children}</ul>;
};

interface ItemProps {
  node: PageProps<Queries.IndexPageQuery>['data']['allMdx']['nodes'][number];
}

export const Item = ({ node }: ItemProps) => {
  const { frontmatter, fields } = node;
  const { title, description, date } = frontmatter ?? {};
  const { slug } = fields ?? {};
  const hasReadingTime = node.fields?.readingTime != null;
  return (
    <li className={postItemContainerCss}>
      <Link to={slug ?? '/'} className={postItemLinkCss}>
        <Heading size="6" weight="bold" className={postItemTitleCss}>
          {title ?? 'No Title'}
        </Heading>
        {description == null ? null : (
          <Text size="3" as="div" className={postItemDescriptionCss}>
            {description}
          </Text>
        )}
        {date == null ? null : (
          <Text size="1" as="div" className={postItemDateCss}>
            <time>{date}</time>
            {hasReadingTime ? <span> &mdash; {node.fields?.readingTime}</span> : null}
          </Text>
        )}
      </Link>
    </li>
  );
};

export const Post = Object.assign({}, { List, Item });
