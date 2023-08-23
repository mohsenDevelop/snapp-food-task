import { VStack } from '@uiKits/stack';
import { useAppSelector } from '@hooks/reduxHooks';
import { FinalResult } from '@typings/vendorType';
import VendorPreview from '@container/vendor/preview';

const VendorList = () => {

    const { vendorList } = useAppSelector((state) => state.vendor);

    console.log({ vendorList });
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

        </VStack>
    );
};

export default VendorList;