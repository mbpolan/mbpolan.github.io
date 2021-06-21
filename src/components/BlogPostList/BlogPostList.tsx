import { useHistory } from "react-router";
import { useContent } from "../../hooks";
import { BlogPostEntry } from "../../types";
import { BlogPostCard } from '../BlogPostCard';
import { PageContainer } from '../layout';
import { Error, Loading, NoData} from '../displays';

export interface BlogPostListProps {
    limit?: number;
}

const contentQuery = {
    content_type: 'blogPost',
    select: ['fields.title', 'fields.slug', 'fields.publishedDate', 'fields.leadText'].join(','),
    limit: 3,
}

export const BlogPostList = ({
    limit
}: BlogPostListProps) => {
    const history = useHistory();
    const [ data, error, loading ] = useContent<BlogPostEntry>(contentQuery);

    const handlePostClick = (entry: BlogPostEntry) => {
        history.push(`/blog/${entry.slug}`);
    }

    return (
        <PageContainer>
            { error && <Error message={error} />}
            { loading && <Loading message={'Fetching post content'} />}
            { !loading && !data && <NoData message={'Could not find blog post'} />}
            {data.map(entry => <BlogPostCard entry={entry} onClick={() => handlePostClick(entry)}/>)}
        </PageContainer>
    )
}