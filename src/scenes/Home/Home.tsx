import { BlogPostList } from "../../components";
import { PageContainer } from '../../components/layout';

export const Home = () => {
    return (
        <PageContainer>
            <p>Hey! Looks like you've stumbled into my small corner of the interwebs.</p>
            <p>I'm your usual hobby-turned-career programmer, who loves learning new things and trying out the latest tech whenever I get the chance. Professionally, I develop and maintain web applications using various languages and frameworks, ranging from Java and Spring Boot to NodeJS and C# and .NET. I'm a big fan of ReactJS for frontend development, and I'm more than happy to experiment with the latest "Javascript framework of the week", so to speak. :wink:</p>
            <p>Apart from that, I enjoy hiking when the weather is warm and skiing when it's not. Traveling and sightseeing are another source of enjoyment whenever I get the chance. Cooking is a recent hobby of mine, though it's still in the very early stages (read: beware anything I make - for now!).</p>
            <p>Check out <a href="https://github.com/mbpolan">my GitHub</a> to see what I've been up to. I also used to be active on <a href="https://sourceforge.net/u/kanadakid/profile/">SourceForge</a> back in the day. Since then I've migrated most of my older, inactive projects over to GitHub instead. Even though I don't really plan on continuing said projects, they might still be useful as a reference for myself and others.</p>

            <h2>Blog</h2>
            <p>
                <span>These are mostly random, off the cuff thoughts and ideas I figured I'd share.&nbsp;</span>
                <span><a href="#blog">More here!</a></span>
            </p>
            <BlogPostList limit={3} />
        </PageContainer>
    );
};
