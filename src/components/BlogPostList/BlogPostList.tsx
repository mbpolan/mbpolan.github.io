import { useHistory } from 'react-router';
import { useContent } from '../../hooks';
import { BlogPostEntry } from '../../types';
import { BlogPostCard } from '../BlogPostCard';
import { PageContainer } from '../layout';
import { Error, Loading, NoData } from '../displays';

interface BlogPostListQuery {
  content_type: string;
  select: string;
  limit: number | undefined;
  order: string;
}

export interface BlogPostListProps {
  limit?: number;
}

const contentQuery: BlogPostListQuery = {
  content_type: 'blogPost',
  select: ['fields.title', 'fields.slug', 'fields.publishedDate', 'fields.leadText'].join(','),
  limit: 3,
  order: '-fields.publishedDate',
};

export const BlogPostList = ({ limit }: BlogPostListProps) => {
  const history = useHistory();
  const query = contentQuery;
  query.limit = limit;
  const [data, error, loading] = useContent<BlogPostEntry>(query);

  const handlePostClick = (entry: BlogPostEntry) => {
    history.push(`/blog/${entry.slug}`);
  };

  return (
    <PageContainer>
      {error && <Error message={error} />}
      {loading && <Loading message={'Fetching post content'} />}
      {!loading && !data && <NoData message={'Could not find blog post'} />}
      {data.map((entry) => (
        <BlogPostCard key={entry.slug} entry={entry} onClick={() => handlePostClick(entry)} />
      ))}
    </PageContainer>
  );
};
