import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledMore = styled.section`
    margin-bottom: 10rem;

    p {
        margin: -2rem 0 2rem;
    }

    .btn:first-of-type {
            margin-right: 2.5rem;
    }

`

interface Anchor {
    text: string
    href: string
}

interface MoreProps {
    title: string
    text: string
    anchors: Anchor[]
}

const More: React.SFC<MoreProps> = ({title, text, anchors}) => (
    <div className="row">
        <StyledMore>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link to={anchors[0].href} className="btn btn--cta">{anchors[0].text}</Link>
            <Link to={anchors[1].href} className="btn">{anchors[1].text}</Link>
        </StyledMore>
    </div>
)

export default More