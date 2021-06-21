import { Card } from "react-bootstrap"
import styled from "styled-components"
import { BlogPostEntry } from "../../types"

const StyledCard = styled(Card)`
  margin: 10px 0;
  width: 100%;

  &:hover {
      cursor: pointer;
  }
`;

export interface BlogPostCardProps {
    entry: BlogPostEntry;
    onClick: () => void;
};

export const BlogPostCard = ({
    entry,
    onClick,
}: BlogPostCardProps) => {

    const formatDate = () => {
        return new Date(entry.publishedDate).toLocaleDateString('en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
    }

    return (
        <StyledCard onClick={onClick}>
            <Card.Body>
                <Card.Title>{entry.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{formatDate()}</Card.Subtitle>
                <Card.Text>
                    {entry.leadText}
                </Card.Text>
            </Card.Body>
        </StyledCard>
    );
}