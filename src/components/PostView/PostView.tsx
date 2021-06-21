import { PageContainer } from '../layout';
import { BlogPostEntry } from '../../types';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import gfm from 'remark-gfm';
import { PrismRenderer } from './PrismRenderer';

const Heading = styled.div`
  margin-bottom: 20px;
`;

export interface PostViewProps {
  entry: BlogPostEntry;
}

export const PostView = ({ entry }: PostViewProps) => {
  const formatDate = () => {
    return new Date(entry.publishedDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <PageContainer>
      <Heading>
        <h1>{entry.title}</h1>
        <h4>{formatDate()}</h4>
      </Heading>
      <ReactMarkdown
        components={{
          code: PrismRenderer,
        }}
        remarkPlugins={[gfm]}
      >
        {entry.content}
      </ReactMarkdown>
    </PageContainer>
  );
};
