import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router";
import { PageContainer } from "../../components/layout";
import { PostView } from "../../components/PostView";
import { useContentEntry } from "../../hooks";
import { BlogPostEntry } from "../../types";
import { Error, Loading, NoData } from '../../components/displays';

export const Post = () => {
    const { slug } = useParams<{ slug: string }>();
    const [query] = useState<any>({
        content_type: 'blogPost',
        'fields.slug': slug,
    });
    const [data, error, loading] = useContentEntry<BlogPostEntry>(query);

    return (
        <PageContainer>
            <Breadcrumb>
                <Breadcrumb.Item href="#blog">Blog</Breadcrumb.Item>
                { !loading && data && <Breadcrumb.Item active>{data.title}</Breadcrumb.Item> }
            </Breadcrumb>
            
            { error && <Error message={error} />}
            { loading && <Loading message={'Fetching post content'} />}
            { !loading && !data && <NoData message={'Could not find blog post'} />}
            { !loading && data && <PostView entry={data} /> }
        </PageContainer>
    );
};
