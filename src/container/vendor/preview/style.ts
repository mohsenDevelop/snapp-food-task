'use client';

import styled from 'styled-components';

import { colors } from '@uiKits/colors';

export const Card = styled.div`
    height: 248px;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border: 0.5px solid ${colors.gray10};
`;

export const CardHeader = styled.div`
   position: relative;
   height: 134px
`;