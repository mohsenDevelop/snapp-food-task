import { CSSProperties, MouseEvent } from 'react';

export interface SearchIconProps {
    color: string;
    style?: CSSProperties;
    onMouseEnter?: (event: MouseEvent<SVGElement>) => void;
    onClick?: (event: MouseEvent<SVGElement>) => void;
}

export function StarIcon({ color, style, onMouseEnter, onClick }: SearchIconProps) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='17'
            height='16'
            fill='none'
            viewBox='0 0 17 16'
            style={style}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            <path
                fill={color}
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M9.65 2.342l1.177 2.346c.16.327.588.64.949.7l2.133.354c1.363.226 1.684 1.213.701 2.186l-1.657 1.654c-.281.28-.435.82-.348 1.206l.475 2.047c.374 1.62-.488 2.247-1.926 1.4l-1.999-1.18c-.36-.213-.956-.213-1.323 0l-2 1.18c-1.43.847-2.299.213-1.924-1.4l.474-2.047c.087-.386-.067-.926-.347-1.206L2.377 7.928c-.976-.973-.662-1.96.702-2.186l2.132-.354c.354-.06.782-.373.943-.7L7.33 2.342c.642-1.274 1.685-1.274 2.32 0z'
            />
        </svg>
    );
}
