import { BlogPostList } from "../../components";
import { PageContainer } from '../../components/layout';

export const Blog = () => {
    return (
        <PageContainer>
            <p>Here you will find all of my ramblings and other (sometimes) relevant blog posts.</p>
            <BlogPostList />
        </PageContainer>
    )
};
