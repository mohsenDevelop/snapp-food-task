/* eslint-disable camelcase */
import { api } from './api';
import {
    VendorsFiltersQuery,
    VendorsResponse
} from '@typings/vendorType';

export const vendorApi = api.injectEndpoints({

    endpoints: (build) => ({
        vendorList: build.query<VendorsResponse, VendorsFiltersQuery>({
            query: ({
                page = 1,
                page_size = 10,
                lat = 35.754,
                long = 51.328,
            }) => ({
                url: `/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${page_size}&lat=${lat}&long=${long}`,
            }),
        }),
    }),
});

export const {
    useVendorListQuery,
} = vendorApi;