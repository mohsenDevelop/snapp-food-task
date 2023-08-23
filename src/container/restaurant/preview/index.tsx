import Image from 'next/image';

import {
    Card,
    CardHeader
} from './style';

const RestaurantPreview = () => {
    return (
        <Card>
            <CardHeader>
                <Image
                    src={''}
                    alt={'restaurant-img'}
                    fill={true}
                    loading={'lazy'}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 50%',
                        borderRadius: '6px 6px 0px 0px'
                    }}
                />
            </CardHeader>
        </Card>
    );
};

export default RestaurantPreview;