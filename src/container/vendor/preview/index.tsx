import { FC } from 'react';
import Image from 'next/image';

import {
    Card,
    CardBodyTitle,
    CardHeader,
    CardLogo,
    CardBody,
    CardBodyDescription,
    CardBodyDeliveryPrice,
    CardBodyDeliveryTitle,
    CardBodyRate,
    CardBodyRateText
} from './style';
import { FinalResultData } from '@typings/vendorType';
import { HStack } from '@uiKits/stack';
import { UtilsHelper } from '@utils/UtilsHelper';
import { StarIcon } from '@uiKits/icons';
import { colors } from '@uiKits/colors';

const VendorPreview: FC<FinalResultData> = (props) => {
    return (
        <Card>
            <CardHeader>
                <Image
                    src={props?.backgroundImage ?? ''}
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
                <CardLogo>
                    <Image
                        src={props?.logo ?? ''}
                        alt={'restaurant-logo'}
                        width={55}
                        height={55}
                        loading={'lazy'}
                        style={{
                            borderRadius: '4px',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </CardLogo>
            </CardHeader>

            <CardBody>
                <HStack
                    style={{
                        justifyContent: 'space-between',
                    }}
                >
                    <CardBodyTitle>
                        {props?.title ?? ''}
                    </CardBodyTitle>

                    {
                        props?.rate ?
                            <CardBodyRate>

                                <CardBodyRateText
                                    color={props.rate >= 4.5 ? colors.green800 : colors.green250}
                                >
                                    2.1
                                </CardBodyRateText>

                                <StarIcon
                                    color={props.rate >= 4.5 ? colors.green800 : colors.green250}
                                    style={{
                                        width: 12,
                                        height: 12
                                    }}
                                />
                            </CardBodyRate>
                            :
                            <CardBodyRate>
                                جدید
                            </CardBodyRate>
                    }
                </HStack>
                <CardBodyDescription>
                    {props?.description ?? ''}
                </CardBodyDescription>
                <HStack
                    style={{
                        gap: '4px'
                    }}
                >
                    <CardBodyDeliveryTitle>
                        {props?.isZFExpress ? 'پیک فروشنده' : 'پیک اسنپ فود'}
                    </CardBodyDeliveryTitle>
                    <CardBodyDeliveryPrice>
                        {props?.deliveryFee ? UtilsHelper.threeDigitSeparator(props.deliveryFee) : 'رایگان'}
                    </CardBodyDeliveryPrice>
                </HStack>
            </CardBody>

        </Card>
    );
};

export default VendorPreview;