'use client';

import { useAppDispatch } from '@hooks/reduxHooks';
import { vendorListAction } from '@slices/vendorSlide';
import { VendorsResponse } from '@typings/vendorType';
import { Container } from '@uiKits/container';
import VendorList from './VendorList';

const HomeConatiner = ({ data }: HomeConatinerProps) => {

    const dispatch = useAppDispatch();
    dispatch(vendorListAction({ list: data?.data?.finalResult ?? [] }));

    return (
        <Container>
            <VendorList />
        </Container>
    );
};
interface HomeConatinerProps {
    data?: VendorsResponse
}
export default HomeConatiner;