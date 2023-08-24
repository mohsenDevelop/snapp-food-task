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
   height: 134px;
`;

export const CardLogo = styled.div`
   position: absolute;
   right: 8px;
   bottom: -16px;
   width: 64px;
   height: 64px;
   padding: 4px;
   box-shadow:  0 2px 6px 0  rgba(0, 0, 0, 0.1);
   background-color: ${colors.white};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 29px 16px 8px 16px;
`;

export const CardBodyTitle = styled.h3`
   font-size: 14px;
   font-weight: 500;
   padding-bottom: 10px;
   color: ${colors.gray800};
`;

export const CardBodyRate = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   gap: 2px;
   border-radius: 4px;
   padding: 2px 4px 2px 2px;
   background: rgba(34,169,88,0.06);
   color: ${colors.green200};
`;
export const CardBodyRateText = styled.span<{ color: string }>`
   font-size: 12px;
   font-weight: 400;
   color:  ${(props) => props.color ? props.color : colors.green200};
`;

export const CardBodyDescription = styled.h3`
   font-size: 12px;
   font-weight: 400;
   padding-bottom: 10px;
   width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   flex-shrink: 0;
   color: ${colors.gray800};
`;

export const CardBodyDeliveryTitle = styled.h3`
   font-size: 12px;
   font-weight: 400;
   color: ${colors.gray400};
`;
export const CardBodyDeliveryPrice = styled.h3`
   font-size: 12px;
   font-weight: 400;
`;