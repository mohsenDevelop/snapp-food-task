import { VStack } from '@uiKits/stack';
import { vendorListAction } from '@slices/vendorSlide';
import { useAppDispatch } from '@hooks/reduxHooks';
import VendorPreview from '@container/vendor/preview';

const VendorList = () => {

    return (
        <VStack
            style={{
                padding: '16px 0px',
                gap: '24px'
            }}
        >
            <VendorPreview />
            <VendorPreview />
        </VStack>
    );
};

export default VendorList;