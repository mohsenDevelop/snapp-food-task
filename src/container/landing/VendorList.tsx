'use client';

/* eslint-disable camelcase */
import { useRef, useState, useEffect } from 'react';

import { VStack } from '@uiKits/stack';
import { FinalResult, VendorsFiltersQuery } from '@typings/vendorType';
import { useInfinitScroll } from '@hooks/useInfinitScroll';
import { useVendorListQuery } from '@api/client/vendor';
import VendorPreview from '@container/vendor/preview';

const initFilters = {
    page: 1,
    page_size: 10,
    lat: 35.754,
    long: 51.328,
};

const VendorList = () => {

    const observerTarget = useRef(null);

    const [params, setParams] = useState<VendorsFiltersQuery>(initFilters);
    const [vendorList, setVendorList] = useState<FinalResult[]>([]);

    useInfinitScroll({ refEl: observerTarget, itemsLength: vendorList.length }, (resLength) => {
        setParams((prev) => ({ ...prev, page: resLength === 0 ? 1 : prev.page + 1 }));
    });

    const { data, isLoading } = useVendorListQuery(params);

    useEffect(() => {
        if (data?.data?.finalResult?.length) {
            setVendorList([...vendorList, ...data.data.finalResult]);
        }
    }, [data]);

    return (
        <VStack
            style={{
                padding: '16px 0px',
                gap: '24px'
            }}
        >
            {
                vendorList.length ?
                    vendorList.map((_el: FinalResult) => (
                        <VendorPreview
                            key={_el.data.id}
                            {..._el.data}
                        />
                    ))
                    :
                    null
            }

            <div ref={observerTarget}>
                {isLoading ? 'درحال بارگذاری ....' : ''}
            </div>
        </VStack>
    );
};

export default VendorList;